
let htmlBTN = document.getElementById("btn")
let title = document.getElementById("title")
let input = document.getElementById("input")

function btnClick(){
    title.style.color = "red"
    title.style.backgroundColor = "yellow"
    title.style.border = "1px solid black"
    title.style.padding = "150px 50px"
    title.style.borderRadius = "50%"; 
    title.style.display = "inline-block";
    title.style.transition = "all 0.3s ease"; 
}

htmlBTN.addEventListener('click', function() {
    title.innerHTML = "Abdur Rahman"
});

function inputFunc(){
    console.log(input)
}
inputFunc()












































