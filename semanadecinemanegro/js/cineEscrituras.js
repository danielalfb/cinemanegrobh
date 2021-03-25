var container = document.querySelector('.container');
var src = './img/filmes/';
var boxContent = [
  {
    tituloPt: 'A MORTE BRANCA DO FEITICEIRO NEGRO',
    tituloEng: 'THE EHITE DEATH OF THE BLACK WIZARD',
    localDuracao: 'SANTA CATARINA, 2020, 10"',
    fichaTecnica:
      '<li>direção director Rodrigo Ribeiro</li> <li>roteiro script Rodrigo Ribeiro / Timóteo</li><li>produção production  Julia Faraco / Rodrigo Ribeiro / Luiz Gustavo Laurindo</li><li>fotografia cinematography Carlos Adelino / Rodrigo Ribeiro</li><li>montagem editing Rodrigo Ribeiro / Carlos Eduardo Ceccon / Julia Faraco</li><li>som sound Juçara Marçal / Cadu Tenório</li><li>edição de som sound edition Rodrigo Ribeiro / Leandro Cordeiro</li><li>empresa produtora production company Gata Maior Filmes</li><li>contato contact (e-mail) contato@gatamaior.com.br</li><li>Classificação Indicativa 16 anos</li>',
    sinopsePt:
      'Mem�rias do passado escravista brasileiro transbordam em paisagens et�reas e ru�dos angustiantes. Atrav�s de um po�tico ensaio visual, uma reflex�o sobre silenciamento e invisibiliza��o do povo preto em di�spora, numa jornada �ntima e sensorial.Mem�rias do passado escravista brasileiro transbordam em paisagens et�reas e ru�dos angustiantes. Atrav�s de um po�tico ensaio visual, uma reflex�o sobre silenciamento e invisibiliza��o do povo preto em di�spora, numa jornada �ntima e sensorial.',
    sinopseEng:
      'Memories of the Brazilian slavery past overflow into ethereal landscapes and harrowing noises. Through a visual poetic essay, an intimate and sensory journey reflects on the silencing and invisibility of black people in diaspora.',
    img: 'MB_01',
    link: 'https://www.youtube.com/watch?v=lyrEsJLQa-c',
  },
  {
    tituloPt: 'A MORTE BRANCA DO FEITICEIRO NEGRO',
    tituloEng: 'THE EHITE DEATH OF THE BLACK WIZARD',
    localDuracao: 'SANTA CATARINA, 2020, 10"',
    fichaTecnica:
      '<li>direção director Rodrigo Ribeiro</li> <li>roteiro script Rodrigo Ribeiro / Timóteo</li><li>produção production  Julia Faraco / Rodrigo Ribeiro / Luiz Gustavo Laurindo</li><li>fotografia cinematography Carlos Adelino / Rodrigo Ribeiro</li><li>montagem editing Rodrigo Ribeiro / Carlos Eduardo Ceccon / Julia Faraco</li><li>som sound Juçara Marçal / Cadu Tenório</li><li>edição de som sound edition Rodrigo Ribeiro / Leandro Cordeiro</li><li>empresa produtora production company Gata Maior Filmes</li><li>contato contact (e-mail) contato@gatamaior.com.br</li><li>Classificação Indicativa 16 anos</li>',
    sinopsePt:
      'Mem�rias do passado escravista brasileiro transbordam em paisagens et�reas e ru�dos angustiantes. Atrav�s de um po�tico ensaio visual, uma reflex�o sobre silenciamento e invisibiliza��o do povo preto em di�spora, numa jornada �ntima e sensorial.',
    sinopseEng:
      'Memories of the Brazilian slavery past overflow into ethereal landscapes and harrowing noises. Through a visual poetic essay, an intimate and sensory journey reflects on the silencing and invisibility of black people in diaspora.',
    img: 'MB_01',
    link: 'https://www.youtube.com/watch?v=lyrEsJLQa-c',
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
      '.jpg' +
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
      '</p><div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-chevron-down"></i></button><div class="content"> <ul>' +
      boxContent[i].fichaTecnica +
      '</ul></div></div><a href="' +
      boxContent[i].link +
      '" class="btn" target="_blank">Assista o filme </a></div></div></div></div>';
    container.appendChild(postBox);
  }
}
createData();
