const game = {
    init: function(){

        //récupère les élements DOM avec selecteur css (set)

        const totoro = document.querySelector(".toto");
        const totoroBounce = document.querySelector(".bounce-1");
        const totoroCombo = document.querySelector(".combo");
        const totoroRamen = document.querySelector(".ramen");
        const scoreDisplay = document.querySelector("#score");
        const grid = document.querySelector(".grid");

        
        //Avec un eventlistener, on écoute les touches de claviers utilisées afin de bouger Totoro. (set)
        window.addEventListener("keydown", game.gameplayTotoro);
        window.addEventListener("keydown", game.bouncing);
        window.addEventListener("keydown", game.specialTrick);
    }
    ,
    createSetEnvironnement: function (){

        //init l'environnement de jeu (set?)
        const totoroWidth = 100;
        const totoroHeight = 150;
        const ramenWidth = 70;
        const ramenHeight = 70;
        const boardWidth = 1000;
        const boardHeight = 600;
        const starWidth = 70;
        const starHeight = 50;
    
    
        //init Totoro move
        let x= 0;
        let y= 0;
        let speed = 50;
        let flipped = false;
        let rotate = 0;
        
        //init star move 
        let xDirection = -2;
        let yDirection = 2;
        
        const starStart = [900, 450];
        let starCurrentPosition = starStart;
        
        let timerId;
        
        //init ramen move 
        let xMove = 2;
        
      
        
        let timerRamenId;
      

        // draw star

        const star = document.createElement('img')
        star.src = "./ninjastar.jpg";
        star.classList.add('star')
        grid.appendChild(star)
        drawStar()

        function drawStar() {
        star.style.left = starCurrentPosition[0] + 'px'
        star.style.bottom = starCurrentPosition[1] + 'px'
        }
    },

    gameplayTotoro : function(event){

        const totoro = document.querySelector(".toto");
         //init Totoro move
         let x= 0;
         let y= 0;
         let speed = 50;
         let flipped = false;
         let rotate = 0;

            if (!event.key.includes("Arrow")) return
          
            switch (event.key) {
              case 'ArrowUp':
                y = y - 1;
                rotate = -90;
                break;
              case 'ArrowDown':
                y = y + 1;
                rotate = 90;
                break;
              case 'ArrowLeft':
                x =  x - 1;
                flipped = true;
                rotate = 0;
                break;
              case 'ArrowRight':
                x = x + 1;
                flipped= false;
                rotate = 0;
                break;
            }
          
            totoro.setAttribute(
              "style", `
                --rotate: ${flipped ? '180deg': '0'};
                --x: ${x * speed}px; 
                --y: ${y * speed}px;
                --rotate: ${rotate}deg;
              `
            );
          },


          //Totoro bounce
    bouncing : function (event){
        const totoro = document.querySelector(".toto");

            if (!event.key.includes("Enter")) { 
              return totoro.classList.remove('bounce-1') 
            }
            return totoro.classList.add('bounce-1');
          }
          ,
          //Totoro special move
    specialTrick: function (event){
        const totoro = document.querySelector(".toto");
            if (!event.code.includes("Space")) { 
              return totoro.classList.remove('combo'); 
            }
            return totoro.classList.add('combo');
          },
    
    drawRamen: function (){
        const ramenStart = [0, 0];
        let ramenCurrentPosition = ramenStart;
        
        const ramen = document.createElement('img')
          ramen.src = "./ramen.jpg";
          ramen.classList.add('ramen')
          grid.appendChild(ramen)
          ramen.style.left = ramenCurrentPosition[0] + 'px'
          ramen.style.bottom = ramenCurrentPosition[1] + 'px'
        
         },

    }



document.addEventListener('DOMContentLoaded', game.init);