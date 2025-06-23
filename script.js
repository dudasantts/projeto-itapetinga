var map = L.map('map').setView([-15.2565,  -40.2576 ], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


    var marker = L.marker([-15.2565, -40.2576],{
    }).addTo(map).bindPopup("Itapetinga").openPopup();
    

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)


  if (screen.width < 640) { 

    const path3 = document.querySelector('svg.linha3 path');
    path3.style.opacity = "1";
    const pathSize3 = path3.getTotalLength();
    
   
    
    path3.style.strokeDasharray = pathSize3 + ' ' + pathSize3;
    path3.style.strokeDashoffset = pathSize3;
    
    
    lenis.on('scroll', (e) => {
    
        var scroolPorcentagem = (document.documentElement.scrollTop + document.body.scrollTop ) / (document.documentElement.scrollHeight - document.documentElement.clientHeight );
        var velocidade = scroolPorcentagem * 4;
        var desenha = pathSize3 * velocidade;
        path3.style.strokeDashoffset = pathSize3 - desenha;
    
        console.log(path3)
    
    }
    )} else if (screen.width < 800 ) {
        const path2 = document.querySelector('svg.linha2 path');
        const pathSize2 = path2.getTotalLength();
        
        
        path2.style.strokeDasharray = pathSize2 + ' ' + pathSize2;
        path2.style.strokeDashoffset = pathSize2;
        
        
        lenis.on('scroll', (e) => {
        
            var scroolPorcentagem = (document.documentElement.scrollTop + document.body.scrollTop ) / (document.documentElement.scrollHeight - document.documentElement.clientHeight );
            var velocidade = scroolPorcentagem * 3;
            var desenha = pathSize2 * velocidade;
            path2.style.strokeDashoffset = pathSize2 - desenha;
        
       
        }

    )}
     else {
            const path = document.querySelector('svg.linha path');
            path.style.opacity = "1";

            const pathSize = path.getTotalLength();
            
            
            path.style.strokeDasharray = pathSize + ' ' + pathSize;
            path.style.strokeDashoffset = pathSize;
            
            
            lenis.on('scroll', (e) => {
            
                var scroolPorcentagem = (document.documentElement.scrollTop + document.body.scrollTop ) / (document.documentElement.scrollHeight - document.documentElement.clientHeight );
                var velocidade = scroolPorcentagem * 0.6;
                var desenha = pathSize * velocidade;
                path.style.strokeDashoffset = pathSize - desenha;

            }
        )}
        

$(document).ready(function(){
    $("#inicio").click(function() {
        $('html, body').animate({
            scrollTop: $("#nav_inicio").offset().top
        }, 2000);
    });

});

$(document).ready(function(){
    $("#sobre").click(function() {
        $('html, body').animate({
            scrollTop: $("#nav_about").offset().top
        }, 2000);
    });

});

$(document).ready(function(){
    $("#passeio").click(function() {
        $('html, body').animate({
            scrollTop: $("#nav_passeios").offset().top
        }, 2000);
    });

});

$(document).ready(function(){
    $("#localizacao").click(function() {
        $('html, body').animate({
            scrollTop: $("#nav_localizacao").offset().top
        }, 2000);
    });

});

$(document).ready(function(){
    $("#contatos").click(function() {
        $('html, body').animate({
            scrollTop: $("#nav_contatos").offset().top
        }, 2000);
    });

});





var click = document.querySelector(".icone")
var clicar = document.querySelector(".menu")
var icon = document.querySelector(".icone2")
var navbar = document.querySelector("ul")




click.onclick = function()  {

    clicar.style.width = "100%"
    clicar.style.height = "105vh"
    clicar.style.animation = "animacao 1000ms"

    clicar.style.animationFillMode = "forwards"

    click.style.display = "none";
    

    document.querySelector("ul").style.display = "block";

}

icon.onclick = function() {myFunction2()}

function myFunction2() {
    
    click.style.display = "block";

    clicar.style.animation = "animacao2 1000ms"
    clicar.style.animationFillMode = "forwards"
    

}

navbar.onclick = function(){

    clicar.style.animation = "animacao2 1000ms"
    clicar.style.animationFillMode = "forwards"
    click.style.display = "block";
    
}











   
