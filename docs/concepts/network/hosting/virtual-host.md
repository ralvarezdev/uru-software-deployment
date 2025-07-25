# **Virtual Host** {#virtual-host}

## **¿Qué es un Virtual Host?** {#que-es-un-virtual-host}

Un **Virtual Host** (Host Virtual) es una técnica que permite alojar múltiples sitios web o dominios en un único servidor, utilizando una misma dirección IP. Esto se logra mediante la configuración del servidor web (como Apache o Nginx) para que responda de manera diferente según el dominio o subdominio solicitado.

Existen dos tipos principales de Virtual Hosts:

### Virtual Host Basado en Nombre (Name-based Virtual Host) {#virtual-host-basado-en-nombre}

Este tipo de Virtual Host utiliza el campo Host en la cabecera HTTP para determinar qué sitio web debe servir el servidor. Esto significa que múltiples dominios pueden compartir una misma dirección IP, ya que el servidor distingue las solicitudes según el nombre de dominio. Por ejemplo, si un servidor tiene configurados sitio1.com y sitio2.com en la misma IP, cuando un usuario accede a sitio1.com, el servidor revisa la cabecera HTTP y sirve el contenido correspondiente.

La principal ventaja de este método es que ahorra direcciones IP, ya que no requiere una IP exclusiva para cada sitio. Además, simplifica la administración, especialmente en entornos con muchos dominios. Sin embargo, una limitación es que no funciona con protocolos antiguos que no envían la cabecera Host, como algunas conexiones SSL/TLS muy antiguas (aunque hoy en día esto es raro debido al uso de SNI - Server Name Indication).

### Virtual Host Basado en IP (IP-based Virtual Host) {#virtual-host-basado-en-ip}

En este caso, cada sitio web tiene asignada una dirección IP única, y el servidor responde según la IP a la que se dirige la solicitud. Por ejemplo, si sitio1.com usa la IP 192.168.1.10 y sitio2.com usa 192.168.1.11, el servidor entrega el contenido correspondiente según la IP de destino.

La principal ventaja de este enfoque es que es compatible con cualquier protocolo, incluso aquellos que no soportan la cabecera Host (como ciertas configuraciones antiguas de SSL). Sin embargo, su desventaja es que requiere múltiples direcciones IP, lo que puede ser costoso o complicado en entornos con IPv4 limitadas. Además, su administración es menos escalable cuando se manejan muchos dominios.

## **Casos de Uso** {#casos-de-uso}

Los Virtual Hosts son útiles en escenarios como:

- **Hospedar múltiples sitios en un solo servidor**: Ideal para empresas de hosting o desarrolladores que gestionan varios proyectos.
- **Separar entornos (producción, desarrollo, testing)**: Usando subdominios como `dev.misitio.com` o `test.misitio.com`.
- **Optimizar recursos**: Evita la necesidad de tener un servidor dedicado para cada sitio web.
- **Sitios multi-idioma o regionales**: Ejemplo: `es.misitio.com`, `en.misitio.com`.

## **¿Qué se necesita para configurar un Virtual Host?** {#que-se-necesita-para-configurar-un-virtual-host}

Dependiendo del servidor web, los requisitos y pasos varían:

### **En Apache HTTP Server** {#en-apache-http-server}

- Tener Apache instalado.
- Acceso al archivo de configuración (`httpd.conf` o `apache2.conf`).
- Permisos para editar archivos en `/etc/apache2/sites-available/` (en Linux).

**Ejemplo de configuración:**

```apache
<VirtualHost *:80>
    ServerName midominio.com
    ServerAlias www.midominio.com
    DocumentRoot /var/www/midominio
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

Luego, habilitar el sitio con:

```bash
sudo a2ensite midominio.conf
sudo systemctl reload apache2
```

### **En Nginx** {#en-nginx}

- Tener Nginx instalado.
- Acceso a `/etc/nginx/sites-available/`.

**Ejemplo de configuración:**

```nginx
server {
    listen 80;
    server_name midominio.com www.midominio.com;
    root /var/www/midominio;
    index index.html;

    access_log /var/log/nginx/midominio.access.log;
    error_log /var/log/nginx/midominio.error.log;
}
```

Luego, crear un enlace simbólico y reiniciar Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/midominio /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```
