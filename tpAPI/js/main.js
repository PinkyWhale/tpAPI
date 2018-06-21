//paquetes necesarios para el proyecto
var http = require('http');
var fs = require('fs');
//var miControlador = require('./controladores/funciones');

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '5050';

http.createServer(function(req,res){
//res.writeHead(200,{'Content-type':'text/html'});

if(req.url == "/index"){

	fs.readFile('html/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

}else{
	res.write("Bienvenidos");
	res.end();
}

}).listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});