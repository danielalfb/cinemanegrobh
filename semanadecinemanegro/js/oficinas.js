var container = document.querySelector('.container');
var src = './img/oficinas/';
var boxContent = [
  {
    titulo:
      'Programar filmes e construir imaginários: a potência do ofício da curadoria no cinema',
    data: '12, 13, 14 e 15 de abril de 2021',
    horario: 'a definir',
    descricaoPt:
      'A curadoria é um espaço de disputa do olhar, de reconstrução do imaginário, de cura e também de construção de futuros. A oficina "Programar filmes e construir imaginários: A potência do ofício da curadoria no cinema", a ser ministrada pelo curador, crítico e pesquisador Heitor Augusto*, convida os participantes a entrar em contato com algumas discussões que circundam o trabalho da curadoria e programação com ênfase nas perspectivas dos subalternizados.\r\n \r\nSe os corpos negros são, segundo a pesquisadora Grada Kilomba, tidos como “deslocados” e inadequados, então o que podem almejar programadores negros? O embate entre estar à margem e re-centralizar aqueles antes  expulsos é suficiente para orientar uma prática curatorial? Como atravessar as expectativas depositadas sobre um curador negro ou negra? Qual o tamanho do indivíduo quando a coletividade o antecede?\r\n \r\nAo longo de quatro encontros online  faremos um movimento contínuo de aproximação de questões filosóficas e sensíveis, mas também estaremos atentos às minúcias práticas do ofício, além de discutirmos táticas de sobrevivência. Além da leitura de textos e debates nos encontros, a oficina prevê um exercício prático como forma de traduzir questões teóricas para o campo da execução de uma proposta de curadoria.\r\n\r\n',
    descricaoEng:
      'Film programming is an arena where we can dispute the gaze, reshape the collective imaginary, heal the shattered subjectivities, as well as forge futures. “The Power in Film Programing and Reshaping the Collective Imaginary” is a short-term class taught by curator, film critic and researcher Heitor Augusto. In this workshop we invite the participants to engage in conversations around the work of curatorship from the perspectives of the subaltern subjects.\r\n \r\nReflecting on what scholar Grada Kilomba refers to as the dynamics in which “Blackness signifies not only ‘inferiority’ but also ‘being out of place’”, we ask: what can Black programmers aspire to? Is it enough to guide one’s curatorial practice by the struggle between staying the margins versus re-centering the marginalized? How can we navigate the unspoken expectations placed on a Black person working within the realm of curatorship? What space can be allowed to an individual when he or she is preceded by a collectivity?\r\n \r\nEmbarking on an online journey of four meetings, the participants will both discuss philosophical and sensitive matters, as well as become familiar with behind-the-scenes aspects that come with the work and share survival strategies. Stimulated by texts and in-class conversations, this workshop also includes an exercise where theoretical topics can be translated into curatorial practices.\r\n\r\n',
    curriculoPt:
      'Heitor Augusto atua como curador, crítico de cinema, pesquisador e tradutor. Programou filmes para museus, festivais, centros culturais e cineclubes. Integrante do Programmers of Colour Collective, rede internacional de curadores não-brancos. Cofundador e programador-chefe do NICHO 54, instituto que atua na formação e estruturação das carreiras de pessoas negras no cinema. Em contínuo diálogo com a diáspora, suas pesquisas recentes têm priorizado as expressões queer e negras brasileiras, além de uma permanente escavação das imagens pretas contraditórias.\r\n\r\n',
    curriculoEng:
      'Based in São Paulo, Brazil, Heitor Augusto works as a film programmer, critic, researcher, and translator. A member of the Programmers of Colour Collective, he has programmed films for museums, festivals, community centers and film clubs. Augusto is a co-founder and the Head Programmer for NICHO 54, an institute working for the promotion and enhancement of Afro-Brazilians in the film industry. As part of the African Diaspora, with which he’s constantly engaged, Augusto’s most recent curatorial investigations have been around queer and Black Brazilian artistic expressions. He’s also invested in excavating contradictory renderings of Black lives by filmmakers from the community.\r\n',
    img: 'OF_HeitorAugusto.jpg',
  },
];

function createData() {
  for (i = 0; i < boxContent.length; i++) {
    var postBox = document.createElement('div');
    postBox.className = 'postBox';
    postBox.innerHTML = `
    <div class="postInfo"><h1>${boxContent[i].titulo}</h1>
    <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2>
    <p>${boxContent[i].descricaoPt}</p>
    <p>${boxContent[i].descricaoEng}</p></div>
    <div class="minInfo">
    <div class="postImg minInfoImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
    <div class="minCurr">
    <p>${boxContent[i].curriculoPt}</p>
    <p>${boxContent[i].curriculoEng}</p>
    </div></div></div>`;
    container.appendChild(postBox);
  }
}
createData();
