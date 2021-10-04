
      const start = document.querySelector('.start')
      const newGamePage=document.querySelector('.newGamePage')
      let gameTiles = document.querySelectorAll('.gameTile');
      const container=document.querySelector('.container')
      let clickables = document.querySelectorAll('.clickable');

      const textAmountDirt=document.querySelector('#amountDirt')
      const textAmountGrass=document.querySelector('#amountGrass')
      const textAmountRock=document.querySelector('#amountRock')
      const textAmountTreeWood=document.querySelector('#amountTreeWood')
      const textAmountTreeLeaf=document.querySelector('#amountTreeLeaf')

      let selectedTool = '';
      let selectedElement;
      let cntRock = 0;
      let cntTreeWood = 0;
      let cntTreeLeaves = 0;
      let cntDirt = 0;
      let cntGrass = 0;

      let worldMatrix = Array.from(Array(parseInt(21)), () => new Array(parseInt(35)));
      function createWorld() {
            for (let i = 0; i < 13; i++)
            for (let j = 0; j < 35; j++)
                worldMatrix[i][j] = 'sky';

            for (let i =13; i < 14; i++)
            for (let j = 0; j < 35; j++)
                  worldMatrix[i][j] = 'grass';
            for (let i =14; i < 16; i++)
            for (let j = 0; j < 35; j++)
                  worldMatrix[i][j] = 'dirt';
            for (let i =16; i < 19; i++)
            for (let j = 0; j < 35; j++)
                  worldMatrix[i][j] = 'rock';
            for (let i =19; i < 21; i++)
            for (let j = 0; j < 35; j++)
                  worldMatrix[i][j] = 'lava';
                  console.log(worldMatrix);

            generateTree(10,12)
            generateTree(4,12)
            generateTree(15,12)
            generateCloud()
            drawWorld();
      }

      function generateTree(x, y) {
            worldMatrix[y][x] = 'treeWood';
            worldMatrix[y - 1][x] = 'treeWood';
            worldMatrix[y - 2][x] = 'treeLeaf';
            worldMatrix[y - 2][x - 1] = 'treeLeaf';
            worldMatrix[y - 2][x + 1] = 'treeLeaf';
            worldMatrix[y - 3][x] = 'treeLeaf';
            worldMatrix[y - 3][x - 1] = 'treeLeaf';
            worldMatrix[y - 3][x + 1] = 'treeLeaf';
            worldMatrix[y - 4][x] = 'treeLeaf';
        }


        const cloudsarray=[{ x: 4,  y: 24},
            { x: 5,  y: 23},
            { x: 5,  y: 25},
            { x: 5,  y: 24},
            { x: 6,  y: 24},
            { x: 6,  y: 25},
            { x: 5,  y: 26},
            { x: 5,  y: 27},
            { x: 5,  y: 28},
            { x: 6,  y: 26}
            ]
        function generateCloud() {
              cloudsarray.forEach(element =>{
            worldMatrix[element.x][element.y] = 'cloud';
              })
            }
        

      function drawWorld() {
            for (let i = 0; i < 21; i++) {
                for (let j = 0; j < 35; j++) {
                    let div = document.createElement('div');
                    div.style.gridRowStart = i ;
                    div.style.gridColumnStart = j;
                  //   div.classList.add('tile');
                    div.style.height = `1fr`;
                    div.style.minWidth = `1fr`;
                    div.style.backgroundRepeat = 'no-repeat';
                    div.style.backgroundPosition = 'center';
                    div.style.backgroundSize = 'cover';
                    newGamePage.appendChild(div);
                    div.addEventListener('click', gameTileClicked);
                    div.classList.add('gameTile');
                    switch (worldMatrix[i][j]) {
                        case 'dirt':
                            div.classList.add('dirt')
                            break;
                        case 'grass':
                            div.classList.add('grass')
                            break;
                        case 'treeWood':
                            div.classList.add('treeWood')
                            break;
                        case 'rock':
                            div.classList.add('rock')
                            break;
                        case 'treeLeaf':
                            div.classList.add('treeLeaf')
                            break;
                        case 'sky':
                            div.classList.add('sky')
                            break;
                        case 'cloud':
                            div.classList.add('cloud')
                            break;
                        case 'lava':
                            div.classList.add('lava')
                            break;
                    }
                }
            }
      }
   
      function gameTileClicked() {
            //tool on block interactions
            if (selectedTool == 'Pickaxe' && this.classList[1] == 'rock') {
                cntRock++;
                textAmountRock.value = cntRock;
                updateObjClasslist(this,'rock','sky');
            }
            if (selectedTool == 'Axe' && (this.classList[1] == 'treeWood' || this.classList[1] == 'treeLeaf')) {
                if (this.classList[1] == 'treeWood') { //tree
                    cntTreeWood++;
                    textAmountTreeWood.value = cntTreeWood;
                    updateObjClasslist(this,'treeWood','sky');
                }
                else { //leaves
                    cntTreeLeaves++;
                    textAmountTreeLeaf.value = cntTreeLeaves;
                    updateObjClasslist(this,'treeLeaf','sky');
                }
            }
            if (selectedTool == 'Shovel' && (this.classList[1] == 'dirt' || this.classList[1] == 'grass')) {
                if (this.classList[1] == 'dirt') {
                    cntDirt++;
                    console.log(cntDirt);
                    textAmountDirt.value = cntDirt;
                    updateObjClasslist(this,'dirt','sky');
                }
                else {
                    cntGrass++;
                    console.log(cntGrass);
                    textAmountGrass.value = cntGrass;
                    updateObjClasslist(this,'grass','sky');
                }
            }
            //Block on sky interactions
            if(this.classList[1] == 'sky' && selectedElement.classList[0] == 'dirt' && cntDirt >= 1)
            {
                cntDirt--;
                textAmountDirt.value = cntDirt;
                updateObjClasslist(this,'sky','dirt');
            }
            if(this.classList[1] == 'sky' && selectedElement.classList[0] == 'grass' && cntGrass >= 1)
            {
                cntGrass--;
                textAmountGrass.value = cntGrass;
                updateObjClasslist(this,'sky','grass');
            }
            // if(this.classList[1] == 'sky' && selectedElement.classList[1] == 'water' && cntWater >= 1)
            // {
            //     cntWater--;
            //     waterCnt.textContent = cntWater;
            //     updateObjClasslist(this,'sky','water');
            // }
            // if(this.classList[1] == 'sky' && selectedElement.classList[1] == 'lava' && cntLava >= 1)
            // {
            //     cntLava--;
            //     lavaCnt.textContent = cntLava;
            //     updateObjClasslist(this,'sky','lava');
            // }
            if(this.classList[1] == 'sky' && selectedElement.classList[0] == 'treeWood' && cntTreeWood >= 1)
            {
                  cntTreeWood--;
                textAmountTreeWood.value = cntTreeWood;
                updateObjClasslist(this,'sky','treeWood');
            }
            if(this.classList[1] == 'sky' && selectedElement.classList[0] == 'treeLeaf' && cntTreeLeaves >= 1)
            {
                  cntTreeLeaves--;
                textAmountTreeLeaf.value = cntTreeLeaves;
                updateObjClasslist(this,'sky','treeLeaf');
            }
            if(this.classList[1] == 'sky' && selectedElement.classList[0] == 'rock' && cntRock >= 1)
            {
                cntRock--;
                textAmountRock.value = cntRock;
                updateObjClasslist(this,'sky','rock');
            }
        }
        function updateObjClasslist(obj,toRemove,toAdd) {
            obj.classList.remove(toRemove);
            obj.classList.add(toAdd);
        }
        gameTiles.forEach((element) => {
            element.addEventListener('click', gameTileClicked);
        })
        clickables.forEach((element) => {
            element.addEventListener('click', () => {
                if (selectedElement) //if there is an old selected element, remove it
                    selectedElement.classList.remove('selected');
                element.classList.add('selected');
                selectedElement = element;
                selectedTool = element.classList[0];
                console.log('selectedtool=',selectedTool);
                console.log('selectedelement=',selectedElement);
            })
        })
        start.addEventListener('click', function (){
          container.style.visibility='hidden'
          console.log('start building world');
          createWorld();

      })

      
