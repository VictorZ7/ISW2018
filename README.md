# Vector

Instrucciones de ejecución:


-Importar analisis.sql
-En /Vector/ utilizar los siguiente comandos:

        - npm install
        - npm start

-Con esto podrán ver la pagina en http://localhost:3000 la cual tiene hasta el momento lo siguiente:

    http://localhost:3000/login 

	En la base de datos hay 4 usuarios (nombre, clave,tipo):(giorgio,giorgio123,administrador),(vector,pass1234,cliente),(victor,123,tecnico),(jorge,pass,supervisor)

		-vector puede ingresar pedido y ver sus propios pedidos.
		-giorgio puede ver todas las ordenes, y tiene la opcion de editar ordenes (no esta implementada con bd)
		-victor puede ver los materiales para las mantenciones (es estatico)
		-jorge puede ver las ordenes y sus costos (los cuales son null ya que no estan implementados los costos de lo materiales en la bd)
		-Todos deben logear antes de entrar a su paginas y no pueden ingresar a las paginas de los demas.
		
    http://localhost:3000/api/mostrar_ordenes?usuario_id=1   Muestra las ordenes que ha hecho el usuario vector, incluyendo las ingresadas por el en about.
    http://localhost:3000/about permite al usuario ingresar ordenes, estas quedaran en la base de datos como pendientes.
    http://localhost:3000/servicios muestra un template de lo que seria mostrar las ordenes para el usuario logeado, solo es un html por ahora.

Template view en http://localhost:3000/administrador
 

Un gusto ser ayudado por ti <3


:)
