async function getData(search) {
    try {
        const key = 's0mA9pAKuH8s15Kppn17FZspghvVN7BH';
        const res = await axios.get('https://api.giphy.com/v1/gifs/search', { params: { api_key: key, q: search } });
        console.log(res.data.data.length);
        const url = res.data.data[Math.floor(Math.random() * res.data.data.length)].images.original.mp4;
        const video = $(`<video autoplay loop type="video/mp4" src="${url}" alt="Some Random Img">`);
        $('.imgHolder').append(video);
    } catch (error) {
        alert(`Sorry nothing for ${search}`);
    }
}

$(() => {
    $('#btn-search').on('click', function (e) {
        if ($('.search-item').val() !== '') {
            e.preventDefault();
            getData($('.search-item').val());
            $('.search-item').val('');
        }
    });
})

$(() => {
    $('#btn-remove').on('click', function (e) {
        e.preventDefault();
        $('.imgHolder').empty();
        $('.search-item').val('');
    });
})
