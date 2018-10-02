# Intro

Una pequeña aplicación de ejemplo realizada en Ionic 3 que permite:

* Obtener Token de dispositivo para notificaciones push
* Recibir y mostrar notificaciones push sencillas

# Instalación

* Decargar el proyecto con `git clone https://github.com/IsaacYAGI/ionic-push-test-app.git`
* Ingresar a la carpeta del proyecto con `cd ionic-push-test-app`
* Ejecutar el comando `npm install`
* Crear el API Key de autenticación en Firebase. 
	* Entrar a la cuenta de Firebase y crear un nuevo proyecto
	* Dirigirse al apartado de ```Cloud Messaging ``` y agregar aplicación de Android
	* Agregar el paquete del APK. El mismo debe coincidir con el configurado en el ```config.xml``` en la raíz del proyecto.
	* Descargar el archivo ```google-services.json``` 
	* Llenar el resto de los campos que no sean opcionales
* Copiar el archivo ```google-services.json``` en la raíz del proyecto.

Por último:

* Ejecutar el comando `ionic cordova build android` para compilar el APK.
* Ejecutar el comando `ionic cordova run android --target=[IP]:[PUERTO]` para compilar el APK y lanzarlo al emulador.
* Ejecutar el comando `ionic cordova run android --device` para compilar el APK y lanzarlo al celular.


La primera vez puede tardar bastante mientras se descargan las dependencias faltantes.

Para iOS se deben seguir los mismos pasos, descargar el archivo ```GoogleService-Info.plist``` en la raíz del proyecto y agregar la plataforma de iOS con el comando ```ionic cordova add platform ios```.

