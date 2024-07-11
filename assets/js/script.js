//inicializar carrousel
const carousel = new bootstrap.Carousel('#carousel')
//inicializar tooltip
$('[data-toggle="tooltip"]').tooltip;   

$('[data-toggle="collapse"]').collapse;

$(document).ready(function(){
    $("a.nav-link").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  });
