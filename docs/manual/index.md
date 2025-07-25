
## Objetivo del manual

El presente manual tiene como objetivo documentar el proceso de despliegue del sistema JokeAppWeb, incluyendo la configuración del entorno, la instalación y ejecución de los servicios necesarios, la implementación de medidas de seguridad básicas y la verificación del funcionamiento del sistema. Este documento busca servir como guía técnica para la correcta instalación y puesta en marcha del sistema en un entorno de servidor.

## Alcance del sistema

Este manual cubre exclusivamente el proceso de despliegue técnico de la aplicación JokeAppWeb en un entorno Linux, utilizando `git clone` para obtener el código fuente, Docker Compose para levantar los servicios, configuración del servidor web Nginx como proxy inverso y activación del firewall con UFW para asegurar el acceso.

No se incluye en este documento el desarrollo del código fuente de la aplicación, el manual de usuario final, ni la administración funcional del sistema una vez desplegado.

## Público objetivo

Este manual está dirigido a personas con perfil técnico, tales como:

- Administradores de sistemas
- Estudiantes de ingeniería en informática o carreras afines
- Profesores y evaluadores del curso de Despliegue de Software
- Desarrolladores responsables de la puesta en producción del sistema

Se asume que el lector tiene conocimientos básicos de terminal Linux, uso de Docker y configuración de servidores web.