//modal
const btnOpenModal = document.querySelector(".operation");
const modal_container = document.querySelector(".modal_container")
const modal = document.querySelector(".modal")
console.log(btnOpenModal);
btnOpenModal.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.classList.add("modal--show")
})



const closeWindows = () =>{
    setTimeout(() =>{
        modal.classList.remove("modal--show")
    },500)
}

window.addEventListener('click' , e => e.target == modal && closeWindows() )
