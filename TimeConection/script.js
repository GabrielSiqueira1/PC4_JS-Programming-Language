function load(){
    var msg = window.document.getElementById('msg')
    var photo = window.document.getElementById('imagem')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Agora são ${hour} horas.`
    if (hour >= 0 && hour < 12){
        photo.src = './img/morning.png'
        document.body.style.background = '#a2acb3'
    } else if (hour >= 12 && hour < 18){
        photo.src = './img/afternoon.png'
        document.body.style.background = '#c7ac91'
    } else {
        photo.src = './img/evening.png'
        document.body.style.background = '#0c1819'
    }
}
