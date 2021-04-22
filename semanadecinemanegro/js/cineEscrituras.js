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
  var data = await fetchJson('/js/data.json');
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
    sesTitlePT.setAttribute('lang', 'pt');
    sesTitleEN.setAttribute('lang', 'en');
    sesTitlePT.innerHTML =
      'SESSÃO ESPECIAL</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'SPECIAL SESSION</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = 'descriptionSession';
    descriptionEN.className = 'descriptionSession';
    descriptionPT.setAttribute('lang', 'pt');
    descriptionEN.setAttribute('lang', 'en');
    descriptionPT.innerHTML =
      'Dedicada a pensar como as articulações dos elementos estéticos e narrativos no cinema circunscrevem uma forma de cine-escritura preta que, em lugar da mera assimilação de formas dadas, busca ressignificar um repertório de técnicas já consolidadas, muitas destas até mesmo desgastadas. Segundo as curadoras, isso se dá à luz de uma experiência negra, afrodescendente, operando uma resistência que é, sobretudo, cultural e em favor do não-apagamento de maneiras muito particulares de vivenciar e estar no mundo.';
    descriptionEN.innerHTML =
      'Dedicated to pondering how the articulations of aesthetic and narrative elements in film circumscribe a way of black film-writing that, instead of simple assimilation of given forms, attempts to give new meanings to a repertoire of established techniques, many of which are worn out. According to the curators, this articulation generates a black experience, afro-descendant, creating a resistance that is, above all, cultural and against the erasing of the very particular ways of experiencing and being in the world.';
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoEspecial.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox1 hidden';
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoEspecial[i].img}')"></div>
      <div class="postInfo"><h1 lang="pt">${sessaoEspecial[i].tituloPt}</h1>
        <h1 lang="en">${sessaoEspecial[i].tituloEng}</h1><h3>${sessaoEspecial[i].localDuracao}</h3>
        <p lang="pt">${sessaoEspecial[i].sinopsePt}</p>
        <p lang="en">${sessaoEspecial[i].sinopseEng}</p>
        <div lang="pt" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${sessaoEspecial[i].fichaTecnica}</ul></div>
          </div>
          <a href="${sessaoEspecial[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a>
        </div>
        <div lang="en" class="btn-filmes">
          <div class="info">
            <button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
            <div class="content"><ul>${sessaoEspecial[i].fichaTecnica}</ul></div>
          </div>
          <a href="${sessaoEspecial[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession2() {
    var sesTitlePT = document.createElement('a');
    var sesTitleEN = document.createElement('a');
    var descriptionPT = document.createElement('p');
    var descriptionEN = document.createElement('p');
    sesTitlePT.className = 'sessionTitle';
    sesTitleEN.className = 'sessionTitle';
    sesTitlePT.setAttribute('lang', 'pt');
    sesTitleEN.setAttribute('lang', 'en');
    sesTitlePT.innerHTML =
      'Vivências afro-diaspóricas</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'Afro-Diasporic Life Experiences</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = 'descriptionSession';
    descriptionEN.className = 'descriptionSession';
    descriptionPT.setAttribute('lang', 'pt');
    descriptionEN.setAttribute('lang', 'en');
    descriptionPT.innerHTML =
      'Cinema como foco na história e na cultura negra, que revive e coloca na tela experiências negras brasileira e corpos negros de várias matizes e expressões de gênero, todos encarnados em uma marca comum, a da ancestralidade. As obras deste conjunto nos ajudam a entender a ancestralidade como base fundamental das existências destes sujeitos diaspóricos, possibilitando o encontro e a re-inscrição do passado no presente e a imaginação de outros futuros que se fazem no agora.';
    descriptionEN.innerHTML =
      'Cinema with focus on black history and culture, that revives and puts on the screen the black Brazilian experiences and black bodies of various hues and gender expressions, all of which is embodied in a common factor, that of ancestry. The films in this program help us understand ancestry as a fundamental base of these diasporic subjects’ existences, allowing the encounter and the re-inscription of the past into the present and the imagination of other futures built in the present.';
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoVivencias.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox hidden';
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoVivencias[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoVivencias[i].tituloPt}</h1>
      <h1 lang="en">${sessaoVivencias[i].tituloEng}</h1><h3>${sessaoVivencias[i].localDuracao}</h3><p lang="pt">${sessaoVivencias[i].sinopsePt}</p><p lang="en">${sessaoVivencias[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoVivencias[i].fichaTecnica}</ul></div> </div><a href="${sessaoVivencias[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoVivencias[i].fichaTecnica}</ul></div></div><a href="${sessaoVivencias[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession3() {
    var sesTitlePT = document.createElement('a');
    var sesTitleEN = document.createElement('a');
    var descriptionPT = document.createElement('p');
    var descriptionEN = document.createElement('p');
    sesTitlePT.className = 'sessionTitleAfetos';
    sesTitleEN.className = 'sessionTitleAfetos';
    sesTitlePT.setAttribute('lang', 'pt');
    sesTitleEN.setAttribute('lang', 'en');
    sesTitlePT.innerHTML =
      'Afetos e partilhas</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'Affections and Sharing</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = 'descriptionSession';
    descriptionEN.className = 'descriptionSession';
    descriptionPT.setAttribute('lang', 'pt');
    descriptionEN.setAttribute('lang', 'en');
    descriptionPT.innerHTML =
      'Cinema que elabora a construção de espaços de resistência que não são necessariamente físicos, mas emocionais e afetivos, calcados em laços de partilha e pertença. Um quilombismo, como sinalizado por Abdias do Nascimento, pautado na construção de espaços coletivos e compartilhados, nos quais o convívio em comunidade com pessoas de mesma raça tece utopias de acolhimento e de luta por direitos, frutos de um desejo e um impulso de se irmanar, de se cercar de seus semelhantes.';
    descriptionEN.innerHTML =
      'A type of cinema that produces the creation of spaces and resistance that are not necessarily physical spaces, instead they are emotional and affective, based on bonds of sharing and belonging. A quilombismo, as pointed out by Abdias Nascimento, based on the construction of collective and shared spaces in which the community living with people of the same race weaves utopias of welcoming and struggle for rights, resulting from a desire and an impulse to join together, of being surrounded by those similar to you.';
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoAfetos.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBoxAfetos hidden';
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoAfetos[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoAfetos[i].tituloPt}</h1>
      <h1 lang="en">${sessaoAfetos[i].tituloEng}</h1><h3>${sessaoAfetos[i].localDuracao}</h3><p lang="pt">${sessaoAfetos[i].sinopsePt}</p><p lang="en">${sessaoAfetos[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoAfetos[i].fichaTecnica}</ul></div> </div><a href="${sessaoAfetos[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoAfetos[i].fichaTecnica}</ul></div></div><a href="${sessaoAfetos[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
      container.appendChild(postBox);
    }
  }
  function createDataSession4() {
    var sesTitlePT = document.createElement('a');
    var sesTitleEN = document.createElement('a');
    var descriptionPT = document.createElement('p');
    var descriptionEN = document.createElement('p');
    sesTitlePT.className = 'sessionTitle';
    sesTitleEN.className = 'sessionTitle';
    sesTitlePT.setAttribute('lang', 'pt');
    sesTitleEN.setAttribute('lang', 'en');
    sesTitlePT.innerHTML =
      'Gritos e fabulações de cura</a> <em class="fas fa-chevron-down"></em>';
    sesTitleEN.innerHTML =
      'Screams and Healing Fabulations</a> <em class="fas fa-chevron-down"></em>';
    descriptionPT.className = 'descriptionSession';
    descriptionEN.className = 'descriptionSession';
    descriptionPT.setAttribute('lang', 'pt');
    descriptionEN.setAttribute('lang', 'en');
    descriptionPT.innerHTML =
      'Conjunto de filmes que explicita elaborações de traumas e fabulações de uma existência e de futuros possíveis, sonhos que foram e são sonhados sem necessariamente terem a oportunidade de serem realizados. Que olham para as possibilidades de cura em lugar de reafirmar uma violência diária e histórica mediada e explicitada, escancarada e naturalizada de maneira espetacular por um mecanismo maniqueísta adotado por narrativas midiáticas dominantes.';
    descriptionEN.innerHTML =
      'A set of films that show the construction of traumas and fabulations of an existence and possible futures, dreams that were and are dreamed without necessarily having the opportunity of becoming reality. They look at the possibilities of healing instead of reaffirming daily and historical violence mediated, highlighted, overt, and naturalized in a spectacular way by a Manichaean mechanism adopted by dominant media narratives.';
    container.appendChild(sesTitlePT);
    container.appendChild(sesTitleEN);
    container.appendChild(descriptionPT);
    container.appendChild(descriptionEN);
    for (let i = 0; i < sessaoGritos.length; i++) {
      var postBox = document.createElement('div');
      postBox.className = 'postBox hidden';
      postBox.innerHTML = `
      <div class="postImg filmeImg" style="background-image: url('${src}${sessaoGritos[i].img}')"></div><div class="postInfo"><h1 lang="pt">${sessaoGritos[i].tituloPt}</h1>
      <h1 lang="en">${sessaoGritos[i].tituloEng}</h1><h3>${sessaoGritos[i].localDuracao}</h3><p lang="pt">${sessaoGritos[i].sinopsePt}</p><p lang="en">${sessaoGritos[i].sinopseEng}</p>
      <div lang="pt" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoGritos[i].fichaTecnica}</ul></div> </div><a href="${sessaoGritos[i].link}" class="btn pt">Assista o filme <i class="fas fa-external-link-alt"></i></a></div>
      <div lang="en" class="btn-filmes"><div class="info"><button type="button" class="collapsible"> ADDITIONAL INFORMATION <i class="fas fa-plus"></i></button>
      <div class="content"><ul>${sessaoGritos[i].fichaTecnica}</ul></div></div><a href="${sessaoGritos[i].link}" class="btn en">Watch <i class="fas fa-external-link-alt"></i></a></div></div>`;
      container.appendChild(postBox);
    }
  }
  createDataSession1();
  createDataSession2();
  createDataSession3();
  createDataSession4();
  sessionCollapsible();
  collapsible();
  translate();
}
loadData();
