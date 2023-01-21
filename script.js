const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(){
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // criar uma nova data e transformar ela em pt-br e recortar essa data somente para dia e mês.
  const dayExists = nlwSetup.dayExists(today) // uma informação que vai retornar verdadeiro se o dia existir e falso se o dia não existir.

  if (dayExists) {
    alert("Dia já incluso ❌")
    return // se o dia já existir guardado, eu não vou incluir ele novamente
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today) // mas, se ele não existir eu vou adicionar ele
}

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()