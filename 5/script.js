const div = document.createElement('div');
div.id = "container"
div.style.backgroundColor = "lightblue"
const text1 = document.createElement('p')
text1.textContent = "hola"
text1.style.color = "white"
const text2 = document.createElement('p')
text2.textContent = "mundo"
text2.style.color = "white"
const text3 = document.createElement('p')
text3.textContent = ":)"
text3.style.color = "white"
div.appendChild(text1)
div.appendChild(text2)
div.appendChild(text3)
document.body.appendChild(div);