// Test 
console.log("Connected");

// restart Game Button
var restart = document.querySelector("#resetId");

// Grabs all the squares
var squares = document.querySelectorAll('td');

// Clear all the sequares
restart.addEventListener('click', function clearBoard(){
    for(var i = 0; i<squares.length; i++){
        squares[i].textContent = ' ';

    }
});

// check the sqaure marker

// var cellOne = document.querySelectorAll('#one');
// cellOne.addEventListener('click', function(){
//     cellOne.textContent = 'X';
// });

function clickListener(){
    
    if(this.textContent === ' '){
        this.textContent = 'X';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
    }else{
        this.textContent = ' ';
    }
}

for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click',  clickListener);
}

// For loop to add event listeners to all the squares
