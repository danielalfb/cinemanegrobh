var container = document.querySelector('.container');
var src = './img/filmes/';
var boxContent = [
  {
    tituloPt: 'ALZHEIMER',
    tituloEng: '',
    localDuracao: 'CONTAGEM/MINAS GERAIS, 2009, 1’',
    fichaTecnica:
      '<li>direção director André Novais Oliveira, Gabriel Martins, Maurílio Martins</li><li>elenco principal main cast  Maria José de Novais Oliveira</li><li>Classificação Indicativa: Livre</li>\r\n',
    sinopsePt: 'Uma senhora filma o que não quer esquecer.',
    sinopseEng: 'An elderly woman films what she does not want to forget.',
    img: 'DZ_ALZHEIMER.png',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'QUINTAL',
    tituloEng: 'BACKYARD',
    localDuracao: 'CONTAGEM/MINAS GERAIS, 2015, 20’',
    fichaTecnica:
      '<li>direção director André Novais Oliveira</li><li>roteiro script André Novais Oliveira</li><li>produção production Thiago Macedo Correia</li><li>fotografia cinematography Gabriel Martins</li><li>montagem editing Thiago Ricarte</li><li>arte e figurino art and costume design Mariana Souto, Tati Boaventura</li><li>som sound Maurílio Martins</li><li>elenco principal main cast Maria José Novais Oliveira, Norberto Novais Oliveira, Ítalo Laureano, Mirian Franco, Marcos Dumont, Roberta Veiga, Geraldo Veloso, Nísio Teixeira</li><li>empresa produtora production company Filmes de Plástico</li><li>contato contact contato@filmesdeplastico.com.br</li><li>Classificação Indicativa: Livre</li>',
    sinopsePt: 'Mais um dia na vida de um casal de idosos na periferia.',
    sinopseEng:
      'Another day in the life of an elderly couple in the outskirts.',
    img: 'DZ_QUINTAL.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'RUA ATALÉIA',
    tituloEng: 'ATALÉIA STREET',
    localDuracao: 'CONTAGEM/MINAS GERAIS, 2021, 12’',
    fichaTecnica:
      '<li>direção director André Novais Oliveira</li><li>som sound Tiago Bello</li>\r\n<li>elenco principal main cast Maria José de Novais Oliveira, Renato de Novais Oliveira, Norberto de Novais Oliveira</li>\r\n<li>empresa produtora production company Filmes de Plástico</li>\r\n<li>contato contact contato@filmesdeplastico.com.br</li>\r\n<li>Classificação Indicativa: Livre',
    sinopsePt:
      'Em 2011, numa noite sem luz em uma rua de um bairro de periferia, uma família aguarda o retorno da energia elétrica, rodeados por velas que iluminam conversas e pensamentos. Hoje, dez anos depois, a luz tenta impor o seu lugar perante as sombras da memória.',
    sinopseEng:
      'In 2011, during a blackout in an outskirt neighborhood’s street, a family  – surrounded by candles that light conversations and thoughts  –  awaits the return of electricity. Now, ten years later, the light tries to impose its place towards the shadows of memory.',
    img: 'DZ_RUAATALEIA.jpeg',
    imgDir: 'maybe',
    link: '/',
  },
];

function createData() {
  for (i = 0; i < boxContent.length; i++) {
    var postBox = document.createElement('div');
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
    container.appendChild(postBox);
  }
}
createData();
