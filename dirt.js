export function addDirt(gameBoard){
    for(let x=0;x<21;x++)
    {
        const lavaElement = document.createElement('div')
            lavaElement.style.gridRowStart =21
            lavaElement.style.gridColumnStart = x
            lavaElement.classList.add('lava')
            gameBoard.appendChild(lavaElement)
    }
    for (let y=19;y<21;y++)
    {
        for(let x=0;x<21;x++)
        {
            const dirtEelement = document.createElement('div')
            dirtEelement.style.gridRowStart =y
            dirtEelement.style.gridColumnStart = x
            dirtEelement.classList.add('dirt')
            gameBoard.appendChild(dirtEelement)
        }
    }
    for(let x = 0;x<21;x++){
        const grassElement = document.createElement('div')
        grassElement.style.gridRowStart =18
        grassElement.style.gridColumnStart = x
        grassElement.classList.add('grass')
        gameBoard.appendChild(grassElement)
    }
}