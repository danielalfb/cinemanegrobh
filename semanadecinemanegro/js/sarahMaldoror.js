var container = document.querySelector('.container');
var src = './img/filmes/';
var boxContent = [
  {
    tituloPt:
      "ET LES CHIENS SE TAISAIENT, D'AIMÉ CÉSAIRE\r\n\r\nAND THE DOGS WERE QUIET, BY AIMÉ CÉSAIRE\r\n",
    tituloEng: 'E OS CACHORROS CALAVAM-SE, DE AIMÉ CÉSAIRE',
    localDuracao: 'FRANÇA, 1978, 13’',
    fichaTecnica:
      '<li>direção director Sarah Maldoror</li><li>fotografia cinematography Daniel Cavillon, Maurice Perimont, Vincent Blanchet</li><li>montagem editing Simoen Jousse, Bernard Favre</li><li>som sound Henri Roux</li><li>trilha sonora original original soundtrack</li><li>elenco principal main cast</li><li>contato contact  annouchka.deandrade@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Uma peça teatral sobre a revolta colonial encenada na reserva  do Museu do Homem (Paris), dirigida por Michel Leiris, com atuações de Gabriel Glissant e Sarah Maldoror.',
    sinopseEng:
      'A theater play on the colonial revolt inside the anthropological museum of the Museum of Mankind, directed by Michel Leiris, with performances by Gabriel Glissant and Sarah Maldoror.',
    img: 'SM_ETLESCHIENSSETAISAIENTDAIMECESAIRE.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'AIMÉ CÉSAIRE, LE MASQUE DE MOTS',
    tituloEng: 'AIMÉ CÉSAIRE, MÁSCARA DAS PALAVRAS',
    localDuracao: 'MARTINICA, 1987, 46’',
    fichaTecnica:
      '<li>direção director Sarah Maldoror</li><li>elenco principal main cast Sarah Maldoror, Jean-Pierre Caussidery, Danielle Anezin. Mus Henri Rou, Aimé Cesaire, Leopold Sedar Senghor, Carlos Moore, Alex Halley, Maya Angelou.</li><li>contato contact annouchka.deandrade@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Sarah Maldoror nos convida para um encontro com Aimé Césaire. Este documentário, composto principalmente de entrevistas, evoca a personalidade e as escolhas essenciais de sua vida.',
    sinopseEng:
      'Sarah Maldoror invites us to a meeting with Aimé Césaire. This document, mainly composed of interviews, evokes the personality and essential choices of his life.',
    img: 'SM_AIMECESAIRELEMASQUEDEMOTS.jpeg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'LÉON G. DAMAS',
    tituloEng: ' ',
    localDuracao: 'FRANÇA, 1994, 26’',
    fichaTecnica:
      '<li>direção director Sarah Maldoror</li><li>roteiro script Djamila Olivesi</li><li>fotografia cinematography Pierre Bouchacourt</li><li>montagem editing Catherine Bachollet</li><li>som sound Jean Umansky</li><li>elenco principal main cast Léopold Sédar Senghor, Aimé Césaire, Georges Othily, Idriss Makward, Léon-Gontran Damas, Mariann Mathéus</li><li>contato contact annouchka.deandrade@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Enquanto Aimé Césaire foi o responsável por cunhar o termo négritude, foi o poeta Léon G. Damas que primeiro vivenciou a négritude, segundo Léopold Senghor. Um documentário sobre os poetas, as paisagens e as histórias envolvendo este importante poeta, um dos pilares do movimento cultural da négritude.',
    sinopseEng:
      'While Aimé Césaire was the one who coined the term négritude, it was the poet Léon G. Damas who first experienced négritude, says Leopold Senghor. A documentary about the poets, landscapes and stories surrounding this important poet, one of the pillars in the négritude cultural movement.',
    img: 'SM_LEONGDAMAS.jpg',
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
