
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registros");
    var data = JSON.parse(e.postData.contents);
    
    // Validar datos requeridos
    if (!data.nombre || !data.correo) {
      throw new Error('Datos incompletos');
    }
    
    var folio = "F" + new Date().getTime();
    var row = [new Date(), data.nombre, data.correo, folio];
    sheet.appendRow(row);

    var pdfUrl = generarPDF(data.nombre, folio);
    
    // Enviar email (opcional, puede fallar si no hay configuración)
    try {
      MailApp.sendEmail({
        to: data.correo,
        subject: "Registro Obra de Teatro",
        htmlBody: "Gracias por registrarte, " + data.nombre + ". Tu folio es: <b>" + folio + "</b><br><a href='" + pdfUrl + "'>Descargar folio en PDF</a>"
      });
    } catch (emailError) {
      console.log('Error al enviar email:', emailError);
    }

    return ContentService.createTextOutput(JSON.stringify({ folio: folio, pdf: pdfUrl })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

function generarPDF(nombre, folio) {
  var html = HtmlService.createHtmlOutput("<html><body>" +
    "<h2>Folio de Registro</h2>" +
    "<p>Nombre: " + nombre + "</p>" +
    "<p>Folio: " + folio + "</p>" +
    "<img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + folio + "' />" +
    "</body></html>").getContent();

  var blob = Utilities.newBlob(html, "text/html", "folio.html");
  var pdf = DriveApp.createFile(blob).getAs("application/pdf");
  pdf.setName("Folio_" + folio + ".pdf");
  pdf.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  return pdf.getUrl();
}
