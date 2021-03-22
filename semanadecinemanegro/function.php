<?php
function getHeader() { ?> 
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
  <div class="banner-header">
    <p>Festival de Cinema Intercâmbio Cultural Brasil-África</p>
    <div class="social-media">
     <a href="#"><em class="fab fa-instagram"></em></a>
     <a href="#"><em class="fab fa-facebook-f"></em></a>
     <a href="#"><em class="fab fa-youtube"></em></a>
    </div>
  </div>
  <div class="container header">
      <div class="logo-menu">
        <a href="./inicio.html"><img src="./img/logo.svg" class="logo" alt="Logo Menu"/></a>
      </div>
      <div class="navbar">
        <div class="conteudo" onclick="menuMobile(this)">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <ul id="nav-list">
          <li><a class="ativo" href="#">Início</a></li>
          <li><a href="#">Programação</a></li>
         <div class="dropdown">
             <li><a href="#">Mostras <em class="fas fa-chevron-down"></em></a></li>
             <div class="dropdown-content">
                <li><a href="#">Mostra Principal</a></li>
                <li><a href="#">Mostra Brasileira</a></li>
                <li><a href="#">Mostra Paralela</a></li>
                <li><a href="#">Mostra Homangem</a></li>
             </div>
         </div>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Créditos</a></li>
          <div class="search-container">
         <form action="#">
         <input type="text" name="search">
         <button type="submit"><em class="fa fa-search"></em></button>
         </form>
         </div>
        </ul>
      </div>
    </div>
 <?php }

 function getFooter() { ?>
<!-- FOOTER -->
<footer id="footer">
     <div class="logo-footer">
        <a href="./inicio.html"><img src="./img/logo.svg" class="logo" alt="Logo Footer"/></a>
      </div>
      <div class="nav-footer-left">
        <ul id="nav-footer-list">
          <li><a href="#">Sessão de Abertura</a></li>
          <li><a href="#">Mostra Principal</a></li>
          <li><a href="#">Mostra Brasileira</a></li>
          <li><a href="#">Mostra Paralela</a></li>
          <li><a href="#">Mostra Homangem</a></li>
        </ul>
      </div>
      <div class="nav-footer-dir">
        <ul id="nav-footer-list">
          <li><a href="#">Oficinas</a></li>
          <li><a href="#">Debates</a></li>
          <li><a href="#">Programação</a></li>
          <li><a href="#">Catálogo</a></li>
          <li><a href="#">Créditos</a></li>
        </ul>
      </div>
      <div class="text-footer">
          <p>
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
    <div class="social-media">
     <a href="#"><em class="fab fa-instagram"></em></a>
     <a href="#"><em class="fab fa-facebook-f"></em></a>
     <a href="#"><em class="fab fa-youtube"></em></a>
    </div>
</footer>
  </body>
</html>
<?php } 