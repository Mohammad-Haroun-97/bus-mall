"use strict"


let rightImageElement = document.getElementById('rightImage')
let middleImageElement = document.getElementById('middleImage')
let leftImageElement = document.getElementById('leftImage')
let buttonElement = document.getElementById('button')
let myChart = document.getElementById('myChart')


Product.total = [];
// let Product.total = [];
let namesArr = [];
let shownArr = [];
let votesArr = [];

function Random() {

    return (Math.floor(Math.random() * Product.total.length))
};

let rightIndex;
let leftIndex;
let middleIndex;


function Product(name, src) {

    this.name = name;
    this.src = src;
    this.votes = 0,
    this.times = 0;

    namesArr.push(this.name)

    Product.total.push(this);
    


}


function updateStorage() {

    let stringArray = JSON.stringify(Product.total )

    localStorage.setItem('product',stringArray)
    
}

function getOldStorage() {

    let data = localStorage.getItem('product')

    let parsedArray=JSON.parse(data)

if (parsedArray !==null) {

    // parsedArray == Product.total;
    // for (let i = 0; i < parsedArray.length; i++) {

        Product.total = parsedArray;

        // new Product(parsedArray[i].name, parsedArray[i].src)
        
    

}
render();

    
}
// console.log(namesArr);


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

// console.log(Product.total);



let initialArray =[];
function render() {
    
    
    console.log('before',initialArray);


    leftIndex = Random();
    console.log('leftIndex',leftIndex);

    middleIndex = Random();
    console.log('middleIndex',middleIndex);

    rightIndex = Random();
    console.log('rightIndex',rightIndex);
    
    

    

    


    // while (rightIndex == leftIndex || middleIndex == rightIndex || middleIndex == leftIndex) {
    //     rightIndex = Random();
    //     leftIndex = Random();
    //     middleIndex = Random();

        
    // };

    // const initialArray = [rightIndex, leftIndex, middleIndex];

    
    do {rightIndex=Random();
        leftIndex=Random();
        middleIndex=Random();
        
    } while (initialArray.includes(rightIndex) ||initialArray.includes(leftIndex) ||initialArray.includes(middleIndex)||rightIndex == leftIndex || middleIndex == rightIndex || middleIndex == leftIndex);
    


    

    initialArray= [rightIndex,leftIndex,middleIndex]
    console.log('after',initialArray);



    rightImageElement.src = Product.total[rightIndex].src
    leftImageElement.src = Product.total[leftIndex].src
    middleImageElement.src = Product.total[middleIndex].src

    Product.total[rightIndex].times++;
    Product.total[middleIndex].times++;
    Product.total[leftIndex].times++;

    // numbersArr = [rightIndex, leftIndex, middleIndex];


    
    

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

            Product.total[rightIndex].votes++;
            // console.log(Product.total[rightIndex]);

        }



        else if (event.target.id === 'leftImage') {
            Product.total[leftIndex].votes++;
            console.log(Product.total[leftIndex]);

        }

        else if (event.target.id === 'middleImage') {


            Product.total[middleIndex].votes++;
            console.log(Product.total[middleIndex]);

        }
        initialtrial++;





        render();

    }




    // else (initialtrial == maxtrials) {
    else {

        leftImageElement.removeEventListener('click', show);
        rightImageElement.removeEventListener('click', show);
        middleImageElement.removeEventListener('click', show);

        buttonElement.addEventListener('click', finish)

        function finish() {
            let result = document.getElementById('result');

            for (let i = 0; i < Product.total.length; i++) {

                let elements = document.createElement('li');

                result.appendChild(elements);

                elements.textContent = `${Product.total[i].name} has ${Product.total[i].votes} votes and has been seen ${Product.total[i].times} times `

            }




            buttonElement.removeEventListener('click', finish);

            for (let i = 0; i < Product.total.length; i++) {
                console.log(Product.total[i].votes);
                votesArr.push(Product.total[i].votes);
                shownArr.push(Product.total[i].times);
                

            }
            updateStorage();
            
            console.log(shownArr);



            showChart();




        }

        








    }
}


function showChart() {

    const data = {
        labels: namesArr,
        datasets: [{
            label: 'Votes',
            data: votesArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        },
        {
            label: 'Shown',
            data: shownArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }

        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                }
            }
        },
    };


    myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}








getOldStorage();

