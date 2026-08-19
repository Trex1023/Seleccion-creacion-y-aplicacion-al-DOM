const div = document.createElement('div');
div.id = "container"
const text1 = document.createElement('p')
text1.textContent = "hola"
const text2 = document.createElement('p')
text2.textContent = "mundo"
const text3 = document.createElement('p')
text3.textContent = ":)"
div.appendChild(text1)
div.appendChild(text2)
div.appendChild(text3)
document.body.appendChild(div);