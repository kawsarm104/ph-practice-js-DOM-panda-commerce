console.log("working")
// task 1
var h2tag = document.getElementsByTagName("h2");
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
