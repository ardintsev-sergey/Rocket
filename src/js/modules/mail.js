document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form')
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault()

    const formData = new FormData(form);
    console.log(formData);

    // const xhr = new XMLHttpRequest();
    // xhr.open('POST', '../../files/phpmailer/mail.php', true);
    // xhr.send(formData);

    const response = await fetch('../../files/mail.php', {
    // let response = await fetch('mail.php', {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      let result = await response.json()
      alert(result.message)
      form.reset()
    } else {
      alert('Код ошибки: ' + response.status)
    }
  }
})
