var container = document.querySelector('.container');
var src = './img/filmes/';
var boxContent = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

async function loadData() {
  var data = await fetchJson('/js/data.json');
  boxContent = data.surreal16;

  function createData() {
    for (i = 0; i < boxContent.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox';
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
      <div class="postInfo"><h1 lang="pt">${boxContent[i].tituloPt}</h1>
        <h1 lang="en">${boxContent[i].tituloEng}</h1>
        <h3 lang="pt">${boxContent[i].localDuracao}</h3>
        <h3 lang="en">${boxContent[i].localDuracaoEng}</h3>
        <p lang="pt">${boxContent[i].sinopsePt}</p>
        <p lang="en">${boxContent[i].sinopseEng}</p>
        <div lang="pt" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${boxContent[i].fichaTecnica}</ul></div>
          </div>
          <a href="${boxContent[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a>
        </div>
        <div lang="en" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${boxContent[i].fichaTecnica}</ul></div>
          </div>
          <a href="${boxContent[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a>
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
