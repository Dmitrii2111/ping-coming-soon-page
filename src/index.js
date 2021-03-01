import '../src/style.scss'

let submit = document.querySelector('#submit')
submit.addEventListener('click', validateEmail)

let subscribe = document.querySelector('.subscribe')

let errorMessage = document.createElement('SPAN')
errorMessage.innerHTML = 'Please provide a valid adress'
errorMessage.classList.add('errorMessage')

function validateEmail() {
   let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
   let email = document.querySelector('#email')
   
   if (reg.test(email.value) === false) {
      email.classList.remove('valid')
      email.classList.add('not_valid')
      email.insertAdjacentElement('afterend', errorMessage)
   } else {
      email.classList.add('valid')
      email.classList.remove('not_valid')
      document.querySelector('.errorMessage').remove()
   }
}