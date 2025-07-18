## Docker {:#docker}

<div class="center">
    <img src="../assets/images/logo/docker.png" alt="Logo de Docker" 
class="logo--3rd-party">
    <i>Logo de Docker</i>
</div>

Docker es una plataforma open-source (o de código abierto), con el cual se puede empaquetar una aplicación así como todas las dependencias que esta requiere, en una unidad denominada
*contenedor* [[1](#what-is-docker)]. Estas son ligeras en peso, lo cual permite su portabilidad. Así mismo, los contenedores están aislados de la infraestructura donde está siendo ejecutados, y por ende la imagen del contenedor puede ser ejecutada como un contenedor en cualquier sistema operativo donde esté instalado Docker [[1](#what-is-docker)].

Si su sistema operativo es Windows, Docker Desktop se puede instalar con facilidad desde la Microsoft Store.

### Dockerfile {:#dockerfile}

Docker emplea archivos, denominados
*Dockerfile*, los cuales usan DSL (Domain Specific Language) para describir todas las instrucciones necesarias para crear una imagen de forma rápida [[1](#what-is-docker)].

### Docker Image {:#docker-image}

Es un archivo compuesto de múltiples capas, empleado para ejecutar un
contenedor Docker [[1](#what-is-docker)]. Es un paquete de software ejecutable
que contiene todo lo necesario para correr la aplicación. Esta imagen informa cómo un contenedor debe inicializarse, determinando qué software debe ejecutarse y de qué forma.

### Docker Container {:#docker-container}

Un contenedor Docker es una instancia
*runtime* de una imagen Docker [[1](#what-is-docker)]. Contiene todo el kit requerido para una aplicación, y permite ser ejecutada de forma aislada.

# Referencias Bibliográficas

1. *What is Docker?*. (22 de abril de 2025). Geeks for Geeks. <a
   id="what-is-docker" href="https://www.geeksforgeeks.org/introduction-to-docker/">https://www.geeksforgeeks.org/introduction-to-docker/</a>
