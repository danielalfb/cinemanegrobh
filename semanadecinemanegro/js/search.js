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
  // displayResults(resultTotal);
  // console.log(resultTotal);

  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchBar = document.querySelector('.searchBar').value.toUpperCase();
    const searchString = searchBar;
    const filteredResult = resultTotal.filter((result) => {
      return result.tituloPt.toUpperCase().includes(searchString);
    });
    if (filteredResult.length === 0) {
      displayEmpty();
    } else {
      displayResults(filteredResult);
    }
  });
}

const displayResults = (results) => {
  const header = `<section>
  <div class="mainBanner">
    <div class="mainInfo">
      <div class="title creditos">
        <h1>Resultados da busca:</h1>
      </div>
    </div>
  </div>
</section>`;
  const htmlString = results
    .map((result) => {
      return `        
        <li>
        <a href="${result.homepage}"><div class="resultBox">          
          <h2>${result.tituloPt}</h2>
          <p>${result.sinopsePt ? result.sinopsePt : result.descricaoPt}</p>
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
          <h1>Resultados da busca:</h1>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="containerResults">
      <h2>Sem resultados para esta busca.</h2>        
    </div>
  </section>`);
};

/* <section>
        <div class="mainBanner">
          <div class="mainInfo">
            <div class="title creditos">
              <h1>Resultados da busca:</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div class="container containerColumn"></div> 
    
    
    const mainBanner = document.createElement('div').className='mainBanner';
    const mainInfo = document.createElement('div').className='mainBanner';
    const title = document.createElement('div').className='title creditos';
    const container = document.createElement('div').className='container containerColumn';
    const h1 = document.createElement('h1');
    h1.textContent = 'Resultados da busca:'
    title.appendChild(h1);
    mainInfo.appendChild(title);
    mainBanner.appendChild(mainInfo);
    
    page.appendChild(container);*/
