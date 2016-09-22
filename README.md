***

# TWITTER

Para trabajr este ejercicio utilizaremos versiones en github:

### Versión 0.0.1:

+ Diseñar un formulario que tenga un textarea y un botón.
+ Agregar un evento de click al botón o un evento de submit al formulario.
+ En el evento, coger el texto del textarea.
+ Agegar el texto al HTML.

### Versión 0.0.2:
+ No ingresar texto vacío (deshabilitar el botón de enviar).
+ Contar la cantidad de caracteres de forma regresiva.

Para esta version seguiremos estos pasos:

+ Para desabilitar el boton se puede utilizar *disabled = true* ,  lo que queremos es que   el boton se encuentre bloqueado apenas se carge la pagina.
+ Para poder contar la cantidad de caracteres, tenemos que tener su longitud (del      			textarea), pero esto solo funcionará creando un nuevo evento, llamado *onkeyup*.
+ También se necesitará crear un 'contenedor' donde se llevará a cabo la contabilidad.

### Versión 0.0.3:

+ Si pasa los 140 caracteres, deshabilitar el botón.
+ Si pasa los 120 caracteres, mostrar el contador con OTRO color.
+ Si pasa los 130 caracteres, mostrar el contador con OTRO color.
+ si pasa los 140 caracteres, mostrar el contador en negativo.

En esta versión necesitaremos algunas cndiciones:

+ En la version anterior no pidieron contabilizar de forma regresiva, pero no nos dieron    	un limite (el contador se paralizaba en *0*, pero aun se podia seguir escribiendo).
+ Ahora nos ponen un limite de caracteres, esto solo se tiene que declarar con un *var* y   le damos como valor el limite.
+ Ahora tenemos que cambiar el color del texto del contador, esto se pude hacer con una    	 condicion, por ejemp:
		si el limite es igual a 120 caracteres, entonces al contador darle un     
		color verde.
		
+ Para las siguientes peticicones, se realiza algunas condiciones similares.

### Versión 0.0.4:
+ Al presionar enter ("/n") que crezca el textarea de acuerdo al tamaño del texto.
### Versión 0.0.5: (Extra)
+ Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del   				textarea por defecto, debe de agregarse una línea más para que no aparezca el scroll. 		(Si en caso aplica).

En estas versiones se utiliza una misma semantica.

+ Primero debemos llamar a nuestro textarea, esto debe ser fuera del evento *onkeyup*.
+ Después a esta *var* que contiene al tetaarea le damos un nuevo evento llamado *onkeydoown*.
+ Crearemos una nueva function donde se utilize *setTimeoout*, se le dara una altura auto. con   sto y sabiendo donde llamar a esta function, se podra hacer lo que nos pidieron.


### Versión 0.0.6:
+ Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm

En esta version se creará un function que será llamda en el evento *click* ya creado.

+ Para saber la hora de la publicación se utilizará el *new Date* que anteriormente ya lo hemos   trabajado.

###### Con esto tenemos nuestro twitter, ahora le podemos dar los estilos que se desean.

***
		
