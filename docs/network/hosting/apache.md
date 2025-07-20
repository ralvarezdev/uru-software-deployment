# Apache

## ¿Qué es?

Apache HTTP Server (comúnmente llamado Apache) es un servidor web de código abierto que permite publicar, gestionar y servir contenido a través del protocolo HTTP (HyperText Transfer Protocol) y su versión segura HTTPS (HTTP sobre SSL/TLS).

Es un software multiplataforma que funciona como intermediario entre el servidor donde se alojan los archivos (páginas web, imágenes, scripts, etc.) y los clientes (navegadores como Chrome, Firefox, etc.), procesando sus solicitudes y entregando las respuestas correspondientes.

## Características principales

<h4>Protocolos Soportados</h4>

Apache es compatible principalmente con HTTP/1.1 y HTTP/2, protocolos estándar para la transferencia web. También admite extensiones como WebDAV (para edición remota de archivos) y FastCGI (para mejorar el rendimiento con aplicaciones dinámicas). Aunque no está diseñado para protocolos como FTP o SMTP, puede combinarse con otros servicios para cubrir esas necesidades. La configuración de protocolos se realiza mediante directivas en sus archivos de configuración.

<h4>Configuración Flexible</h4>

Apache se configura mediante archivos como `httpd.conf` (configuración principal) o `.htaccess` (reglas por directorio). Estos archivos permiten definir desde puertos de escucha hasta reglas complejas de redirección. Las directivas como `Directory` (permisos de acceso) o `RewriteRule` (URLs amigables) ofrecen granularidad. La posibilidad de usar archivos `.htaccess` permite ajustes sin reiniciar el servidor, ideal para entornos compartidos donde los usuarios no tienen acceso raíz.

<h4>Entorno de Ejecución</h4>

Para contenido dinámico, Apache se integra con lenguajes como PHP (vía `mod_php`), Python (con `mod_wsgi`) o Perl (`mod_perl`). Estos módulos permiten ejecutar scripts directamente en el servidor, generando HTML personalizado antes de enviarlo al cliente. Además, puede conectarse a bases de datos (MySQL, PostgreSQL) para sitios con almacenamiento persistente. Esta capacidad lo hace apto para CMS como WordPress o frameworks como Laravel.

<h4>Proxy y Balanceador de Carga</h4>

Como proxy inverso, Apache redirige solicitudes a servidores internos (ej: una app Node.js en otro puerto), ocultando la infraestructura real. Para alta disponibilidad, módulos como `mod_proxy_balancer` distribuyen el tráfico entre múltiples servidores (load balancing), mejorando la escalabilidad. Aunque no es tan eficiente como Nginx o HAProxy para esta tarea, su facilidad de configuración lo hace viable para entornos pequeños o medianos.

<h4>Seguridad Básica</h4>

Apache incluye herramientas para proteger sitios web: autenticación básica/digest (`mod_auth`), restricciones por IP (`Require ip`), y cifrado SSL/TLS (vía `mod_ssl`). Configuraciones como `LimitRequestBody` (para evitar ataques DDoS) o `Header set X-Content-Type-Options` (para mitigar MIME sniffing) añaden capas de seguridad. Sin embargo, muchas protecciones avanzadas (como WAFs) requieren módulos adicionales o software externo.

<h4>Virtual Host</h4>

Apache permite alojar múltiples sitios web en un mismo servidor físico mediante Virtual Hosts. Cada virtual host tiene su propia configuración independiente, como dominio, directorio raíz (`DocumentRoot`), reglas de acceso y SSL, simulando servidores separados.


## Instalación

Para instalar Apache2, se emplea el siguiente comando:

```bash
sudo apt install apache2
```

Apache2 se configura mediante directivas en archivos de configuración de texto plano en formato `/etc/apache2/`. Estas directivas se distribuyen entre los siguientes archivos y directorios:

<h3> Archivos </h3>

