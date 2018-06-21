//paquetes necesarios para el proyecto
var http = require('http');
var fs = require('fs');

var mime_types = {
  'js' : 'text/javascript',
  'html' : 'text/html',
  'css' : 'text/css',
  'jpg' : 'image/jpg',
  'gif' : 'image/gif',
  'png' : 'image/png'
};


//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '5050';

http.createServer(function(req,res){
//res.writeHead(200,{'Content-type':'text/html'});

if(req.url == "/"){

	fs.readFile('../index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

}else{
  res.write("ERROR");
  
	res.end();
}

}).listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});