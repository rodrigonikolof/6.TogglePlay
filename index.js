const toggleImage = document.querySelectorAll('.togglePic');
const hideImage = document.querySelectorAll('.hideImage');


for (let i = 0; i < toggleImage.length; i++){
    toggleImage[i].addEventListener('click', function(){
        this.classList.toggle('hideStuff');
        if (this.style.visibility == 'visible'){
            this.style.visibility == 'hidden';
        } 
        else {
            this.style.visibility == 'visible';
        }


    });
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