- **apache2.conf**: El archivo de configuración principal de Apache2. Contiene configuraciones globales para Apache2.
- **envvars**: Archivo donde se establecen las variables de entorno de Apache2.
- **magic**: Instrucciones para determinar el tipo MIME según los primeros bytes de un archivo.
- **ports.conf**: Contiene las directivas que determinan en qué puertos TCP está escuchando Apache2.

<h3> Directorios </h3>

- **conf-available**: Este directorio contiene los archivos de configuración disponibles. Todos los archivos que estaban previamente en `/etc/apache2/conf.d` deben trasladarse a `/etc/apache2/conf-available`.
- **conf-enabled**: Contiene enlaces simbólicos a los archivos en `/etc/apache2/conf-available`. Cuando se crea un enlace simbólico en un archivo de configuración, este se habilitará la próxima vez que se reinicie Apache2.
- **mods-available**: Este directorio contiene archivos de configuración para cargar y configurar los módulos. Sin embargo, no todos los módulos tendrán archivos de configuración específicos.
- **mods-enabled**: Contiene enlaces simbólicos a los archivos en `/etc/apache2/mods-available`. Cuando se crea un enlace simbólico en un archivo de configuración de módulo, este se habilitará la próxima vez que se reinicie Apache2.
- **sites-available**: Este directorio contiene los archivos de configuración de los hosts virtuales de Apache2. Estos hosts permiten configurar Apache2 para varios sitios con configuraciones independientes.
- **sites-enabled**: Al igual que mods-enabled, sites-enabled contiene enlaces simbólicos al directorio `/etc/apache2/sites-available`. De igual forma, cuando se crea un enlace simbólico en un archivo de configuración, el sitio configurado por él se activará al reiniciar Apache2.

<h3> Directivas </h3>

Para hacer las configuraciones se emplean las Directivas, estas son instrucciones al servidor Apache para controlar su funcionamiento. Una directiva consiste en un nombre seguido de uno o más argumentos. Se escriben en los archivos de configuración como `httpd.conf`, `apache2.conf`, o dentro de bloques como `<VirtualHost>`, `<Directory>`, o incluso en archivos `.htaccess`.

**Ejemplo de directivas:**

```apache
ServerAdmin webmaster@miweb.com
DocumentRoot /var/www/html
DirectoryIndex index.html index.php
ErrorLog ${APACHE_LOG_DIR}/error.log
```

Apache2 se entrega con una configuración predeterminada “compatible con hosts virtuales”: está configurado con un único host virtual predeterminado (usando la directiva `VirtualHost`) que puede modificarse o usarse tal cual si tiene un solo sitio, o usarse como plantilla para hosts virtuales adicionales si tiene varios sitios.

Si no se modifica, el host virtual predeterminado servirá como su sitio predeterminado, o los usuarios del sitio verán si la URL que ingresan no coincide con la directiva `ServerName` de alguno de sus sitios personalizados. Para modificar el host virtual predeterminado, edite el archivo `/etc/apache2/sites-available/000-default.conf`.

Las directivas establecidas para un host virtual solo se aplican a ese host virtual en particular.

Para configurar un nuevo host o sitio virtual, se toma como plantilla el archivo `000-default.conf` en el mismo directorio con el nombre que elija. Por ejemplo:
```apache
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/mynewsite.conf
```
---

<h3> Módulos </h3>

Los módulos de Apache2 son componentes que extienden las funcionalidades del servidor web Apache. Gracias a su arquitectura modular, Apache permite activar solo los módulos necesarios para cada proyecto, lo que mejora el rendimiento, la seguridad y la flexibilidad del servidor.

Estos módulos pueden estar integrados de forma estática en el binario de Apache o cargarse dinámicamente como objetos compartidos (DSO) durante la ejecución. Cada módulo añade capacidades específicas al servidor. Por ejemplo, algunos permiten ejecutar lenguajes como PHP (`mod_php`), habilitar HTTPS (`mod_ssl`), comprimir contenido (`mod_deflate`), o reescribir URLs (`mod_rewrite`). Otros se encargan de tareas como autenticación (`mod_auth_basic`, `mod_auth_digest`), caché (`mod_cache`), control de acceso (`mod_access_compat`), o incluso convertir Apache en un proxy inverso (`mod_proxy`).

