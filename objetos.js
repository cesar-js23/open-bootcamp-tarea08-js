let datos = {
    nombre: "Cesar",
    apellido: "Julian",
    edad: 29,
    altura: 1.61,
    eresDesarrollador: true,
  };
  
  let { edad } = datos;
  
  let datos_amigo1 = {
    nombre: "Anthony",
    apellido: "Roa",
    edad: 30,
    altura: 1.81,
    eresDesarrollador: false,
  };
  
  let datos_amigo2 = {
    nombre: "Antony",
    apellido: "Ausejo",
    edad: 30,
    altura: 1.71,
    eresDesarrollador: false,
  };
  
  let lista = [{ ...datos }, { ...datos_amigo1 }, { ...datos_amigo2 }];
  
  let newLista = lista.sort((a,b) => a.edad - b.edad);
  
  console.log(newLista);
  