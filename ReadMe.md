# Vector

Instrucciones de ejecución:

-Importar analisis.sql
-En /ISW2018/proyecto utilizar los siguiente comandos:

        - sudo npm install
        - sudo npm start

-Con esto podrás ver la pagina en http://localhost:3000 la cual tiene hasta el momento lo siguiente:

- Login con autenticación funcionando
- 4 usuarios (nombre, clave,tipo):(giorgio,g,administrador),(vector,v,cliente),(victor,123,bodeguero),(jorge,pass,encargado de bodega)
- Historia de usuario 1: Realizar Petición de Material
- Historia de usuario 2: Estado de Orden
- Historia de usuario 3 (solo admin): Modificar Orden, cambia entre pendiente, ejecutando y terminada.
- Historia de usuario 4 (ver en bodeguero): Stock en Bodega (estático)



		
		
		
    http://localhost:3000/api/mostrar_ordenes?usuario_id=1   Muestra las ordenes que ha hecho el usuario vector, incluyendo las ingresadas por el en about.
    http://localhost:3000/about permite al usuario ingresar ordenes, estas quedaran en la base de datos como pendientes.
    http://localhost:3000/servicios muestra un template de lo que seria mostrar las ordenes para el usuario logeado, solo es un html por ahora.



