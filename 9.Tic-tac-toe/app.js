let boxes=document.querySelectorAll('.box');
let resetButton=document.querySelector('.reset');
let newgame=document.querySelector('.newgame');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
let turno =true; // true for player 1, false for player 2//true diye e start kora hoyeche, mane player 1 er turn
let count=0; // to keep track of the number of moves made

const winpatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function resetgame(){
    turno=true;
    count=0; // reset the count to 0
    enablebtns(); // reset korar por sob box enable kore dewa hobe
    msgcontainer.classList.add('hide'); // reset korar por message container ta hide kore dewa hobe
    
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno===true){//player o er turn
            box.innerHTML="X";
            turno=false;//print korar por turn change hoye jabe
        }
        else{
            box.innerHTML="O";//player 1 er turn
            turno=true;//print korar por turn change hoye jabe
        }
        box.disabled=true; // box ta disable kore dewa hobe, jate abar click na hoy
        count++; // click korar por count increment hobe
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
            gamedraw();
        }
    });
});

function gamedraw(){
    msg.innerText=`Draw!!`;
    msgcontainer.classList.remove('hide');
    disablebtns(); // draw hole sob box disable kore dewa hobe
};

function disablebtns(){
    for(let box of boxes){
        box.disabled=true; // sob box disable kore dewa hobe
    }

}

function enablebtns(){
    for(let box of boxes){
        box.disabled=false; // sob box enable kore dewa hobe
        box.innerText=""; // sob box er text clear kore dewa hobe to run the game again
    }
};

function showwinner(winner){
    msg.innerText=`congratulations!!winner is ${winner}`;
    msgcontainer.classList.remove('hide');
    disablebtns(); // winner show korar por sob box disable kore dewa hobe
  
};

function checkwinner(){
    for (let pattern of winpatterns) {
        

        let pos1val= boxes[pattern[0]].innerHTML;
        let pos2val= boxes[pattern[1]].innerHTML;   
        let pos3val= boxes[pattern[2]].innerHTML;
       
        if(pos1val!=="" && pos2val!=="" && pos3val!==""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("we have a winner!!",pos1val);
                showwinner(pos1val);
                return true;
            }

        }
    }
    return false;
};


newgame.addEventListener('click',()=>{
    resetgame();
});

resetButton.addEventListener('click',()=>{
    resetgame();
});