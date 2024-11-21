let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

//testa os botões
/*
nextButton.onclick = () => {
    console.log("Botão next")
}

prevButton.onclick = () => {
    console.log("Botão prev")
}
*/

let active = 0; //posição 0.
let firstPosition = 0; //posição 1.
let lastPosition = items.length - 1; //ultima posição.

function setSlider(){
    //Criada function para simplificar o código repetido.
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

    let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicator.querySelector('.number').innerText = '0' + (active  + 1)
}

nextButton.onclick = () => {
    setSlider()
    /*remove a palavra active da classe item.
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')*/
    /*adiciona a palavra active na próxima classe item.
    Exemplo:
    [item active, item, item]
    [item, item active, item]
    [item, item, item active]*/
    active = active + 1 > lastPosition ? 0 : active + 1
    items[active].classList.add('active')

    /*let dotsOld = indicator.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')*/
    /*Muda o número, acrescenta o '0' antes e soma active + 1.
    indicator.querySelector('.number').innerText = '0' + (active  + 1)*/
    list.style.setProperty('--calculation', 1)

}

prevButton.onclick = () => {
    setSlider()
    /*remove a palavra active da classe item.
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')*/
    /*adiciona a palavra active na classe  item anterior.
    Exemplo:
    [item active, item, item]
    [item, item, item active]
    [item, item active, item]*/
    active = active - 1 < firstPosition ? lastPosition : active - 1
    items[active].classList.add('active')
    list.style.setProperty('--calculation', -1)
};