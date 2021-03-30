<?php
require_once __DIR__ . './function.php';
getHeader();
?>
   <!--banner:-->
    <section>
      <div class="container flex-end">
        <img class="inicio" src="img/inicio.png" alt="Foto em família ilustrada"/>
        <div class="paragrafo-inicio">
          <h3>Sobre a semana</h3>
          <p>
          A Semana de Cinema Negro de Belo Horizonte apresenta, 
          de 10 a 16 de abril de 2021, um conjunto composto por 50 filmes 
          de cinematografias negras brasileiras, africanas e da diáspora 
          distribuídos em 3 mostras e 2 homenagens:  "Cinemas Africanos 
          em revista: as origens do FESPACO"; "Surreal16 Collective, Um 
          Novo Olhar para o Cinema Nigeriano"; "Cine-Escrituras Pretas"; 
          "Sessão Maria José Novais Oliveira: Nossa atriz"; e "Cinema, 
          negritude e poesia: uma homenagem a Sarah Maldoror”.
          </p>
          <p>
          As sessões fílmicas estarão disponibilizadas, de forma on-line e gratuita, na plataforma TodesPlay (https://todesplay.com.br/), gerida pela APAN - Associação do Audiovisual Negro. Nesta edição, além das mostras, teremos conversas com convidadas e convidados internacionais, bem como debates com realizadoras e realizadores na mostra dedicada aos filmes brasileiros, todos serão exibidos no canal do Youtube da Semana de Cinema Negro. Contamos, ainda, com duas oficinas: "Programar filmes e construir imaginários: a potência do ofício da curadoria no cinema" ministrada por Heitor Augusto e “QuilomboCinema” ministrada por Tatiana Carvalho Costa.
          </p>
          <p>A primeira edição da Semana de Cinema Negro de Belo Horizonte propõe um olhar de resgate às nossas memórias. Estamos vivendo um momento de crise sanitária e econômica mundial, por conta da pandemia de Covid-19, e se faz necessário visitar lembranças para despertar o desejo de vivê-las novamente. Para isso, também, elaboramos um catálogo com textos que refletem sobre as nossas mostras, como a dedicada ao FESPACO (Festival Panafricano de Cinema e Televisão de Ouagadougou que acontece em Burkina Faso) que completou mais de 50 anos de existência, teremos um texto sobre o cinema nigeriano, com atenção especial às produções do coletivo Surreal16, sobre o cinema de Sarah Maldoror, sobre a presença de Maria José Novais Oliveira, nossa querida Dona Zezé, no cinema e sobre o processo de curadorias negras que perspectivam, a partir das próprias experiências, com olhar renovado para esse espaço, o da curadoria.</p>
          <p>Convidamos a todas, todes e todos a acompanhar a programação.</p>       
          <div class="btn-inicio">
            <a href="/" class="btn" title="Link da plataforma">Link da plataforma</a>
            <a href="/programacao.php" class="btn" title="Programação">Programação</a>
            <a href="/catalogo.php" class="btn" title="Catálogo">Catálogo</a>
          </div>
        </div>
      </div>
    </section>
    <section>
    <div class="video">
      <button id = "button"><em class = "fa fa-play" aria-hidden = "true"></em></button>
      <div id = "lightbox">
        <em id = "close-btn" class="fa fa-times"></em>
        <div id = "video-wrapper">
          <iframe class="youtube-video" title="Video Inicial" id = "video" width="960" height="540" src = "https://www.youtube.com/embed/lJfqK9bgIng" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </section>
    <?php
  getFooterOpen(); 
?>
  <script src="js/collapse.js"></script>
</html>