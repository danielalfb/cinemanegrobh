var page = document.querySelector('.page');
var searchButton = document.querySelector('#searchButton');

var resultTotal = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

render();

async function render() {
  var data = await fetchJson('/js/data.json');
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

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchBarPT = document
      .querySelector('.searchBarPT')
      .value.toUpperCase();
    const searchBarEN = document
      .querySelector('.searchBarEN')
      .value.toUpperCase();
    const searchStringPT = searchBarPT;
    const searchStringEN = searchBarEN;
    const lang = localStorage.getItem('lang');
    const filteredResult = resultTotal.filter((result) => {
      if (lang === 'pt') {
        return result.tituloPt.toUpperCase().includes(searchStringPT);
      } else {
        if (!!result.tituloEng) {
          return String(result.tituloEng)
            .toUpperCase()
            .includes(searchStringEN.toUpperCase());
        } else {
          return String(result.tituloPt)
            .toUpperCase()
            .includes(searchStringEN.toUpperCase());
        }
      }
    });
    if (filteredResult.length === 0) {
      displayEmpty();
      translate();
    } else {
      displayResults(filteredResult);
      translate();
    }
    translate();
  });
}

const displayResults = (results) => {
  const header = `<section>
  <div class="mainBanner">
    <div class="mainInfo">
      <div class="title creditos">
        <h1 lang="pt">Resultados da busca:</h1>
        <h1 lang="en">Search results:</h1>
      </div>
    </div>
  </div>
</section>`;
  const htmlString = results
    .map((result) => {
      return `        
        <li>
        <a href="${result.homepage}"><div class="resultBox">          
          <h2 lang="pt">${result.tituloPt}</h2>
          <h2 lang="en">${
            result.tituloEng ? result.tituloEng : result.tituloPt
          }</h2>
          <p lang="pt">${
            result.sinopsePt ? result.sinopsePt : result.descricaoPt
          }</p>
          <p lang="en">${
            result.sinopseEng ? result.sinopseEng : result.descricaoEng
          }</p>
        </div></a>
        </li>`;
    })
    .join('');
  page.innerHTML = `${header} <section>
  <div class="containerResults"><ul>${htmlString}</ul></div></section>`;
};

const displayEmpty = () => {
  return (page.innerHTML = `
  <section>
    <div class="mainBanner">
      <div class="mainInfo">
        <div class="title creditos">
        <h1 lang="pt">Resultados da busca:</h1>
        <h1 lang="en">Search results:</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="containerResults">
      <h2 lang="pt">Sem resultados para esta busca.</h2>
      <h2 lang="en">No results found.</h2>
    </div>
  </section>`);
};
