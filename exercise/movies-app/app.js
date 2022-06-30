const movie = $('.form-control');
const rate = $('.rate');
const btnAdd = $('.btn-secondary');
const tableList = $('.my-list')

listMovie = [];

btnAdd.on('click', function (e) {
    if (movie.val() !== '' && rate.val() !== null) {
        e.preventDefault();

        listMovie.push({ movie: movie.val(), rate: rate.val() });

        listMovie.sort((a, b) => {
            return (parseInt(a.rate) < parseInt(b.rate)) ? 1 : -1;
        });

        tableList.empty();
        movie.val('');
        rate.val('');

        organizeList();
    }
});

function organizeList() {
    tableList.empty();
    listMovie.forEach(film => {
        tableList.append(
            `<tr id="movie-${listMovie.indexOf(film) + 1}"><td scope="row"> ${listMovie.indexOf(film) + 1}  </td><td> ${film.movie} </td><td> ${film.rate}</td><td class="td-btn-delete"> <button type="submit" class="btn-delete">Delete</button> </td></tr>`
        );
    });
}

$(function () {
    $('.table').on('click', '.btn-delete', function (e) {
        listMovie.splice(($(e.target.parentElement.parentElement).text()[1] - 1), 1);
        organizeList();
    })
});