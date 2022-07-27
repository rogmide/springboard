store_story = {
    'epic': 'Pellentesque elit -place- dignissim -noun- tincidunt lobortis feugiat -adjective- at. Massa -verb- duis lacus. Et netus et -plural_noun- .',
    'romantic': 'Lorem -adjective-  dolor sit -noun- consectetur adipiscing elit, sed do eiusmod -verb- -plural_noun- ut -place- magna.',
    'sad': 'Lorem -place- dolor -plural_noun- amet, -noun- adipiscing elit, -verb- do eiusmod -adjective-',
    'customer': 'Add Story'
}
const show_story = $('.this_story')

$('.the_story').on('change', function (e) {
    e.preventDefault();

    console.log($(e.target).val())
    if ($(e.target).val() === 'epic') {
        show_story.text(store_story['epic'])
    }
    if ($(e.target).val() === 'romantic') {
        show_story.text(store_story['romantic'])
    }
    if ($(e.target).val() === 'sad') {
        show_story.text(store_story['sad'])
    }
    if ($(e.target).val() === 'customer') {
        store_story['customer'] = send_story
        show_story.text(store_story['customer'])
    }
});