Entre los módulos más importantes y comúnmente utilizados están:

- **mod_rewrite**: permite reescribir URLs dinámicamente, ideal para crear URLs amigables.
- **mod_ssl**: habilita el soporte para conexiones seguras HTTPS mediante SSL/TLS.
- **mod_proxy**: convierte Apache en un proxy o proxy inverso, útil para redirigir peticiones a otros servidores backend.
- **mod_deflate**: comprime el contenido antes de enviarlo al cliente, mejorando la velocidad de carga.
- **mod_php**: permite ejecutar scripts PHP directamente desde Apache.
- **mod_auth_basic / mod_auth_digest**: proporcionan autenticación por usuario y contraseña.
- **mod_cache**: mejora el rendimiento al almacenar contenido en caché.
- **mod_status**: ofrece una vista en tiempo real del estado del servidor.
- **mod_security**: actúa como firewall de aplicaciones web, protegiendo contra ataques como XSS o inyecciones SQL.

La gestión de estos módulos se realiza mediante comandos como `a2enmod` (para habilitar) y `a2dismod` (para deshabilitar), y su configuración se define en archivos como `apache2.conf`, `httpd.conf` o dentro de bloques.

---

## Servidor Web

Apache funciona como un intermediario entre los usuarios y los archivos almacenados en un servidor. Cuando un navegador solicita una página web, Apache procesa esa petición (HTTP request), busca el recurso solicitado (HTML, imágenes, CSS, etc.) en el sistema de archivos y lo envía como respuesta (HTTP response).

Apache2 puede servir tanto sitios web estáticos (HTML, CSS, JS) como sitios dinámicos, pero con una condición importante:

- Para sitios dinámicos desarrollados en PHP o Python, Apache puede ejecutar el código directamente mediante módulos como `mod_php` o `mod_wsgi`.
- En cambio, para aplicaciones desarrolladas en Node.js, Apache no puede ejecutarlas directamente. En estos casos, se utiliza Apache como proxy inverso, redirigiendo las peticiones HTTP al servidor Node.js que corre por separado (por ejemplo, en el puerto 3000).

---

<h3> Servir un solo sitio web </h3>

<h4> Requisitos previos </h4>

- Tener instalado Apache2 en el servidor Ubuntu con `sudo apt install apache2`.
- Tener instalado git (para clonar repositorios de ser necesario).
- Tener acceso con permisos de superusuario (sudo).
- Tener listos los archivos estáticos (HTML, CSS, JS, imágenes, etc.).
<h4>Paso 1: Crear el directorio donde se almacenarán los archivos estáticos</h4>

En este directorio se puede clonar el repositorio que contenga los archivos con `git clone <link-repositorio>`.

```bash
sudo mkdir -p /var/www/mynewsite.com
```

<h4>Paso 2: Crear un archivo de configuración para el virtual host</h4>

Siguiendo la sugerencia que propone la documentación se realiza una copia del archivo que ya trae por defecto Apache y se emplea como plantilla:

```bash
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/mynewsite.conf
```

<h4>Paso 3: Configurar apache para servir el directorio del sitio</h4>

El bloque `<VirtualHost *:80>` indica que Apache atenderá solicitudes HTTP (puerto 80) en cualquier IP disponible del servidor. Dentro de este bloque se definen todas las configuraciones específicas para un sitio web.

- `ServerAdmin` establece el correo del administrador del sitio. Este correo puede aparecer en páginas de error para que los usuarios lo contacten en caso de problemas.
- `ServerName` define el nombre de dominio principal que Apache usará para identificar este sitio, por ejemplo, midominio.com. Por su parte, `ServerAlias` permite añadir nombres alternativos, como www.midominio.com, para que también apunten al mismo sitio.
- `DocumentRoot` indica la carpeta donde se encuentran los archivos del sitio (HTML, CSS, imágenes, etc.). Apache usará esta ruta para buscar el contenido que debe mostrar al usuario.
- `ErrorLog` y `CustomLog` especifican dónde se almacenarán los registros de errores y accesos, respectivamente. Estos archivos ayudan a monitorear el funcionamiento del sitio y detectar problemas.

