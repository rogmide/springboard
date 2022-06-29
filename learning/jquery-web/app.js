
$('img').on('mouseenter', function () {
    $(this).css('border', '10px solid green');
});
$('img').on('mouseleave', function () {
    $(this).css('border', '1px solid green');
});
$('img').on('click', function () {
    $(this).fadeOut(3000, function () {
        //alert('Complete');
    });
});
// $('img').on('click', function () {
//     $(this).animate({
//         opacity: 0,
//         width: '10px'
//     }, 3000, function () {
//         $(this).remove();
//     });
// });
