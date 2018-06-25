//paquetes necesarios para el proyecto
var http = require('http');
var url = require('url');
var fs = require('fs');
var mime_types = {
   'js' : 'text/javascript',
   'html' : 'text/html',
   'css' : 'text/css',
   'jpg' : 'image/jpg',
   'gif' : 'image/gif',
   'png' : 'image/png'
};


// creamos el server node
http.createServer(function(peticion, respuesta){
   
  //lo que hace segun la url
   const path_nombre = url.parse(peticion.url).pathname === '/' ? '/index.html' : url.parse(peticion.url).pathname;
   // ruta donde va a buscar los recursos
   const ruta_a_archivo =`public/${path_nombre}`;
   
   fs.exists(ruta_a_archivo, function(existe){
      
      if(existe){
      
         fs.readFile(ruta_a_archivo, function(error, contenido_archivo){
      
            if(error){
               respuesta.writeHead(500, 'text/plain');
               respuesta.end('Error con el server.');
            }else{
               var extension = ruta_a_archivo.split('.').pop();
               var mime_type = mime_types[extension];
               respuesta.writeHead(200, {'Content-Type': mime_type});
               respuesta.end(contenido_archivo);
      
            }
         });
      
      }else{
      
         respuesta.writeHead(404, 'text/plain');
         respuesta.end('Error 404. El enlace no existe o ha dejado de existir.');
      }
   });
}).listen(5050);
console.log('El servidor esta funcionando correctamente en localhost:5050');