```apache
<VirtualHost *:80>
    ServerAdmin webmaster@mynewsite
    ServerName mynewsite
    ServerAlias www.mynewsite
    DocumentRoot /var/www/mynewsite

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

<h4>Paso 4: Habilitar el sitio y reiniciar apache</h4>

```bash
sudo a2ensite mynewsite
sudo systemctl restart apache2.service
```

<h3> Servir más de un sitio web </h3>

Apache utiliza los Virtual Hosts para manejar múltiples sitios web en un mismo servidor. Cada `<VirtualHost>` debe tener un `ServerName` único (o combinado con `ServerAlias`) para evitar conflictos. Si dos VirtualHosts comparten el mismo `ServerName` y puerto, Apache usará el primero que encuentre en la configuración, ignorando el segundo. Es fundamental que cada sitio web tenga su propia configuración con dominios o subdominios distintos para que Apache pueda enrutar las peticiones correctamente.

Además, los VirtualHosts pueden diferenciarse por puertos (como `*:80` para HTTP y `*:443` para HTTPS) o direcciones IP (si el servidor tiene varias). Esto permite, por ejemplo, tener un mismo dominio respondiendo de forma distinta según el protocolo (HTTP vs. HTTPS) o la IP de acceso. Sin embargo, la forma más común es usar el mismo puerto (generalmente el 80 o 443) y distinguir los sitios mediante el nombre de dominio en la cabecera Host de la petición HTTP.

Cuando Apache recibe una solicitud, sigue este orden para decidir qué VirtualHost usar:

1. Compara la cabecera Host de la petición con los `ServerName` y `ServerAlias` definidos en los VirtualHosts. Si coincide, sirve ese sitio.
2. Si no hay coincidencia, usa el primer VirtualHost definido en la configuración (por orden de carga en `sites-enabled/`). Este actúa como "VirtualHost por defecto".
3. Si no hay ningún VirtualHost configurado, Apache usa su configuración global (generalmente el contenido de `/var/www/html`).

Para la configuración se repite el mismo proceso para servir 1 sitio web, es decir, se debe crear un directorio propio y el archivo de configuración del virtual host. Todos los archivos de conf se deben alojar en `/etc/apache2/sites-available`.

---

## Proxy inverso

Un proxy inverso es un servidor que recibe solicitudes de clientes y las redirige a uno o más servidores backend, ocultando la infraestructura real. A diferencia de un proxy tradicional (que protege a los clientes), un proxy inverso protege y gestiona los servidores backend.

**Casos de uso comunes:**

- Balanceo de carga: Distribuir tráfico entre múltiples servidores.
- Terminación SSL: Manejar HTTPS en el proxy y comunicarse con backends en HTTP.
- Caché de contenido: Mejorar el rendimiento almacenando respuestas estáticas.
- Seguridad: Ocultar servidores internos y filtrar ataques (DDoS, inyecciones).
- Enrutamiento basado en rutas: Redirigir `/app1` a un backend y `/app2` a otro.

<h3>Requisitos previos</h3>

- Servidor con Apache instalado (versión 2.4 o superior recomendada)
- Módulos `mod_proxy` y `mod_proxy_http` habilitados
- Acceso a la configuración del servidor (generalmente requiere privilegios de root/sudo)

---

<h3> Módulos Requeridos y su Función</h3>

<h4> Módulos Principales</h4>

| Módulo                  | Descripción                        | Uso Típico                              |
|-------------------------|------------------------------------|-----------------------------------------|
| `mod_proxy`             | Núcleo de funcionalidad proxy      | Habilita capacidades básicas de proxy   |
| `mod_proxy_http`        | Soporte para HTTP/HTTPS            | Proxy para aplicaciones web (HTTP backends) |
| `mod_proxy_balancer`    | Balanceo de carga                  | Distribución de tráfico entre múltiples servidores |
| `mod_lbmethod_byrequests` | Algoritmos de balanceo           | Implementa round-robin y otros métodos  |
| `mod_headers`           | Manipulación de headers            | Modificar encabezados HTTP (X-Forwarded-For, etc.) |
| `mod_ssl`               | Soporte SSL/TLS                    | Terminación SSL en el proxy             |

**Comando para activarlos:**

```bash
sudo a2enmod proxy proxy_http proxy_balancer lbmethod_byrequests headers ssl
sudo systemctl restart apache2
```

---

<h2> Directivas Clave y su Configuración </h2>

<h3> Directivas Fundamentales </h3>

| Directiva            | Parámetros                | Descripción                                 | Ejemplo                                      |
|----------------------|--------------------------|---------------------------------------------|----------------------------------------------|
| `ProxyPass`          | `<ruta> <url-backend>`   | Mapea rutas a servidores backend            | `ProxyPass "/app" "http://backend:8080"`     |
| `ProxyPassReverse`   | `<ruta> <url-backend>`   | Corrige URLs en respuestas del backend      | `ProxyPassReverse "/app" "http://backend:8080"` |
| `ProxyPreserveHost`  | `On\|Off`                | Mantiene el header `Host` original          | `ProxyPreserveHost On`                       |
| `ProxyRequests`      | `On\|Off`                | **No usar en proxy inverso** (solo para proxy forward) | `ProxyRequests Off`                |
| `ProxyVia`           | `On\|Off\|Full`          | Controla el header `Via` en solicitudes     | `ProxyVia On`                                |

<h3> Directivas Avanzadas </h3>

| Directiva             | Uso                                                        |
|-----------------------|-----------------------------------------------------------|
| `ProxyTimeout`        | Define timeout para conexiones backend (ej: `ProxyTimeout 60`) |
| `ProxyIOBufferSize`   | Tamaño del buffer para respuestas (ej: `ProxyIOBufferSize 8192`) |
| `ProxyErrorOverride`  | Permite a Apache manejar errores HTTP del backend         |
| `RequestHeader`       | Modifica/agrega headers (ej: `RequestHeader set X-Forwarded-Proto "https"`) |

---

<h2> Configuración Básica de Proxy Inverso en Apache </h2>

Edita el archivo de configuración (generalmente en `/etc/apache2/sites-available/000-default.conf` o similar):

<h3> Ejemplo Completo (Archivo de VirtualHost) </h3>

```apache
<VirtualHost *:80>
    # Dominio que recibirá las peticiones
    ServerName mi-app.com

    # Activar funcionalidad de proxy
    ProxyPreserveHost On

    # Redirección principal al backend
    ProxyPass "/" "http://localhost:3000/"
    ProxyPassReverse "/" "http://localhost:3000/"

    # Configuración de logs
    ErrorLog ${APACHE_LOG_DIR}/mi-app-error.log
    CustomLog ${APACHE_LOG_DIR}/mi-app-access.log combined
