let fm = document.querySelector('form');
let fn = document.getElementById('full-name');
let em = document.getElementById('email');
let ms = document.getElementById('message');
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// let regexm = /^[ .a-zA-Z0-9:-]{1,150}$/;
let fb = document.querySelector('.feedback');
let err = document.querySelector('.errors');

function handleForm(e) {
    // Prevents submitting form
    // and preserves user input inside the form
    e.preventDefault();

    let data = {};
    let errors = [];


    // check if user entered the full name
    if (fn.value !== '') {
        data.fullname = fn.value;
    } else {
      // otherwise report corresponding error message
      errors.push('Name is empty. Please enter your full name.');
    }


    // check if user entered email
    if (em.value !== '') {

        // check if email is in correct format
        if (regex.test(em.value)) {
            // save the email inside data
            data.email = em.value;
        } else {
            // otherwise report corresponding error message
            errors.push('Please enter the valid email');
        }

    } else {
        // otherwise report corresponding error message
        errors.push('Email is empty. Please enter your email.');
    }



    // check if user entered the message
    if (ms.value !== '') {
        data.message = ms.value;
    } 
    else {
        // otherwise report corresponding error message
        errors.push('Message is empty. Please enter your message.');
    }

    
    // handle feedback/error-messages:
    if (errors.length === 0) {
        // print out the feedback
        console.log(data);

        // clear the text inputs from the form
        fm.reset();

    } else {
        // print out the error messages
        console.log(errors);


    }
}

fm.addEventListener('submit', handleForm);
