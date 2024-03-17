function getRandomColor(){
    let val = Math.floor(Math.random() * 255*255*255)
    return "#" + val.toString(16)
}
const btn = document.getElementById("btn");
btn.addEventListener("click",(event) => {
    document.getElementById("container").style.backgroundColor = getRandomColor()
});
console.log(getRandomColor());