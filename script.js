const board = document.querySelector('#board');
const ctx = board.getContext("2d");

let drawing = false;
let currnetColor = "black";

board.addEventListener("mousedown", (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});


board.addEventListener("mousemove", (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = currnetColor;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.stroke();
    }
});


board.addEventListener("mouseup", (e) => {
    drawing = false;
    ctx.closePath();
});


board.addEventListener('mouseout', () =>{
    drawing = false;
    ctx.closePath();
})

const colorOption = document.querySelectorAll(".color-option");
colorOption.forEach(option =>{
    option.addEventListener("click" , () => {
        currnetColor = option.getAttribute('data-color');
        console.log(currnetColor)
    });
});