//When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(function () {
    console.log('Let’s get ready to party with jQuery!');
});

//Give all images inside of an article tag the class of image-center
// (this class is defined inside of the style tag in the head).

$('img').addClass('image-center');

//Remove the last paragraph in the article.

$('.col-sm-8').children('p').last().remove();

//Set the font size of the title to be a random pixel size from 0 to 100.

$('h1').css('font-size', Math.floor(Math.random() * 100));

//Add an item to the list; it can say whatever you want.

$('ol li').last().append('<li> Those puppy pic are AMAZING!!! </li>');

//Scratch that; the list is silly. 
//Empty the aside and put a paragraph in it apologizing for the list’s existence.

$('ol li').css('text-decoration', 'line-through');
$('ol li').animate({
    opacity: 0
}, 3000, function () {
    $('ol li').remove();
});

setTimeout(function () {
    $('h4').text('Sorry this list existence, is now Scratch');
}, 3000);

//When you change the numbers in the three inputs on the bottom,
//the background color of the body should change to match whatever the three values in the inputs are.

$('input').on('change', function () {
    const r = $($('input')[0]).val();
    const g = $($('input')[1]).val();
    const b = $($('input')[2]).val();
    $('body').css('background-color', `rgb(${r},${g},${b})`);
});

//Add an event listener so that when you 
//click on the image, it is removed from the DOM.

$('img').on('click', function () {
    $('img').remove();
});