const gamePlay = (function(){
    function test() {
        alert("it's done");
    }
    
    
    
    
  
        let player = function (name, sign) {
        return {name, sign};
    }
        let username = prompt('Please enter your name');
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
             user = player(username, userSign);
             computer = player('Computer', computerSign);
             gameBoard.fillGameboard();                                                            
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
        let index = 0;
        const display = function(){
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
            console.log(item.getAttribute('id'));
            announce();
        }));  
        }
        let announce = function () {
            const diagonal = (box[0].textContent === box[4].textContent && box[4].textContent === box[8].textContent) || (box[2].textContent === box[4].textContent && box[4].textContent === box[6].textContent);
            const horizontal = (box[0].textContent === box[1].textContent && box[1].textContent === box[2].textContent) || (box[3].textContent === box[4].textContent && box[4].textContent === box[5].textContent) || (box[6].textContent === box[7].textContent && box[7].textContent === box[8].textContent);
            const vertical = (box[0].textContent === box[3].textContent && box[3].textContent === box[6].textContent) || (box[1].textContent === box[4].textContent && box[4].textContent === box[7].textContent) || (box[2].textContent === box[5].textContent && box[5].textContent === box[8].textContent);
            if((diagonal || horizontal || vertical) && index >= 5){
                alert('winner');
            }
            console.log(diagonal);
        }
        display();
    })();
}

    
)();        
