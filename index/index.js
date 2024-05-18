window.addEventListener("scroll", function(){
    let header = document.querySelector('.cabecalho')
    header.classList.toggle('menu-rolagem',window.scrollY > 0)
})