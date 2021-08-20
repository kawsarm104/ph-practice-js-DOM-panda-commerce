console.log("working")
// task 1
const h2tag = document.getElementsByTagName("h2");
// for (let i = 0; i < h2tag.length; i++) {
//     h2tag[i].style.color = "lightblue";
// }
for (let h2 of h2tag) {
    h2.style.color = "lightblue";
}
// task 2
document.getElementById('backpack').style.backgroundColor = "tomato"
// task 3
const card = document.getElementsByClassName('card')
for(let c of card){
    c.style.borderRadius = "30px"
}
// task 4
function consolelog(){
    console.log("Submit button clicked")
}
// task 5 
// const html = document.getElementsByTagName("html")

// addEventListener("click", function(){
//     for (let btn of html) {
//     btn.style.display = "none";
//     }
// });
// document.getElementsByTagName('button').addEventListener('click', function (event) {
//     event.target.parentNode.removeChild(event.target);
// })
// task 6 
document.getElementById('input-field').
addEventListener('keyup',function(event){
    // const input = document.getElementById('input')
    // console.log(input.value)
    console.log(event.target.value)
    if(event.target.value == 'email'){
        document.getElementById('submit-button').style.color= "green"
         document.getElementById('submit-button').removeAttribute('disabled')
    }
    else{
        document.getElementById('submit-button').style.color= ""
        document.getElementById('submit-button').setAttribute('disabled',true)
    }
})