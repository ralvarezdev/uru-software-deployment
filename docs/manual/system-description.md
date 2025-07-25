

JokeAppWeb es una aplicación web que permite a los usuarios interactuar con una colección de chistes. A través de una interfaz intuitiva y dinámica, el usuario puede generar nuevos chistes de forma aleatoria, reaccionar ante ellos con "like" o "dislike", y visualizar un ranking de los chistes más valorados. El sistema está orientado a ofrecer una experiencia entretenida y sencilla para usuarios autenticados.

## Funcionalidades principales

Las funcionalidades principales que ofrece la aplicación son:

- Registro de nuevos usuarios.
- Inicio de sesión (login) y cierre de sesión (logout).
- Generación de chistes aleatorios.
- Calificación de chistes con "like" o "dislike".
- Visualización de un ranking basado en la puntuación de los chistes.

## Usuarios y roles del sistema

El sistema está diseñado para un único tipo de usuario:

- **Usuario autenticado:** puede acceder a todas las funcionalidades disponibles tras iniciar sesión, como ver chistes, calificarlos y consultar el ranking.

No se contemplan roles administrativos ni múltiples niveles de acceso en esta versión.

## Arquitectura general del sistema

La arquitectura del sistema está basada en una estructura cliente-servidor, compuesta por tres capas principales:

- **Frontend:** Desarrollado con React y empaquetado con Vite, este componente se encarga de la interfaz de usuario y la interacción con el usuario final.
- **Backend:** Implementado con FastAPI (Python), expone una API RESTful que gestiona la lógica de negocio, autenticación de usuarios y acceso a la base de datos.
- **Base de datos:** Utiliza PostgreSQL para el almacenamiento persistente de usuarios, chistes y sus respectivas calificaciones.

Los tres componentes se orquestan mediante Docker Compose para facilitar el despliegue en entornos controlados, y se integran bajo un mismo servidor a través de un proxy inverso configurado con Nginx.
