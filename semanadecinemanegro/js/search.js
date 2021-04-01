var container = document.querySelector('.container');
var searchBar = document.querySelector('#searchBar');

var resultTotal = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

render();

async function render() {
  var data = await fetchJson(
    'http://localhost/cinemanegrobh/semanadecinemanegro/js/data.json'
  );
  resultTotal = [
    ...data.donaZeze,
    ...data.fespaco,
    ...data.surreal16,
    ...data.sarahMaldoror,
    ...data.sessaoEspecial,
    ...data.sessaoVivencias,
    ...data.sessaoAfetos,
    ...data.sessaoGritos,
    ...data.debates,
    ...data.oficinas,
  ];
  displayResults(resultTotal);
  console.log(resultTotal);

  searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toUpperCase();
    const filteredResult = resultTotal.filter((result) => {
      return result.tituloPt.includes(searchString);
    });
    console.log(filteredResult);
  });
}

const displayResults = (results) => {
  const htmlString = results
    .map((result) => {
      return `
      <div class="postBox"><li>
        <h2>${result.tituloPt}</h2>
        <p>${result.sinopsePt ? result.sinopsePt : result.descricaoPt}</p>
      </li>
      </div>`;
    })
    .join('');
  container.innerHTML = htmlString;
};
