const body = document.querySelector('body');
document.addEventListener('mousemove', function (e) {

    let wid = window.innerWidth;
    let hei = window.innerHeight;   

    console.log(converToRange(wid, e.pageX));

    body.style.backgroundColor = `rgb(${converToRange(wid, e.pageX)}, 0, ${converToRange(hei, e.pageY)})`;
    console.log(`rgb(${converToRange(wid, e.pageX)}, 0, ${converToRange(hei, e.pageY)})`);

    // body.style.backgroundColor = `rgb(${(e.pageX) / 4}, 0, ${(e.pageY) / 4})`;
    // console.log(`rgb(${(e.pageX) / 8}, 0, ${(e.pageY) / 8})`);
});

function converToRange(a, b) { 
    return Math.floor((b * 256) / a);
}