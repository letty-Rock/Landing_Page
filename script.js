const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let data = {
    nome,
    email
  }
  let convertData = JSON.stringify(data)
  localStorage.setItem('lead', convertData)

  let response = document.getElementById('response')
  let carregando = `<p>carregando...</p>`
  let pronto = `<p>Enviamos seu cupom</p>`
  response.innerHTML = carregando

  setTimeout(() => {
    response.innerHTML = pronto
  }, 1000)
})
