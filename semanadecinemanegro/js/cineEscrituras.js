var container = document.querySelector('.container');
var src = './img/filmes/';
var sessaoEspecial = [
  {
    tituloPt: 'ATÉ O FIM',
    tituloEng: '  ',
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
var sessaoVivencias = [
  {
    tituloPt: 'A MORTE BRANCA DO FEITICEIRO NEGRO',
    tituloEng: 'THE WHITE DEATH OF THE BLACK WIZARD',
    localDuracao: '\r\nSANTA CATARINA, 2020, 10’\r\n',
    fichaTecnica:
      '<li>direção director Rodrigo Ribeiro</li><li>roteiro script Rodrigo Ribeiro, Timóteo</li><li>produção production  Julia Faraco, Rodrigo Ribeiro, Luiz Gustavo Laurindo</li><li>fotografia cinematography Carlos Adelino, Rodrigo Ribeiro</li><li>montagem editing Rodrigo Ribeiro, Carlos Eduardo Ceccon, Julia Faraco</li><li>som sound Juçara Marçal, Cadu Tenório</li><li>edição de som sound edition Rodrigo Ribeiro, Leandro Cordeiro</li><li>empresa produtora production company Gata Maior Filmes</li><li>contato contact contato@gatamaior.com.br</li><li>Classificação Indicativa 16 anos</li>',
    sinopsePt:
      'Memórias do passado escravista brasileiro transbordam em paisagens etéreas e ruídos angustiantes. Através de um poético ensaio visual, uma reflexão sobre silenciamento e invisibilização do povo preto em diáspora, numa jornada íntima e sensorial.',
    sinopseEng:
      'Memories from the Brazilian enslavement past overflow in ethereal landscapes and anguishing noises. Told through a poetic visual essay, a reflection on silencing and effacement of black diasporic people, in an intimate and sensorial journey.',
    img: 'CEP_AMORTEBRANCADOFEITICEIRONEGRO.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'DE UM LADO DO ATLÂNTICO',
    tituloEng: 'ON ONE SIDE OF THE ATLANTIC',
    localDuracao: 'RIO DE JANEIRO, 2020, 7’',
    fichaTecnica:
      "<li>direção director Milena Manfredini</li><li>roteiro script Milena Manfredini</li><li>produção production Milena Manfredini</li><li>fotografia cinematography Antoine d'Artemare</li><li>montagem editing Saulo Martins</li><li>desenho de som sound design Ricardo Mansur</li><li>trilha sonora original soundtrack Djalma Corrêa</li><li>elenco principal main cast  Mãe Celina de Xangô, Companhia Tambor de Cumba</li><li>empresa produtora production company Oyá Filmes</li><li>contato contact milenamanfredini@gmail.com</li><li>Classificação Indicativa Livre</li>",
    sinopsePt:
      'De um lado do Atlântico trata-se da primeira de uma série de filmes nos quais um diálogo é proposto entre a cineasta Milena Manfredini e seus referenciais afetivos e artísticos. São filmes de contato nos quais a realizadora lança ao mar cartas imagéticas numa tentativa de borrar barreiras geográficas, de finitude terrena e de temporalidade. Este lançamento marítimo destina-se ao também cineasta Christopher Harris.',
    sinopseEng:
      'On one side of the Atlantic is about the first of a series of movies where a dialogue is proposed between the filmmaker Milena Manfredini and her artistic and affective references. These are movies where the director spears on the sea letters in an attempt to blur geographical, earthly finite and temporal barriers. This release is also destined towards the filmmaker Christopher Harris.',
    img: 'CEP_DEUMLADODOATLANTICO.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'EGUM',
    tituloEng: 'EGUN ',
    localDuracao: 'RIO DE JANEIRO, 2020, 23’',
    fichaTecnica:
      '<li>direção director yuri costa</li><li>roteiro script yuri costa</li><li>produção production yuri costa, Janyne Sousa</li><li>fotografia cinematography Max Chagas</li><li>montagem editing yuri costa</li><li>arte e figurino art and costume design Beatriz Almeida e yuri costa</li><li>som sound Victor Oliver</li><li>trilha sonora original original soundtrack Victor Oliver</li><li>elenco principal main cast Paulo Guidelly, Valéria Monã, Bruna Rodrigues, Diomar Nascimento, Francisca Silva, Carlos Bruno, Dayane Simões e João Pedro Oliveira</li><li>empresa produtora production company barca aberta produções</li><li>contato contact costayuriyc@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt:
      'após anos afastado devido à violenta morte do irmão, um renomado jornalista retorna para a casa de sua família para cuidar de sua mãe, que sofre uma grave e desconhecida doença. numa noite, o jornalista recebe a visita de dois estranhos, que têm negócios desconhecidos com seu pai. esse encontro, juntamente com acontecimentos que o levam a desconfiar que algo sobrenatural se abateu sobre sua mãe, fazem-no temer uma nova tragédia.',
    sinopseEng:
      'after years of distancing due to the violent death of his brother, a renowned journalist returns to his family’s home to take care of his mother, who suffers from a serious and unknown disease. a certain night, the journalist receives a visit from two unknown people who have unknown businesses with his father. this encounter, together with events that make him suspicious that something supernatural happened to his mother, make him afraid of a new tragedy.',
    img: 'CEP_EGUM.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'IRUN ORÍ',
    tituloEng: ' ',
    localDuracao: 'BAHIA, 2020, 8’',
    fichaTecnica:
      '<li>direção director Juh Almeida </li><li>roteiro script Juh Almeida</li><li>produção production Juh Almeida</li><li>fotografia cinematography Rafa Ramos, Juh Almeida</li><li>montagem editing Luan Luiz</li><li>som sound Gabriela Palha</li><li>arte e figurino art and costume design Juliana Pina</li><li>trilha sonora original original soundtrack Lucas Carvalho</li><li>personagens  characters Alice Braz, Emira Sophia, Ana Meireles, Mariana Desterro, Gabriela Cabral, Tai Grecco, Dora</li><li>contato contact  juh.fotografia@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Irun Orí é uma narrativa visual, documental e experimental que se apoia na poesia para trazer à luz um movimento de conexão diaspórica entre Brasil e Moçambique, buscando investigar o ato de trançar enquanto transmissão e preservação de valores ancestrais, geracionais e de afeto, e como importante instrumento de consciência política de espaço, corpo e cabelo, apontando novas dimensões para se pensar identidade negra e memória pelas vias da resistência e para além da estética.',
    sinopseEng:
      'Irun Orí is a visual, documental and experimental narrative that is based on poetry to bring light to a movement of diasporic connection between Brazil and Mozambique, aiming to investigate hair braiding as an act of transmission and preservation of ancestral, generational, and affective values. It is also an important instrument for raising political consciousness of space, body, and hair while pointing to new dimensions as a way of thinking about black identity and memory by means of resilience and going beyond aesthetics.',
    img: 'CEP_IRUNORI.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'JAÍZA',
    tituloEng: ' ',
    localDuracao: 'MINAS GERAIS, 2019, 23’',
    fichaTecnica:
      '<li>direção director João Paulo de Freitas Alves, Ana Clara Gonçalves França</li><li>produção production Ibria Lopez, Gabriella Carvalho</li><li>fotografia cinematography Dalila Merêncio</li><li>montagem editing João Paulo de Freitas Alves, Yago Guedes Monteiro</li><li>som sound Yago Guedes Monteiro, João Paulo de Freitas Alves, Antônio Guimarães</li><li>elenco principal main cast Beatriz Magalhães Fernandes, Anna Campos, Meibe F. Rodrigues</li><li>contato contact jpfreitas.contato@gmail.com</li><li>Classificação Indicativa 12 anos</li>',
    sinopsePt:
      'Duas mulheres, uma jovem de dezesseis anos, quase dezessete, e outra de idade mais avançada se encontram em uma sala de espera.',
    sinopseEng:
      'Two women, a young one of sixteen years-old, almost seventeen, and another one of more mature age, meet in a waiting room.',
    img: 'CEP_JAIZA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'NOVO MUNDO',
    tituloEng: 'NEW WORLD',
    localDuracao: 'RIO DE JANEIRO, 2020, 21’',
    fichaTecnica:
      '<li>direção director  Natara Ney, Gilvan Barreto</li><li>roteiro script Natara Ney, Gilvan Barreto</li><li>produção production  Frida Projetos Culturais, Aline Ribeiro</li><li>animação animation  Programação Visual - Yana Parente</li><li>fotografia cinematography  Lilis Soares</li><li>montagem editing  Natara Ney, edt.</li><li>arte e figurino art and costume design Ananias Caldas</li><li>som sound Evelyn Santos,  Carlos Trilha</li><li>trilha sonora original original soundtrack Pupillo</li><li>elenco principal main cast  Mohana Uchôa</li><li>empresa produtora production company  Gilvan Barreto Arte e Cultura</li><li>contato contact mariane@frida/net.br, arrudeianatara@gmail.com, gilvan@gilvanbarreto.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Um paraíso para os olhos, a frase define o lugar de destino da personagem, A Terra Sem Males. Depois de caminhar por florestas e ruínas, ela percebe que aquele território foi erguido sobre o sangue de muitos povos. Esse conhecimento poderia deixá-la paralisada, criar medo, mas inspira atos de coragem.',
    sinopseEng:
      "A paradise for the eyes defines the character's destination place, A Terra Sem Males. After walking through forests and ruins, she realizes that the territory was built on the blood of many people. This insight could paralyze her, create fear, but it inspires acts of courage.",
    img: 'CEP_NOVOMUNDO.jpeg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'OBATALA FILM',
    tituloEng: ' ',
    localDuracao: 'MINAS GERAIS, 2019, 7’',
    fichaTecnica:
      '<li>direção director Sebastian Wiedemann</li><li>roteiro script Sebastian Wiedemann</li><li>produção production Sebastian Wiedemann</li><li>fotografia cinematography Sebastian Wiedemann</li><li>montagem editing Sebastian Wiedemann</li><li>som sound Sebastian Wiedemann</li><li>elenco principal main cast Oba Ojele Obatala</li><li>contato contact wiedemann.sebastian@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'O corpo re-existe e insiste, pois nunca é um envoltório fechado, mas sim canal de passagem e transe entre as mais diversas dimensões espirituais (Obatala Film). Filme-devoção, filme-oferenda. Filmado na mítica Ile-Ife, cidade sagrada do povo Yoruba e fundada pelos próprios Orixás, este filme procura afirmar de modo sensorial a vertigem de entrar em relação com Obatala, orixá criador do mundo, da luz. Transe de faíscas de luz, de corpos em conexão espiritual.',
    sinopseEng:
      'The body re-exists and insists because it’s never a closed wrap, but a channel of passage and trance between the most diverse spiritual dimensions. Film-devotion, film-offering. Filmed at the mythic Ile-Ife, sacred city to Yoruba people and founded by the Orishas, this movie seeks to affirm in a sensorial way the vertigo of relating to Obatala, orisha that is the creator of the world and light. Trance of sparks of light, of bodies in spiritual connection.',
    img: 'CEP_OBATALAFILM.png',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'PATTAKI',
    tituloEng: ' ',
    localDuracao: 'SERGIPE, 2019, 21’',
    fichaTecnica:
      '<li>direção director Everlane Moraes Santos</li><li>roteiro script Tatiana Mongue</li><li>produção production Gregorio Rodrigues</li><li>fotografia cinematography Flávio Rebouças</li><li>montagem editing Keily J. Estrada</li><li>som sound Vitor Coroa</li><li>trilha sonora original original soundtrack</li><li>elenco principal main cast Amparo Molina, Rodolfo Ofarril, Alexander Quiala, Lazara Isis, Mauria Herrera</li><li>empresa produtora production company EICTV</li><li>contato contact everlanemoraes@gmail.com</li><li>Classificação Indicativa 12 anos</li>',
    sinopsePt:
      'Os peixes agonizam à beira-mar à medida que a água invade a cidade e forma espelhos que distorcem sua imagem. Na noite densa, quando a lua sobe a maré, esses seres, que vivem em cotidiano monótono e sem água, são hipnotizados pelos poderes de Iemanjá, a deusa do mar.',
    sinopseEng:
      'Fishes agonize at the seashore while the water invades the city creating mirrors that distort its image. In the dense night, when the moon rises the tide, these beings, trapped in the daily life of water scarcity, are hypnotized by the power of Yemaya, the goddess of the sea.',
    img: 'CEP_PATTAKI.png',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'RAÍZES',
    tituloEng: 'ROOTS',
    localDuracao: 'SÃO PAULO, 2020, 72’',
    fichaTecnica:
      '<li>direção director Simone Nascimento, Wellington Amorim</li><li>roteiro script Carlos De Nicola, Simone Nascimento, Wellington Amorim</li><li>produção production Nayana Ferreira, Wellington Amorim</li><li>fotografia cinematography Nay Mendl </li><li>montagem editing Nay Mendl Silva  </li><li>arte e figurino art and costume design Bruna Lima</li><li>som sound Adller Oliveira, Carlos de Nicola, Ivan Salomão</li><li>elenco principal main cast Kelton Santos</li><li>empresa produtora production company Maloka Filmes </li><li>contato contact well.amorim1@gmail.com </li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Em busca de suas raízes, Kelton resgata a ancestralidade de sua família e se depara com o apagamento da história do povo negro brasileiro.',
    sinopseEng:
      'In search of his roots, Kelton recovers the ancestry of his family and faces the erasure of Brazilian black people’s history.',
    img: 'CEP_RAIZES.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'THINYA',
    tituloEng: ' ',
    localDuracao: 'PERNAMBUCO, 2019, 16’',
    fichaTecnica:
      '<li>direção director Lia Letícia</li><li>roteiro script Lia Letícia</li><li>produção production Clarice Hoffmann</li><li>fotografia cinematography Francisco Baccaro</li><li>montagem editing André Sampaio</li><li>som sound Nicolau Domingues</li><li>trilha sonora original original soundtrack Claudio N</li><li>elenco principal main cast Thinya Fulni-ô (Maria Pastora)</li><li>empresa produtora production company Cinecão</li><li>contato contact lia.leticia@gmail.com </li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Minha primeira viagem ao Velho Mundo. Minha fantasia aventureira pós colonial. \r\n[Um discurso muda uma imagem?] \r\n',
    sinopseEng:
      'My first trip to the Old World. My post-colonial adventurous fantasy. \r\n[A discourse changes an image?] \r\n',
    img: 'CEP_THINYA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
];
var sessaoAfetos = [
  {
    tituloPt: 'À BEIRA DO PLANETA MAINHA SOPROU A GENTE',
    tituloEng: 'TO THE PLANET’S EDGE MAMA’S BREATH SENT US',
    localDuracao: 'BAHIA, 2020, 13’',
    fichaTecnica:
      '<li>direção director Bruna Barros, Bruna Castro</li><li>roteiro script Bruna Barros, Bruna Castro<li><li>produção production Bruna Barros, Bruna Castro<li><li>fotografia cinematography Bruna Barros, Bruna Castro<li><li>montagem editing Bruna Barros, Bruna Castro<li><li>som sound Bruna Barros, Bruna Castro<li><li>elenco principal main cast Bruna Barros, Bruna Castro<li><li>imagens adicionais additional footage Juh Almeida<li><li>empresa produtora production company<li><li>contato contact brunalcmorais@gmail.com<li><li>Classificação Indicativa Livre<li>',
    sinopsePt:
      'Através de imagens de arquivo pessoal e reflexões sobre as ambivalências que às vezes se imprimem em relações cheias de amor, "à beira do planeta mainha soprou a gente" apresenta recortes de afeto entre duas sapatonas e suas mães.',
    sinopseEng:
      'Through images of a personal archive and reflections on the ambivalences that sometimes become attached to relationships full of love, “To the Planets Edge Mama’s Breath Sent Us” shows passages of affection between two lesbians and their mothers.',
    img: 'CEP_ABEIRADOPLANETAMAINHASOPROUAGENTE.png',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'BONDE',
    tituloEng: ' ',
    localDuracao: 'SÃO PAULO, 2019, 18’',
    fichaTecnica:
      '<li>direção director Asaph Luccas</li><li>roteiro script Gleba do Pêssego</li><li>produção production Leo Domingos, Carol Santos</li><li>animação animation Ivano</li><li>fotografia cinematography Tatiane Ursulino</li><li>montagem editing Gabriel Soares, Guilherme Candido</li><li>arte e figurino art and costume design Gabriel Soares, Oliv Barros</li><li>som sound Isadora Torres</li><li>trilha sonora original original soundtrack enzo</li><li>elenco principal main cast Eric Oliveira, Alice Marcone, Joyce Brito</li><li>empresa produtora production company Gleba do Pêssego</li><li>contato contact  distribuicaogleba@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt:
      'Três jovens negros da favela de Heliópolis saem em busca de refúgio na vida noturna LGBT+ do centro da cidade de São Paulo.',
    sinopseEng:
      'Three young blacks from the Heliópolis suburb go out seeking refuge in the LGBT+ nightlife of downtown São Paulo.',
    img: 'CEP_BONDE.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt:
      'CANDOMBE DO AÇUDE: O PASSADO CONTADO PELO CANTO. EP. 1: PANDEMIA - ISOLAMENTO OU RESPIRO?',
    tituloEng:
      'CANDOMBE DO AÇUDE: THE PAST TOLD BY THE SINGING. EP. 1: PANDEMIC - ISOLATION OR RELIEF? ',
    localDuracao: '  \r\nMINAS GERAIS, 2020, 29’\r\n',
    fichaTecnica:
      '<li>direção director Danilo Candombe</li><li>roteiro script Danilo Candombe</li><li>produção production Danilo Candombe</li><li>fotografia cinematography Thiago Nascimento</li><li>montagem editing Danilo Candombe</li><li>arte e figurino art and costume design Candombe do Açude</li><li>edição de som sound edition Danilo Candombe</li><li>trilha sonora original original soundtrack Candombe do Açude, Danilo Candombe</li><li>elenco principal main cast Candombe do Açude</li><li>contato contact iakimadelamare@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'CANDOMBE DO AÇUDE - o passado contado pelo canto - é uma série de três documentários sobre o quilombo do Açude. O primeiro episódio - PANDEMIA - ISOLAMENTO OU RESPIRO - retrata sobre como foi o ritual do Candombe durante a pandemia no ano de 2020 e mostra como a nova geração vivenciou e sentiu a manifestação de suas tradições, pela primeira vez em 20 anos sem a influência de visitantes.',
    sinopseEng:
      '“CANDOMBE DO AÇUDE: the past told through singing” is a series of three documentaries on quilombo do Açude. The first episode “PANDEMIC – ISOLATION OR RELIEF” presents how the Candombe ritual took place during the 2020 pandemic and shows how the new generation experienced and felt the manifestation of their traditions, which, for the first time in 20 years, were practiced without the influence of visitors.',
    img: 'CEP_CAMDOMBEDOACUDE.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'ENTRE NÓS, UM SEGREDO',
    tituloEng: 'BETWEEN US, A SECRET',
    localDuracao: "RIO DE JANEIRO, SÃO PAULO-BRASIL/MALI, 2019, 80' ",
    fichaTecnica:
      '<li>direção director Beatriz Seigner, Toumani Kouyaté</li><li>roteiro script Beatriz Seigner, Toumani Kouyaté, com colaboração de (in collaboration with) Ricardo Terto</li><li>produção production Erica de Freitas, Beatriz Seigner, Bruna Haddad</li><li>fotografia cinematography Beatriz Seigner</li><li>montagem editing Veronica Saenz</li><li>som sound Rubén Valdés</li><li>trilha sonora original original soundtrack Cantigas Ancestrais Africanas</li><li>elenco principal main cast Toumani Kouyaté, Mamadou Kouyaté, Bakari Kouyaté, Badou Kouyaté</li><li>empresa produtora production company Encantamento Filmes, Miríade Filmes (produção/ production), Cinebandada, Spcine, Rattapallax, Cedevel (co-produção/co-production)</li><li>contato contact  producao@encantamentofilmes.com.br</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Toumani Kouyaté, junto a outros mais de 40 cidadãos malineses que moravam fora, foi convocado por seu avô a retornar com urgência ao Mali, para ouvi-lo contar uma última história. Sentindo a morte se aproximar, ele precisava passar segredos da nação para a linhagem de Djélis mais jovens. A cultura oral, capaz de protegê-los de guerras e crises, é também um componente social e político importante que pedia continuidade. Nesta aventura real, descobrimos um universo nunca antes visto pelo mundo.',
    sinopseEng:
      'Toumani Kouyaté, alongside other 40 Malian citizens who lived abroad, was summoned back by his grandfather to urgently return to Mali in order to hear him tell a final story. Feeling the death getting closer, his grandfather needed to pass on the secrets of the nation to the younger lineage of Djélis. The oral culture, capable of protecting them from wars and crisis, is also an important social and political element that needed to be maintained. In this real adventure, we find out about a universe never seen before by the world.',
    img: 'CEP_ENTRENOSUMSEGREDO.png',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'FILHAS DE LAVADEIRA',
    tituloEng: ' ',
    localDuracao: 'BRASÍLIA, 2019, 22',
    fichaTecnica:
      '<li>direção director  Edileuza Penha de Souza</li><li>produção production Ruth Maranhão, Marcus Azevedo</li><li>fotografia cinematography   Waldir Pina e Ana Carolina Matias</li><li>montagem editing  Ádon Bicalho</li><li>arte e figurino art and costume design  Lia Maria dos Santos</li><li>som sound  Nathália Mendes Trindade, Juciele Fonseca Correia</li><li>coloração  e mixagem de som  color grading and sound mixing Diego Cajueiro</li><li>direção e arranjo musical  musical director and arrangement  Edson Arcanjo</li><li>trilha sonora original original soundtrack  Layla Jorge, Marcelo Café</li><li>contato contact edileuzapenhadesouza@gmail.com</li><li>elenco principal main cast  Neide Rafael, Benedita da Silva, Ruth de Souza, Neusa das Dores Pereira, Elisabete Martins da Silva Gonçalves, Maria José de Souza, Hellen Rodrigues Batista, Rosangela Rodrigues Batista, Iris Marques Patricio de Oliveira, Magna Marques de Jesus Oliveira, Conceição Evaristo, Mary France de Deus, Angela Donizete Batista de Deus, Maria Goretti dos Santos, Ivonete Nunes Rodrigues dos Santos</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'O documentário: Filhas de Lavadeira apresenta histórias de Mulheres Negras que graças ao trabalho árduo de suas mães puderam ir para escola e refazer os caminhos trilhados pelas suas antecessoras. Suas memórias, alegrias e tristezas, dores e poesias se fazem presente como possibilidades de um novo destino. Transformando o duro trabalho das lavadeiras em um espetáculo de vida e plenitude.',
    sinopseEng:
      'The documentary: Filhas de Lavadeira presents stories of Black Women who, thanks to the hard work of their mothers, were able to go to school and retrace the paths trailed by their ancestors. Their memories, joys and sorrows, pains and poetries become present as possibilities of a new fate turning the hard work of lavadeiras [washerwomen] into a spectacle of life and fullness.',
    img: 'CEP_FILHASDELAVADEIRA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: '5 FITAS',
    tituloEng: '5 RIBBONS',
    localDuracao: 'BAHIA, 2020, 15’',
    fichaTecnica:
      '<li>direção director Heraldo de Deus, Vilma Martins</li><li>roteiro script  Heraldo de Deus, Vilma Martins </li><li>produção production Sujeito Filmes; Saturnema Filmes, Bico Produções, Girapomba Produções, Milena Anjos</li><li>fotografia cinematography Ariel Ferreira</li><li>montagem editing Ana do Carmo </li><li>arte e figurino art and costume design: Adriele Regine </li><li>som sound: Marise Urbano</li><li>trilha sonora original original soundtrack Emillie Lapa, Elinaldo Nascimento</li><li>elenco principal main cast Adili Pita, João Pedro Costa, Matias Santana, Rejane Maya, Clara Paixão, Wesley Guimarães, Sérgio Laurentino</li><li>empresa produtora production company Coletivo Sujeito Filmes</li><li>contato contact vilmacarlams@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Em Salvador (Brasil), todo ano acontece a grande e tradicional festa para Senhor do Bonfim, onde fiéis, turistas e foliões, peregrinam até a famosa igreja para amarrar fitas e fazer pedidos. Dois irmãos, Pedro e Gabriel, ouvem desde cedo as histórias e rezas de sua avó ao Senhor do Bonfim e decidem fugir no dia da lavagem, se aventurar entre a multidão, para tentar pedir por uma bola de futebol, já que cresceram sem uma figura paterna. Lá confrontam as narrativas de sua avó, com a lavagem atual, trazendo questões sobre religiosidade, sincretismo, manifestação popular, e importância da família.',
    sinopseEng:
      'In Salvador (Brazil), the magnificent and traditional celebration in honor of Senhor do Bonfim takes place every year. Devotees, tourists, and revelers go on a pilgrimage to this famous church to tie their ribbons and make wishes. Two brothers, Pedro and Gabriel, since an early age, heard the stories and prayers of their grandmother to Senhor do Bonfim. They decided to run away on the day of the washing of the stairways of Bonfim, venturing into the crowd, in an attempt to make a wish for a soccer ball, since they grew up without a father figure. When they arrive at the church, they have to confront their grandmother’s narrative against the current stairways washing, raising questions on religiousness, syncretism, popular demonstration, and the importance of family.',
    img: 'CEP_5FITAS.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'LOOPING',
    tituloEng: ' ',
    localDuracao: 'MINAS GERAIS, 2019, 12’',
    fichaTecnica:
      '<li>direção director Maick Hannder</li><li>roteiro script Maick Hannder</li><li>produção production Jacon Dias, Bruno Greco</li><li>fotografia cinematography Maick Hannder</li><li>montagem editing Maick Hannder</li> <li>arte e figurino art and costume design Dayane Tropicaos</li><li>som sound Maick Hannder, Pedro Mancini, Yara Tôrres</li><li>trilha sonora original original soundtrack </li><li>elenco principal main cast Arthur Diniz, João Victor</li><li>empresa produtora production company Ponta de Anzol Filmes</li><li>contato contact producao@pontadeanzol.com.br</li><li>Classificação Indicativa 16 anos</li>',
    sinopsePt: 'Vi um rapaz atravessando a rua hoje.',
    sinopseEng: 'I saw a young man crossing the street today.',
    img: 'CEP_LOOPING.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'MOVIMENTO',
    tituloEng: 'MOVEMENT',
    localDuracao: "MINAS GERAIS, 2020, 11'",
    fichaTecnica:
      '<li>direção director Gabriel Martins</li><li>roteiro script Gabriel Martins </li><li>produção production Gabriel Martins, Sesc Convida</li><li>fotografia cinematography Gabriel Martins </li><li>montagem editing Gabriel Martins </li><li>som sound Gabriel Martins </li><li>trilha sonora original original soundtrack Gabriel Martins </li><li>elenco principal main cast Gabriel Martins, Rimenna Procópio, Tereza Procópio Martins, Victor  Furtado</li><li>empresa produtora production company Sesc Convida</li><li>contato contact  gabriel@filmesdeplastico.com.br</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Tereza, nascida na pandemia do Coronavírus em 2020, é cuidada por seus pais Rimenna e Gabriel.',
    sinopseEng:
      'Tereza is born during the 2020 Coronavirus pandemic; she is taken care of by her parents Rimenna and Gabriel.',
    img: 'CEP_MOVIMENTO.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'NASCENTE',
    tituloEng: 'HEADWATERS ',
    localDuracao: "BAHIA, 2020, 5'",
    fichaTecnica:
      '<li>direção director Safira Moreira</li><li>produção production Safira Moreira</li><li>fotografia cinematography Safira Moreira</li><li>montagem editing Safira Moreira</li><li>som sound Safira Moreira, Rose Juam </li><li>trilha sonora original original soundtrack Lucas Carvalho </li><li>contato contact safiramoreira1@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt: 'Um rio e seus afluentes.',
    sinopseEng: 'A river and its tributaries.',
    img: 'CEP_NASCENTE.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'OLHOS DE ERÊ',
    tituloEng: 'EYES OF ERÊ ',
    localDuracao: 'MINAS GERAIS, 2020, 11’ ',
    fichaTecnica:
      "<li>direção director Luan Manzo</li><li>roteiro script Luan Manzo</li><li>produção production - Makota Kidoiale (Cassia Cristina da Silva), Manzo N’zungo Kaiango, Bruno Vasconcelos</li><li>fotografia cinematography Luan Manzo </li><li>montagem editing Luan Manzo</li><li>som sound Luan Manzo </li><li>empresa produtora production company Quilombo Manzo N'gunzo Kaiango - Edukação de Kilombu, Guanambi Audiovisões</li><li>contato contact edukakilombu@gmail.com </li><li>Classificação Indicativa Livre</li>",
    sinopsePt:
      'Luan Manzo tem seis anos e é bisneto da matriarca Mametu Muiande do Quilombo Manzo N’gunzo Kaiango, um dos quilombos reconhecidos pela cidade de Belo Horizonte. Fundado em 1970 por um preto velho, pai Benedito, Manzo é palácio de rei, governado por uma rainha. Ali germinam sementes e crianças, num processo educativo - a afrobetização - que afirma a organização, o coletivo, a ancestralidade e a circularidade do povo negro. As crianças no quilombo crescem sabendo-se respeitadas, e por isso Luan percorre aqui o espaço sagrado, descrevendo-o a nós com segurança, conhecimento, rigor e frescor infantil. É ele quem, com um celular em mãos, propõe este filme.',
    sinopseEng:
      'Luan Manzo is six years-old and he is the great-grandson of Mametu Muiande matriarch of the Quilombo Manzo N’gunzo Kaiango, one of the most renowned quilombos across the city of Belo Horizonte. Established in 1970 by a Preto Velho, father Benedito, the Manzo quilombo is a king’s palace, governed by a queen. There, seeds and children are sprouted in an educational process – the afroliteracy – that affirms the organization, the collective, the ancestry, and the circularity of the black people. The children in the quilombo grow up knowing that they are respected; therefore, here Luan moves along the sacred space, describing it to us with safety, knowledge, rigor, and infantile eyes. It is he who, with a cellphone in hands, offers us this film.',
    img: 'CEP_OLHOSDEERE.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'PERIFERICU',
    tituloEng: ' ',
    localDuracao: 'SÃO PAULO, 2020, 20’',
    fichaTecnica:
      '<li>direção director Nay Mendl, Rosa Caldeira, Stheffany Fernanda, Vita Pereira</li><li>roteiro script Winnie Carolina, Nay Mendl, Rosa Caldeira, Stheffany Fernanda, Vita Pereira</li><li>produção production Nayana Ferreira, Wellington Amorin</li><li>fotografia cinematography Nay Mendl, Rosa Caldeira, Wellington Amorin</li><li>montagem editing Samya Carvalho, Rosa Caldeira</li><li>arte e figurino art and costume design Bruna Lima, Nayla Tebas, Victor Maximiliano, Bea Gerolim</li><li>som sound Evelyn Santos</li><li>elenco principal main cast Ingrid Martins, Vita Pereira</li><li>empresa produtora production company Maloka Filmes</li><li>contato contact  babadopericoofilme@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt:
      'Luz e Denise cresceram em meio às adversidades de ser LGBT no extremo sul da cidade de São Paulo. Entre o vogue e as poesias, do louvor ao acesso à cidade. Os sonhos e incertezas da juventude inundam suas existências.',
    sinopseEng:
      'Luz and Denise grew up amongst the hardships of being LGBT at the extreme south of the city of São Paulo. Between the vogue and the poetries, from praises to the access to the city, the dreams and uncertainties of youth flood their existence.',
    img: 'CEP_PERIFERICU.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'RÃ',
    tituloEng: ' ',
    localDuracao: 'SÃO PAULO, 2019, 15',
    fichaTecnica:
      '<li>direção director Ana Flavia Cavalcanti, Julia Zakia</li><li>roteiro script Ana Flavia Cavalcanti, Julia Zakia</li><li>produção production Guilherme Cesar, Julia Zakia, Thais Morresi</li><li>fotografia cinematography Alice Drummond</li><li>montagem editing Julia Zakia, Paula Mercedes</li><li>arte e figurino art and costume design Coca Latini, Luana Castilho</li><li>elenco principal main cast Ana Flavia Cavalcanti, Lucas Andrade, Maysa Cavalcanti, Tarsila Oliveira</li><li>empresa produtora production company Gato do Parque</li><li>contato contact  juliazakia@gmail.com, gatodoparque@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'Val e suas duas filhas vivem numa casa de 16 metros quadrados. Certa madrugada, mãe e filhas são subitamente acordadas com palmas e alguém chamando por Val no portão. A voz é de Neném Preto, amigo de Val e dono do mercadinho.',
    sinopseEng:
      'Val and her two daughters live in a 170 square feet house. Early one morning, mother and daughters are rudely awakened by somebody clapping and calling Val at the front gate. The voice belongs to Neném Preto, Val’s friend and owner of the local grocery store.',
    img: 'CEP_RA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
];
var sessaoGritos = [
  {
    tituloPt: '23 MINUTOS',
    tituloEng: '23 MINUTES',
    localDuracao: 'MINAS GERAIS, 2020, 16’',
    fichaTecnica:
      '<li>direção director Rodrigo Beetz, Wesley Figueiredo</li><li>roteiro script Wesley Figueiredo</li><li>roteiro co-script Bryan Pinto de Oliveira, Daniel Filipe de Lima, Nikolas Oliveira Costa, Kelvin Anderson Cerqueira</li><li>produção production Guilherme Filipe, Helbert Gustavo, Rodrigo Beetz, Wesley Figueiredo</li><li>animação animation Frank Stalone</li><li>fotografia cinematography Rodrigo Beetz</li><li>montagem editing Rodrigo Beetz, Thiago Soares, Wesley Figueiredo</li><li>som sound Helbert Gustavo, Sérgio Salum</li><li>trilha sonora original original soundtrack Contramão Records</li><li>elenco principal main cast Agnaldo Santos, Bryan Pinto de Oliveira, Daniel Filipe de Lima, Nikolas Oliveira Costa</li><li>contato contact  filme23m@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt:
      'Um grupo de jovens amigos encontram na música a resistência frente ao mercado de trabalho e as adversidades sociais.',
    sinopseEng:
      'A group of young friends find in music the strength to resist in face of the job market and the social adversities.',
    img: 'CEP_23MINUTOS.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'CALMARIA',
    tituloEng: 'SERENITY',
    localDuracao: 'MINAS GERAIS, 2020, 24’',
    fichaTecnica:
      '<li>direção director Catapreta</li><li>roteiro script Catapreta</li><li>produção production Thaisa Tadeu, Catapreta</li><li>fotografia cinematography Catapreta</li><li>montagem editing Catapreta</li><li>som sound Daniel Nunes</li><li>trilha sonora original original soundtrack Daniel Nunes</li><li>elenco principal main cast  Juhlia Santos, Preto Amparo, Alexandre de Sena, Victor Cesar, Samuell Jorge</li><li>empresa produtora production company Imã de Mamão </li><li>contato contact  lcatapreta@gmail.com</li><li>Classificação Indicativa 12 anos</li>',
    sinopsePt:
      'As ruas estão desertas, eles fogem buscando a paz, mas a paz é nossa inimiga.',
    sinopseEng:
      'Streets are deserted, they run away in search of peace, but peace is our enemy.',
    img: 'CEP_CALMARIA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'FILHA NATURAL',
    tituloEng: 'NATURAL DAUGHTER',
    localDuracao: 'SÃO PAULO, 2018-2019, 16’',
    fichaTecnica:
      '<li>direção diretor Aline Motta</li><li>roteiro script Aline Motta</li><li>produção production Aline Motta</li><li>animação animation Aline Motta, Caetano Brenga Bittencourt</li><li>fotografia cinematography Aline Motta</li><li>montagem editing Aline Motta, Caetano Brenga Bittencourt</li><li>arte e figurino art and costume design Aline Motta</li><li>som sound Aline Motta</li><li>trilha sonora original original soundtrack Aline Motta</li><li>elenco principal main cast Claudia Mamede</li><li>contato contact  1alinemotta@gmail.com</li><li>Classificação Indicativa Livre</li>',
    sinopsePt:
      'A partir de uma análise inédita de iconografia histórica e relatos orais de sua própria família, a artista visual Aline Motta traz à tona hipóteses possíveis sobre as origens de sua tataravó. Há indícios de que ela tenha nascido por volta de 1855 em uma fazenda de café em Vassouras, zona rural do Rio de Janeiro, considerado o epicentro do escravismo brasileiro no século XIX.',
    sinopseEng:
      'Departing from an unprecedented historical and iconographic analysis and oral reports from her own family, the visual artist Aline Motta puts forward possible hypotheses on the origins of her great-great grandmother. There is evidence that she was born around 1855 in a coffee farm in Vassouras, in the rural zone of Rio de Janeiro, which is considered the epicenter of Brazilian slavery in the 19th century.',
    img: 'CEP_FILHANATURAL.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'INTERVENÇÃO JAH',
    tituloEng: 'JAH INTERVENTION',
    localDuracao: 'RIO DE JANEIRO, 2019, 16’',
    fichaTecnica:
      '<li>direção director Daniel Santos</li><li>roteiro script Welket Bungué</li><li>fotografia cinematography Kristin Bethge</li><li>montagem editing Daniel Santos</li><li>trilha sonora original original soundtrack Walter Reis</li><li>performance performers Welket Bungué, Walter Reis, Daniel Santos, Jessica Senra, Kristin Bethge</li><li>contato contact danielgnu1@gmail.com</li><li>Classificação Indicativa 12 anos</li>',
    sinopsePt:
      'A intervenção visa uma caminhada simbólica até à exaustão. A intervenção propõe o aquecimento pré-liminar que antecede um combate de titãs num ringue de boxe. A intervenção consiste no movimento do performer intuindo a queda repentina quando afetado por perfurações por balas de armas semiautomáticas. \r\n\r\nAs pessoas negras no Brasil ainda representam mais de metade da população do país. Entre 2005 e 2015 o número de pessoas negras assassinadas aumentou 18% e isso nos tornou também a maior parte das vítimas de homicídio, tendo correspondido a 71% do total de corpos registrados. - in Fórum Brasileiro de Segurança Pública (2017).',
    sinopseEng:
      'The intervention is a symbolic walk to exhaustion. The intervention proposes the pre-liminary warm-up that precedes a fight of titans in a boxing ring. The intervention consists of the movement of the performer sensing the sudden fall when affected by perforations by bullets of semi-automatic weapons. \r\n\r\nBlack people in Brazil are still more than half of the population of the country. Between 2005 and 2015 the number of black people murdered increased by 18% and this also made us the majority of homicide victims, accounting for 71% of all registered bodies. - in Brazilian Forum of Public Security (2017).',
    img: 'CEP_INTERVENCAOJAH.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'MORDE & ASSOPRA',
    tituloEng: 'BITE & BLOW',
    localDuracao: 'MINAS GERAIS, 2020, 10’',
    fichaTecnica:
      '<li>direção director Stanley Albano</li><li>roteiro script Stanley Albano</li><li>produção production Stanley Albano, Raul Lansky, Brota</li><li>fotografia cinematography Raul Lansky</li><li>montagem editing Raul Lansky</li><li>arte e figurino art and costume design Brota</li><li>som sound Raul Lansky</li><li>trilha sonora original original soundtrack Nana Kwabena, Sarah the Instrumentalist, Patches, Sybs, Doug Maxwell and Jimmy Fontanez, The Mini Vandals Featuring Mamadou Koita and Lassov</li><li>elenco principal main cast Stanley Albano</li><li>empresa produtora production company Brota</li><li>contato contact  brota.cria.video@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt:
      'Fui contemplada num programa de redução de danos da burguesia: um final de semana num casarão que meu avô já trabalhou! Depois de anos só cortando dobrado... a bicha preta quer virar artista de cinema. Será que eu estraguei seu filme?',
    sinopseEng:
      'I was awarded with a program of damage reduction of the bourgeoisie: a weekend in a mansion that my grandfather had worked before! After several years of hard work … the black queer here wants to become a film artist. Did I mess up your film?',
    img: 'CEP_MORDEASSOPRA.png',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'PIETÀ',
    tituloEng: ' ',
    localDuracao: 'MINAS GERAIS, 2020, 5’',
    fichaTecnica:
      '<li>direção director As Talavistas</li><li>produção production As Talavistas, Ela S/A</li><li>fotografia cinematography  Gabriela Luíza</li><li>montagem editing Gabriela Luíza</li><li>arte e figurino art and costume design  Pink Molotov, Marli Ferreira</li><li>trilha sonora original original soundtrack Gabriela Luíza, André Baumecker</li><li>elenco principal main cast Darlene Valentim como Marília, Cafézin como Jerusa </li><li>empresa produtora production company  Ela S/A, As Talavistas</li><li>contato contact:  eladegabriela@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt:
      'Jesus recebe uma chuva de benção após ser batizado nas águas sagradas da piscina mil litros. Com isso ele recebe suficiente força para combater o mal. A justiça divina, no entanto, falha, e o herói acaba morto no colo da senhora, sua mãe.',
    sinopseEng:
      'Jesus receives a shower of blessings after being baptised in the sacred waters of an inflatable swimming pool. With the blessings, He has sufficient strength to fight evil. The divine justice, however, fails and our hero ends up dead in the arms of our lady, His mother.',
    img: 'CEP_PIETA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'REBU',
    tituloEng: '   ',
    localDuracao: 'PERNAMBUCO, 2020, 21’',
    fichaTecnica:
      '<li>direção director Mayara Santana</li><li>produção production Mayara Santana</li><li>fotografia cinematography Mayara Santana</li><li>montagem editing Roberta Cardoso</li><li>contato contact  mayara.santana.mas@gmail.com</li><li>Classificação Indicativa 16 anos</li>',
    sinopsePt:
      'Rebu é um documentário em primeira pessoa que se propõe a investigar dentro da minha vivência sapatão as diversas performances de masculinidade, levando em conta meus três últimos relacionamentos e também entrevistas com o homem com o qual eu cresci, meu pai. O filme pretende abordar com descontração, temáticas como o talento paquerador, flexibilidade com a verdade, relacionamento abusivo, irresponsabilidade afetiva, reprodução de machismo, impulsividade e romance. Temas que permeiam a vida dos dois personagens, mesmo que separados por um recorte geracional, cultural e de gênero.',
    sinopseEng:
      'Rebu is a first-person documentary that aims to look into my lesbian life experience and the various masculinity performances, taking into account my last three relationships as well as interviews with the man with whom I grew up, my father. The film intends to approach, in a casual way, themes such as the flirting talent, truth flexibility, abusive relationships, affective irresponsibility, sexism reproduction, impulsiveness, and romance. Themes that permeate the life of both characters, even if they are separate by different generational, cultural, and gender cutouts.',
    img: 'CEP_REBU.png',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'SER FELIZ NO VÃO',
    tituloEng: 'HAPPY IN THE GAP',
    localDuracao: 'RIO DE JANEIRO, 2020, 12’',
    fichaTecnica:
      '<li>direção director Lucas H. Rossi dos Santos</li><li>roteiro script Fermino Neto, Antonio Molina Burnes</li><li>produção production Lucas H. Rossi dos Santos, Fabiane Zanol, Maria Aparecida Rossi, Edna Gramasco</li><li> montagem editing Lucas H. Rossi dos Santos</li><li>som sound Pedro Salles Santiago</li><li>elenco principal main cast Tim Mais, Nina Simone, Victoria Santa Cruz, Fela Kuti</li><li>empresa produtora production company Baraúna, Coletivo Preto, Quarentena Voadora</li><li>contato contact  arapuafilmes@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt: 'Um ensaio perto sobre trens, praias e ocupação de espaço.',
    sinopseEng: 'A black essay on trains, beaches, and space occupation.',
    img: 'CEP_SERFELIZNOVAO.jpeg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'UMA NOITE SEM LUA',
    tituloEng: 'A NIGHT WITHOUT MOON',
    localDuracao: 'ESPÍRITO SANTO, SÃO PAULO/BRASIL, BERLIM, 2020, 27\'30"',
    fichaTecnica:
      '<li>direção director Castiel Vitorino Brasileiro</li><li>roteiro script Castiel Vitorino Brasileiro</li><li>produção production Castiel Vitorino Brasileiro</li><li>animação animation Castiel Vitorino Brasileiro</li><li>fotografia cinematography Castiel Vitorino Brasileiro</li><li>montagem editing Castiel Vitorino Brasileiro</li><li>arte e figurino art and costume design Castiel Vitorino Brasileiro</li><li>som sound PODESERDESLIGADO</li><li>elenco principal main cast Castiel Vitorino Brasileiro</li><li>contato contact  castielvitorinob@gmail.com</li><li>Classificação Indicativa 14 anos</li>',
    sinopsePt:
      'Pois o limite das linguagens usadas para descrever nossas transfigurações, é a palavra. A palavra Travesti é um limite, um convite e um lembrete. E minha escuridão pré-existe à raça e ao gênero. A comunidade é, ao mesmo tempo, veneno e mel. Eu sou bantu. Eu sou a mensageira que anuncia a transmutação que nomeamos de Travesti.',
    sinopseEng:
      'For the limit of languages used to describe our transfigurations is… the word. The word Travesti is a limitation, an invitation, and a reminder. And my darkness pre-exists race and gender. The community is, at the same time, poisonous and sweet. I am bantu. I am the messenger that announces the transmutation that we name Travesti.',
    img: 'CEP_UMANOITESEMLUA.jpg',
    imgDir: 'maybe',
    link: '/',
  },
  {
    tituloPt: 'VOCÊ TEM OLHOS TRISTES',
    tituloEng: 'YOU HAVE SAD EYES',
    localDuracao: "SÃO PAULO, 2020, 19'",
    fichaTecnica:
      '<li>direção director  Diogo Leite</li><li>roteiro script  Diogo Leite</li><li>produção production  Andrea Lanzoni, Giselle Bossi, Thais Morresi, Janaina Delfino</li><li>fotografia cinematography  Jéssika Montanha, DAFB, Flora Correa, Jaque Santos</li><li>montagem editing Ana Júlia Travia</li><li>arte e figurino art and costume design  Henrique Pinto</li><li>som sound  Olívia Fiusa</li><li>elenco principal main cast Daniel Veiga, Carol Oliveira, Jean-Claude Bernardet, Giovanni Gallo, Gilda Nomacce, Larissa Ballarotti</li><li>contato contact diogoleite@hotmail.com</li><li>Classificação Indicativa 12 anos</li>',
    sinopsePt:
      'Luan trabalha como bikeboy de aplicativo e enfrenta dilemas e preconceitos na sua jornada diária de entregas em uma cidade grande. Sem hesitar, sonha com um futuro melhor.',
    sinopseEng:
      'Luan works delivering food on a bicycle while having to face dilemmas and discrimination on his journey in a big city. Without hesitating he dreams of a better future.',
    img: 'CEP_VOCETEMOLHOSTRISTES.png',
    imgDir: 'maybe',
    link: '/',
  },
];

function createDataSession1() {
  var sesTitle = document.createElement('a');
  sesTitle.className = 'sessionTitle1';
  sesTitle.innerHTML = 'SESSÃO ESPECIAL</a> <em class="fas fa-chevron-down"></em>';
  container.appendChild(sesTitle);
  for (let i = 0; i < sessaoEspecial.length; i++) {
    var postBox = document.createElement('div');
    postBox.className = 'postBox';
    postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${sessaoEspecial[i].img}')"></div>
    <div class="postInfo"><h1>${sessaoEspecial[i].tituloPt}</h1><h2>${sessaoEspecial[i].tituloEng}</h2><h3>${sessaoEspecial[i].localDuracao}</h3>
    <p>${sessaoEspecial[i].sinopsePt}</p><p>${sessaoEspecial[i].sinopseEng}</p>
    <div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
    <div class="content"><ul>${sessaoEspecial[i].fichaTecnica}</ul></div></div>
    <a href="${sessaoEspecial[i].link}" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
    container.appendChild(postBox);
  }
}
function createDataSession2() {
  var sesTitle = document.createElement('a');
  sesTitle.className = 'sessionTitle';
  sesTitle.innerHTML =
    'VIVÊNCIAS AFRO-DIASPÓRICAS</a> <em class="fas fa-chevron-down"></em>';
  container.appendChild(sesTitle);
  for (let i = 0; i < sessaoVivencias.length; i++) {
    var postBox = document.createElement('div');
    postBox.className = 'postBox hidden';
    postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${sessaoVivencias[i].img}')"></div>
    <div class="postInfo"><h1>${sessaoVivencias[i].tituloPt}</h1><h2>${sessaoVivencias[i].tituloEng}</h2><h3>${sessaoVivencias[i].localDuracao}</h3>
    <p>${sessaoVivencias[i].sinopsePt}</p><p>${sessaoVivencias[i].sinopseEng}</p>
    <div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
    <div class="content"><ul>${sessaoVivencias[i].fichaTecnica}</ul></div></div>
    <a href="${sessaoVivencias[i].link}" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
    container.appendChild(postBox);
  }
}
function createDataSession3() {
  var sesTitle = document.createElement('a');
  sesTitle.className = 'sessionTitle';
  sesTitle.innerHTML =
    'AFETOS E PARTILHAS</a> <em class="fas fa-chevron-down"></em>';
  container.appendChild(sesTitle);
  for (let i = 0; i < sessaoAfetos.length; i++) {
    var postBox = document.createElement('div');
    postBox.className = 'postBox hidden';
    postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${sessaoAfetos[i].img}')"></div>
    <div class="postInfo"><h1>${sessaoAfetos[i].tituloPt}</h1><h2>${sessaoAfetos[i].tituloEng}</h2><h3>${sessaoAfetos[i].localDuracao}</h3>
    <p>${sessaoAfetos[i].sinopsePt}</p><p>${sessaoAfetos[i].sinopseEng}</p>
    <div class="btn-filmes"><div class="info"><button type="button" class="collapsible"> MAIS INFORMAÇÕES <i class="fas fa-plus"></i></button>
    <div class="content"><ul>${sessaoAfetos[i].fichaTecnica}</ul></div></div>
    <a href="${sessaoAfetos[i].link}" class="btn" target="_blank">Assista o filme <i class="fas fa-external-link-alt"></i></a></div></div></div></div>`;
    container.appendChild(postBox);
  }
}
function createDataSession4() {
  var sesTitle = document.createElement('a');
  sesTitle.className = 'sessionTitle';
  sesTitle.innerHTML =
    'GRITOS E FABULAÇÕES DE CURA</a> <em class="fas fa-chevron-down"></em>';
  container.appendChild(sesTitle);
  for (let i = 0; i < sessaoGritos.length; i++) {
    var postBox = document.createElement('div');
    postBox.className = 'postBox hidden';
    postBox.innerHTML = `
    <div class="postImg filmeImg" style="background-image: url('${src}${sessaoGritos[i].img}')"></div>
    <div class="postInfo"><h1>${sessaoGritos[i].tituloPt}</h1><h2>${sessaoGritos[i].tituloEng}</h2><h3>${sessaoGritos[i].localDuracao}</h3>
    <p>${sessaoGritos[i].sinopsePt}</p><p>${sessaoGritos[i].sinopseEng}</p>
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