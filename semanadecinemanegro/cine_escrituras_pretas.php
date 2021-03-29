<?php
require_once __DIR__ . './function.php';
getHeader();
?>
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
                  fill: var(--cor-azul);
                }
              </style>
            <path class="st0" d="M39.9,28.8L11.1,57.6L0,47l18.4-18.2L0,10.6L11.1,0L39.9,28.8z"/>
            </svg>
            
            <h1>
              Cine-Escrituras Pretas</br><span 
              style="font-size: 24px; color:var(--cor-cinza-escuro);"
                >BLACK CINE-WRITING</span
              >
            </h1>
          </div>
          <p>
          A Mostra Cine-Escrituras Pretas, sob curadoria de Natalie Matos, Tatiana Carvalho Costa e Vanessa Santos, traz uma série de filmes, realizados entre 2019 e 2020, que abordam e afirmam múltiplas identidades e questões da negritude. Sugerindo um avizinhamento entre as obras, as curadoras propuseram três conjuntos: “Vivências afro-diaspóricas”, composto por 10 filmes; “Afetos e partilhas”, composto por 12 filmes; e “Gritos e fabulações de cura”, que conta com 10 produções. A mostra propõe, ainda, uma sessão especial com filme convidado. Os filmes não seguem uma ordem pré-definida. Com isso, espera-se que espectadores e espectadoras possam escolher livremente o seu percurso e encontro com as obras. 
          </p>
        </div>
        <div class="mainIllus"><img src="img/cine.png" alt="" /></div>
      </div>
    </section>
    <section>
      <div class="container containerColumn">
        <!--DIV DE COLLAPSE 
        DIV DE conteúdo que vai ser usada no script 
        Eu acho que pra esse, a gente vai precisar criar uma função
        pra cada sessão por uma questão de organização (?) -->
      </div>
    </section>
<?php
  getFooterOpen(); 
?>
  <script src="js/cineEscrituras.js"></script>
    <script src="js/collapse.js"></script>
  </body>
</html>
