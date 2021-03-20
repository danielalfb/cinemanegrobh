<?php
function getHeader() { ?> 
 <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="pt-BR" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Semana de Cinema Negro de Belo Horizonte</title>
    <link rel="stylesheet" type="text/css" href="./css/main.css" />
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
          <li><a href="#">Mostras</a></li>
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
<section>
      <div class="footer ">
       <p>FOOTER</p>
      </div>
    </section>
  </body>
</html>
<?php } 