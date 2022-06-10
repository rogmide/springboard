const colorSection = document.querySelector('#colors');

//delegation !important
colorSection.addEventListener('click', function (e) {
    document.body.style.backgroundColor = e.target.dataset.hex;
});

