const containers = document.querySelectorAll('.container');
const countAll = containers.length;
let countSelected= 0;
const buttons = document.querySelectorAll('button')

let clickEnabled = true; 

document.addEventListener("click", (event) => {
    if (!clickEnabled) return; // If disabled, do nothing

    const screenWidth = window.innerWidth;
    if (event.clientX < screenWidth / 2) {
        previous();
    } else {
        next();
    }
});

// Function to disable clicks
function disableClick() {
    clickEnabled = false;
}

// Function to enable clicks again
function enableClick() {
    clickEnabled = true;
}

document.body.querySelectorAll('.answer')




for (let i = 1; i < containers.length; i++) {
  containers[i].classList.add('setJs');
}


console.log(clickEnabled);
console.log(countSelected);


function next(){
  document.body.querySelector('.cor').classList.remove  ('js-yn');
  document.body.querySelector('.wro').classList.remove  ('js-yn');
  if(countSelected < countAll-1){
    countSelected+=1;

    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add('setJs');
      if (containers[countSelected].classList.contains('qna')){
        disableClick();
      }else{
        enableClick();
      }
    }
    containers[countSelected].classList.remove('setJs');
  }
  console.log(clickEnabled);
  
}

function previous(){
  document.body.querySelector('.cor').classList.remove  ('js-yn');
  document.body.querySelector('.wro').classList.remove  ('js-yn');
  if(countSelected > 0){
    countSelected-=1;

    for (let i = 0; i < containers.length; i++) {
      containers[i].classList.add('setJs');
      if (containers[countSelected].classList.contains('qna')){
        disableClick();
      }else{
        enableClick();
      }
    }
    containers[countSelected].classList.remove('setJs');
  }
  
  console.log(clickEnabled);
}


buttons.forEach(button =>{
  button.addEventListener('click', (events) => {
    events.stopPropagation();
    console.log("Tombol diklik");
  })
})

function no(){
  document.body.querySelector('.container-yes-no').classList.add('js-yn');
  
  console.log(clickEnabled);
}


function yes(){
  next();
  enableClick();
  console.log(clickEnabled);
}

function correct(){
  document.body.querySelector('.cor').classList.add('js-yn');
  enableClick();
}

function wrong(){
  document.body.querySelector('.wro').classList.add('js-yn');
}