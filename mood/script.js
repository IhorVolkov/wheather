//Declare variables

const btns = document.querySelector('.wheather_collection');
const buttonsData = document.querySelectorAll('.data');
const fxdBtn = document.querySelector('.fixed_random_btn');
const clearAll = document.querySelector('.clear_all');

const colors = ['yellow', 'blue', 'darkkhaki', 'lightblue', 'aqua'];

//Get all days of monthes with randomly colors of array -> colors
fxdBtn.addEventListener('click', () => {
    buttonsData.forEach(btn => {
        btn.style.backgroundColor = colors[getRandomColor()];
        getOriginalBg('.sunny');
        getOriginalBg('.rainy');
        getOriginalBg('.thunder');
        getOriginalBg('.windy');
        getOriginalBg('.cloudy');
        btn.style.color= 'white';
    });
});

//Clearing all btns, make them disable
clearAll.addEventListener('click', () => {
    buttonsData.forEach(btn => {
        btn.style.backgroundColor = '#444242';
        getOriginalBg('.sunny');
        getOriginalBg('.rainy');
        getOriginalBg('.thunder');
        getOriginalBg('.windy');
        getOriginalBg('.cloudy');
        btn.style.color= 'white';
    });
});

//Function of getting random colors of array
function getRandomColor(){
    return Math.floor(Math.random()*colors.length);
}


//On mouseover to wheather, get changing cursor
btns.addEventListener('mouseover', e => {
    if(e.target.classList.contains('btn')){
        e.target.style.cursor = 'pointer';
    }
});
//Fucktion which disactive type of wheather
function getOriginalBg(wheather){
    return document.querySelector(wheather).style.backgroundColor ='aliceblue';
}


//Choosing one type of wheather, activated color of whether, which you could active in days/monthes
btns.addEventListener('click', event => {
    let target = event.target.closest('.btn');
    target.style.borderRadius = '50%';
    if(target.classList.contains('sunny')){
        target.style.backgroundColor = 'yellow';
        getOriginalBg('.cloudy');
        getOriginalBg('.rainy');
        getOriginalBg('.thunder');
        getOriginalBg('.windy');
    }
    if(target.classList.contains('cloudy')){
        target.style.backgroundColor = 'blue';
        target.style.color = 'white';
        getOriginalBg('.sunny');
        getOriginalBg('.rainy');
        getOriginalBg('.thunder');
        getOriginalBg('.windy');
    }
    if(target.classList.contains('thunder')){
        target.style.backgroundColor = 'darkkhaki';
        getOriginalBg('.sunny');
        getOriginalBg('.rainy');
        getOriginalBg('.cloudy');
        getOriginalBg('.windy');
    }
    if(target.classList.contains('rainy')){
        target.style.backgroundColor = 'lightblue';
        getOriginalBg('.sunny');
        getOriginalBg('.cloudy');
        getOriginalBg('.thunder');
        getOriginalBg('.windy');
    }
    if(target.classList.contains('windy')){
        target.style.backgroundColor = 'aqua';
        getOriginalBg('.sunny');
        getOriginalBg('.rainy');
        getOriginalBg('.thunder');
        getOriginalBg('.cloudy');
    }
    buttonsData.forEach(btn => {
            btn.addEventListener('click', e => {
                if(target.classList.contains('sunny')){
                    e.target.style.backgroundColor = 'yellow';
                    e.target.style.color = 'black';
                }
                if(target.classList.contains('cloudy')){
                    e.target.style.backgroundColor = 'blue';
                }
                if(target.classList.contains('thunder')){
                    e.target.style.backgroundColor = 'darkkhaki';
                }
                if(target.classList.contains('rainy')){
                    e.target.style.backgroundColor = 'lightblue';
                }
                if(target.classList.contains('windy')){
                    e.target.style.backgroundColor = 'aqua';
                    e.target.style.color = 'black';
                }
            });
        });
});


//On mouseover , change cursor and scale in days of monthes
buttonsData.forEach(btn => {
    btn.addEventListener('mouseover', function(){
        btn.style.cursor = 'pointer';
        btn.style.transform ="scale(1.1)";
    });
});
//On mouseout, all becomes to initial condition
buttonsData.forEach(btn => {
    btn.addEventListener('mouseout', function(){
        btn.style.cursor = '';
        btn.style.transform ="";
    });
});
