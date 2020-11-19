function carregar(){
var mensagem = window.document.getElementById("mensagem")
var img= window.document.getElementById('imagem')
var data= new Date()
//var hora= data.getHours()
var hora = 22

if (hora>=0 && hora < 12) {
    mensagem.innerHTML = `Agora sao ${hora} horas </br> Bom Dia! `
    document.body.style.background ='	#DAA520'
    img.src ="m1.png"
}
    else if(hora >=12 && hora < 18){
        mensagem.innerHTML = `Agora sao ${hora} horas </br> Boa Tarde! `
    document.body.style.background ='	#2E8B57'
        img.src ="t.jpg"
    }

    else { 
        //boa noite
        mensagem.innerHTML = `Agora sao ${hora} horas </br> Boa Noite! `
        document.body.style.background ='	#808080'
        img.src ="n.jpg"

}
}
