const menuItems = document.querySelectorAll('.menu-item');

const menuBoton = document.querySelector('#menu-boton');


menuBoton.addEventListener('click',function(){
    document.body.classList.toggle('mobile-menu-active');
})


menuItems.forEach(function(item){
item.addEventListener('click', function (e){
const activeItem = document.querySelector('.active');
activeItem.classList.remove('active');
e.target.classList.add ('active');    
});  
});

const modoOscuroToggle = document.getElementById("modoOscuro");

modoOscuroToggle.addEventListener("change", () => {
  document.body.classList.toggle("modoOscuro");
});
