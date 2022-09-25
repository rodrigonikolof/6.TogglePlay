const toggleImageDiv = document.querySelectorAll('.togglePic');
const toggleImageItself = document.querySelectorAll('.imgFile');
const hideImage = document.querySelectorAll('.hideImage');


// for (let i = 0; i < toggleImageItself.length; i++){
//     toggleImageItself[i].addEventListener('click', function(){
//         this.classList.toggle('hideStuff');

//         // if (this.style.visibility == 'visible'){
//         //     this.style.visibility == 'hidden';
//         // } 
//         // else {
//         //     this.style.visibility == 'visible';
//         // }
//     });
// }

for (let i= 0; i < toggleImageDiv.length; i++){
    toggleImageDiv[i].addEventListener('click', function (){
        toggleImageItself[i].classList.toggle('hideStuff');
    })
}




const blepButton = document.querySelector('#blepButton');
const blep = document.querySelector('#blep');


blepButton.addEventListener('click', function(){
blep.classList.toggle('blepTest');
})


const bloop = document.querySelectorAll('.bloop');

for (let i = 0; i < bloop.length; i++){
    bloop[i].addEventListener('click', function(){
        this.classList.toggle('blepTest');
    })
}


