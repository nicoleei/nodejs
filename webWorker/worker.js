var i = 0;
function tiemdCount(){
   i = i +1;
   postMessage(i);
   setTimeout("tiemdCount()",500);
}

timedCount();