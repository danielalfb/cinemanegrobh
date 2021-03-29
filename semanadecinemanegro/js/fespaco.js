var container = document.querySelector('.container');
var src = './img/filmes/';
var boxContent = [
  {
    tituloPt: 'CABASCABO',
    tituloEng: '',
    localDuracao: 'NÍGER, 1969, 45´',
    fichaTecnica:
      '<li>direção director Oumarou Ganda</li><li>roteiro script Oumarou Ganda</li><li>fotografia cinematography Gérard de Battista</li><li>montagem editing Danièle Tessier</li><li>som sound Moussa Hamidou</li><li>trilha sonora original original soundtrack Kaka e Dan Baba Ali</li><li>elenco principal main cast Oumarou Ganda, Zalika Souley, Issa Gombokoye</li><li>contato contact  Argos Films - Cécile Meyer-Cases c.meyer@argosfilms.fr</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Um atirador africano da força expedicionária francesa na Indochina retorna ao Níger, desmobilizado e rico. Ele está cercado, comemorado. Generoso, ele desperdiçará seu pecúlio e logo será abandonado por todos os seus amigos. O filme é uma resposta de Oumarou Ganda ao filme Eu, um Negro, de Jean Rouch, em que desempenhou o seu próprio "papel", o de um "atirador senegalês" alistado na guerra da Indochina. \r\n\r\n\r\nRestaurado em 2K em 2019. \r\nParceiros de restauração: Orange Studio, Cinémathèque Afrique, Argos Films.',
    sinopseEng:
      'An African shooter from the French Expeditionary Corps in Indochina returns to Niger, demobilized and wealthy. People surround and celebrate him. For his generosity, he will waste his savings and will soon be abandoned by all his friends. The film is an answer by Oumarou Ganda to the film I, a Negro, by Jean Rouch, in which he played a “Senegalese shooter” enlisted in the Indochina war. \r\n\r\n\r\nRestored in 2K in 2019. \r\nRestoration partners: Orange Studio, Cinémathèque Afrique, Argos Films. \r\n',
    data: '15/04 às 13h até às 13h do dia seguinte.',
    img: 'MF_CABASCABO.png',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'MUNA MOTO',
    tituloEng: '',
    localDuracao: 'Camarões, 1975 , 85’',
    fichaTecnica:
      '<li>direção director JeanPierre Dikongué Pipa</li><li>roteiro script Jean-Pierre Dikongué-Pipa</li><li>fotografia cinematography J-P. Delazay, J-L. Léon, M. Tagny</li><li>montagem editing Andrée Davanture, Dominique Saint, Jules Takam[LB2]</li><li>arte e figurino art and costume design Jean-Pierre Dikongué Pipa, Anne Bebe</li><li>som sound Ambroise Ayongo, Joseph Betare, Henry Humbert</li><li> trilha sonora original original soundtrack</li><li>elenco principal main cast David Endéné, Arlette Din Bell, Jeanne Mvondo, Philippe Abia, Jeacky Kingue, Gisèle Dikongué-Pipa, Esther Mwembe, Catherine Biboum, Justine Sengue, Samuel Baongla</li><li>contato contact carmen.accaputo@cineteca.bologna.it</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Ngando e Ndomé estão apaixonados e querem se casar, mas a família de Ndomé só aceita a união mediante o pagamento de um dote, como manda a tradição. Sem dinheiro, o jovem Ngando recorre ao tio para ajudá-lo, mas é traído pelo mesmo, que está disposto a tomar Ndomé como sua quinta esposa na esperança de ter um filho. \r\n\r\nRestaurado em 2019 pela Cineteca di Bologna/L’Immagine Ritrovata e The Film Foundation’s World Cinema Project. Financiado pela Hobson/Lucas Family Foundation. \r\n\r\n\r\nEssa restauração é parte do African Film Heritage Project, criado pela The Film Foundation, FEPACI e UNESCO – em colaboração com a Cineteca di Bologna – para ajudar a localizar, restaurar e propagar o cinema africano. \r\n\r\n',
    sinopseEng:
      'Ngando and Ndomé are in love and want to get married, but Ndomé’s family will only accept the union if Ndomé pays the dowry, as per tradition. Since he has no money, Ngando asks his uncle to help him; however, his uncle betrays him for he is willing to take Ndomé as his fifth wife so he could have a child. \r\n\r\nRestored in 2019 by Cineteca di Bologna/L’Immagine Ritrovata and The Film Foundation’s World Cinema Project. Funding provided by the Hobson/Lucas Family Foundation. \r\n\r\n\r\nThis restoration is part of the African Film Heritage Project, created by The Film Foundation, FEPACI and UNESCO – in collaboration with Cineteca di Bologna – to help locate, restore, and disseminate African cinema.',
    data: '15/04 às 17h até às 17h do dia seguinte.',
    img: 'MF_MUNAMOTO.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'OUAGA, CAPITALE DU CINÉMA',
    tituloEng: 'OUAGA, CAPITAL DO CINEMA',
    localDuracao: 'TUNÍSIA, BURKINA FASO, ITÁLIA, 2000, 60’',
    fichaTecnica:
      '<li>direção director Mohamed Challouf</li><li>roteiro script  Mohamed Challouf</li>\r\n<li>produção production Mohamed Challouf</li>\r\n<li>fotografia cinematography Nara Keo Kosal</li>\r\n<li>montagem editing Dario Kavalleri, Mirka Fanti</li>\r\n<li>som sound Issa Traore, Frederic Kabore</li>\r\n<li>trilha sonora original original soundtrack Alpha Blondy, Les Petits Chanteurs au Poing Leve, Black so Man, Les Colombes de la Revolutions, Bakary Dembele, Oger Kabore</li>\r\n<li>elenco principal main cast Alimata Salembere, Sembene Ousmane, Abderrahmane Sissako, Ola Balogun, Souleymane Cisse, Idrissa Ouedraogo,  Naky Sy Savane, Ai Keita.</li>\r\n<li>empresa produtora production company Caravanes Productions</li><li>contato contact caravanes_challouf@yahoo.fr</li>\r\n<li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Ouagadougou é a capital de Burkina Faso, um dos países mais pobres do mundo. Também é a cidade onde ocorre o FESPACO, o festival mais importante de cinema pan-africano. Entre 1983 e 1987, a cidade também serviu de cenário para uma das utopias cinematográficas mais empolgantes.',
    sinopseEng:
      'Ouagadougou, the capital of Burkina Faso, one of the poorest countries in the world. It is also the city of FESPACO, the most important pan-African film festival. Between 1983 and 1987 the city was also the scene of one of the most exciting cinema utopias.',
    data: '11/04 às 14h até às 14h do dia seguinte.',
    img: 'MF_OUAGACAPITALEDUCINEMA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'SISTERS OF THE SCREEN – AFRICAN WOMEN IN CINEMA',
    tituloEng: 'IRMÃS DA TELA - MULHERES AFRICANAS NO CINEMA',
    localDuracao: "ESTADOS UNIDOS, 2002, 61'",
    fichaTecnica:
      '<li>direção director Betti Ellerson</li><li>roteiro script  Betti Ellerson</li><li>produção production  Betti Ellerson</li><li>fotografia cinematography  Christophe Poulenc</li><li>montagem editing Betti Ellerson and Christophe Poulenc</li><li>elenco principal main cast Betti Ellerson, Safi Faye, Sarah Maldoror, Anne Mungai, Fanta Régina Nacro, Ngozi Onwurah, Monique Mbeka Phoba</li><li>contato contact coshea@wmm.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      "Explorando as extraordinárias contribuições de realizadoras da África e da diáspora, a estreia engajada de Beti Ellerson's intercala entrevistas com as aclamadas diretoras Safi Faye, Sarah Maldoror, AnneMungai, Fanta Régina Nacro e Ngozi Onwurah com trechos de suas obras mais influentes. Com poder e nuance, Ellerson também enfrenta a espinhosa questão da autenticidade cultural, revisitando o lendário FESPACO (Festival PanAfricano de Cinema e Televisão de Ouagadougou) de 1991, no qual as mulheres da diáspora foram convidadas a deixar uma reunião destinada apenas à mulher africana. Este filme é, ao mesmo tempo, uma valiosa antologia e uma homenagem apropriada ao pioneirismo e aos novos talentos do cinema africano.",
    sinopseEng:
      'Exploring the extraordinary contributions of women filmmakers from Africa and the diaspora, Beti Ellerson’s engaging debut intersperses interviews with acclaimed women directors such as Safi Faye, Sarah Maldoror, Anne Mungai, Fanta Régina Nacro, and Ngozi Onwurah with footage from their seminal works. With power and nuance, Ellerson also confronts the thorny question of cultural authenticity by revisiting the legendary 1991 FESPACO (Pan-African Festival of Cinema and Television of Ouagadougou), in which diasporic women were asked to leave a meeting intended for African women only. This film is both a valuable anthology and a fitting homage to the pioneers and to the new talents of African cinema.',
    data: '12/04 às 21h até às 21h do dia seguinte.',
    img: 'MF_SISTERSOFTHESCREENAFRICANWOMENINCINEMA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: "TAHAR CHÈRIAA, À L'OMBRE DU BAOBAB",
    tituloEng: 'TAHAR CHÈRIAA, À SOMBRA DO BAOBÁ',
    localDuracao: 'TUNÍSIA, 2015, 71’',
    fichaTecnica:
      '<li>direção director Mohamed Challouf</li><li>produção production Mohamed Challouf</li><li>fotografia cinematography Hatem Nechi, Cristina Bocchialini, Kamel Régaya, Mohamed Challouf</li><li>montagem editing Kahena Attia</li><li>trilha sonora original original soundtrack Mouna Amari, Pierre Akendengué</li><li>empresa produtora production company Caravanes Productions</li><li>contato contact caravanes_challouf@yahoo.fr</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Este filme é o retrato de Tahar Chèriaa, indiscutivelmente o pai do cinema pan-africano e o fundador do JCC Carthage Film Festival, o primeiro festival de cinema na África e no mundo árabe, criado em 1966. \r\nTambém é a história de sua amizade com os pioneiros do cinema africano, como Ousmane Sembène, Tewfik Saleh, Youssef Chahine, Timité Bassori, Moustapha Alassane, dentre muitos outros. \r\nO filme é uma homenagem ao cinema árabe e africano pelo 50º aniversário do festival JOURNÉES CINÉMATOGRAPHIQUES DE CARTHAGE na Tunísia.',
    sinopseEng:
      'This film is the portrait of Tahar Chèriaa the undisputed father of pan africanism cinema and founder of JCC Carthage Film Festival , the first film festival in Africa and The Arab World (1966). \r\nIt is also the story of his friendship with the pioneers of African cinema as Ousmane Sembène, Tewfik Salah, Youssef Chahine, Timite Bassori, Moustapha Alassane and so many others. \r\nFilm homage to arab and african cinema in occasion of The 50th anniversary of JOURNÉES CINÉMATOGRAPHIQUES DE CARTHAGE IN TUNISIA.',
    data: '11/04 às 19h até às 19h do dia seguinte.',
    img: 'MF_TAHARCHERIAAALOMBREDUBAOBAB.png',
    imgDir: 'maybe',
    link: '/',
  },
];

function createData() {
  for (i = 0; i < boxContent.length; i++) {
    var postBox = document.createElement('div');
    postBox.className = 'postBox';
    postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
    <div class="postInfo"><h1>${boxContent[i].tituloPt}</h1><h2>${boxContent[i].tituloEng}</h2><h3>${boxContent[i].localDuracao}</h3>
    <p><strong>Disponível: ${boxContent[i].data}</strong></p><p>${boxContent[i].sinopsePt}</p><p>${boxContent[i].sinopseEng}</p>
    <div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
    <div class="content"><ul>${boxContent[i].fichaTecnica}</ul></div></div>
    <a href="${boxContent[i].link}" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
    container.appendChild(postBox);
  }
}
createData();
