<?php
require_once __DIR__ . '/function.php';
getHeader();
?>
<div class="page">
   <!--banner:-->
    <section>
      <div class="container-inicio center">
        <img class="inicio" src="img/inicio.png" alt="Foto em família ilustrada"/>
            <div class="paragrafo-inicio">
                <h3 lang="pt">Sobre a semana</h3>
                <h3 lang="en">About the Week</h3>
              <p lang="pt">
              A Semana de Cinema Negro de Belo Horizonte apresenta, 
              de 10 a 16 de abril de 2021, um conjunto composto por 50 filmes 
              de cinematografias negras brasileiras, africanas e da diáspora 
              distribuídos em 3 mostras e 2 homenagens:  "Cinemas Africanos 
              em revista: as origens do FESPACO"; "Surreal16 Collective, Um 
              Novo Olhar para o Cinema Nigeriano"; "Cine-Escrituras Pretas"; 
              "Sessão Maria José Novais Oliveira: Nossa atriz"; e "Cinema, 
              negritude e poesia: uma homenagem a Sarah Maldoror”.
              </p>
              <p lang="en">
              From April 10th to 16th, 2021, the Belo Horizonte Black Film Week will present a selection of 50 films 
              from Brazilian, African, and Diasporic black cinematography organized into 3 sections and 2 tributes: 
              “African Films Revisited: the origins of FESPACO”; “Surreal16 Collective, A New Look at Nigerian Cinema”; 
              “Black Film-Writings”; “Maria José Novais Oliveira: Our Actress”; and “Film, negritude and poetry: a tribute to Sarah Maldoror”.
              </p>
              <p lang="pt">
                As sessões fílmicas estarão disponibilizadas, de forma on-line e gratuita, na plataforma TodesPlay (https://todesplay.com.br/), 
                gerida pela APAN - Associação do Audiovisual Negro. Nesta edição, além das mostras, teremos conversas com convidadas e convidados 
                internacionais, bem como debates com realizadoras e realizadores na mostra dedicada aos filmes brasileiros, todos serão exibidos 
                no canal do Youtube da Semana de Cinema Negro. Contamos, ainda, com duas oficinas: "Programar filmes e construir imaginários: 
                a potência do ofício da curadoria no cinema" ministrada por Heitor Augusto e “QuilomboCinema” ministrada por Tatiana Carvalho Costa.
              </p>
              <p lang="en">
               The film programs will be made available for viewing online and free of charge, on  TodesPlay (https://todesplay.com.br), 
                a platform managed by APAN – Associação do Audiovisual Negro [Association of Black Audiovisual]. In this edition, besides 
                the sections, we will have talks with the international guests, and Q&A's with filmmakers in the section dedicated to 
                Brazilian films, all of which will be broadcast on the Semana de Cinema Negro de Belo Horizonte’s YouTube channel. We
                 will also have two workshops: “The power in film programming and reshaping the collective imaginary” lectured by Heitor 
                 Augusto and “QuilomboCinema” lectured by Tatiana Carvalho Costa.
              </p>
              <p lang="pt">A primeira edição da Semana de Cinema Negro de Belo Horizonte propõe um olhar de resgate às nossas memórias. 
                Estamos vivendo um momento de crise sanitária e econômica mundial, por conta da pandemia de Covid-19, e se faz necessário 
                visitar lembranças para despertar o desejo de vivê-las novamente. Para isso, também, elaboramos um catálogo com textos que 
                refletem sobre as nossas mostras, como a dedicada ao FESPACO (Festival Panafricano de Cinema e Televisão de Ouagadougou que 
                acontece em Burkina Faso) que completou mais de 50 anos de existência, teremos um texto sobre o cinema nigeriano, com atenção 
                especial às produções do coletivo Surreal16, sobre o cinema de Sarah Maldoror, sobre a presença de Maria José Novais Oliveira,
                 nossa querida Dona Zezé, no cinema e sobre o processo de curadorias negras que perspectivam, a partir das próprias experiências,
                  com olhar renovado para esse espaço, o da curadoria.
                </p>
                <p lang="en">
                The first edition of Belo Horizonte Black Film Week proposes an outlook of retrieval of 
                our memories. Due to the Covid-19 pandemic, we are living in a moment of worldwide sanitary 
                and economic crisis and it is necessary to visit memories that awaken the desire of reliving them.
                Therefore, we also prepared a catalog with texts that reflect on our sections such as the one dedicated
                to FESPACO (Panafrican Film and Television Festival of Ouagadougou) that celebrated more than 50 years 
                of existence. We will also have a text about the Nigerian Cinema, paying special attention to the
                Surreal16 Collective productions. In parallel, there will be one text about Sarah Maldoror’s cinema, 
                one about the presence of Maria José novais (our dear Dona Zezé) on film, and one text discussing 
                the black curatorial process that put into perspective, from their own experiences, with a renewed 
                gaze to this field, the one of curatorship.
                </p>
              <p lang="pt">Convidamos a todas, todes e todos a acompanhar a programação.</p>       
              <p lang="en">We invite all of you to keep up with the program.</p>
              <div class="btn-inicio">
                <a lang="pt"href="https://todesplay.com.br/" class="btn" title="Plataforma TodesPlay">TodesPlay</a>
                <a lang="en"href="https://todesplay.com.br/" class="btn" title="Plataform TodesPlay">TodesPlay</a>
                <a lang="pt"href="/programacao.php" class="btn" title="Programação">Programação</a>
                <a lang="en"href="/programacao.php" class="btn" title="Program">Program</a>
                <a lang="pt"href="/catalogo.php" class="btn" title="Catálogo">Catálogo</a>
                <a lang="en"href="/catalogo.php" class="btn" title="Catalog">Catalog</a>
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
          <iframe class="youtube-video" title="Video Inicial" id = "video" width="960" height="540" src = "https://www.youtube.com/embed/2BC7rhrY-zY" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </section>
</div>
    <?php
  getFooterOpen(); 
?>
  <script src="js/main.js"></script>
  <script>translate();</script>
  <script src="js/search.js"></script>
  <script src="js/collapse.js"></script>
</html>