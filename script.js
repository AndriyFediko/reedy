let str;
let arr;
let speed = 500;
document.getElementById("readingSpeed").oninput = function () {
    speed = document.getElementById("readingSpeed").value;
    document.getElementById("inputVal").textContent = speed;
}
document.getElementById("start").onclick = function () {
    if (document.getElementById("textArea").value != "") {
        str = document.getElementById("textArea").value;
        arr = str.split(" ");
        document.getElementById("textArea").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("readBlock").style.display = "flex";
        document.getElementById("pauseBtn").style.display = "flex";

        function fixArr(arr) {
            let clearArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] != "") {
                    clearArr.push(arr[i]);
                }
            }
            return clearArr;
        }

        function startRead(str) {
            let words = fixArr(str.split(" "));
            let i = 0;
            function time() {
                if (i < words.length) {
                    document.getElementById("readText").textContent = words[i];
                    i++;
                } else {
                    clearInterval(timer);
                    document.getElementById("textArea").style.display = "flex";
                    document.getElementById("start").style.display = "block";
                    document.getElementById("readText").textContent = "";
                    document.getElementById("readBlock").style.display = "none";
                    document.getElementById("textArea").value = "";
                    document.getElementById("pauseBtn").style.display = "none";
                    str = "";
                }
            }
            let timer = setInterval(time, speed);
            document.getElementById("pauseBtn").onclick = function () {
                document.getElementById("pauseBtn").classList.toggle("paused");
                if (document.getElementById("pauseBtn").classList.contains("paused")) {
                    document.querySelector(".triangle").style.display = "none";
                    document.querySelector(".status").style.display = "flex";
                    clearInterval(timer);
                } else {
                    document.querySelector(".triangle").style.display = "flex";
                    document.querySelector(".status").style.display = "none";
                    timer = setInterval(time, speed);
                }
            }
        }
        startRead(str);
    }
}
document.querySelector(".lightContainer").onclick = function () {
    document.querySelector(".lightStatus").classList.toggle("lightStatus__active");
    if (document.querySelector(".lightStatus").classList.contains("lightStatus__active")) {
        document.querySelector(".lightStatus__text").textContent = "ON";
        document.querySelector(".lightContainer__Lamp").style.opacity = "1";
        document.querySelector(".wrap").style.backgroundColor = "white";
        document.querySelector(".inputVal").style.color = "#333";
        document.getElementById("textArea").style.backgroundColor = "#eee";
        document.getElementById("textArea").style.color = "#333";
        document.getElementById("textArea").style.boxShadow = "0 0 10px #999";
        document.getElementById("start").style.backgroundColor = "#eee";
        document.getElementById("start").style.color = "#333";
        document.getElementById("readText").style.color = "#333";
        document.getElementById("pauseBtn").style.backgroundColor = "#eee";
        document.querySelector(".triangle").style.borderColor = "transparent transparent transparent #222";
        $(".pauseBox").css('background-color', '#222');
    } else {
        document.querySelector(".lightStatus__text").textContent = "OFF";
        document.querySelector(".lightContainer__Lamp").style.opacity = "0.5";
        document.querySelector(".wrap").style.backgroundColor = "#333";
        document.querySelector(".inputVal").style.color = "white";
        document.getElementById("textArea").style.backgroundColor = "#222";
        document.getElementById("textArea").style.color = "white";
        document.getElementById("textArea").style.boxShadow = "0 0 10px #000";
        document.getElementById("start").style.backgroundColor = "#222";
        document.getElementById("start").style.color = "white";
        document.getElementById("readText").style.color = "white";
        document.getElementById("pauseBtn").style.backgroundColor = "#222";
        document.querySelector(".triangle").style.borderColor = "transparent transparent transparent #fff";
        $(".pauseBox").css('background-color', '#fff');
    }
}