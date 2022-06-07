
function countDown(num) {
    num--;
    if (num >= 0) {
        setTimeout(() => {
            console.log(num);
            countDown(num);
        }, 1000);
    } else {
        console.log("Done");
    }
}

//countDown(4);

function randomGame() {
    let count = 0;
    let inter = setInterval(() => {
        if (+Math.random().toFixed(2) <= 0.75) {
            count++;
        } else {
            console.log("Time: " + count + "s");
            clearInterval(inter);
        }
    }, 1000);
}
