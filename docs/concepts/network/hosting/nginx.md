# Nginx {:#nginx}

## ¿Qué es Nginx? {:#que-es-nginx}

<div class="center">
	<img src="../../../assets/images/logo/nginx.png" alt="Logo de Nginx" class="logo--3rd-party">
	<i>Logo de Nginx</i>
</div>

**Nginx** es un servidor web de alto rendimiento, de código abierto, que también actúa como:

- Proxy inverso
- Balanceador de carga
- Servidor de archivos estáticos
- Terminador TLS/SSL
- Caché de contenido
- Gateway de aplicaciones

Fue desarrollado por Igor Sysoev en 2004 y es ampliamente utilizado por su eficiencia en la gestión de múltiples conexiones concurrentes gracias a su arquitectura basada en eventos y no bloqueante.

## ¿Para qué Sirve Nginx? {:#para-que-sirve-nginx}

| Funcionalidad             | Descripción                                                             |
|---------------------------|-------------------------------------------------------------------------|
| Servidor Web              | Sirve archivos estáticos (HTML, CSS, JS, imágenes).                     |
| Proxy Inverso             | Redirige solicitudes al backend (por ejemplo, Node.js, Python, etc.).   |
| Balanceador de Carga      | Distribuye tráfico entre varios servidores para mejorar rendimiento.    |
| Terminador TLS/SSL        | Gestiona conexiones HTTPS y maneja certificados.                        |
| Caché de contenido        | Guarda respuestas en memoria o disco para acelerar tiempos de carga.    |
| Redirección y Reescritura | Permite reescribir URLs o redirigir tráfico según reglas.               |
| Protección y Seguridad    | Controla acceso, oculta tecnologías backend y limita el ancho de banda. |

## Arquitectura de Nginx {:#arquitectura-de-nginx}

Nginx usa un modelo **asíncrono y basado en eventos** con procesos worker. Esto permite manejar miles de conexiones simultáneas con pocos recursos:

- **Proceso maestro**: carga configuración y gestiona procesos worker.
- **Procesos worker**: manejan las conexiones de red reales.

## Casos de Uso Comunes {:#casos-de-uso-comunes}

1. **Frontend + Backend**: Nginx sirve los archivos frontend (React, Angular, Vue) y redirige `/api` al backend.

2. **Microservicios**: Redirige peticiones a distintos contenedores o servidores según la ruta o subdominio.

3. **Certificados SSL**: Nginx maneja TLS/SSL y se comunica con los backends en HTTP.

4. **Balanceo de carga**: Distribuye tráfico entre varios servidores (round-robin, least_conn, ip_hash).

5. **Gateway para contenedores**: Punto de entrada para servicios en Docker o Kubernetes.

## Ejemplo de configuración básica como proxy inverso

```nginx
server {
    listen 80;
    server_name midominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Balanceo de Carga {:#balanceo-de-carga}

```nginx
upstream mi_cluster {
    server backend1:3000;
    server backend2:3000;
}

server {
    listen 80;
    location / {
        proxy_pass http://mi_cluster;
    }
}
```

## Algoritmos Soportados {:#algoritmos-soportados}

- `round-robin` (por defecto)
- `least_conn`
- `ip_hash`

##  Soporte para HTTPS (TLS/SSL) {:#soporte-para-https-tls-ssl}

```nginx
server {
    listen 443 ssl;
    server_name midominio.com;

    ssl_certificate /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

## Ventajas de Nginx {:#ventajas-de-nginx}

- Altamente eficiente y ligero
- Escalable con pocos recursos
- Compatible con HTTP/1.1, HTTP/2 y TLS
- Popular en entornos de alta demanda (empresas como Netflix, Dropbox, GitHub lo usan)
- Gran soporte para contenedores (Docker)

##  Diferencias con Apache {:#diferencias-con-apache}

| Característica       | Nginx                        | Apache                             |
|----------------------|------------------------------|------------------------------------|
| Modelo de procesos   | Asíncrono, basado en eventos | Multiproceso o multiproceso-thread |
| Rendimiento estático | Muy alto                     | Bueno, pero menor que Nginx        |
| Reescrituras         | Menos flexible               | Muy potente con `.htaccess`        |
| Uso de recursos      | Bajo                         | Medio/alto                         |

## Seguridad {:#seguridad}

- Compatible con encabezados de seguridad (`X-Frame-Options`, `Content-Security-Policy`)
- Puede limitar ancho de banda por IP o ruta
- Permite autenticación básica o con JWT
- Se integra con firewalls de aplicaciones web (WAFs)
