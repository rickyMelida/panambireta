<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="icon" href="img/cruz.ico">
    <link rel="stylesheet" href="css/estilo.css">
    <title>IBPR</title>
</head>
<body>
    <header class="container-fluid">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
            <div class="container">
                <h1 class="navbar-brand">IBPR</h1>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="menu">
                   <ul class="navbar-nav ml-auto">
                       <li class="nav-item"><a href="#" class="nav-link">Inicio</a></li>
                       <li class="nav-item"><a href="#" class="nav-link">Nosotros</a></li>
                       <li class="nav-item"><a href="#" class="nav-link">Servicios</a></li>
                       <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
                       <li class="nav-item"><a href="#" class="nav-link">Radio</a></li>
                   </ul>
                </div>
            </div>
        </nav>
    </header>
    

    <!----------------Portada Principal de Pagina-------------->
    <div class="d-block portada">
        <div class="carousel slide" id="botones" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="imagenes/img_1.JPG" class=" w-100" >
                </div>
                <div class="carousel-item ">
                    <img src="imagenes/img_2.JPG" class=" w-100" >
                </div>
                <div class="carousel-item ">
                    <img src="imagenes/img_3.JPG" class=" w-100" >
                </div>
                <div class="carousel-item ">
                    <img src="imagenes/img_4.JPG" class=" w-100" >
                </div>
                <div class="carousel-item ">
                    <img src="imagenes/img_5.JPG" class=" w-100" >
                </div>
            </div>
        </div>
    

        <!--Boton que manda a la izquierda-->
        <a class="carousel-control-prev" href="#botones" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>

        <!--Boton de la derecha-->
        <a class="carousel-control-next" href="#botones" role="button" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>

    <!--------------------Contenidos------------------------------>


    <!----------------Pie de pagina y redes sociales----------->
    <div class="d-block fixed-bottom">
        <footer class="bg-secondary text-center text-dark ">
            <span><strong>&copy; 2019 - IBPR - M. Amigos de Jesús</strong></span><br>
            <div class=row>
                <div class="col-md-12 col-md-lg">
                    <a href="http://facebook.com" class="icon-facebook redes"></a>
                    <a href="http://twitter.com" class="icon-twitter redes"></a>
                    <a href="http://instagram.com" class="icon-instagram redes"></a>
                    <a href="http://youtube.com" class="icon-youtube redes"></a>
                </div>
            </div>
        </footer>
    </div>
    

    
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/design.js"></script>
</body>
</html>