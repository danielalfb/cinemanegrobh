var container = document.querySelector('.container');
var src = './img/filmes/';
var boxContent = [
  {
    tituloPt: 'ATÉ O FIM',
    tituloEng: ' ',
    localDuracao: 'BAHIA, 2020, 93’',
    fichaTecnica:
      '<li>direção director Ary Rosa, Glenda Nicácio</li><li>roteiro script Ary Rosa</li> <li>fotografia cinematography Augusto Bortolini, Poliana Costa, Thacle de Souza</li><li>arte e figurino art and costume design Glenda Nicácio</li><li>som sound Napoleão Cunha</li><li>elenco principal main cast Maíra Azevedo, Arlete Dias, Wal Diaz, Jenny Muler</li><li>empresa produtora production company Rosza Filmes Produções</li><li>contato contact roszafilmesproducoes@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt:
      'Geralda está trabalhando em seu quiosque à beira de uma praia no Recôncavo da  Bahia, ela recebe um telefonema do hospital dizendo que seu pai pode morrer a qualquer momento.  Ela avisa suas irmãs Rose, Bel e Vilmar. O encontro promovido pela espera da morte se torna um  momento de desabafo e reconhecimentos das quatro irmãs que não se reúnem desde a morte da  mãe, há 15 anos.',
    sinopseEng:
      'Geralda is working at her stand by the beach in Reconcavo da Bahia; she receives a call from the hospital saying that her father might die at any moment. She gives the news to her sisters: Rose, Bel, and Vilmar. The reunion caused by the wait for death becomes a moment for getting things off their chests and acknowledgements for the four sisters who are meeting for the first time since the death of their mother, 15 years ago. ',
    img: 'CEP_ATEOFIM.png',
    imgDir: 'maybe',
    link: '/',
  },
];

function createData() {
  for (i = 0; i < boxContent.length; i++) {
    var postBox = document.createElement('div');
    var sesTitle = document.createElement('h1');
    sesTitle.className = 'sessionTitle';
    sesTitle.innerHTML = 'SESSÃO ESPECIAL';
    postBox.className = 'postBox';
    postBox.innerHTML =
      '<div class="postImg filmeImg" style="background-image: url(&#39;' +
      src +
      boxContent[i].img +
      '&#39;)"> </div>' +
      '<div class="postInfo"><h1>' +
      boxContent[i].tituloPt +
      '</h1><h2>' +
      boxContent[i].tituloEng +
      '</h2><h3>' +
      boxContent[i].localDuracao +
      '</h3><p>' +
      boxContent[i].sinopsePt +
      '</p><p>' +
      boxContent[i].sinopseEng +
      '</p><div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button><div class="content"> <ul>' +
      boxContent[i].fichaTecnica +
      '</ul></div></div><a href="' +
      boxContent[i].link +
      '" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>';
    container.appendChild(sesTitle);
    container.appendChild(postBox);
  }
}
createData();
