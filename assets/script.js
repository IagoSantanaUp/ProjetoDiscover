function toggleMode (){
    const body = document.documentElement 

    if (body.classList.contains('light')){
        body.classList.remove('light')
    } else {
        body.classList.add('light')
    }

    const img = document.querySelector('.imagem__profile')

    if (body.classList.contains('light')){
        img.setAttribute('src', 'assets/avatar-light.png')
    } else {
        img.setAttribute('src', 'assets/avatar.png')
    }
}