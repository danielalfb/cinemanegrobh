var container = document.querySelector('.container');
var src = './img/filmes/';
var boxContent = [
  {
    tituloPt: 'BROOD',
    tituloEng: '',
    localDuracao: 'NIGÉRIA, 2017, 4’',
    fichaTecnica:
      '<li>direção director Michael Omonua</li><li>roteiro script Michael Omonua</li><li>fotografia cinematography Baba Agba</li><li>arte e figurino art and costume design Lyaobo Solanke</li><li>som sound Adesoji Tolulope Emmanuel</li><li>elenco principal main cast Valerie Dish, Eric Nwanso</li><li>contato contact omstarmedia@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt: 'Um homem repassa uma conversa que teve com uma garota.',
    sinopseEng: 'A man replays a conversation he had with a girl.',
    img: 'MN_BROOD.jpeg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'DIGITAL LOVE ',
    tituloEng: 'AMOR DIGITAL',
    localDuracao: 'NIGERIA, 2018, 5’',
    fichaTecnica:
      '<li>direção diretor Michael Omonua</li><li>roteiro script Michael Omonua</li><li>fotografia cinematography Michael Omonua</li><li>arte e figurino art and costume design Ganiyu Halimat</li><li>som sound Tolulope Adesoji Emmanuel</li><li>elenco principal main cast Amanda Iriekpen, Raymonda Aluede, Favour Onwka, Julie Ako, Rilwan Adebule</li><li>contato contact s16collective@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Uma jovem vislumbra uma vida transumana controlada digitalmente.',
    sinopseEng:
      'A young lady envisions a transhuman, digitally controlled life.',
    img: 'MN_DIGITALLOVE.jpeg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'HELLO, RAIN',
    tituloEng: 'OLÁ, RAIN',
    localDuracao: 'NIGERIA, 2018, 30’',
    fichaTecnica:
      '<li>direção diretor C.J. “Fiery” Obassi</li><li>roteiro script C.J. “Fiery” Obassi</li><li>fotografia cinematography Kagho Crowther Idhebor</li><li>arte e figurino art and costume design The Fiery One, Tunji Afolayan, Obijie “Byge” Oru</li> \r\n<li>som sound Sunday Adesugba, Michael “Truth” Ogunlade</li><li>elenco principal main cast Keira Hewatch, Tunde Aladese, Ogee Nelson</li><li>empresa produtora production company Fiery Film, Igodo Films, Matanya Films</li><li>contato contact www.afieryfilm.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Uma bruxa cientista, por meio de uma combinação alquímica de juju – um poder sobrenatural atribuído a um objeto – e tecnologia, cria perucas que concedem a ela e a seus amigos poderes sobrenaturais. Mas quando esses poderes se tornam incontroláveis, ela deve detê-los custe o que custar. O curta foi baseado no conto “Hello, Moto”, de Nnedi Okorafor, vencedora dos prêmios World Fantasy, Hugo e Nebula pela mesma obra.',
    sinopseEng:
      'A Scientist-Witch through an alchemical combination of juju and technology creates wigs which grants her and her friends supernatural powers. But when their powers grow uncontrollable, she must stop them by any means. Based on “Hello, Moto” by World Fantasy, Hugo and Nebula award winning author Nnedi Okorafor.',
    img: 'MN_HELLORAIN.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'REHEARSAL',
    tituloEng: 'ENSAIOS',
    localDuracao: 'NIGERIA, 2021, 14’',
    fichaTecnica:
      '<li>direção diretor Michael Omonua</li><li>roteiro script Michael Omonua</li><li>fotografia cinematography Kc Obiajulu, Emmanuel Izuoba</li><li>arte e figurino art and costume design Ogbeyemi Sunday</li><li>som sound Tolulope Emmanuel Adesoji, Lyabo Solanke</li><li>elenco principal main cast Ruby Akubueze, Brutus Richard, Amanda Oruh, Chimezie Imo</li><li>empresa produtora production company CINE9JA ENT LTD</li><li>contato contact cine9ja@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Uma peça está sendo ensaiada no Teatro Nacional Iganmu Lagos, na Nigéria. Os atores assumem o papel de um grupo religioso que está ensaiando para uma apresentação. Um ensaio para uma peça sobre um ensaio para o culto de domingo, entre outras coisas. No decorrer do ensaio, fica claro que a igreja não é bem o que parece ser.',
    sinopseEng:
      "A play is being rehearsed in Nigeria’s National Theatre. The actors take on the roles of a church group rehearsing a performative piece. A rehearsal for a play about a rehearsal for Sunday Service amongst other things. In the course of their Rehearsal it becomes clear that the church isn't quite what it seems.",
    img: 'MN_REHEARSAL.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'VISIONS',
    tituloEng: 'VISÕES',
    localDuracao: 'NIGÉRIA, 2017, 19’',
    fichaTecnica:
      '<li>direção director Abba Makama & C.J. Obasi & Michael Omonua (Surreal16)</li><li>roteiro script Abba Makama & C.J. Obasi & Michael Omonua</li><li>fotografia cinematography Baba Agba, Michael Omonua</li><li>montagem editing  Abba Makama & C.J. Obasi & Michael Omonua</li><li>arte e figurino art and costume design Obijie Oru</li><li>som sound Ava Momoh, Valentino Igwe</li><li>elenco principal main cast Sunara Begum, Valerie Dish, Bolaji Eleyele, Yvonne Enakhena, Ebele Enebeli, Phoenix Ifeoma, Sandra Mohammed, Eric Nwanso, Goodness Usman, Paul Utomi</li><li>empresa produtora production company Surreal16 Collective</li><li>contato contacts s16collective@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Este filme antológico, composto por três curtas-metragens inspirados por sonhos e visões, explora a identidade, o relacionamento e a espiritualidade de uma jovem. Cada curta foi dirigido por um membro do coletivo Surreal16: “Shaitan”, por Abba Makama; “Brood”, por Michael Omonua; e “Bruja”, por CJ “Fiery” Obasi.',
    sinopseEng:
      'This anthology film, made up of three shorts inspired by dreams and visions, explores a young woman’s identity, relationship, and spirituality. Each short is directed by a member of the collective, Surreal 16: Shaitan by Abba Makama, Brood by Michael Omonua, and Bruja by CJ “Fiery” Obasi.',
    img: 'MN_VISIONS.png',
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
