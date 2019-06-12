// Barrade menu========================================

let juntarPontos = document.querySelector('.juntar')
let trocarPontos = document.querySelector('.trocar')

function mostrarPontos(){
    juntarPontos.style.display = "flex"
     
}
function fecharPontos(){
    juntarPontos.style.display = "none"

}



function mostrarTroca(){
    trocarPontos.style.display = "flex"
}
function fecharTroca(){
    trocarPontos.style.display = "none"

}

// ================================================





// Redirecionando butao login==========================

let btnLogin = document.querySelector('.entrar button')


function logar(){
    document.querySelector('.pai').style.display = "none"
    document.querySelector('.painel').style.display = "flex"
    document.querySelector('.login').style.display = "flex"
    document.querySelector('.cadastro').style.display = "none"

}


// ================================================;;;

let btnCadastrar = document.querySelector('.cadastro button')


function cadastrar(){
    document.querySelector('.pai').style.display = "none"
    document.querySelector('.painel').style.display = "flex";
    document.querySelector('.cadastro').style.display = "flex"
    document.querySelector('.login').style.display = "none"

}
// ================================================

// redirecionar cadastro para login============

let redirecionarBtn = document.querySelector('.cadastro button')

function redirecionar(){
    document.querySelector('.pai').style.display = "none"
    document.querySelector('.painel').style.display = "flex"
    document.querySelector('.login').style.display = "flex"
    document.querySelector('.cadastro').style.display = "none"

}








// Redirecionando para a pagina do usuario=============



let logarPag = document.querySelector('.login button')

function logIn(){
    window.location.href = "conta.html"
}


// Redirecionando a sainda do usuario==============================

let logOut = document.querySelector('.entrarr')

function logout(){
    window.location.href = "index.html"
}



// Dashboard da conta do usuario dash produ


let produtoZero   = document.querySelector('.btnn0')
let produtoUm     = document.querySelector('.btnn1')
let produtoDois   = document.querySelector('.btnn2')
let produtoTres   = document.querySelector('.btnn3')
let produtoQuatro = document.querySelector('.btnn4')

let vertical      = document.querySelector('.vertical')
let setaBaixo     = document.querySelector('.fa-chevron-down')
let setaCima      = document.querySelector('.fa-chevron-up')
let botoes        = document.querySelector('.botoes')


let horizontal0   = document.querySelector('.horizontal0')
let horizontal1   = document.querySelector('.horizontal1')
let horizontal2   = document.querySelector('.horizontal2')
let horizontal3   = document.querySelector('.horizontal3')
let horizontal4   = document.querySelector('.horizontal4')
let horizontal5   = document.querySelector('.horizontal5')

function mostrarPainel0(){

    horizontal0.style.display = "block"
    horizontal1.style.display = "none"
    horizontal2.style.display = "none"
    horizontal3.style.display = "none"
    horizontal4.style.display = "none"
    horizontal5.style.display = "none"

    // setaBaixo.style.display = "block"
    setaCima.style.display  = "none"
    vertical.style.Height   = "auto"
    // botoes.style.display    = "none"
}

function mostrarPainel1(){

    horizontal1.style.display = "block"
    horizontal0.style.display = "none"
    horizontal2.style.display = "none"
    horizontal3.style.display = "none"
    horizontal4.style.display = "none"
    horizontal5.style.display = "none"

    // setaBaixo.style.display = "block"
    setaCima.style.display  = "none"
    vertical.style.Height   = "auto"
    // botoes.style.display    = "none"
}


function mostrarPainel2(){

    horizontal2.style.display = "block"
    horizontal0.style.display = "none"
    horizontal1.style.display = "none"
    horizontal3.style.display = "none"
    horizontal4.style.display = "none"
    horizontal5.style.display = "none"

    // setaBaixo.style.display = "block"
    setaCima.style.display  = "none"
    vertical.style.Height   = "auto"
    // botoes.style.display    = "none"
}


function mostrarPainel3(){
    horizontal2.style.display = "none"
    horizontal0.style.display = "none"
    horizontal1.style.display = "none"
    horizontal3.style.display = "block"
    horizontal4.style.display = "none"
    horizontal5.style.display = "none"

    // setaBaixo.style.display = "block"
    setaCima.style.display  = "none"
    vertical.style.Height   = "auto"
    // botoes.style.display    = "none"
    
}


function mostrarPainel4(){
   
    horizontal4.style.display = "block"
    horizontal0.style.display = "none"
    horizontal2.style.display = "none"
    horizontal3.style.display = "none"
    horizontal1.style.display = "none"
    horizontal5.style.display = "none"

    // setaBaixo.style.display = "block"
    setaCima.style.display  = "none"
    vertical.style.Height   = "auto"
    // botoes.style.display    = "none"
}

function mostrarPainel5(){
    horizontal5.style.display = "block"
    horizontal4.style.display = "none"
    horizontal0.style.display = "none"
    horizontal2.style.display = "none"
    horizontal3.style.display = "none"
    horizontal1.style.display = "none"

    // setaBaixo.style.display = "block"
    setaCima.style.display  = "none"
    vertical.style.Height   = "auto"
    // botoes.style.display    = "none"
}

// Menu DropDown=============================================

function mostrarBotao(){
    setaBaixo.style.display = "none"
    setaCima.style.display  = "block"
    vertical.style.Height   = "100vh"
    botoes.style.display    = "flex"
}


function desaparecer(){
    setaBaixo.style.display = "block"
    setaCima.style.display  = "none"
    vertical.style.Height   = "auto"
    botoes.style.display    = "none"
}


// ============Modal de atualizacao=============


let modal1 = document.querySelector('.modal')
let body2  = document.querySelector('body')



function abrirModal(){
    modal1.style.display = "flex"
    body2.style.overflow = "hidden"
    modal1.style.height  = "100%"
}

function sim(){
    modal1.style.display  = "none"
    body2.style.overflowY = "scroll"

}

function mostrarBotao(){
    setaBaixo.style.display = "none"
    setaCima.style.display  = "block"
    vertical.style.Height   = "100vh"
    botoes.style.display    = "flex"
}


function desaparecer(){
    setaBaixo.style.display = "block"
    setaCima.style.display  = "none"
    vertical.style.Height   = "auto"
    botoes.style.display    = "none"
}

// Modal de Troca========================================


let modal   = document.querySelector('.modalTroca')
let body    = document.querySelector('body')
let sucesso = document.querySelector('.sucesso')



function abrirTroca(){
    modal.style.display = "flex"
    body.style.overflow = "hidden"
    modal.style.height  = "100%"
}

function trocarP(){
    modal.style.display   = "none"
    sucesso.style.height  = "100%"
    sucesso.style.display = "flex"
}

function voltarP(){
    modal.style.display  = "none"
    body.style.overflowY = "scroll"

}



// ==========================================================


