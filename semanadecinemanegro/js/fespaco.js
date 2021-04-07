var container = document.querySelector('.container');
var src = './img/filmes/';
var boxContent = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

async function loadData() {
  var data = await fetchJson(
    'http://localhost/cinemanegrobh/semanadecinemanegro/js/data.json'
  );
  boxContent = data.fespaco;

  function createData() {
    for (i = 0; i < boxContent.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox';
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
      <div class="postInfo">
        <h1 id="pt">${boxContent[i].tituloPt}</h1>
        <h1 id="en">${boxContent[i].tituloEng}</h1>
        <h3 id="pt">${boxContent[i].localDuracao}</h3>
        <h3 id="en">${boxContent[i].localDuracaoEng}</h3>
        <strong><p id="pt">Disponível: ${boxContent[i].dataPt}</p>
        <p id="en">Available: ${boxContent[i].dataEng}</p></strong>
        <p id="en"><i>* Please note that the timezone considered is GMT-3 Brazilian Time.</i></p>
        <p id="pt">${boxContent[i].sinopsePt}</p>
        <p id="en">${boxContent[i].sinopseEng}</p>
        <div id="pt" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${boxContent[i].fichaTecnica}</ul></div>
          </div>
          <a href="${boxContent[i].link}" class="btn pt" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a>
        </div>
        <div id="en" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${boxContent[i].fichaTecnica}</ul></div>
          </div>
          <a href="${boxContent[i].link}" class="btn en" target="_blank">Watch <i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>`;
      container.appendChild(postBox);
    }
  }
  createData();
  collapsible();
  translate();
}
loadData();

{
  /* <p><strong>Disponível: ${boxContent[i].data}</strong></p>
<p class="english-info">* Please note that the timezone considered is GMT-3 Brazilian Time.</p> */
}
