var container = document.querySelector('.debateContainer');
var src = './img/debates/';
var boxContent = [];

function fetchJson(url) {
  return fetch(url).then((ans) => {
    return ans.json();
  });
}

async function loadData() {
  var data = await fetchJson('/js/data.json');
  boxContent = data.debates;

  function createData() {
    for (i = 0; i < boxContent.length; i++) {
      if (boxContent[i].participantes === 2) {
        var debateBox2 = document.createElement('div');
        debateBox2.className = 'debateBox';
        debateBox2.innerHTML = `
        <div class="debateTitle">
        <h1>${boxContent[i].tituloPt}</h1>
        <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2></div>
        <div class="debateInfo">
        <ul>
        <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
        <span>${boxContent[i].direcao1}<br><p>${boxContent[i].funcao1}</p></li>
        <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img2}')"></div>
        <span>${boxContent[i].direcao2}<br><p>${boxContent[i].funcao2}</p></li>
        <li> <a href="${boxContent[i].link}" class="btn debate-btn" target="_blank" >ASSISTA NO YOUTUBE <i class="fas fa-external-link-alt"></i ></a></li>
        </ul>
        </div></div>`;
        container.appendChild(debateBox2);
      } else if (boxContent[i].participantes === 3) {
        var debateBox3 = document.createElement('div');
        debateBox3.className = 'debateBox';
        debateBox3.innerHTML = `
            <div class="debateTitle">
            <h1>${boxContent[i].tituloPt}</h1>
            <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2></div>
            <div class="debateInfo">
            <ul>
            <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
            <span>${boxContent[i].direcao1}<br><p>${boxContent[i].funcao1}</p></li>
            <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img2}')"></div>
            <span>${boxContent[i].direcao2}<br><p>${boxContent[i].funcao2}</p></li>
            <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img3}')"></div>
            <span>${boxContent[i].direcao3}<br><p>${boxContent[i].funcao3}</p></li>
            <li> <a href="${boxContent[i].link}" class="btn debate-btn" target="_blank" >ASSISTA NO YOUTUBE <i class="fas fa-external-link-alt"></i ></a></li>
            </ul>
            </div></div>`;
        container.appendChild(debateBox3);
      } else if (boxContent[i].participantes === 4) {
        var debateBox4 = document.createElement('div');
        debateBox4.className = 'debateBox';
        debateBox4.innerHTML = `
              <div class="debateTitle">
              <h1>${boxContent[i].tituloPt}</h1>
              <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2></div>
              <div class="debateInfo">
              <ul>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
              <span>${boxContent[i].direcao1}<br><p>${boxContent[i].funcao1}</p></li>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img2}')"></div>
              <span>${boxContent[i].direcao2}<br><p>${boxContent[i].funcao2}</p></li>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img3}')"></div>
              <span>${boxContent[i].direcao3}<br><p>${boxContent[i].funcao3}</p></li>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img4}')"></div>
              <span>${boxContent[i].direcao4}<br><p>${boxContent[i].funcao4}</p></li>
              <li> <a href="${boxContent[i].link}" class="btn debate-btn" target="_blank" >ASSISTA NO YOUTUBE <i class="fas fa-external-link-alt"></i ></a></li>
              </ul>
              </div></div>`;
        container.appendChild(debateBox4);
      } else if (boxContent[i].participantes === 5) {
        var debateBox5 = document.createElement('div');
        debateBox5.className = 'debateBox';
        debateBox5.innerHTML = `
              <div class="debateTitle">
              <h1>${boxContent[i].tituloPt}</h1>
              <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2></div>
              <div class="debateInfo">
              <ul>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
              <span>${boxContent[i].direcao1}<br><p>${boxContent[i].funcao1}</p></li>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img2}')"></div>
              <span>${boxContent[i].direcao2}<br><p>${boxContent[i].funcao2}</p></li>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img3}')"></div>
              <span>${boxContent[i].direcao3}<br><p>${boxContent[i].funcao3}</p></li>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img4}')"></div>
              <span>${boxContent[i].direcao4}<br><p>${boxContent[i].funcao4}</p></li>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img5}')"></div>
              <span>${boxContent[i].direcao5}<br><p>${boxContent[i].funcao5}</p></li>
              <li> <a href="${boxContent[i].link}" class="btn debate-btn" target="_blank" >ASSISTA NO YOUTUBE <i class="fas fa-external-link-alt"></i ></a></li>
              </ul>
              </div></div>`;
        container.appendChild(debateBox5);
      } else if (boxContent[i].participantes === 6) {
        var debateBox6 = document.createElement('div');
        debateBox6.className = 'debateBox';
        debateBox6.innerHTML = `
              <div class="debateTitle">
              <h1>${boxContent[i].tituloPt}</h1>
              <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2></div>
              <div class="debateInfo">
              <ul>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
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
        container.appendChild(debateBox6);
      } else {
        var debateBox7 = document.createElement('div');
        debateBox7.className = 'debateBox';
        debateBox7.innerHTML = `
              <div class="debateTitle">
              <h1>${boxContent[i].tituloPt}</h1>
              <h2>${boxContent[i].data}, ${boxContent[i].horario}</h2></div>
              <div class="debateInfo">
              <ul>
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img}')"></div>
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
              <li><div class="postImg debateImg" style="background-image: url('${src}${boxContent[i].img7}')"></div>
              <span>${boxContent[i].direcao7}<br><p>${boxContent[i].funcao7}</p></li>
              <li> <a href="${boxContent[i].link}" class="btn debate-btn" target="_blank" >ASSISTA NO YOUTUBE <i class="fas fa-external-link-alt"></i ></a></li>
              </ul>
              </div></div>`;
        container.appendChild(debateBox7);
      }
    }
  }
  createData();
  translate();
}
loadData();
