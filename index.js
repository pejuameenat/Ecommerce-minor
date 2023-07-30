const emptyStar = document.querySelectorAll('.star2');
const fullStar = document.querySelectorAll('.star');
const buyBtn =   document.querySelectorAll('.buy');
const modal = document.querySelector('.modal-box');
const closeModal= document.querySelectorAll('.info-btn');

for(let i = 0; i < closeModal.length; i++){
  closeModal[i].addEventListener('click', function(){
  modal.classList.add('hide');
  })
   
}

for(let i= 0; i < emptyStar.length; i++){
  emptyStar[i].addEventListener('click', function(){
   const str = '/images/star' +'.png'.replaceAll('star', 'star-2');
   const finalImage = emptyStar[i].setAttribute('src', str)
    return finalImage; 
})
}
 
for(let i= 0; i < fullStar.length; i++){
    fullStar[i].addEventListener('click', function(){
     const str0 = '/images/star-2' +'.png'.replaceAll('star-2', 'star');
     const finalImage0 = fullStar[i].setAttribute('src', str0)
     return finalImage0;
  })
  }
 
  for(let i=0; i < buyBtn.length; i++){
    buyBtn[i].addEventListener('click', function(){
    modal.classList.remove('hide');
    })
}

// for(let i = 0; i < closeBtn.length; i++){
//   closeModal[i].addEventListener('click', function(){
//   modal.classList.add('hide');
//   })
   
// }