</VirtualHost>
```

<h4> Activación del Proxy </h4>

```apache
ProxyPreserveHost On
```
- **Función clave**: Mantiene el header `Host` original de la solicitud del cliente al enviarla al backend.
  - Sin esto, el backend recibiría `Host: localhost:3000` en lugar de `Host: mi-app.com`.
  - Esencial para aplicaciones que usan host-based routing.

<h4> Redirección al Backend </h4>

```apache
ProxyPass "/" "http://localhost:3000/"
ProxyPassReverse "/" "http://localhost:3000/"
```

| Directiva         | Función                                                                 |
|-------------------|------------------------------------------------------------------------|
| `ProxyPass`       | Redirige **todas las peticiones** (`/`) al servidor backend en `http://localhost:3000/`. |
| `ProxyPassReverse`| Corrige URLs en **respuestas del backend** (como redirecciones HTTP o headers `Location`). |

**Ejemplo práctico**:
- Si el backend devuelve `Location: http://localhost:3000/login`, el proxy lo reescribirá como `Location: http://mi-app.com/login`.

---

## Balanceador de carga

Un balanceador de carga distribuye peticiones entre múltiples servidores backend para:

- **Aumentar disponibilidad**: Si un servidor falla, otros siguen atendiendo.
- **Mejorar rendimiento**: Distribuye el tráfico equitativamente.
- **Escalar horizontalmente**: Añadir más servidores bajo demanda.

