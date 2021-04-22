var container = document.querySelector('.container');
var src = './img/oficinas/';
var boxContent = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

async function loadData() {
  var data = await fetchJson('/js/data.json');
  boxContent = data.oficinas;

  function createData() {
    for (i = 0; i < boxContent.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBoxOficina postBox';
      postBox.innerHTML = `
    <div class="postInfo">
      <h1 lang="pt">${boxContent[i].tituloPt}</h1>
      <h1 lang="en">${boxContent[i].tituloEng}</h>
      <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2>
      <p lang="pt">${boxContent[i].descricaoPt}</p>
      <p lang="en">${boxContent[i].descricaoEng}</p>
    </div>
    <div class="minInfo">
      <div class="postImg minInfoImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
    <div class="minCurr">
      <p lang="pt">${boxContent[i].curriculoPt}</p>
      <p lang="en">${boxContent[i].curriculoEng}</p>
    </div>
    </div></div>`;
      container.appendChild(postBox);
    }
  }
  createData();
  translate();
}
loadData();
