
$('.hidden').hide();
$(".sessionTitle").click(function(){ 
if(sessaoGritos.length == 10 || sessaoVivencias.length == 10) {
  $(this).nextAll('.postBox').slice(0, 10).toggle();
  return false;
}
else if(sessaoAfetos.length == 12) {
  $(this).nextAll('.postBox').slice(0, 12).toggle();
  return false;
} 
});

var coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}
