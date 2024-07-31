const scriptURL = 'https://script.google.com/macros/s/AKfycbzh7_fxmK-pPZ_oT5DIPBbG7inSFsTX-6I65a9tgvSDJtlcbbQWqyFzmv9IxrFp5TwZ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
