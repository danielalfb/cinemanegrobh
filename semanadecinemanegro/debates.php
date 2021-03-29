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
                  fill: var(--cor-laranjao);
                }
              </style>
            <path class="st0" d="M39.9,28.8L11.1,57.6L0,47l18.4-18.2L0,10.6L11.1,0L39.9,28.8z"/>
            </svg>
            <h1>Debates</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit
            amet diam sit amet quam mattis maximus. Proin congue justo vitae
            diam facilisis mattis. Vestibulum nec suscipit massa. Sed odio
            tortor, faucibus eu mauris at, mollis tempus orci. Proin risus orci,
            imperdiet ac mauris et, egestas auctor leo. Integer erat nisl,
            eleifend ac laoreet id, finibus eu arcu. In vitae diam vestibulum,
            gravida quam semper, accumsan justo. Suspendisse vehicula mauris id
            blandit finibus. Nunc dolor enim, cursus ut congue nec, euismod a
            turpis. Integer suscipit sapien sit amet ullamcorper lobortis.
            Mauris vitae bibendum nisl, et venenatis nulla. Duis sollicitudin
            rutrum ipsum nec luctus. Maecenas hendrerit lacinia ultricies. Fusce
            vel quam ac dui condimentum volutpat vel vel elit. Aenean eget felis
            vitae nunc porta malesuada. Duis efficitur orci nec suscipit
            viverra. In dictum, arcu vel blandit pretium, dolor metus hendrerit
            ligula, quis maximus erat ex ac lorem. Nunc ornare quam sed
            condimentum pretium. In dapibus lectus quis dolor vehicula
            elementum. Duis sollicitudin nisl et faucibus pellentesque. Cras
            dictum erat at massa eleifend euismod.
          </p>
        </div>
        <div class="mainIllus">
          <img src="img/debates.png" alt="" />
        </div>
      </div>
    </section>
    <section>
      <div class="debateContainer">
        <div class="debateBox">
          <div class="debateTitle">
            <h1>[ DEBATE 1] Vivências Afro-Diaspóricas</h1>
            <h2>12/04/2021, 19H</h2>
          </div>
          <div class="debateInfo">
            <ul>
              <li>
                <div
                  class="postImg debateImg"
                  style="
                    background-image: url('img/oficinas/OF_HeitorAugusto.jpg');
                  "
                ></div>
                <span>Milena Manfredini | De um lado do Atlântico</span>
              </li>
              <li>
                <a href="/" class="btn debate-btn"
                  >ASSISTA NO YOUTUBE <i class="fas fa-external-link-alt"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
<?php
  getFooter();
?>
