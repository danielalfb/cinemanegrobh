var container = document.querySelector('.container');
var src = './img/filmes/';
var sessaoEspecial = [];
var sessaoVivencias = [];
var sessaoAfetos = [];
var sessaoGritos = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

async function loadData() {
  var data = await fetchJson(
    'http://localhost/cinemanegrobh/semanadecinemanegro/js/data.json'
  );
  sessaoEspecial = data.sessaoEspecial;
  sessaoVivencias = data.sessaoVivencias;
  sessaoAfetos = data.sessaoAfetos;
  sessaoGritos = data.sessaoGritos;

  function createDataSession1() {
    var sesTitlePT = document.createElement('a');
    var sesTitleEN = document.createElement('a');
    var descriptionPT = document.createElement('p');
    var descriptionEN = document.createElement('p');
    sesTitlePT.className = 'sessionTitle1';
    sesTitleEN.className = 'sessionTitle1';
    sesTitlePT.setAttribute("id", "pt");
    sesTitleEN.setAttribute("id", "en");
    sesTitlePT.innerHTML ='SESSÃO ESPECIAL</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML ='SPECIAL SESSION</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = 'descriptionSession';
    descriptionEN.className = 'descriptionSession';
    descriptionPT.setAttribute("id", "pt")
    descriptionEN.setAttribute("id", "en")
    descriptionPT.innerHTML =
      'Dedicada a pensar como as articulações dos elementos estéticos e narrativos no cinema' +
      'circunscrevem uma forma de cine-escritura preta que, em lugar da mera assimilação de formas dadas,' +
      'busca ressignificar um repertório de técnicas já consolidadas, muitas destas até mesmo desgastadas.' +
      'Segundo as curadoras, isso se dá à luz de uma experiência negra, afrodescendente, operando uma resistência que é,' +
      'sobretudo, cultural e em favor do não-apagamento de maneiras muito particulares de vivenciar e estar no mundo.';
      descriptionEN.innerHTML = 
      'Dedicated to pondering how the articulations of aesthetic and narrative elements in film circumscribe a way' + 
       'of black film-writing that, instead of simple assimilation of given forms, attempts to give new meanings to a repertoire of established techniques,' + 
     'many of which are worn out. According to the curators, this articulation generates a black experience, afro-descendant, creating a resistance that is,' +
      'above all, cultural and against the erasing of the very particular ways of experiencing and being in the world.' 
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoEspecial.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox';
      postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${sessaoEspecial[i].img}')"></div>
    <div class="postInfo"><h1>${sessaoEspecial[i].tituloPt}</h1><h2>${sessaoEspecial[i].tituloEng}</h2><h3>${sessaoEspecial[i].localDuracao}</h3>
    <p id="pt">${sessaoEspecial[i].sinopsePt}</p><p id="en">${sessaoEspecial[i].sinopseEng}</p>
    <div class="btn-filmes"><div class="info"><button type="button" class="collapsible" id="pt"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
    <div class="content"><ul>${sessaoEspecial[i].fichaTecnica}</ul></div></div>
    <a href="${sessaoEspecial[i].link}" class="btn" target="_blank" id="pt">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession2() {
    var sesTitle = document.createElement('a');
    var descriptionPT = document.createElement('p');
    var descriptionEN = document.createElement('p');    
    sesTitle.className = 'sessionTitle';
    sesTitle.innerHTML =
      'VIVÊNCIAS AFRO-DIASPÓRICAS</a><em class="fas fa-chevron-down"></em>';
      descriptionPT.className = 'descriptionSession';
      descriptionEN.className = 'descriptionSession';
      descriptionPT.setAttribute("id", "pt")
      descriptionEN.setAttribute("id", "en")
    descriptionPT.innerHTML =
      'Cinema como foco na história e na cultura negra, que revive e coloca na tela' +
      'experiências negras brasileira e corpos negros de várias matizes e expressões de gênero, todos encarnados em uma marca comum, a da ancestralidade. As' +
      'obras deste conjunto nos ajudam a entender a ancestralidade como base fundamental das existências destes sujeitos diaspóricos, possibilitando o' +
      'encontro e a re-inscrição do passado no presente e a imaginação de outros futuros que se fazem no agora.';
    container.appendChild(sesTitle);
    container.appendChild(descriptionPT);
    for (let i = 0; i < sessaoVivencias.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox hidden';
      postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${sessaoVivencias[i].img}')"></div>
    <div class="postInfo"><h1>${sessaoVivencias[i].tituloPt}</h1><h2>${sessaoVivencias[i].tituloEng}</h2><h3>${sessaoVivencias[i].localDuracao}</h3>
    <p>${sessaoVivencias[i].sinopsePt}</p><p class="english">${sessaoVivencias[i].sinopseEng}</p>
    <div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
    <div class="content"><ul>${sessaoVivencias[i].fichaTecnica}</ul></div></div>
    <a href="${sessaoVivencias[i].link}" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession3() {
    var sesTitle = document.createElement('a');
    var description = document.createElement('p');
    sesTitle.className = 'sessionTitle';
    sesTitle.innerHTML =
      'AFETOS E PARTILHAS</a> <em class="fas fa-chevron-down"></em>';
    description.className = 'descriptionSession';
    description.innerHTML =
      'Cinema que elabora a construção de espaços de resistência que não são necessariamente físicos, mas emocionais e afetivos, calcados em laços de' +
      'partilha e pertença. Um quilombismo, como sinalizado por Abdias do Nascimento, pautado na construção de espaços coletivos e compartilhados,' +
      'nos quais o convívio em comunidade com pessoas de mesma raça tece utopias de acolhimento e de luta por direitos, frutos de um desejo e um ' +
      'impulso de se irmanar, de se cercar de seus semelhantes.';
    container.appendChild(sesTitle);
    container.appendChild(description);
    for (let i = 0; i < sessaoAfetos.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox hidden';
      postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${sessaoAfetos[i].img}')"></div>
    <div class="postInfo"><h1>${sessaoAfetos[i].tituloPt}</h1><h2>${sessaoAfetos[i].tituloEng}</h2><h3>${sessaoAfetos[i].localDuracao}</h3>
    <p>${sessaoAfetos[i].sinopsePt}</p><p class="english">${sessaoAfetos[i].sinopseEng}</p>
    <div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
    <div class="content"><ul>${sessaoAfetos[i].fichaTecnica}</ul></div></div>
    <a href="${sessaoAfetos[i].link}" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession4() {
    var sesTitle = document.createElement('a');
    var description = document.createElement('p');
    sesTitle.className = 'sessionTitle';
    sesTitle.innerHTML =
      'GRITOS E FABULAÇÕES DE CURA</a> <em class="fas fa-chevron-down"></em>';
    description.className = 'descriptionSession';
    description.innerHTML =
      'Conjunto de filmes que explicita elaborações de traumas e fabulações de uma existência e de futuros possíveis, sonhos que foram e são sonhados sem' +
      'necessariamente terem a oportunidade de serem realizados. Que olham para as possibilidades de cura em lugar de reafirmar uma violência diária e' +
      'histórica mediada e explicitada, escancarada e naturalizada de maneira espetacular por um mecanismo maniqueísta adotado por narrativas midiáticas dominantes.';
    container.appendChild(sesTitle);
    container.appendChild(description);
    for (let i = 0; i < sessaoGritos.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox hidden';
      postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${sessaoGritos[i].img}')"></div>
    <div class="postInfo"><h1>${sessaoGritos[i].tituloPt}</h1><h2>${sessaoGritos[i].tituloEng}</h2><h3>${sessaoGritos[i].localDuracao}</h3>
    <p>${sessaoGritos[i].sinopsePt}</p><p class="english">${sessaoGritos[i].sinopseEng}</p>
    <div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
    <div class="content"><ul>${sessaoGritos[i].fichaTecnica}</ul></div></div>
    <a href="${sessaoGritos[i].link}" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
      container.appendChild(postBox);
    }
  }
  createDataSession1();
  createDataSession2();
  createDataSession3();
  createDataSession4();
  collapsible();
  translate();
  sessionCollapsible();
}
loadData();
