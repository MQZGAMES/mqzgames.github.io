/**
 * Generic shop dialog. A catalogue is {title, note, sections:[{title, items:[{label, price, detail, active, disabled,
 * colors?:number[], buy:(color?:number)=>string|null}]}]}. buy returns an error message or null on success.
 */
const money=value=>value===0?'grátis':'R$ '+value.toLocaleString('pt-BR');
const hex=color=>'#'+color.toString(16).padStart(6,'0');

export function createStore(dialog,{balance,onClose}) {
  const title=/** @type {HTMLElement} */(dialog.querySelector('#shop-title'));
  const note=/** @type {HTMLElement} */(dialog.querySelector('#shop-detail'));
  const wallet=/** @type {HTMLElement} */(dialog.querySelector('#shop-balance'));
  const list=/** @type {HTMLElement} */(dialog.querySelector('#shop-list'));
  const status=/** @type {HTMLElement} */(dialog.querySelector('#shop-status'));
  let current=null, build=null;

  function render(keepFocus) {
    const focused=keepFocus?document.activeElement?.getAttribute('data-key'):null;
    const catalogue=build();
    current=catalogue;
    title.textContent=catalogue.title;
    note.textContent=catalogue.note??'';
    wallet.textContent=balance();
    list.replaceChildren();
    catalogue.sections.forEach((section,s)=>{
      const heading=document.createElement('h3');
      heading.textContent=section.title;
      list.append(heading);
      section.items.forEach((item,i)=>{
        const row=document.createElement('div');
        row.className='store-row'+(item.active?' active':'');
        const button=document.createElement('button');
        button.type='button';
        button.className='store-item';
        button.dataset.key=s+':'+i;
        button.disabled=Boolean(item.disabled);
        button.innerHTML='';
        const name=document.createElement('span');
        name.textContent=item.label+(item.active?' · em uso':'');
        const price=document.createElement('b');
        price.textContent=item.price==null || item.disabled && catalogue.title==='Inventário'?'':money(item.price);
        button.append(name,price);
        if(item.detail) {
          const small=document.createElement('small');
          small.textContent=item.detail;
          button.append(small);
        }
        button.addEventListener('click',()=>purchase(item,undefined));
        row.append(button);
        if(item.colors) {
          const swatches=document.createElement('div');
          swatches.className='swatches';
          item.colors.forEach((color,c)=>{
            const swatch=document.createElement('button');
            swatch.type='button';
            swatch.className='swatch';
            swatch.style.background=hex(color);
            swatch.dataset.key=s+':'+i+':'+c;
            swatch.setAttribute('aria-label',item.label+', cor '+(c+1));
            swatch.disabled=Boolean(item.disabled);
            swatch.addEventListener('click',()=>purchase(item,color));
            swatches.append(swatch);
          });
          row.append(swatches);
        }
        list.append(row);
      });
    });
    const target=focused?list.querySelector('[data-key="'+focused+'"]'):null;
    /** @type {HTMLElement|null} */
    const first=/** @type {HTMLElement|null} */(target??list.querySelector('button:not(:disabled)'));
    first?.focus({preventScroll:false});
  }

  function purchase(item,color) {
    const error=item.buy(color);
    status.textContent=error??'Pronto!';
    status.classList.toggle('error',Boolean(error));
    render(true);
  }

  return {
    show(factory) {
      build=factory;
      status.textContent='';
      render(false);
      if(!dialog.open) dialog.showModal();
    },
    close() {
      if(dialog.open) dialog.close();
      current=null;
      onClose();
    },
    /** Gamepad and stick navigation: step through the focusable buttons. */
    move(step) {
      const buttons=[...dialog.querySelectorAll('button:not(:disabled)')];
      if(!buttons.length) return;
      const index=buttons.indexOf(/** @type {Element} */(document.activeElement));
      const next=buttons[(index+step+buttons.length)%buttons.length];
      /** @type {HTMLElement} */(next).focus();
      next.scrollIntoView({block:'nearest'});
    },
    activate() {
      const active=/** @type {HTMLElement|null} */(document.activeElement);
      if(active && dialog.contains(active)) active.click();
    },
    refresh(){if(current) render(true);}
  };
}
