
var imagenes=["imagenes/slide/01.jpg",
            "imagenes/slide/01.jpg",
            "imagenes/slide/02.jpg",
            "imagenes/slide/03.jpg",
            "imagenes/slide/04.jpg",
            "imagenes/slide/05.jpg",
            "imagenes/slide/06.jpg",
            ];
document.imagenSlide.src = imagenes[0];
var slider = document.querySelector(".slider");
var botonderecha = document.querySelector(".icono-derecha");
var botonizquierda= document.querySelector(".icono-izquierda");
 
var contador=0;
function MoverDerecha()
    {
        contador++;
        //slider.style.marginLeft='-$(contador * 100)%';
        if (contador>imagenes.length-1)
            {
                contador=0;
            }
            document.imagenSlide.src = imagenes[contador];
        }

icono-derecha.addeventlistener("click",MoverDerecha);

function MoverIzquierda()
    {
        contador--;
        //slider.style.marginLeft='-$(contador * 100)%';
        if (contador-0)
            {
                contador= imagenes.length-1;
            }
            document.imagenSlide.src = imagenes[contador];
        }
        
icono-izquierda.addeventlistener("click",MoverIzquierda);