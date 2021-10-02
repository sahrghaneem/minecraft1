const cloud=[
    { x: 4,  y: 4},
    { x: 5,  y: 4},
    { x: 5,  y: 5},
    { x: 6,  y: 5},
    { x: 7,  y: 5},
    { x: 7,  y: 4},
    { x: 8,  y: 4},
    { x: 8,  y: 5}
]

export function addclouds(gameBoard){
    cloud.forEach(element =>{
        const cloudElement = document.createElement('div')
        cloudElement.style.gridRowStart =element.y
        cloudElement.style.gridColumnStart = element.x
        cloudElement.classList.add('cloud')
        gameBoard.appendChild(cloudElement)
        })
            
}

// function getRandomInt(min, max) {
//     export function addclouds(gameBoard){
  
//     // random number to decide the size of the cloud
//     let min = Math.ceil(4);
//     let max = Math.floor(10);
//     let cloudSize= Math.floor(Math.random() * (max - min + 1)) + min;
//    // end of cloud size random number

//     // starting the first div of the cloud
//     let min = Math.ceil(0);
//    let max = Math.floor(11);
//    for(let i=0;i<cloudSize;i++)
//    {
//    let CloudY= Math.floor(Math.random() * (max - min + 1)) + min;
//     let CloudX= Math.floor(Math.random() * 21) ;
//     let flag=1;

//     if(flag || )
//     {
//         flag=0;
   
//     const cloudElement = document.createElement('div')
//     cloudElement.style.gridRowStart =CloudY
//     cloudElement.style.gridColumnStart =CloudX
//     cloudElement.classList.add('cloud')
//     gameBoard.appendChild(cloudElement)
//    }
//    }
    // end first div of cloud




