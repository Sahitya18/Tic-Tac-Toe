function resetFunc() {
    const x = document.getElementsByClassName("inputButton");
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "";
    }
    console.log(x);
    console.log("button pressed");
}
var count = 0;
function buttonPressed() {
    console.log("print");
    // const x = document.querySelectorAll("inputButton");
    const x = document.getElementsByClassName("inputButton");
    console.log(x);
}