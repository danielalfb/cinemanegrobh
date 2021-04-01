<?php
function getHeader() { 
  $activePage = basename($_SERVER['PHP_SELF'], ".php");
  ?> 
 <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="pt-BR" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semana de Cinema Negro de Belo Horizonte</title>
    <script src="./js/main.js"></script>
    <link rel="stylesheet" type="text/css" href="./css/main.css" />
    <link rel="stylesheet" type="text/css" href="./css/screen.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
  </head>
  <body>
  <!-- HEADER -->
  <div class="full-header">
    <div class="banner-header">
      <div class="subtitle"><img src="./img/detalhe_topBar.svg" alt="Logo"><p>Festival de Cinema Intercâmbio Cultural Brasil-África</p></div>  
      <div class="social-media">
       <a href="#"><em class="fab fa-instagram"></em></a>
       <a href="#"><em class="fab fa-facebook-f"></em></a>
       <a href="#"><em class="fab fa-youtube"></em></a>
      </div>
    </div>
    <div class="container-header header">
        <div class="logo-menu">
          <a href="./inicio.php"><img src="./img/logo.svg" class="logo" alt="Logo Menu" title="Início"/></a>
        </div>
        <div class="navbar">
          <div class="conteudo" onclick="menuMobile(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <ul id="nav-list">
            <li><a class="<?= ($activePage == 'inicio') ? 'active':''; ?>" href="./inicio.php">Início</a></li>
            <li><a  class="<?= ($activePage == 'programacao') ? 'active':''; ?>" href="./programacao.php">Programação</a></li>
           <div class="dropdown">
               <li><a>Mostras <em class="fas fa-chevron-down"></em></a></li>
               <div class="dropdown-content">
                  <li><a href="./sessao_de_abertura.php">Maria José Novais Oliveira - Nossa atriz</a></li>
                  <li><a href="./mostra_fespaco.php">Cinemas Africanos em revista: as origens do FESPACO</a></li>
                  <li><a href="./mostra_surreal16.php">Surreal16 Collective, Um Novo Olhar para o Cinema Nigeriano</a></li>
                  <li><a href="./mostra_homenagem.php">Cinema, negritude e poesia: uma homenagem a Sarah Maldoror</a></li>
                  <li><a href="./cine_escrituras_pretas.php">Cine-Escrituras Pretas</a></li>
               </div>
           </div>
           <div class="dropdown">
               <li><a>Atividades <em class="fas fa-chevron-down"></em></a></li>
               <div class="dropdown-content">
                  <li><a href="./oficinas.php">Oficinas</a></li>
                  <li><a href="./debates.php">Debates</a></li>
                  
               </div>
           </div>
            <li><a class="<?= ($activePage == 'catalogo') ? 'active':''; ?>" href="./catalogo.php">Catálogo</a></li>
            <li><a  class="<?= ($activePage == 'creditos') ? 'active':''; ?>" href="./creditos.php">Créditos</a></li>
            <div class="search-container">
           <form action="#">
           <input type="text" name="search">
           <button type="submit"><em class="fa fa-search"></em></button>
           </form>
           </div>
          </ul>
        </div>
      </div>
  </div>
 <?php }

function getFooter() { ?>
  <!-- FOOTER -->
  <div class="patrocinio"><img src="./img/regua-patrocinioCentralizada.svg" alt=""></div>
  <footer class="footer-distributed">

<div class="footer-left">
  <a href="./inicio.php"><img src="./img/logo_branca.svg" class="logo" alt="Logo Footer"/></a>
  <div>
          <ul>
            <li><a href="./sessao_de_abertura.php">Maria José Novais Oliveira - Nossa atriz</a></li>
            <li><a href="./mostra_fespaco.php">Cinemas Africanos em revista: as origens do FESPACO</a></li>
            <li><a href="./mostra_surreal16.php">Surreal16 Collective, Um Novo Olhar para o Cinema Nigeriano</a></li>
            <li><a href="./mostra_homenagem.php">Cinema, negritude e poesia: uma homenagem a Sarah Maldoror</a></li>
            <li><a href="./cine_escrituras_pretas.php">Cine-Escrituras Pretas</a></li>
        </ul>
    </div>
</div>

<div class="footer-center">
      <ul>
            <li><a href="./oficinas.php">Oficinas</a></li>
            <li><a href="./debates.php">Debates</a></li>
            <li><a href="./programacao.php">Programação</a></li>
            <li><a href="./catalogo.php">Catálogo</a></li>
            <li><a href="./creditos.php">Créditos</a></li>
          </ul>
</div>
<div class="footer-right">
  <p class="footer-about">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
      amet diam sit amet quam mattis maximus. Proin congue justo vitae
      diam facilisis mattis. Vestibulum nec suscipit massa. Sed odio
      tortor, faucibus eu mauris at, mollis tempus orci. Proin risus orci,
      imperdiet ac mauris et, egestas auctor leo. Integer erat nisl,
      eleifend ac laoreet id, finibus eu arcu. In vitae diam vestibulum,
      gravida quam semper, accumsan justo. Suspendisse vehicula mauris id
      blandit finibus.

</p>
</div>
<div class="border"></div>
<div class="footer-icons">
    <a href="#"><em class="fab fa-instagram"></em></a>
    <a href="#"><em class="fab fa-facebook-f"></em></a>
    <a href="#"><em class="fab fa-youtube"></em></a>
  </div>
</footer>
    </body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  </html>
<?php }

function getFooterOpen() { ?>
<div class="patrocinio"><img src="./img/regua-patrocinioCentralizada.svg" alt=""></div>
<footer class="footer-distributed">

<div class="footer-left">
  <a href="./inicio.php"><img src="./img/logo_branca.svg" class="logo" alt="Logo Footer"/></a>
  <div>
          <ul>
            <li><a href="./sessao_de_abertura.php">Maria José Novais Oliveira - Nossa atriz</a></li>
            <li><a href="./mostra_fespaco.php">Cinemas Africanos em revista: as origens do FESPACO</a></li>
            <li><a href="./mostra_surreal16.php">Surreal16 Collective, Um Novo Olhar para o Cinema Nigeriano</a></li>
            <li><a href="./mostra_homenagem.php">Cinema, negritude e poesia: uma homenagem a Sarah Maldoror</a></li>
            <li><a href="./cine_escrituras_pretas.php">Cine-Escrituras Pretas</a></li>
        </ul>
    </div>
</div>

<div class="footer-center">
      <ul>
            <li><a href="./oficinas.php">Oficinas</a></li>
            <li><a href="./debates.php">Debates</a></li>
            <li><a href="./programacao.php">Programação</a></li>
            <li><a href="./catalogo.php">Catálogo</a></li>
            <li><a href="./creditos.php">Créditos</a></li>
          </ul>
</div>
<div class="footer-right">
  <p class="footer-about">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
      amet diam sit amet quam mattis maximus. Proin congue justo vitae
      diam facilisis mattis. Vestibulum nec suscipit massa. Sed odio
      tortor, faucibus eu mauris at, mollis tempus orci. Proin risus orci,
      imperdiet ac mauris et, egestas auctor leo. Integer erat nisl,
      eleifend ac laoreet id, finibus eu arcu. In vitae diam vestibulum,
      gravida quam semper, accumsan justo. Suspendisse vehicula mauris id
      blandit finibus.

</p>
</div>
<div class="border"></div>
<div class="footer-icons">
    <a href="#"><em class="fab fa-instagram"></em></a>
    <a href="#"><em class="fab fa-facebook-f"></em></a>
    <a href="#"><em class="fab fa-youtube"></em></a>
  </div>
</footer>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<?php }