var availablePostions = new Array(9).fill(-1);
function resetFunc() {
    availablePostions.fill(0);
    count=0;
    const x = document.getElementsByClassName("inputButton");
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "";
    }
    //console.log(x);
    //console.log("button pressed");
}
var count = 0;
function buttonPressed(number) {
    console.log(availablePostions);
    const x = document.getElementsByClassName("inputButton")[number];
    if(availablePostions[number]!==1)
    {   
        availablePostions[number]=1;
        if(count%2===0){
            x.innerHTML="X";
            availablePostions[number]=1;
        }else{
            x.innerHTML="O";
            availablePostions[number]=0;
        } 
        count++;
    }
    if(winningConditions())
    {
        console.log("winner");
    }
    // if(resetChecker()){   
    //     console.log("hello"); 
    //     resetFunc();
    // }
}
function winningConditions(){
    if(availablePostions[0]==availablePostions[1]&&availablePostions[1]==availablePostions[2]||
        availablePostions[3]==availablePostions[4]&&availablePostions[4]==availablePostions[5]||
        availablePostions[6]==availablePostions[7]&&availablePostions[7]==availablePostions[8]||
        
        availablePostions[0]==availablePostions[3]&&availablePostions[3]==availablePostions[6]||
        availablePostions[1]==availablePostions[4]&&availablePostions[4]==availablePostions[7]||
        availablePostions[2]==availablePostions[5]&&availablePostions[5]==availablePostions[8]||
        
        availablePostions[0]==availablePostions[4]&&availablePostions[4]==availablePostions[8]||
        availablePostions[2]==availablePostions[4]&&availablePostions[4]==availablePostions[6])
        return true;
            return false;
}
function resetChecker()
{
    for(var i=0;i<availablePostions.length;i++)
    {
        if(availablePostions[i]===-1)
        return false;
    }
    return true;
}