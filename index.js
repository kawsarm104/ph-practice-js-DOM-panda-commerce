console.log("working")

var h2tag = document.getElementsByTagName("h2");
// for (let i = 0; i < h2tag.length; i++) {
//     h2tag[i].style.color = "lightblue";
// }
for (let h2 of h2tag) {
    h2.style.color = "lightblue";
}
document.getElementById('backpack').style.backgroundColor = "tomato"