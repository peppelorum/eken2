// Formatted last-modified date
// Jim Dettwiler  http://www.icehouse.net/jim_d/
if (Date.parse(document.lastModified) != 0) {
  var modiDate = new Date(document.lastModified);
  var monthName = new Array("januari", "februari", "mars", "april", "maj", 
   "juni", "juli", "augusti", "september", "oktober", "november", "december");
  document.write("Sidan senast uppdaterad den " + modiDate.getDate()  + " ");
  document.write(monthName[modiDate.getMonth()] + " " + modiDate.getFullYear() + ".");
  }
