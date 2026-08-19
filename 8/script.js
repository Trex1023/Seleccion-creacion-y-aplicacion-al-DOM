const tab = document.createElement('table');
tab.id = "myTable"
const head = document.createElement('thead')
tab.appendChild(head)
const tr1 = document.createElement('tr')
head.appendChild(tr1)
const nom = document.createElement('th')
nom.textContent = "Nombre"
tr1.appendChild(nom)
const edad = document.createElement('th')
edad.textContent = "edad"
tr1.appendChild(edad)

const body = document.createElement('tbody')
tab.appendChild(body)
const tr2 = document.createElement('tr')
body.appendChild(tr2)
const nom2 = document.createElement('td')
nom2.textContent = "Juan"
tr2.appendChild(nom2)
const edad2 = document.createElement('td')
edad2.textContent = "25"
tr2.appendChild(edad2)

const tr3 = document.createElement('tr')
body.appendChild(tr3)
const nom3 = document.createElement('td')
nom3.textContent = "Ana"
tr3.appendChild(nom3)
const edad3 = document.createElement('td')
edad3.textContent = "30"
tr3.appendChild(edad3)

const tr4 = document.createElement('tr')
body.appendChild(tr4)
const nom4 = document.createElement('td')
nom4.textContent = "Luis"
tr4.appendChild(nom4)
const edad4 = document.createElement('td')
edad4.textContent = "28"
tr4.appendChild(edad4)

tab.style.borderCollapse = "collapse"
tr1.style.border = "2px solid black"
tr2.style.border = "2px solid black"
tr3.style.border = "2px solid black"
tr4.style.border = "2px solid black"
document.body.appendChild(tab);