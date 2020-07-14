let html = document.querySelector("#html");
let style = document.querySelector("#style");
console.log(html);
let string = `
/**
 *制作一个太极
 *创建一个div 
 **/
#div1 {
    width: 200px;
    height: 200px;
    border: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    background: rgb(255, 255, 255);
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%);
    position: relative;
    animation: move 2s linear infinite;
    position: fixed;
    top: 20%;
    right: 50%;
    translate:transformX(-50%);
}
@media (max-width: 500px) {
    #div1 {
        right: 0px;
        transform: translateX(0);
    }
}
/**
 * 使用伪类来制作两个圆
 * 
 **/
#div1::after,
#div1::before {
    border-radius: 50%;
    content: '';
    position: absolute;
    display: inline-block;
    width: 100px;
    height: 100px;
}

#div1::after {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%);
}

#div1::before {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(255, 255, 255);
    background: radial-gradient(circle, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%);
}
/**
 * 使用帧动画让太极转起来
 * 
 **/
@keyframes move {
    0% {
        transform: rotateZ(0);
    }
    100% {
        transform: rotateZ(-360deg);

    }
}


    `

    ;
let string2 = '';
let count = 0;
function loop() {
    setTimeout(() => {
        if (string[count] === '\n') {
            string2 += "<br>";
        } else if (string[count] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string[count];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, count);
        window.scrollTo(0, 99999);
        if (count < string.length - 1) {
            ++count
            loop();
        }

    }, 0);
}
loop();
