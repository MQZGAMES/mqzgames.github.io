export function createAudio() {
  let context;
  let output;
  let engine;
  let engineGain;
  let enabled = true;
  function start() {
    if (!enabled) return;
    try {
      if (!context) {
        context=new AudioContext();
        output=context.createGain();
        output.gain.value=.46;
        output.connect(context.destination);
        engine=context.createOscillator();
        engine.type='triangle';
        engineGain=context.createGain();
        engineGain.gain.value=0;
        engine.connect(engineGain).connect(output);
        engine.start();
      }
      if(context.state==='suspended') context.resume().catch(()=>{});
    } catch {
      enabled=false;
    }
  }
  function tone(from,to,length,volume,type='sine',delay=0) {
    if(!context || !enabled || context.state!=='running') return;
    const cursor=context.currentTime+delay;
    const osc=context.createOscillator();
    const gain=context.createGain();
    osc.type=type;
    osc.frequency.setValueAtTime(from,cursor);
    osc.frequency.exponentialRampToValueAtTime(to,cursor+length);
    gain.gain.setValueAtTime(volume,cursor);
    gain.gain.exponentialRampToValueAtTime(.001,cursor+length);
    osc.connect(gain).connect(output);
    osc.start(cursor);
    osc.stop(cursor+length);
  }
  return {
    start,
    get enabled(){return enabled;},
    toggle(){
      enabled=!enabled;
      if(output) output.gain.value=enabled?.46:0;
      start();
      return enabled;
    },
    motor(speed,driving){
      if(!context) return;
      engine.frequency.setTargetAtTime(34+Math.abs(speed)*5,context.currentTime,.075);
      engineGain.gain.setTargetAtTime(driving?.13:0,context.currentTime,.11);
    },
    step(){tone(79,47,.085,.12,'triangle');},
    shot(){tone(194,44,.15,.59,'square');},
    crash(){tone(98,29,.24,.34,'sawtooth');},
    bell(){tone(442,521,.20,.25);tone(660,840,.29,.20,'sine',.11);},
    siren(){tone(440,660,.35,.15);tone(660,400,.36,.15,'sine',.33);}
  };
}
