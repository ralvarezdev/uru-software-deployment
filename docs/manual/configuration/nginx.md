# Uso de Nginx en la Imagen Docker del Frontend

Para servir la aplicación frontend, se utilizó **Nginx** dentro del contenedor Docker de la imagen `app-frontend`. El `Dockerfile` de la aplicación frontend está dividido en dos etapas principales:

- **Primera etapa (build):**  
    Se utiliza una imagen base de Node.js (`node:20`) para instalar las dependencias y compilar el proyecto React con Vite, generando los archivos estáticos en la carpeta `/app/dist`.

- **Segunda etapa (producción):**  
    Se usa la imagen base `nginx:alpine` para servir los archivos estáticos. La carpeta `/app/dist` generada en la etapa de build se copia a la ruta por defecto donde Nginx sirve contenido estático: `/usr/share/nginx/html`.

Esto garantiza que el frontend sea servido de forma eficiente por Nginx, aprovechando su rendimiento y estabilidad para aplicaciones web estáticas.

---

## Configuración Personalizada de Nginx

Se incluye un archivo `nginx.conf` personalizado dentro del contenedor, copiado en la ruta `/etc/nginx/nginx.conf`. Este archivo contiene una configuración básica adaptada para aplicaciones SPA (Single Page Application), permitiendo que las rutas gestionadas por React funcionen correctamente.

El contenido principal del archivo `nginx.conf` es:

```nginx
worker_processes auto;

events {
        worker_connections 1024;
}

http {
        include       mime.types;
        default_type  application/octet-stream;

        server {
                listen 80;
                server_name localhost;

                root /usr/share/nginx/html;
                index index.html;

                location / {
                        try_files $uri $uri/ /index.html;
                }
        }
}
```

**Explicación técnica:**

- `worker_processes auto;` y `worker_connections 1024;` optimizan el manejo de múltiples conexiones simultáneas.
- Se sirve contenido estático desde `/usr/share/nginx/html`, que contiene los archivos compilados del frontend.
- La directiva `try_files $uri $uri/ /index.html;` es fundamental para aplicaciones SPA, ya que redirige todas las rutas que no sean archivos estáticos reales hacia `index.html`, permitiendo que React Router (u otro router del lado cliente) maneje la navegación.

---

## Exposición de Puertos y Acceso

Dentro del contenedor, Nginx escucha en el puerto **80**. Este puerto está mapeado al puerto **52318** en el host, permitiendo acceder a la aplicación frontend mediante la URL:

```
http://localhost:52318
```

Para exponer la aplicación frontend de manera segura y con un dominio personalizado, se configuró un túnel de Cloudflare (Cloudflare Tunnel) con un archivo `config.yaml` que indica que el servicio a exponer públicamente está en la URL mencionada

Este túnel redirige el tráfico del subdominio de Cloudflare directamente al contenedor que sirve la app con Nginx.