<?php
require_once __DIR__ . './function.php';
getHeader();
?>
  <div class="page">
    <section>
      <div class="mainBanner">
        <div class="mainInfo">
          <div class="title creditos">
            <!-- <img src="img/detalhe_topBar.svg" alt="" /> -->
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
            <h1>Créditos</h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="teamContainer">
          <div class="teamSing">
            <h1>Layla Braz</h1>
            <h2>Coordenação Geral/ Direção Artística</h2>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="div-video">
        <div class="video-footer">
          <button id = "button"><em class = "fa fa-play" aria-hidden = "true"></em></button>
          <div id = "lightbox">
            <em id = "close-btn" class="fa fa-times"></em>
            <div id = "video-wrapper">
              <iframe class="youtube-video" title="Video Inicial" id = "video" width="960" height="540" src = "https://www.youtube.com/embed/lJfqK9bgIng" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
  </div>
<?php    
getFooterOpen(); 
?>
    <script src="js/search.js"></script>
  <script src="js/collapse.js"></script>
</html>