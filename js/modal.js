//Buttons
const btnOpenModalOperation = document.querySelector("#operation");
const btnOpenModalAdmin = document.querySelector("#admin");

const btnOpenModalCommercial = document.querySelector("#commercial");

const btnOpenModalTech = document.querySelector("#tech");

const btnOpenModalUxUi = document.querySelector("#uxui");

const btnOpenModalLogistics = document.querySelector("#logistics");

const btnOpenModalDates = document.querySelector("#dates");

const btnOpenModalRRHH = document.querySelector("#rrhh");

const btnOpenModalATC = document.querySelector("#atc");

// modals

const modal_container = document.querySelector(".modal_container")
const modalAdmin = document.querySelector("#modalAdmin")
const modalOperation = document.querySelector("#modalOperation")
const modalCommercial = document.querySelector("#modalCommercial")
const modalTech = document.querySelector("#modalTech")
const modalUxUi = document.querySelector("#modalUxUi")
const modalLogistics = document.querySelector("#modalLogistics")
const modalDates = document.querySelector("#modalDates")
const modalRRHH = document.querySelector("#modalRRHH")
const modalATC = document.querySelector("#modalATC")


// modal open
btnOpenModalAdmin.addEventListener('click', (e) =>{
    e.preventDefault();
    modalAdmin.classList.add("modal--show")
})

btnOpenModalOperation.addEventListener('click', (e) =>{
    e.preventDefault();
    modalOperation.classList.add("modal--show")
})

btnOpenModalCommercial.addEventListener('click', (e) =>{
    e.preventDefault();
    modalCommercial.classList.add("modal--show")
})

btnOpenModalTech.addEventListener('click', (e) =>{
    e.preventDefault();
    modalTech.classList.add("modal--show")
})

btnOpenModalUxUi.addEventListener('click', (e) =>{
    e.preventDefault();
    modalUxUi.classList.add("modal--show")
})

btnOpenModalLogistics.addEventListener('click', (e) =>{
    e.preventDefault();
    modalLogistics.classList.add("modal--show")
})

btnOpenModalDates.addEventListener('click', (e) =>{
    e.preventDefault();
    modalDates.classList.add("modal--show")
})

btnOpenModalRRHH.addEventListener('click', (e) =>{
    e.preventDefault();
    modalRRHH.classList.add("modal--show")
})

btnOpenModalATC.addEventListener('click', (e) =>{
    e.preventDefault();
    modalATC.classList.add("modal--show")
})


// close modals
const closeWindows = () =>{
    setTimeout(() =>{
        modalAdmin.classList.remove("modal--show")
        modalOperation.classList.remove("modal--show")
        modalCommercial.classList.remove("modal--show")
        modalTech.classList.remove("modal--show")
        modalUxUi.classList.remove("modal--show")
        modalLogistics.classList.remove("modal--show")
        modalDates.classList.remove("modal--show")
        modalRRHH.classList.remove("modal--show")
        modalATC.classList.remove("modal--show")
    },200)
}

window.addEventListener('click' , e => e.target == modalAdmin && closeWindows() || e.target == modalOperation && closeWindows() || e.target == modalCommercial && closeWindows() || e.target == modalTech && closeWindows() || e.target == modalUxUi && closeWindows() || e.target == modalLogistics && closeWindows() || e.target == modalDates && closeWindows() || e.target == modalRRHH && closeWindows() || e.target == modalATC && closeWindows() )
