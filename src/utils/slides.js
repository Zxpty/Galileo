export default function slidesJS() {
    let copy = document.querySelector('.images-slide').cloneNode(true)
    document.querySelector('.galeria-images').appendChild(copy)
}
