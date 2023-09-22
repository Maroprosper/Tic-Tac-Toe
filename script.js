const gamePlay = (function(){
    setTimeout(alert("Click on the marker of your choice to start game"), 2000);
                                                      
   
    
    
    
    
  
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
             const username = prompt('Player one: please enter your name', ' Player One');
             const computerName = prompt('Player two: please enter your name', ' Player Two')
             user = player(username, userSign);
             computer = player(computerName, computerSign);
             gameBoard.fillGameboard();
             displayController.display();
             alert("Click on the box of your choice to place marker");
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
        let winner = '';
        const display = function(){
        screenboard.textContent = `It is ${user.name}'s(${user.sign}) turn`;
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
             if(gameBoard.Gameboard[index-1] === user.sign){
             screenboard.textContent = `It is ${computer.name}'s(${computer.sign}) turn`;
             }
             if(gameBoard.Gameboard[index-1] === computer.sign){
             screenboard.textContent = `It is ${user.name}'s(${user.sign}) turn`;
      
         }         
             announce();
    }));
  }
        
        
        const showPopUp = (word) => {
            setTimeout(() => {screenboard.textContent = '';    
            const exit = document.createElement('div');
            exit.setAttribute('id', 'exit');
            const congrats = document.createElement('p');
            congrats.classList.toggle('congrats');
             congrats.innerHTML = word;
            const restart = document.createElement('button');
            restart.classList.toggle('restart');
            const end = document.createElement('button');
            end.classList.toggle('end');
            restart.textContent = 'Restart';
            end.textContent = 'Quit';
            restart.addEventListener('click', () => {
                window.location.reload();
            });
            end.addEventListener('click', () => {
                window.close();
            });
            exit.appendChild(congrats);
            exit.appendChild(restart);
            exit.appendChild(end)
            document.querySelector('main').appendChild(exit);
            document.querySelector('section').classList.toggle('effect');
             gameBoard.Gameboard = '';
            announce = function () {
              history.go(0);
        }   }, 500);
        }     
        
        
        let announce = function () {
            const diagonal = (box[0].textContent === box[4].textContent && box[0].textContent === box[8].textContent) && (box[0].textContent !== "" && box[8].textContent !== "" && box[4].textContent !== "") || (box[6].textContent === box[4].textContent && box[2].textContent === box[6].textContent) && (box[2].textContent !== "" && box[6].textContent !== "" && box[4].textContent !== "");
            const horizontal = (box[0].textContent === box[2].textContent && box[1].textContent === box[2].textContent) && (box[0].textContent !== "" && box[1].textContent !== "" && box[2].textContent !== "")|| (box[3].textContent === box[4].textContent && box[3].textContent === box[5].textContent) && (box[3].textContent !== "" && box[5].textContent !== "" && box[4].textContent !== "")|| (box[8].textContent === box[7].textContent && box[6].textContent === box[8].textContent) && (box[6].textContent !== "" && box[7].textContent !== "" && box[8].textContent !== "");
            const vertical = (box[6].textContent === box[3].textContent && box[0].textContent === box[6].textContent) && (box[0].textContent !== "" && box[3].textContent !== "" && box[6].textContent !== "")|| (box[1].textContent === box[4].textContent && box[1].textContent === box[7].textContent) && (box[1].textContent !== "" && box[7].textContent !== "" && box[4].textContent !== "")|| (box[2].textContent === box[5].textContent && box[2].textContent === box[8].textContent) && (box[2].textContent !== "" && box[8].textContent !== "" && box[5].textContent !== "");
            if((diagonal || horizontal || vertical) && index >= 5){
                 winner = true;
            }
            let word = '';
            if(index > 8){
                word = `It was a tie, Nobody won.<br> Click any button below to continue`
                showPopUp(word);
            }
            
            if(winner){
            if(gameBoard.Gameboard[index] === user.sign){
                word = `Congratulations! ${computer.name}(${computer.sign}) has won.<br> Click any button below to continue`;
             }
             if(gameBoard.Gameboard[index] === computer.sign){
                word  = `Congratulations! ${user.name}(${user.sign}) has won.<br> Click any button below to continue`;
            }
            showPopUp(word);
        }
        }
        return {display};
    
    })();

})();        
