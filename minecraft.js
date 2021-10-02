
      import { addTreeWood as tree } from "./trees.js"
      import { addDirt as dirt  } from "./dirt.js"
      import { addRocks as rocks } from "./rocks.js"
      import { addclouds as clouds } from "./cloud.js"
      const start = document.querySelector('.start')
      const newgamepage=document.querySelector('.newgamepage')
      const container=document.querySelector('.container')
      // const axe = [ {x=20,y=20}]
   
        start.addEventListener('click', function (){
          container.style.visibility='hidden'
            update()
            // draw()
      })
     

      function update(){
            tree(newgamepage)
            dirt(newgamepage)
            rocks(newgamepage)
            clouds(newgamepage)
      }
      // function draw(){

      // }
      // var MC = [];
       
     
      

     












      // var Minecraft = {}; // namespace

      // Minecraft.allBlocks = [];
      // Minecraft.selectedWidth = 1000; /// default map width
      
      // Minecraft.menu = function() { // starting game
      //     var letsPlay = new Minecraft.map;
      //     letsPlay.generateMap(Minecraft.selectedWidth);
      //     letsPlay.generateBlock();
      //     Minecraft.elements(Minecraft.random(2, Minecraft.oneLine), ground);
      //     Minecraft.initializeTools();
      //     Minecraft.buttons();
      // }
      
