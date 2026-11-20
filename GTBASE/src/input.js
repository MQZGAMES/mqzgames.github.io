import { axis, clamp } from './rules.js';

export function element(id) {
  return document.getElementById(id);
}

export function controls(onToggle, isPlaying) {
  const keys = new Set();
  const once = new Set();
  const held = new Set();
  const mouse = {x:0,y:0,aim:false};
  const stick = {x:0,y:0};
  const stickArea = element('stick');
  const nub = element('nub');
  const look = element('look');
  const game = element('game');
  const view = element('view');
  let stickPointer = -1;
  let lookPointer = -1;
  let previousPad = [];
  const touchMedia = matchMedia('(pointer:coarse), (max-width: 600px)');
  let mode = touchMedia.matches ? 'touch' : 'keyboard';
  const setMode = value => {
    mode = value;
    element('touch').hidden = value !== 'touch';
    game.classList.toggle('touching',value==='touch');
  };
  setMode(mode);
  const bound = new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight',
    'ShiftLeft','ShiftRight','Space','KeyE','KeyF','KeyQ','KeyR','Escape']);
  window.addEventListener('keydown', event => {
    if (!bound.has(event.code) || (event.target instanceof HTMLSelectElement && !isPlaying())) return;
    if (isPlaying() || event.code==='Escape') event.preventDefault();
    if (event.code==='Escape') {
      if (!event.repeat) onToggle();
      return;
    }
    if (!isPlaying()) return;
    setMode('keyboard');
    keys.add(event.code);
    if (!event.repeat) {
      if (event.code==='KeyE') once.add('interact');
      if (event.code==='KeyF') once.add('fire');
      if (event.code==='KeyR') once.add('punch');
    }
  });
  window.addEventListener('keyup', event=>keys.delete(event.code));
  function clear() {
    keys.clear();
    once.clear();
    held.clear();
    stick.x=0; stick.y=0;
    nub.style.transform='';
    stickPointer=-1; lookPointer=-1;
    mouse.x=0; mouse.y=0; mouse.aim=false;
    element('aim').setAttribute('aria-pressed','false');
  }
  window.addEventListener('blur',clear);
  view.addEventListener('contextmenu',event=>event.preventDefault());
  view.addEventListener('pointerdown', event => {
    if (!isPlaying()) return;
    if (event.pointerType==='touch') {
      setMode('touch');
      return;
    }
    if (event.button===0 && document.pointerLockElement!==view && view.requestPointerLock) {
      const pending = view.requestPointerLock();
      if (pending) pending.catch(()=>{});
    }
    setMode('keyboard');
    if (event.button===0) once.add('fire');
    if (event.button===2) mouse.aim=true;
  });
  window.addEventListener('pointerup',event=>{
    if (event.button===2) mouse.aim=false;
  });
  window.addEventListener('pointermove',event=>{
    if (!isPlaying() || mode!=='keyboard' || event.pointerType==='touch') return;
    if (document.pointerLockElement===view || (event.target===view || view.contains(/** @type {Node} */(event.target)))) {
      mouse.x += event.movementX;
      mouse.y += event.movementY;
    }
  });
  function updateStick(event) {
    const box=stickArea.getBoundingClientRect();
    const dx=event.clientX-box.left-box.width/2;
    const dy=event.clientY-box.top-box.height/2;
    const radius=box.width*.37;
    const magnitude=Math.max(radius,Math.hypot(dx,dy));
    stick.x=dx/magnitude;
    stick.y=dy/magnitude;
    nub.style.transform='translate('+stick.x*radius+'px,'+stick.y*radius+'px)';
  }
  stickArea.addEventListener('pointerdown',event=>{
    if (stickPointer!==-1) return;
    setMode('touch');
    stickPointer=event.pointerId;
    stickArea.setPointerCapture(event.pointerId);
    updateStick(event);
  });
  stickArea.addEventListener('pointermove',event=>{
    if (event.pointerId===stickPointer) updateStick(event);
  });
  stickArea.addEventListener('lostpointercapture',event=>{
    if (event.pointerId!==stickPointer) return;
    stickPointer=-1; stick.x=0; stick.y=0;
    nub.style.transform='';
  });
  let lastX=0,lastY=0;
  look.addEventListener('pointerdown',event=>{
    if (lookPointer!==-1) return;
    lookPointer=event.pointerId;
    lastX=event.clientX;
    lastY=event.clientY;
    look.setPointerCapture(event.pointerId);
  });
  look.addEventListener('pointermove',event=>{
    if(event.pointerId!==lookPointer) return;
    mouse.x+=(event.clientX-lastX)*1.45;
    mouse.y+=(event.clientY-lastY)*1.45;
    lastX=event.clientX;
    lastY=event.clientY;
  });
  look.addEventListener('lostpointercapture',event=>{
    if(event.pointerId===lookPointer) lookPointer=-1;
  });
  for (const action of ['interact','fire','aim','sprint','punch']) {
    const button=element(action);
    button.addEventListener('pointerdown',event=>{
      event.preventDefault();
      setMode('touch');
      button.setPointerCapture(event.pointerId);
      if(action==='aim') {
        if (held.has('aim')) held.delete('aim');
        else held.add('aim');
        button.setAttribute('aria-pressed',String(held.has('aim')));
      } else if(action==='sprint') held.add(action);
      else once.add(action);
    });
    if (action==='sprint') button.addEventListener('lostpointercapture',()=>held.delete(action));
  }
  let lastDriving=false;
  return {
    clear,
    read(driving,dt) {
      if (lastDriving!==driving) {
        held.delete('aim');
        element('aim').setAttribute('aria-pressed','false');
        lastDriving=driving;
      }
      const pad=Array.from(navigator.getGamepads?.() ?? []).find(item=>item?.connected && item.mapping==='standard');
      const buttons=pad?.buttons.map(button=>button.pressed || button.value>.45) ?? [];
      const pressed = index => buttons[index] && !previousPad[index];
      const axes=Array.from({length:4},(_,i)=>axis(pad?.axes[i]));
      const active=buttons.some(Boolean)||axes.some(value=>Math.abs(value)>.1);
      if (active) setMode('pad');
      if (pressed(9) || (!isPlaying() && pressed(0))) onToggle();
      const keyboardX=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));
      const keyboardY=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'));
      const padThrottle=(pad?.buttons[7]?.value ?? 0)-(pad?.buttons[6]?.value ?? 0);
      const result={
        x:clamp(keyboardX+stick.x+axes[0],-1,1),
        y:clamp(keyboardY-stick.y+(driving && Math.abs(padThrottle)>.05?padThrottle:-axes[1]),-1,1),
        lookX:clamp(mouse.x,-140,140)*.0032 + axes[2]*dt*2.45,
        lookY:clamp(mouse.y,-140,140)*.0028 + axes[3]*dt*1.8,
        aim:!driving && (mouse.aim || keys.has('KeyQ') || held.has('aim') || Boolean(buttons[6])),
        run:held.has('sprint') || keys.has('ShiftLeft') || keys.has('ShiftRight') || Boolean(buttons[0]),
        brake:keys.has('Space') || held.has('sprint') || Boolean(buttons[2]),
        interact:once.has('interact') || pressed(3),
        fire:once.has('fire') || pressed(7),
        punch:once.has('punch') || pressed(1),
        confirm:pressed(0),
        mode
      };
      previousPad=buttons;
      mouse.x=0; mouse.y=0; once.clear();
      return result;
    }
  };
}
