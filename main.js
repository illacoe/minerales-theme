const tabFolder = document.querySelector('.tab-mobile-menu') 
const body = document.querySelector('body')
const responsive = window.matchMedia('screen and (max-width:959px)')
const folderBtn = document.getElementById('folder')
folderBtn.addEventListener('click', mostrarfolder)
function mostrarfolder() {
    if (tabFolder.classList.contains('is-active')) {
        tabFolder.classList.remove('is-active')
        body.classList.remove('is-active')
        folderBtn.firstChild.classList.remove('is-active')
        folderBtn.lastChild.classList.remove('is-active')
    }else {
        tabFolder.classList.add('is-active') 
        body.classList.add('is-active')
        folderBtn.firstChild.classList.add('is-active')
        folderBtn.lastChild.classList.add('is-active')
    }
}
let acc = document.getElementsByClassName("accordion")
let i
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active")

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  })
}