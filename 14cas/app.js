const noviParagraf=document.createElement("p")
const text = document.createTextNode("ovo je paragraf")
noviParagraf.appendChild(text)

const newElement = document.getElementById("container")
newElement.appendChild(noviParagraf)