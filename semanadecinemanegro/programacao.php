<?php
require_once __DIR__ . '/function.php';
getHeader();
?>
  <div class="page">
    <section>
      <div class="mainBanner">
        <div class="mainInfo">
          <div class="title">
          <svg xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            version="1.1" 
            id="Layer_1" 
            x="0px" y="0px" 
            viewBox="0 0 39.9 57.6" 
            style="enable-background:new 0 0 39.9 57.6;" 
            xml:space="preserve"
            >
            <style type="text/css">
                .st0 {
                  fill: var(--cor-laranja);
                }
              </style>
            <path class="st0" d="M39.9,28.8L11.1,57.6L0,47l18.4-18.2L0,10.6L11.1,0L39.9,28.8z"/>
            </svg>
            
            <h1 lang="pt">Programação</h1>
            <h1 lang="en">Program</h1>
          </div>
          <p lang="pt">
          Aqui você encontra a  programação da Semana de Cinema Negro para download. A Mostra Cine-Escrituras Pretas permanece 
          inteiramente disponível on-line ao longo dos dias de festival, com apenas 3 filmes com datas de exibição definidas. 
          As demais sessões têm datas definidas para a entrada on-line. Baixe a programação e veja as datas de exibição dos filmes, 
          das conversas internacionais e dos debates da mostra Cine-Escrituras Pretas.  
          </p>
          <p lang="en">
          Here, you will find the Black Film Week program available for download. The Black Film-Writings section will be entirely 
          available online during all days of the festival, except for 3 films with scheduled screening dates. The remaining sections 
          have a scheduled  date for online access. Download the program and check the films’ screening dates, as well as the schedule 
          of international talks and Q&A's of the Black Film-Writings section.
          </p>
        </div>
        <div class="mainIllus dowloadContainer">
          <div class="pdfCover program-cover"></div>
          <p lang="pt">Confira a programação completa do Festival.</p>
          <p lang="en">Check the complete program of the Festival.</p>
          <a href="./docs/PROGRAMACAO_SEMANADECINEMANEGRODEBELOHORIZONTE.pdf" download="Programação" class="btn download" title="Download">DOWNLOAD PDF</a>
        </div>
      </div>
    </section>
  </div>
  <?php
  getFooterOpen(); 
?>
    <script src="js/search.js"></script>
    <script src="js/main.js"></script>
    <script>translate();</script>
</body>
</html>