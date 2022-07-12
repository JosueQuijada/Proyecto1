let mostar_ocultar1, mostar_ocultar2, mostar_ocultar3 = true;
let generar_ocultartb=false;
let urlrandon = 'https://randomuser.me/api/';
let urlTable='https://jsonplaceholder.typicode.com/photos/';
let name, email, telefono, nombre, fecha, ubicacion, foto;
document.getElementById('btn-card-1').onclick = function (e) {
  e.preventDefault();
  mostar_ocultar1 = !mostar_ocultar1;
  (mostar_ocultar1 == true) ? $("#Car-1").show() : $("#Car-1").hide();

}
document.getElementById('btn-card-2').onclick = function (e) {
  e.preventDefault();
  mostar_ocultar2 = !mostar_ocultar2;
  (mostar_ocultar2 == true) ? $("#Car-2").show() : $("#Car-2").hide();

}
document.getElementById('btn-card-3').onclick = function (e) {
  e.preventDefault();
  mostar_ocultar3 = !mostar_ocultar3;
  (mostar_ocultar3 == true) ? $("#Car-3").show() : $("#Car-3").hide();

}


document.getElementById('cambiar-api-ramdon').onclick = function (e) {
  e.preventDefault();
  cargarapi(urlrandon);
  document.getElementById('datos').innerHTML = "";

}

function cargarapi(url) {
  fetch(url)
    .then(response => response.json())
    .then(
      data => mostrarmodal(data)
    )
}
document.getElementById('btn-consultar-api').onclick = function (e) {
  e.preventDefault();
  cargarapi(urlrandon);
};
function mostrarmodal(data) {
  email = data.results[0].email;
  telefono = data.results[0].cell;
  document.getElementById('nombremodal').innerHTML = `${data.results[0].name.title} ${data.results[0].name.firts} ${data.results[0].name.last}`;
  document.getElementById('fotografia').src = data.results[0].picture.thumbnail;
  console.log(data.results[0].picture)
  ubicacion = `${data.results[0].location.country},  ${data.results[0].location.state}, ${data.results[0].location.city}`;
  fecha = data.results[0].registered.date;
}
document.getElementById('email').onclick = function (e) {
  e.preventDefault();
  document.getElementById('datos').innerHTML = email;
};
document.getElementById('fecha').onclick = function (e) {
  e.preventDefault();
  document.getElementById('datos').innerHTML = fecha;
};
document.getElementById('telefono').onclick = function (e) {
  e.preventDefault();
  document.getElementById('datos').innerHTML = telefono;
};
document.getElementById('ubicacion').onclick = function (e) {
  e.preventDefault();
  document.getElementById('datos').innerHTML = ubicacion;
};


function cargarapi2(url) {
  fetch(url)
    .then(response => response.json())
    .then(
      data =>  generartb(data)
    )
}

function generartb(data) {
  let limite=prompt("cuantos registros desea ver"); 
  for (let index = 0; limite > index; index++) {
    document.getElementById('tbdatos').innerHTML +=`<td>${data[index].albumId}</td><td>${data[index].id}</td><td>${data[index].title}</td><td><img src="${data[index].url}" alt="Imagen"style="width: 100px;"></td>`
  }
}
document.getElementById('mostrar-ocultar-tb').onclick = function (e) {
  e.preventDefault();
  
  generar_ocultartb = !generar_ocultartb;
  if(generar_ocultartb == true) { 
    $("#tb-api").show() ;
    document.getElementById('tbdatos').innerHTML ="";
    cargarapi2(urlTable);
  }else{
      $("#tb-api").hide();
    } 
  
}