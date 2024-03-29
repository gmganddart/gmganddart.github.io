document.getElementById("navigbar").innerHTML = `
<style>
    ::-webkit-scrollbar {width: 5px;}
    ::-webkit-scrollbar-track {background: black;}
    ::-webkit-scrollbar-thumb {background: rgb(0, 51, 128);}
    ::-webkit-scrollbar-thumb:hover {background: rgb(0, 53, 96);}
    * {box-sizing: border-box;}
</style>
<nav class="navbar">
    <ul class="navbar-list">
        <li class="navbar-item">
            <a href="https://gmganddart.github.io/Web/Dart/dartsite" class="navbar-link">Dart</i></a>
        </li>
        <li class="navbar-item">
            <a href="https://gmganddart.github.io/Web/Gmg/Main" class="navbar-link">Gmg</a>
        </li>
        <li class="navbar-item">
            <a href="https://gmganddart.github.io" class="navbar-link"><i class="fa fa-home"></i></a>
        </li>
    </ul>
</nav>
`

document.getElementById("footer").innerHTML = `
<style>
body {background-color: #111;}
/*::-webkit-scrollbar {width:1px}*/
@media screen and (max-width: 600px) {.column {width: 100%;height: auto;}}
</style>
<div class="footer-basic">
  <footer>
    <ul class="list-inline">
        <li class="list-inline-item"><a href="https://dsstlevel.github.io/index.html">Home</a></li>
        <li class="list-inline-item"><a href="#">Top of Page</a></li>

    </ul>
  </footer>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>function autoRefresh() {window.location = window.location.href;}setInterval('autoRefresh()', 600000);</script>
`