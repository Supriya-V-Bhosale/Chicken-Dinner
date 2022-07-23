score=0;
cross=true;
setTimeout(()=>{
    b=document.querySelector('.bird1');
    b.classList.add('birdanimation');
},10);
document.onkeydown=(e)=>{
    // console.log("key code" , e.keyCode);

    if(e.keyCode==38){
        hen=document.querySelector('.hen');
        hen.classList.add('animatehen');
        setTimeout(()=>{
            hen.classList.remove('animatehen');
        },700);
    }
    if(e.keyCode == 39){
        hen=document.querySelector('.hen');
        henx=parseInt(window.getComputedStyle(hen,null).getPropertyValue('left'));
        henr=parseInt(window.getComputedStyle(hen,null).getPropertyValue('right'));

        if(henr>90){
        hen.style.left=henx + 112 +"px";
        }
    }


    
    if (e.keyCode == 37) {
        hen = document.querySelector('.hen');
        henx = parseInt(window.getComputedStyle(hen, null).getPropertyValue('left'));
        if(henx>0){
        hen.style.left = henx -112 + "px";
        }
    }
 
}


setInterval(()=>{

    hen=document.querySelector('.hen');
    men=document.querySelector('.chef');
    gameover=document.querySelector('.gameOver')

    hx=parseInt(window.getComputedStyle(hen ,null).getPropertyValue('left'));
    hy=parseInt(window.getComputedStyle(hen ,null).getPropertyValue('top'));
    mx=parseInt(window.getComputedStyle(men,null).getPropertyValue('left'));
    my=parseInt(window.getComputedStyle(men,null).getPropertyValue('top'));
     

    difleft=Math.abs(hx-mx);
    diftop=Math.abs(hy-my);
    b=document.querySelector('.bird');
    // console.log(difleft, diftop)
    if(difleft<80 && diftop<120){

        gameover.style.visibility='visible';
        men.classList.remove('chefrunning');
        b.classList.remove('birdrunning');
        b.style.visibility='hidden';
        go=document.querySelector('.gameOver');
        go.classList.add('goo')
        
        men.style.visibility='hidden';
        hen.style.visibility='hidden';

        b1=document.querySelector('.bird1');
        b1.style.visibility='hidden'

        r=document.querySelector('.sc');
        r.innerHTML="";

        r1=document.querySelector('.result');
        r1.innerHTML="Game Over! - Reload to play Again"




        // console.log("Supriya");

    }
    else if(cross==true && difleft<170){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;

        },1000)
    }
    setTimeout(()=>{
        dur=parseFloat(window.getComputedStyle(men,null).getPropertyValue('animation-duration'));
        if( dur>2){
        newdur=dur-0.001;
        men.style.animationDuration=newdur  + 's';
                // console.log(newdur)

        }



    },5000)


},100);

function updateScore(s){
    document.querySelector('#score').innerHTML="Your  Score " + s;
}