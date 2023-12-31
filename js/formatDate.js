
function formatDate(fecha) {
    
    const collator = new Intl.DateTimeFormat("es-Ar", { 
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  
    const fechaFormateada = collator.format(fecha);
  
    
    return fechaFormateada;
    
  }

  
function formatInputDate(fechaInput) {
  const fecha = new Date(fechaInput); 
  const year = fecha.getFullYear(); 
  let month = fecha.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = fecha.getDate(); 
  if (day < 10) {
    day = "0" + day;
  }
  return `${year}-${month}-${day}`;
}