<h3> Módulos Requeridos </h3>

Para activarlos se emplea: 

```bash
sudo a2enmod proxy proxy_http proxy_balancer lbmethod_byrequests
sudo systemctl restart apache2
```

| Módulo                  | Función                                 |
|-------------------------|-----------------------------------------|
| `mod_proxy_balancer`    | Soporte para balanceo de carga          |
| `lbmethod_byrequests`   | Algoritmo de distribución (round-robin) |

---

<h3> Configuración Básica </h3>

<h4>Ejemplo: Balanceo Round-Robin (por peticiones)</h4>

```apache
<VirtualHost *:80>
    ServerName mi-app.com

    <Proxy balancer://mycluster>
        # Servidores backend (mínimo 2)
        BalancerMember http://192.168.1.10:8080
        BalancerMember http://192.168.1.11:8080

        # Método de balanceo (opcional, por defecto es byrequests)
        ProxySet lbmethod=byrequests
    </Proxy>

    ProxyPass "/" "balancer://mycluster/"
    ProxyPassReverse "/" "balancer://mycluster/"
</VirtualHost>
```

<h4>Parámetros Clave</h4>

| Directiva         | Descripción                                 |
|-------------------|---------------------------------------------|
| `BalancerMember`  | Define un servidor backend (IP:puerto).     |
| `lbmethod=byrequests` | Distribuye peticiones en orden rotativo (round-robin). |
| `ProxyPass`       | Enruta tráfico al cluster definido.         |

---

<h3> Algoritmos de Balanceo </h3>

Apache soporta varios métodos:
<h4>A. Round-Robin (`byrequests`)</h4>

```apache
ProxySet lbmethod=byrequests
```
- **Cómo funciona**: Distribuye peticiones secuencialmente (1→2→3→1→2...).
- **Ideal para**: Cargas homogéneas (servidores con igual capacidad).

<h4>B. Por Tráfico (`bytraffic`)</h4>

```apache
ProxySet lbmethod=bytraffic
```
- **Cómo funciona**: Distribuye basado en el ancho de banda usado por cada backend.
- **Ideal para**: Servidores con anchos de banda desiguales.

<h4>C. Por Ocupación (`bybusyness`)</h4>

```apache
ProxySet lbmethod=bybusyness
```
- **Cómo funciona**: Prioriza servidores con menos conexiones activas.
- **Ideal para**: Evitar sobrecarga en servidores lentos.

---

<h4>B. Ponderación de Servidores</h4>

```apache
BalancerMember http://backend1:8080 loadfactor=3
BalancerMember http://backend2:8080 loadfactor=1
```
- **Efecto**: `backend1` recibirá 3 veces más tráfico que `backend2`.
- **Uso típico**: Servidores con capacidades diferentes.

<h4>C. Timeouts y Reintentos</h4>

```apache
ProxySet timeout=30 retry=60
```

| Parámetro | Descripción                                         |
|-----------|-----------------------------------------------------|
| `timeout` | Tiempo de espera (segundos) para conexión al backend.|
| `retry`   | Tiempo (segundos) antes de reintentar con un backend caído.|

---

<h3> Monitoreo del Balanceador </h3>

<h4> Interfaz de Estado (Requiere `mod_status`)</h4>

```apache
<Location "/balancer-manager">
    SetHandler balancer-manager
    Require host ejemplo.com  # Restringir acceso
</Location>
```
- **URL**: `http://tuserver.com/balancer-manager`
- **Muestra**:
  - Estado de cada `BalancerMember`.
  - Tráfico asignado.
  - Errores detectados.

