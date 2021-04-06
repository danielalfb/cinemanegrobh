<?php
require_once __DIR__ . './function.php';
getHeader();
?>
  <div class="page">
  <section>
      <div class="errorContainer">
        <div class="errorInfo">
          <h1 id="pt">Ops!</h1>
          <!-- <h1 id="en">Ops!</h1> -->
          <h1 id="pt">O link que você buscou está indisponível!</h1></br>
          <!-- <h1 id="en">The link is unavailable!</h1></br> -->
          <h2 id="pt">Este filme ainda não foi disponibilizado.</h2>
          <!-- <h2 id="en">The movie is not yet available.</h2> -->
        </div>
        <div class="errorIllus"><img src="img/error-future.png" alt="" /></div>
      </div>
    </section>
  </div>
<?php    
getFooterOpen(); 
?>
    <script src="js/search.js"></script>
</html>