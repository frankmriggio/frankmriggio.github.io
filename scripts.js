const pokem1 = new Object();
pokem1.name = "Mon1";
pokem1.distance = 0;

const pokem2 = new Object();
pokem2.name = "Mon2";
pokem2.distance = 0;

var poke1 = document.getElementById("pokemon1");
var poke2 = document.getElementById("pokemon2");
var poke1Win = document.getElementById("pokemon1win");
var poke2Win = document.getElementById("pokemon2win");
var resetBtn = document.getElementById('reset');
var tie = document.getElementById("tie");

var move1 = 0;
var move2 = 0;
max = 10;
increment=0;

const distanceToGo = 1380;

function StartRace(){
    document.getElementById('stop').src = "go1.png";
    starttext.style.visibility = "hidden";
    welcome.style.visibility = "hidden";

    if (pokem1.distance >= distanceToGo)
    {
        console.log ("Squirtle wins!")
        poke1Win.style.visibility = "visible";
        squirtlewin.style.visibility = "visible";

    }
    if (pokem2.distance >= distanceToGo)
    {
        console.log ("Munchlax wins!")
        poke2Win.style.visibility = "visible";
        munchwin.style.visibility = "visible";
    }
    if (pokem1.distance == distanceToGo && pokem2.distance == distanceToGo)
    {
        console.log ("The race is a draw!")
        resetBtn.style.visibility = "visible";
        tie.style.visibility = "visible";
        poke2Win.style.visibility = "hidden";
        munchwin.style.visibility = "hidden";
        poke1Win.style.visibility = "hidden";
        squirtlewin.style.visibility = "hidden";
    }
    if (pokem1.distance<distanceToGo && pokem2.distance<distanceToGo)
    {
        moveRand()
        setTimeout(function(){StartRace()}, 25);
    }
}

function Reset() {
    window.location.reload();
}

function getRandomNumber(max){
    return Math.floor((Math.random() * (max+increment)));
}

function moveRand (){
    console.log ("Setting maximum speed...", max+increment)
    move1 = getRandomNumber(max);
    move2 = getRandomNumber (max);

    console.log ("Pokemon 1 starting distance:", pokem1.distance)
    console.log ("Pokemon 2 starting distance: ", pokem2.distance)

    
        pokem1.distance = pokem1.distance + move1;
        pokem2.distance =  pokem2.distance + move2;
        poke1.style.left = pokem1.distance + "px";
        poke2.style.left = pokem2.distance + "px";
        
        increment = increment +.01;
    
        move1 = 0;
        move2 = 0;
}

