
#  Manual de Configuración de Nginx como Proxy Inverso con HTTPS y Backends en Docker

##  Estructura del Sistema

- Contenedor Nginx (expuesto en el puerto 443)
- Varios contenedores backend (`backend1`, `backend2`, etc.)
- Certificados en el host o montados en el contenedor Nginx

---

##  1. Red Docker Compartida

Primero, se debe crear una red para que Nginx y los backends se comuniquen:

```bash
docker network create nginx_net
```

---

##  2. Ejecutar los Backends

Luego, se ejecutan cada contenedor backend en la red:

```bash
docker run -d --name backend1 --network nginx_net nombre-imagen
docker run -d --name backend2 --network nginx_net nombre-imagen
```

---

##  3. Configuración de Nginx

Se creo un archivo llamado `nginx.conf` con la siguiente configuración:

```nginx
events {}

http {
    upstream backend_cluster {
        server backend1:3000;
        server backend2:3000;
    }

    server {
        listen 443 ssl;
        server_name midominio.com;

        ssl_certificate     /etc/nginx/ssl/fullchain.pem;
        ssl_certificate_key /etc/nginx/ssl/privkey.pem;

        ssl_protocols       TLSv1.2 TLSv1.3;
        ssl_ciphers         HIGH:!aNULL:!MD5;

        location / {
            proxy_pass http://backend_cluster;
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

    server {
        listen 80;
        server_name midominio.com;
        return 301 https://$host$request_uri;
    }
}
```

 Este archivo:

- Escucha en `443` para HTTPS
- Redirige HTTP (`80`) a HTTPS
- Usa un `upstream` para balancear entre backends
- Usa certificados montados en `/etc/nginx/ssl/`

---

##  4. Estructura de Archivos

Con la siguiente estructura:

```
project/
│
├── nginx.conf
└── ssl/
    ├── fullchain.pem
    └── privkey.pem
```

---

## 5. Ejecutar Nginx en Docker

Se ejecuta Nginx con acceso a los archivos necesarios:

```bash
docker run -d --name nginx   -p 443:443 -p 80:80   --network nginx_net   -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf   -v $(pwd)/ssl:/etc/nginx/ssl   nginx
```

---

## Resultado Esperado

- Las solicitudes a `https://ramon-es-gay.com` son servidas por Nginx
- Nginx reenvía a `backend1` o `backend2` usando balanceo de carga
- Las solicitudes HTTP (`http://`) se redirigen automáticamente a HTTPS

 -->
