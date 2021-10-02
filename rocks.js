const rock=[
    { x: 21, y: 17 },
    { x: 14, y: 17 },
    { x: 15, y: 17 },
]
export function addRocks(gameBoard){
    rock.forEach(element =>{
        const rockElement = document.createElement('div')
        rockElement.style.gridRowStart =element.y
        rockElement.style.gridColumnStart = element.x
        rockElement.classList.add('rock')
        gameBoard.appendChild(rockElement)
        })
            
}