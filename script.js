const gamePlay = (function(){
    function test() {
        alert("it's done");
    }
    
    
    
    
  
        let player = function (name, sign) {
        return {name, sign};
    }
        let user = '';
        let computer = '';
        let marker = document.querySelectorAll('.marker'); 
        let computerSign = '';
        let chooseSign = function(e){
            marker.forEach(item => item.removeEventListener('click', chooseSign, false));
            if(e.target.textContent === 'X') {
                   userSign = 'X';
                   computerSign = 'O'
             }else {
                   userSign = 'O';
                   computerSign = 'X';
             }
             const username = prompt('Player one: please enter your name', ' Player 1');
             const computerName = prompt('Player two: please enter your name', ' Player two')
             user = player(username, userSign);
             computer = player(computerName, computerSign);
             gameBoard.fillGameboard();
             displayController.display();                                                         
    }
    let userSign = (()=> {
        marker.forEach(item => item.addEventListener('click', chooseSign));  
    })();
      

    
    const gameBoard = (function(){
        let Gameboard = [];
        function fillGameboard(){
            Gameboard.push(user.sign);
            for(let i = 1; i < 9; i++){
               if(Gameboard[Gameboard.length - 1] === user.sign){
                   Gameboard.push(computer.sign);
               }
               else{
                   Gameboard.push(user.sign);
               }
            }
           }
            return {Gameboard, fillGameboard};
    })();
    
    
    
    
    const displayController = (function(){
        const box = document.querySelectorAll('.box');
        const screenboard = document.querySelector('.display');
        let index = 0;
        const display = function(){
        screenboard.textContent = `It is ${user.name}'s turn`;
        box.forEach(item => item.addEventListener('click', () => {
        if(item.textContent === ''){
            if(gameBoard.Gameboard[index] === undefined){
                item.textContent = '';
            }   
            else if(index <= 9){
                 item.textContent = `${gameBoard.Gameboard[index]}`;
                 index++;
            }
           }            
             if(gameBoard.Gameboard[index] === user.sign){
             screenboard.textContent = `computers ${computer.name}'s turn`;
             }
             if(gameBoard.Gameboard[index] === computer.sign){
             screenboard.textContent = `It is ${user.name}'s turn`;
      
         }         
  
        }));
  }       
        let announce = function () {
            const diagonal = (box[0].textContent === box[4].textContent && box[4].textContent === box[8].textContent) || (box[2].textContent === box[4].textContent && box[4].textContent === box[6].textContent);
            const horizontal = (box[0].textContent === box[1].textContent && box[1].textContent === box[2].textContent) || (box[3].textContent === box[4].textContent && box[4].textContent === box[5].textContent) || (box[6].textContent === box[7].textContent && box[7].textContent === box[8].textContent);
            const vertical = (box[0].textContent === box[3].textContent && box[3].textContent === box[6].textContent) || (box[1].textContent === box[4].textContent && box[4].textContent === box[7].textContent) || (box[2].textContent === box[5].textContent && box[5].textContent === box[8].textContent);
            if((diagonal || horizontal || vertical) && index >= 5){
                alert('winner');
            }
        return {display}
    })();
})();        