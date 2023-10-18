let modal = document.querySelector('.modal')
let overlay = document.querySelector('.overlay')
let btnsOpenModal = document.querySelectorAll('.show-modal')
let btnCloseModal = document.querySelector('.close-modal')

const openModal = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
};

for(i=0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click',openModal)

const closedModal = function(){
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click', closedModal)
overlay.addEventListener('click', closedModal)

document.addEventListener('keydown', function(e){
 if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closedModal()
 console.log(e.key);
  }
})
