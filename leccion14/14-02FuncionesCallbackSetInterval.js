let reloj = () => {
     let fecha = new Date();
     console.log(`Fecha ${fecha.getHours()}:${fecha.getMinutes()}: ${fecha.getSeconds()}`)
}


setInterval(reloj, 3000)