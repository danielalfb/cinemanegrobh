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
  boxContent = data.donaZeze;

  function createData() {
    for (i = 0; i < boxContent.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox';
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
      <div class="postInfo"><h1>${boxContent[i].tituloPt}</h1><h2>${boxContent[i].tituloEng}</h2><h3>${boxContent[i].localDuracao}</h3>
      <p>${boxContent[i].sinopsePt}</p><p class="english">${boxContent[i].sinopseEng}</p>
      <div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${boxContent[i].fichaTecnica}</ul></div></div>
      <a href="${boxContent[i].link}" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  createData();
  collapsible();
}
loadData();
