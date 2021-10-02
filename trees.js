const trees=[
    { x: 18, y: 15 },
    { x: 18, y: 16 },
    { x: 18, y: 17 }
]
const leaf=[
    { x: 18, y: 14 },
    { x: 18, y: 13 },
    { x: 18, y: 12 },
    { x: 19, y: 14 },
    { x: 19, y: 13 },
    { x: 19, y: 12 },
    { x: 17, y: 14 },
    { x: 17, y: 13 },
    { x: 17, y: 12 },
    { x: 4,  y: 17},
    { x: 5,  y: 17},
    { x: 6,  y: 17},
    { x: 5,  y: 16}
]
export function addTreeWood(gameBoard){
    trees.forEach(element =>{
    const treeElement = document.createElement('div')
    treeElement.style.gridRowStart =element.y
    treeElement.style.gridColumnStart = element.x
    treeElement.classList.add('treeWood')
    gameBoard.appendChild(treeElement)
    })

    leaf.forEach(element =>{
        const leafElement = document.createElement('div')
        leafElement.style.gridRowStart =element.y
        leafElement.style.gridColumnStart = element.x
        leafElement.classList.add('treeLeaf')
        gameBoard.appendChild(leafElement)
        })
            
}