
const modalBox = document.querySelector(".modal-box");
const showModal = document.querySelector(".button");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close");
 
const openModal = function(){
    modalBox.classList.remove('hide');
    overlay.classList.remove('hide');
}

const closeModal= function(){
    modalBox.classList.add('hide');
    overlay.classList.add('hide');
}

showModal.addEventListener('click',  openModal);
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click',closeModal);
