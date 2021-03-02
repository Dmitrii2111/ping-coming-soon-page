import '../src/style.scss'

let submit = document.querySelector('#submit')
submit.addEventListener('click', validateEmail)

function validateEmail() {
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
   let email = document.querySelector('#email')
   
   if (reg.test(email.value) === false) {
      email.classList.remove('valid')
      email.classList.add('not_valid')
      document.querySelector('#error_label').innerHTML = 'Please provide a valid adress'
   } else {
      email.classList.add('valid')
      email.classList.remove('not_valid')
      document.querySelector('#error_label').innerHTML = ''
   }
}