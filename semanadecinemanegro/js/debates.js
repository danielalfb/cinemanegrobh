var container = document.querySelector('.debateContainer');
var src = './img/debates/';
var boxContent = [
  {
    titulo: '[ DEBATE 1] Vivências Afro-Diaspóricas ',
    data: '4/12/21',
    horario: '19H',
    direcao1: 'Milena Manfredini | De um lado do Atlântico',
    funcao1: 'Diretora',
    img1: 'CEP_DEUMLADODOATLANTICO_MILENAMANFREDINI.png',
    direcao2: 'Simone Ferreira Nascimento | Raízes',
    funcao2: 'Diretora',
    img2: 'CEP_RAIZES_SIMONENASCIMENTO.jpeg',
    direcao3: 'Wellington Amorim de Oliveira | Raíze',
    funcao3: 'Diretora',
    img3: 'CEP_RAIZES_WELLINGTONAMORIM.jpeg',
    direcao4: 'Natara Ney | Novo Mundo',
    funcao4: 'Diretora',
    img4: 'CEP_NOVOMUNDO_NATARANEYGILVANBARRETO.jpg',
    direcao5: '',
    funcao5: '',
    img5: '',
    direcao6: '',
    funcao6: '',
    img6: '',
    link: 'https://www.instagram.com/',
  },
  {
    titulo: '[ DEBATE 1] Vivências Afro-Diaspóricas ',
    data: '4/12/21',
    horario: '19H',
    direcao1: 'Milena Manfredini | De um lado do Atlântico',
    funcao1: 'Diretora',
    img1: 'CEP_DEUMLADODOATLANTICO_MILENAMANFREDINI.png',
    direcao2: 'Simone Ferreira Nascimento | Raízes',
    img2: 'CEP_RAIZES_SIMONENASCIMENTO.jpeg',
    direcao3: 'Wellington Amorim de Oliveira | Raíze',
    img3: 'CEP_RAIZES_WELLINGTONAMORIM.jpeg',
    direcao4: 'Natara Ney | Novo Mundo',
    img4: 'CEP_NOVOMUNDO_NATARANEYGILVANBARRETO.jpg',
    direcao5: '',
    funcao5: '',
    img5: '',
    direcao6: '',
    funcao6: '',
    img6: '',
    link: 'https://www.instagram.com/',
  },
  {
    titulo: '[ DEBATE 1] Vivências Afro-Diaspóricas ',
    data: '4/12/21',
    horario: '19H',
    direcao1: 'Milena Manfredini | De um lado do Atlântico',
    funcao1: 'Diretora',
    img1: 'CEP_DEUMLADODOATLANTICO_MILENAMANFREDINI.png',
    direcao2: 'Simone Ferreira Nascimento | Raízes',
    funcao2: 'Diretora',
    img2: 'CEP_RAIZES_SIMONENASCIMENTO.jpeg',
    direcao3: 'Wellington Amorim de Oliveira | Raíze',
    funcao3: 'Diretora',
    img3: 'CEP_RAIZES_WELLINGTONAMORIM.jpeg',
    direcao4: 'Natara Ney | Novo Mundo',
    funcao4: 'Diretora',
    img4: 'CEP_NOVOMUNDO_NATARANEYGILVANBARRETO.jpg',
    direcao5: 'Natara Ney | Novo Mundo',
    funcao5: 'Diretora',
    img5: 'CEP_NOVOMUNDO_NATARANEYGILVANBARRETO.jpg',
    direcao6: 'Natara Ney | Novo Mundo',
    funcao6: 'Diretora',
    img6: 'CEP_NOVOMUNDO_NATARANEYGILVANBARRETO.jpg',
    link: 'https://www.instagram.com/',
  },
  {
    titulo: '[ DEBATE 1] Vivências Afro-Diaspóricas ',
    data: '4/12/21',
    horario: '19H',
    direcao1: 'Milena Manfredini | De um lado do Atlântico',
    funcao1: 'Diretora',
    img1: 'CEP_DEUMLADODOATLANTICO_MILENAMANFREDINI.png',
    direcao2: 'Simone Ferreira Nascimento | Raízes',
    img2: 'CEP_RAIZES_SIMONENASCIMENTO.jpeg',
    direcao3: 'Wellington Amorim de Oliveira | Raíze',
    img3: 'CEP_RAIZES_WELLINGTONAMORIM.jpeg',
    direcao4: 'Natara Ney | Novo Mundo',
    img4: 'CEP_NOVOMUNDO_NATARANEYGILVANBARRETO.jpg',
    direcao5: '',
    funcao5: '',
    img5: '',
    direcao6: '',
    funcao6: '',
    img6: '',
    link: 'https://www.instagram.com/',
  },
];

function createData() {
  for (i = 0; i < boxContent.length; i++) {
    var debateBox = document.createElement('div');
    debateBox.className = 'debateBox';
    debateBox.innerHTML = `
    <div class="debateTitle">
    <h1>${boxContent[i].titulo}</h1>
    <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2></div>
    <div class="debateInfo">
    <ul>
    <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img1}')"></div>
    <span>${boxContent[i].direcao1}<br><p>${boxContent[i].funcao1}</p></li>
    <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img2}')"></div>
    <span>${boxContent[i].direcao2}<br><p>${boxContent[i].funcao2}</p></li>
    <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img3}')"></div>
    <span>${boxContent[i].direcao3}<br><p>${boxContent[i].funcao3}</p></li>
    <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img4}')"></div>
    <span>${boxContent[i].direcao4}<br><p>${boxContent[i].funcao4}</p></li>
    <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img5}')"></div>
    <span>${boxContent[i].direcao5}<br><p>${boxContent[i].funcao5}</p></li>
    <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img6}')"></div>
    <span>${boxContent[i].direcao6}<br><p>${boxContent[i].funcao6}</p></li>
    <li> <a href="${boxContent[i].link}" class="btn debate-btn" target="_blank" >ASSISTA NO YOUTUBE <i class="fas fa-external-link-alt"></i ></a></li>
    </ul>
    </div></div>`;
    container.appendChild(debateBox);
  }
}
createData();
