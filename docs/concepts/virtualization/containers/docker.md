<div class="center">
    <img src="../../../assets/images/logo/docker.png" alt="Logo de Docker" 
class="logo--3rd-party">
</div>
Docker es una plataforma de código abierto que permite **desarrollar, empaquetar, distribuir y ejecutar aplicaciones en contenedores**. Un contenedor es una unidad ligera, autónoma y portátil que incluye todo lo necesario para ejecutar una aplicación: código, dependencias, librerías, configuraciones, etc.

Docker se basa en características del núcleo de Linux (como cgroups y namespaces) para permitir que múltiples contenedores se ejecuten en un mismo sistema operativo de manera aislada.

---

## ¿Para qué sirve Docker?

Docker facilita la creación y despliegue de aplicaciones porque:

- Elimina problemas de "en mi máquina funciona".
- Proporciona entornos consistentes para desarrollo, testing y producción.
- Simplifica el despliegue y escalado de aplicaciones.
- Permite aislamiento y seguridad de procesos.
- Acelera la integración y entrega continua (CI/CD).

---

## Casos de uso comunes

- **Microservicios**: cada servicio corre en su contenedor.
- **Entornos de desarrollo reproducibles**.
- **Automatización de pruebas**.
- **Despliegue en la nube**.
- **Simulación de arquitecturas complejas** (con `Docker Compose`).
- **Contenedorización de bases de datos, APIs, servicios web**.

---

##  Componentes Clave

### 1. Docker Engine

El motor de Docker es el núcleo de Docker. Incluye:

- **Servidor (dockerd)**: daemon que gestiona contenedores.
- **CLI (docker)**: cliente de línea de comandos.
- **API REST**: permite controlar Docker desde otras herramientas.

### 2. Imágenes

Las imágenes Docker son plantillas inmutables que contienen el sistema de archivos y la configuración de una aplicación. Se crean a partir de un `Dockerfile`.

### 3. Contenedores

Un contenedor es una instancia en ejecución de una imagen. Se puede detener, iniciar, reiniciar, destruir, etc.

```bash
docker run nginx
docker ps
docker stop <id>
```

---

## Dockerfile

Un `Dockerfile` es un archivo de texto que contiene instrucciones para construir una imagen Docker personalizada.

### Ejemplo de Dockerfile

```dockerfile
# Imagen base
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Puerto expuesto
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
```

### Instrucciones comunes

| Instrucción | Descripción |
|------------|-------------|
| `FROM`     | Imagen base (ej: node, python, ubuntu) |
| `COPY`     | Copia archivos al contenedor |
| `RUN`      | Ejecuta comandos en la creación |
| `CMD`      | Comando por defecto al iniciar el contenedor |
| `EXPOSE`   | Indica qué puerto usará la app |
| `WORKDIR`  | Cambia el directorio de trabajo |

---

##  Docker Compose

Docker Compose permite definir y ejecutar aplicaciones **multicontenedor** con un solo archivo YAML (`docker-compose.yml`). Es ideal para orquestar varios servicios como API, frontend, base de datos, etc.

### Ejemplo de archivo `docker-compose.yml`

```yaml
version: '3.9'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### Comandos comunes

```bash
docker-compose up         # Levanta todos los servicios
docker-compose down       # Detiene y elimina los contenedores
docker-compose build      # Construye imágenes
docker-compose logs       # Muestra logs
docker-compose ps         # Lista servicios activos
```

---

## Buenas prácticas

- Usa `.dockerignore` como `.gitignore` para evitar copiar archivos innecesarios.
- Minimiza el número de capas (`RUN` y `COPY`).
- Usa imágenes oficiales y ligeras (por ejemplo: `node:alpine`).
- Evita correr como root dentro del contenedor.
- Utiliza variables de entorno seguras (con archivos `.env` y `secrets`).

---

##  Recursos adicionales

- Sitio oficial: https://www.docker.com
- Docker Hub (imágenes): https://hub.docker.com
- Documentación oficial: https://docs.docker.com

---

##  Conclusión

Docker es una herramienta esencial en el desarrollo moderno. Su capacidad para contener y aislar aplicaciones facilita el desarrollo, testing, y despliegue en cualquier entorno, desde laptops hasta clústeres en la nube.
