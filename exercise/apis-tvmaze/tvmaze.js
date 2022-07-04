async function searchShows(query) {
  const result = [];
  try {
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
    res.data.forEach(target => {
      result.push({
        id: target.show.id,
        name: target.show.name,
        summary: target.show.summary,
        image: target.show.image
      });
    });
    return result;
  } catch (error) {
    alert('Something When Wrong Ups!!!');
  }
}

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();
  for (let show of shows) {
    let img = (show.image) ? show.image.original : 'https://tinyurl.com/tv-missing';
    let $item = $(
      `<div id="id-cast" class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
          <div class="card" data-show-id="${show.id}">
              <div class="card-body">
                  <h5 class="card-title">${show.name}</h5>
                  <p class="card-text">${show.summary}</p>
                  <img class="card-img-top" src="${img}">
                  <button id="btn-epi" STYLE="margin-top: 10px" data-bs-toggle="modal" data-bs-target="#myModal"  class="btn btn-episode btn-primary" type="submit">Episodes</button>                  
                  <button id="btn-cast" STYLE="margin-top: 10px" data-bs-toggle="modal" data-bs-target="#myModal"  class="btn btn-cast btn-primary" type="submit">Cast</button>                  
                </div>
             </div>
        </div>
      `);
    $showsList.append($item);
  }
}

// Populate Show Modal with the Episode List
function populateEpisodes(episode) {
  $('#member-cast').empty();
  const $episodeList = $('#episodes-list');  
  $episodeList.empty();

  for (const epi of episode) {
    let $item = $(`
      <li>
        ${epi.name} : S${epi.season}E${epi.number}                
      </li>
    `);
    $episodeList.append($item);
  }

  $('#modal-h5').text('Episode');
}

// Populate Cast of the Show
function populateCast(cast) {
  $('#episodes-list').empty();
  $('#member-cast').empty();
  const $showsCast = $("#member-cast");  
  for (const actor of cast) {
    let img = (actor.img) ? actor.img.medium : 'toppng.com-person-icons-android-username-icon-ios-1287x1365.png';
    let $item2 = $(`
    <div cast-holder>    
      <div> <img id="cast" class="card-img-top" src="${img}"> </div>
      <p class="card-text">${actor.name}</p>
    </div>
    `)
    $showsCast.append($item2);
  }
  if (cast.length === 0) {
    let $item2 = $(`
    <div cast-holder>
     <h2>Cast Not In File</h2>
    </div>
    `)
    $showsCast.append($item2);
  }
  $('#modal-h5').text('Cast');
}

// Get the show cast by Show ID
async function getCast(id) {
  const result = [];
  try {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`);
    for (const cast of res.data) {
      result.push({
        id: cast.person.id,
        name: cast.person.name,
        img: cast.person.image
      }
      );
    }
    return result;
  } catch (error) {
    alert('Something When Wrong Ups!!!');
  }
}

// Get the show episodes by Show ID
async function getEpisodes(id) {
  const result = [];
  try {
    const res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

    for (const episode of res.data) {
      result.push({
        id: episode.id,
        name: episode.name,
        season: episode.season,
        number: episode.number
      }
      );
    }
    return result;
  } catch (error) {
    alert('Something When Wrong Ups!!!');
  }
}

//Event for click of the button EPISODES
$(() => {
  $('#shows-list').on('click', '#btn-epi', async function (e) {
    let id = $(e.target).parent().parent().data('show-id');
    const episodes = await getEpisodes(id);
    populateEpisodes(episodes);
  });
})

//Event for click of the button CAST
$(() => {
  $('#shows-list').on('click', '#btn-cast', async function (e) {
    let id = $(e.target).parent().parent().data('show-id');
    const cast = await getCast(id);
    populateCast(cast);
  });
})

$("#search-form").on("submit", async function handleSearch(evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});