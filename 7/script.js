const gall = document.createElement('div');
gall.id = "gallery"

const div1 = document.createElement('div')
    div1.className = "image-container"
    div1.style.width = "200px"
    div1.style.margin = "10px"
    gall.appendChild(div1)
    const text1 = document.createElement('h3')
        text1.textContent = "1"
        div1.appendChild(text1)
    const img1 = document.createElement('img')
        img1.src = "https://h5p.org/sites/default/files/h5p/content/1078405/images/image-5fd0f71455249.jpg"
        div1.appendChild(img1)

const div2 = document.createElement('div')
    div2.className = "image-container"
    div2.style.width = "200px"
    div2.style.margin = "10px"
    gall.appendChild(div2)
    const text2 = document.createElement('h3')
        text2.textContent = "2"
        div2.appendChild(text2)
    const img2 = document.createElement('img')
        img2.src = "https://thumbs.dreamstime.com/z/n%C3%BAmero-2-5721731.jpg"
        div2.appendChild(img2)


const div3 = document.createElement('div')
    div3.className = "image-container"
    div3.style.width = "200px"
    div3.style.margin = "10px"
    gall.appendChild(div3)
    const text3 = document.createElement('h3')
        text3.textContent = "3"
        div3.appendChild(text3)
    const img3 = document.createElement('img')
        img3.src = "https://www.shutterstock.com/image-vector/glowing-number-three-over-celestial-260nw-2541853733.jpg"
        div3.appendChild(img3)



document.body.appendChild(gall);