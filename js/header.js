let tradeList = document.querySelector('.trade-list')
let servicesList = document.querySelector('.services-list')
let spanTrade = document.querySelector('.menu__item-bf')
let spanServices = document.querySelector('.menu__span-services')
let trade = document.querySelector('.trade')
let services = document.querySelector('.services')

if (window.innerWidth > 1250){
    // Эран больше 1250
    trade.addEventListener('mouseover', ()=>{
        tradeList.classList.add('menu__list-trade-activ')
        spanTrade.classList.add('menu__item-hover')
    });
    trade.addEventListener('mouseout', ()=>{
        tradeList.classList.remove('menu__list-trade-activ')
        spanTrade.classList.remove('menu__item-hover')
    });

    services.addEventListener('mouseover', ()=>{
        servicesList.classList.add('menu__list-trade-activ')
        spanServices.classList.add('menu__item-hover')
    });
    services.addEventListener('mouseout', ()=>{
        servicesList.classList.remove('menu__list-trade-activ')
        spanServices.classList.remove('menu__item-hover')
    });
} else {
    // Эран меньше 1250
    let btnMobile = document.querySelector('.menu__btn')
    let menuListBox = document.querySelector('.menu__list-box')
    let tradeLink = document.querySelector('.menu__trade-link')
    let bgRemove = document.querySelector('.bg-remove')

    btnMobile.addEventListener('click', ()=>{
        btnMobile.classList.toggle('menu__btn-activ')
        menuListBox.classList.toggle('menu__list-box-activ')
        // bgRemove.style.display = 'block';
        bgRemove.classList.add('bg-remove-active')
    });

    tradeLink.addEventListener('click', ()=>{
        removeClassActive()
        trade.classList.toggle('trade-activ')
        // menuListBox.classList.add('trade-height')
    })

    services.addEventListener('click', ()=>{
        removeClassActive()
        servicesList.classList.toggle('services-activ')
        services.classList.toggle('services-bg')
    });

    bgRemove.addEventListener('click', ()=>{
        btnMobile.classList.remove('menu__btn-activ')
        menuListBox.classList.remove('menu__list-box-activ')
        bgRemove.classList.remove('bg-remove-active')
    });

    // let removeMenuClass = ()=>{
    //     btnMobile.classList.remove('menu__btn-activ')
    //     menuListBox.classList.remove('menu__list-box-activ')
    // }

    let removeClassActive = ()=>{
        servicesList.classList.remove('services-activ')
        services.classList.remove('services-bg')
        trade.classList.remove('trade-activ')
    }

}

