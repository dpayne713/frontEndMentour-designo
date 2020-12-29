
const dom = {
    Name: document.querySelector('#CONTACT-NAME'),
    Email: document.querySelector('#CONTACT-EMAIL'),
    Phone: document.querySelector('#CONTACT-PHONE'),
    Message: document.querySelector('#CONTACT-MESSAGE'),
}

const submit = document.querySelector('#SUBMIT');

const domAlerts = {
    Name: document.querySelector('#NAME-ALERT-TEXT'),
    Email: document.querySelector('#EMAIL-ALERT-TEXT'),
    Phone: document.querySelector('#PHONE-ALERT-TEXT'),
    Message: document.querySelector('#MESSAGE-ALERT-TEXT')
}

const inputs = Object.values(dom); 
const names = Object.keys(dom); 
const alerts = Object.values(domAlerts)

inputs.forEach((e,i) => {
    e.addEventListener('focus', ()=> {
        if (!(alerts[i].classList.contains('display-none'))) {
            alerts[i].classList.add('display-none'); 
        }
    });
}); 

inputs.forEach((e,i)=> {
    e.addEventListener('focusout', ()=> {
        const error = validate(e.value, names[i])
        if (error) {
            alerts[i].classList.toggle('display-none')
            alerts[i].innerHTML = error; 
        }
    })
})

submit.addEventListener('click', (e)=> {
    e.preventDefault();
    
    //Validate all inputs
    let error; 
    inputs.forEach((e,i)=> {
        error = validate(e.value, names[i]); 
    })

    const data = {
        name: dom.Name.value, 
        email: dom.Email.value, 
        phone: dom.Phone.value, 
        message: dom.Message.value
    }
    if (!error) {
        console.log(data); 
        //SUBMIT FORM DATA HERE TO BACKEND
    }


})

function validate(input, type) {
    input = input.trim(); 

    switch (true) {
        case /<.*?script.*\/?>/ig.test(input): 
            console.log('SCRIPT DETECTED')
            return
        case input === undefined || input === '' || /./g.test(input) === false:
            return `${type} is required <img src="./assets/contact/desktop/icon-error.svg" alt="Error Icon" class="contact__form-item-alert-ICON">`;
        case type === 'Phone':
            const isPhone = /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g.test(input); 
            if (!isPhone) {
                return `Please enter a valid phone number <img src="./assets/contact/desktop/icon-error.svg" alt="Error Icon" class="contact__form-item-alert-ICON">`;
            }
            break;
        case type === 'Email':
            const isEmail =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(input); 
            if (!isEmail) {
                return `Please enter a valid email <img src="./assets/contact/desktop/icon-error.svg" alt="Error Icon" class="contact__form-item-alert-ICON">`;
            }
            break;
    }
}
