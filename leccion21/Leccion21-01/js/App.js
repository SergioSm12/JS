const ingresos = [
  new Ingreso("Sueldo", 10000000),
  new Ingreso("Venta Moto", 5000000),
];

const egresos = [new Egreso("Arriendo", 1500000), new Egreso("Ropa", 500000)];

let cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

let totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }

  return totalIngreso;
};

let totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.valor;
  }
  return totalEgreso;
};

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-CO", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";

  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
    <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
              <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
              <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                  <ion-icon name="trash-outline"
                  onclick='eliminarIngreso(${ingreso.idIngreso})' ></ion-icon>
                </button>
              </div>
            </div>
    </div>
    `;
  return ingresoHTML;
};

const eliminarIngreso=(idIngreso)=>{
   let indiceEliminar = ingresos.findIndex(ingreso=> ingreso.idIngreso === idIngreso);
   ingresos.splice(indiceEliminar,1);
   cargarCabecero();
   cargarIngresos();
  
}

const cargarEgresos = () => {
  let egresoHTML = "";

  for (let egreso of egresos) {
    egresoHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresoHTML;
};

const crearEgresoHTML = (egreso) => {
  let egresoHTML = `
      <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${egreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn">
            <ion-icon name="trash-outline" onclick='eliminarEgreso(${egreso.idEgreso})'></ion-icon>
          </button>
        </div>
      </div>
    </div>
      `;
  return egresoHTML;
};

const eliminarEgreso=(idEgreso)=>{
   let indiceEliminar =egresos.findIndex(egreso => egreso.idEgreso === idEgreso);
   egresos.splice(indiceEliminar, 1);
   cargarCabecero();
   cargarEgresos();
}

let agregarDato = ()=>{
  let form = document.forms['form'];
  let tipo = form['tipo'];
  let descripcion = form['descripcion'];
  let valor = form['valor'];

  if(descripcion.value !== '' && valor.value !== ''){
    if(tipo.value === 'ingreso'){
       ingresos.push(new Ingreso(descripcion.value, +valor.value));
       cargarCabecero();
       cargarIngresos();
    }else if(tipo.value === 'egreso'){
       egresos.push(new Egreso(descripcion.value, +valor.value));
       cargarCabecero();
       cargarEgresos();
    }
  }
}
