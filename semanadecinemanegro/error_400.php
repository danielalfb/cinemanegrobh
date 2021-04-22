<?php
require_once __DIR__ . '/function.php';
getHeader();
?>
  <div class="page">
  <section>
      <div class="errorContainer">
        <div class="errorInfo">
          <h1 lang="pt">Ops!</h1>
          <h1 lang="en">Ops!</h1>
          <h1 lang="pt">O link está indisponível!</h1>
          <h1 lang="en">The link is unavailable!</h1>
          <h2 lang="pt">O conteúdo será disponibilizado em breve.</h2>
          <h2 lang="en">The content is not yet available.</h2>
        </div>
        <div class="errorIllus"><img src="img/error-future.png" alt="" /></div>
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