const imgUrl = ["/img/dog.png", "/img/pork.png", "/img/bee.png", "/img/rex.png", "/img/rat.png"];
//New Game Button to Star The Game
$('.btn-new-game').on('click', function (e) {
    if ($('.input-2').val()) {
        e.preventDefault();
        createTeam();
    }
});

$('.teams').on('click', '.btn-add', function (e) {
    const add = ($(e.target).parent());
    //add.text(`${parseInt(add.text()) += 100}`);
    add.text('100');
    console.log();
});
$('.teams').on('click', '.btn-take', function (e) {
    alert();
});

// Create the team that will participate in the game
function createTeam() {
    const team = $('.input-2').val();
    $('.input-2').val('');
    const $teams = $('.teams');
    $teams.empty();
    for (let i = 0; i < team; i++) {
        let $item = $(`
            <div  class="team">
                <div class="point">
                    <button class="btn btn-add btn-sm" type="submit">✔</button>
                    <h5 id="${i}" class="point"> 100 </h5>
                    <button class="btn btn-take btn-sm" type="submit">✘</button>                
                </div>
                <img src="${imgUrl[i]}">
            </div>
        `);
        $teams.append($item);
    }
}