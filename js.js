const targets = document.querySelectorAll('[data-target]')
const content = document.querySelectorAll('[data-content]')
targets.forEach(target =>{
  target.addEventListener('click',()=>{

    content.forEach(c => {
      c.classList.remove('active')
    })

    const t = document.querySelector(target.dataset.target)
    t.classList.add('active')
  })
})

const targets2 = document.querySelectorAll('[data2-target]');
const content2 = document.querySelectorAll('[data2-content]');

targets2.forEach(target2 => {
    target2.addEventListener('click', (event) => {
        event.preventDefault();  // Previene el comportamiento por defecto del enlace
        content2.forEach(c2 => {
            c2.classList.remove('active');
        });
        const targetSelector2 = target2.getAttribute('data2-target');  // Usar el atributo 'data2-target'
        const t2 = document.querySelector(targetSelector2);
        if (t2) {
            t2.classList.add('active');
        }
    });
});


const targets3 = document.querySelectorAll('[data3-target]');
const content3 = document.querySelectorAll('[data3-content]');

targets3.forEach(target3 => {
    target3.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        content3.forEach(c3 => {
            c3.classList.remove('active');
        });
        const targetSelector3 = target3.getAttribute('data3-target');  // Usar el atributo 'data3-target'
        const t3 = document.querySelector(targetSelector3);
        if (t3) {
            t3.classList.add('active');
        }
    });
});

const targets4 = document.querySelectorAll('[data4-target]');
const content4 = document.querySelectorAll('[data4-content]');

targets4.forEach(target4 => {
    target4.addEventListener('click', (event) => {
        
        content4.forEach(c4 => {
            c4.classList.remove('active');
        });
        const targetSelector4 = target4.getAttribute('data4-target');  // Usar el atributo 'data3-target'
        const t4 = document.querySelector(targetSelector4);
        if (t4) {
            t4.classList.add('active');
        }
    });
});

const nava = document.querySelector('[data-contenta]');
const menu = document.querySelector('[data-content2]');

nava.addEventListener('click', () => {
    if(nava.classList.contains('active')){
        nava.classList.remove('active')
    }else{
        nava.classList.add('active')
    }
    if(menu.classList.contains('active')){
        menu.classList.remove('active')
    }else{
        menu.classList.add('active')
    }
})


const enlaces = document.querySelectorAll('[data2-contenta]');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        // Quitar clase 'active' de todos los enlaces
        enlaces.forEach(e => {
            e.classList.remove('active');
        });

        // Agregar clase 'active' al enlace clicado
        enlace.classList.add('active');
    });
});
