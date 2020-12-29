const burger = document.querySelector('#BURGER'); 
const mobileNav = document.querySelector('#MOBILE-NAV');
const patty = document.querySelectorAll('.header__content-right-mobile-PATTY') 
const background = document.querySelector('.header__content-mobile-NAV-GREYOUT')
const docBody = document.querySelector('body'); 
const body = document.querySelector('.body'); 
const header = document.querySelector('.header'); 

burger.addEventListener('click', (e)=> {
    mobileNav.classList.toggle('transformDOWN');
    mobileNav.classList.toggle('opacityONE');
    background.classList.toggle('transformDOWN'); 
    docBody.classList.toggle('stop-scroll');
    

    patty.forEach((el,i)=> {
        if (i === 0) el.classList.toggle('rotate45'); 
        if (i === 1) el.classList.toggle('opacityZero'); 
        if (i === 2) el.classList.toggle('rotateNeg45'); 
    })
}); 

// SLIDE IN EFFECT //

window.addEventListener('scroll', scroll)

let scrollChange = 0; 
let doneSlid = []; 

function scroll() {
    scrollChange += 1; 
    if (scrollChange > 2) {
        inWindow();
        headerReAppear(); 
        scrollChange = 0; 
    }    
}

function headerReAppear() {
    const bodyRect = docBody.getBoundingClientRect(); 

    if (bodyRect.width > 650) {

        switch (true) {
            case bodyRect.bottom < 1300:
                header.classList.remove('stickyTOP'); 
                break;
            case bodyRect.top < -370: 
                header.classList.add('stickyTOP');
                break; 
        }
    }
}


function inWindow() {

    const slideIn = document.querySelectorAll('.SLIDE-IN'); 
    slideIn.forEach(el => {

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            el.classList.add('SLIDE');
            doneSlid.push(el);   
        }
    })

    if(doneSlid.length) {
        doneSlid.forEach(el=> delete slideIn.el)
    }
    if(!slideIn.length) {
        window.removeEventListener('scroll', scroll);
    }

    return; 
}

inWindow(); 

//// LISTENER FOR DYNAMICALLY GENERATED PAGES ******** WORK IN PROGRESS ////

// window.addEventListener('popstate', (e)=> {
//     if (e.state) {
//         console.log(e.state); 
//     }
// })

// docBody.addEventListener('click', (e)=> {
//     const classes = [...e.target.classList];
    
//     switch (true) {
//         case e.target.getAttribute('id') === 'GRAPHIC-DESIGN':
//             dynamicHTML(e,'/graphic-design-html'); 
//             window.history.pushState({"html": "/graphic-design"}, null, '/graphic-design');
//             break;
//         case e.target.getAttribute('id') === 'APP-DESIGN':
//             dynamicHTML(e,'/app-design-html'); 
//             window.history.pushState({}, null, '/app-design');
//             break;
//         case e.target.getAttribute('id') === 'WEB-DESIGN':
//             dynamicHTML(e,'/web-design-html'); 
//             window.history.pushState({}, null, '/web-design');
//             break;
//         case classes.includes('ABOUT'): 
//             dynamicHTML(e,'/about-html'); 
//             window.history.pushState({}, null, '/about');
//             break; 
//         case classes.includes('LOCATIONS'): 
//             dynamicHTML (e,'/locations-html');  
//             window.history.pushState({}, null, '/locations');
//             break;
//         case classes.includes('INDEX'): 
//             dynamicHTML(e,'/index-html'); 
//             window.history.pushState({}, null, '/');
//             break; 
//     } 
// });



async function dynamicHTML(e, url) {
    e.preventDefault(); 
    body.classList.add('fadeOUT'); 

    const response = await fetch(url); 
    const data = await response.json(); 

    setTimeout(() => {
        body.innerHTML= data.html;
        body.classList.remove('fadeOUT');
        inWindow(); 
        window.scrollTo(0, 0)

    }, 1000);
}
