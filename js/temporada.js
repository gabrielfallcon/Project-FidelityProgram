let sweda = document.querySelector('.sweda')
let mov = document.querySelector('.mov')
let yy = document.querySelector('.yy')
let sqginfo = document.querySelector('.sqginfo')

function aparecePerfil1() {
    sweda.style.display = "flex"
    mov.style.display = "none"
    yy.style.display = "none"
    sqginfo.style.display = "none"

}
function aparecePerfil2() {
    mov.style.display = "flex"
    sweda.style.display = "none"
    yy.style.display = "none"
    sqginfo.style.display = "none"

}
function aparecePerfil3() {
    yy.style.display = "flex"
    sweda.style.display = "none"
    mov.style.display = "none"
    sqginfo.style.display = "none"

}
function aparecePerfil4() {
    sqginfo.style.display = "flex"
    sweda.style.display = "none"
    mov.style.display = "none"
    yy.style.display = "none"

}