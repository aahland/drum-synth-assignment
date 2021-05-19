document.addEventListener("keydown", function(evt){
    if (evt.key == "1") {
        var sound = document.getElementById("myAudio");
        sound.play(); 
    } if (evt.key == "2") {
        var sound2 = document.getElementById("myAudio2");
        sound2.play(); 
    } if (evt.key == "3") {
        var sound3 = document.getElementById("myAudio3");
        sound3.play(); 
    } if (evt.key == "4") {
        var sound4 = document.getElementById("myAudio4");
        sound4.play(); 
    } if (evt.key == "5") {
        var sound5 = document.getElementById("myAudio5");
        sound5.play(); 
    } if (evt.key == "6") {
        var sound6 = document.getElementById("myAudio6");
        sound6.play(); 
    } if (evt.key == "7") {
        var sound7 = document.getElementById("myAudio7");
        sound7.play(); 
    } if (evt.key == "8") {
        var sound8 = document.getElementById("myAudio8");
        sound8.play(); 
    } if (evt.key == "9")  {
        var sound9 = document.getElementById("myAudio9");
        sound9.play(); 
    }
});


let Btn = document.getElementById("Btn");
Btn.addEventListener("click", function(){
    var sound = document.getElementById("myAudio");
    sound.pause();
        sound.currentTime = 0;
        sound.play();
        

})

let Btn2 = document.getElementById("Btn2");
Btn2.addEventListener("click", function(){
    var sound2 = document.getElementById("myAudio2");
    sound2.pause();
        sound2.currentTime = 0;
        sound2.play();

})

let Btn3 = document.getElementById("Btn3");
Btn3.addEventListener("click", function(){
    var sound3 = document.getElementById("myAudio3");
    sound3.pause();
        sound3.currentTime = 0;
        sound3.play();

})

let Btn4 = document.getElementById("Btn4");
Btn4.addEventListener("click", function(){
    var sound4 = document.getElementById("myAudio4");
    sound4.pause();
        sound4.currentTime = 0;
        sound4.play();

})

let Btn5 = document.getElementById("Btn5");
Btn5.addEventListener("click", function(){
    var sound5 = document.getElementById("myAudio5");
    sound5.pause();
        sound5.currentTime = 0;
        sound5.play();

})

let Btn6 = document.getElementById("Btn6");
Btn6.addEventListener("click", function(){
    var sound6 = document.getElementById("myAudio6");
    sound6.pause();
        sound6.currentTime = 0;
        sound6.play();

})

let Btn7 = document.getElementById("Btn7");
Btn7.addEventListener("click", function(){
    var sound7 = document.getElementById("myAudio7");
    sound7.pause();
        sound7.currentTime = 0;
        sound7.play();

})

let Btn8 = document.getElementById("Btn8");
Btn8.addEventListener("click", function(){
    var sound8 = document.getElementById("myAudio8");
    sound8.pause();
        sound8.currentTime = 0;
        sound8.play();

})

let Btn9 = document.getElementById("Btn9");
Btn9.addEventListener("click", function(){
    var sound9 = document.getElementById("myAudio9");
    sound9.pause();
        sound9.currentTime = 0;
        sound9.play();

})

let sb1 = document.getElementById("sb1");
sb1.addEventListener("click", function(){
    var synth1 = document.getElementById("synth1");
    synth1.pause();
        synth1.currentTime = 0;
    synth1.play();
    
})

let sb2 = document.getElementById("sb2");
sb2.addEventListener("click", function(){
    var synth2 = document.getElementById("synth2");
    synth2.pause();
        synth2.currentTime = 0;
    synth2.play();
    
})

let sb3 = document.getElementById("sb3");
sb3.addEventListener("click", function(){
    var synth3 = document.getElementById("synth3");
    synth3.pause();
        synth3.currentTime = 0;
    synth3.play();
    

})

let sb4 = document.getElementById("sb4");
sb4.addEventListener("click", function(){
    var synth4 = document.getElementById("synth4");
    synth4.pause();
        synth4.currentTime = 0;
    synth4.play();
    
})

let sb5 = document.getElementById("sb5");
sb5.addEventListener("click", function(){
    var synth5 = document.getElementById("synth5");
    synth5.pause();
        synth5.currentTime = 0;
    synth5.play();
    
})

let sb6 = document.getElementById("sb6");
sb6.addEventListener("click", function(){
    var synth6 = document.getElementById("synth6");
    synth6.pause();
        synth6.currentTime = 0;
    synth6.play();
    
})

let sb7 = document.getElementById("sb7");
sb7.addEventListener("click", function(){
    var synth7 = document.getElementById("synth7");
    synth7.pause();
        synth7.currentTime = 0;
    synth7.play();
    
})

function updateClock () {
    setInterval(() => {
        let time = new Date();
        document.getElementById("hours").innerHTML = time.getHours() + ":";
        document.getElementById("minutes").innerHTML = time.getMinutes() + ":";
        document.getElementById("seconds").innerHTML = time.getSeconds();    
      
    }, 1000);
  }

  updateClock();

	








