

let about = Number(document.getElementById("about").offsetTop);
let state = document.querySelector(".state").offsetTop;
let start = true;
let numbers = document.querySelectorAll("#number")

window.onscroll = function () {
    // console.log(x);
    if (window.scrollY > about) {
        $("#navgation").css("backgroundColor", "#3C486B");
    } else {
        $("#navgation").css("backgroundColor", "transparent");
    }

    if (window.scrollY > state-500) {
        if (start) {
            numbers.forEach((num) => {
                counter(num);
            });
        }
        start = false;
    }
}


function counter(ele) {
    let num = Number(ele.dataset.number);
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == num) {
            clearInterval(count);
        }
    },1)
}

