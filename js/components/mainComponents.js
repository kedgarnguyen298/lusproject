const components = {}

components.loading = `
    <div class="container">
        <div class="row">
            <div id="loader">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="lading"></div>
            </div>
        </div>
    </div>
`

components.nav = `
<nav class="navbar navbar-light per-nav">
  <a class="navbar-brand" href="#">
    <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    LUS
  </a>
  <span id=user-welcome></span>
  <button id="log-out-btn" class="icon-btn"><i class="fas fa-sign-out-alt"></i></button>
</nav>
`
