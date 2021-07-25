"use strict"


let rightImageElement = document.getElementById('rightImage')
let middleImageElement = document.getElementById('middleImage')
let leftImageElement = document.getElementById('leftImage')

let buttonElement = document.getElementById('button')





let products = [];


function Random() {

    return (Math.floor(Math.random() * products.length))
};

let rightIndex;
let leftIndex;
let middleIndex;


function Product(name, src) {

    this.name = name;
    this.src = src;
    this.votes = 0,

     this.times = 0;

    products.push(this);


}


new Product('bag', 'img/bag.jpg')
new Product('banana', 'img/banana.jpg')
new Product('bathroom', 'img/bathroom.jpg')
new Product('boots', 'img/boots.jpg')
new Product('breakfast', 'img/breakfast.jpg')
new Product('bubblegum', 'img/bubblegum.jpg')
new Product('chair', 'img/chair.jpg')
new Product('cthulhu', 'img/cthulhu.jpg')
new Product('dog-duck', 'img/dog-duck.jpg')
new Product('dragon', 'img/dragon.jpg')
new Product('pen', 'img/pen.jpg')
new Product('pet-sweep', 'img/pet-sweep.jpg')
new Product('scissors', 'img/scissors.jpg')
new Product('shark', 'img/shark.jpg')
new Product('sweep', 'img/sweep.png')
new Product('tauntaun', 'img/tauntaun.jpg')
new Product('unicorn', 'img/unicorn.jpg')
new Product('water-can', 'img/water-can.jpg')
new Product('wine-glass', 'img/wine-glass.jpg')

console.log(products);




function render() {

    rightIndex = Random();
    leftIndex = Random();
    middleIndex = Random();

    while (rightIndex == leftIndex || middleIndex == rightIndex || middleIndex == leftIndex) {
        rightIndex = Random();
        leftIndex = Random();
    }


    rightImageElement.src = products[rightIndex].src
    leftImageElement.src = products[leftIndex].src
    middleImageElement.src = products[middleIndex].src

    products[rightIndex].times++;
    products[middleIndex].times++;
    products[leftIndex].times++;


}
render();


rightImageElement.addEventListener('click', show)
leftImageElement.addEventListener('click', show)
middleImageElement.addEventListener('click', show)

let initialtrial = 0;
let maxtrials = 25;

function show(event) {


    
    console.log(initialtrial);
    console.log(maxtrials);

    if (initialtrial < maxtrials) {


        if (event.target.id === 'rightImage') {

            products[rightIndex].votes++;
            console.log(products[rightIndex]);

        }



        if (event.target.id === 'leftImage') {
            products[leftIndex].votes++;
            console.log(products[leftIndex]);

        }

        if (event.target.id === 'middleImage') {
            
        
            products[middleIndex].votes++;
            console.log(products[middleIndex]);

        }
        initialtrial++;
        




        render();

    } 

    
    if (initialtrial==maxtrials) {
        
        leftImageElement.removeEventListener('click', show);
        rightImageElement.removeEventListener('click', show);
        middleImageElement.removeEventListener('click', show);

        buttonElement.addEventListener('click',finish)

        function finish() {
            let result = document.getElementById('result');

        for (let i = 0; i < products.length; i++) {

            let elements = document.createElement('li');

            result.appendChild(elements);

            elements.textContent = `${products[i].name} has ${products[i].votes} votes and has been seen ${products[i].times} times `

        }

        // remove event listener:
       
        buttonElement.removeEventListener('click',finish);
        

            
        }

        

        
    }
}

        
      



    



