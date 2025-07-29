
## Configuración de Red y Acceso Externo

En este proyecto se implementaron dos métodos para exponer la aplicación JokeAppWeb a Internet: la **configuración principal mediante Cloudflare Tunnel** (recomendada por su seguridad y facilidad de gestión), y una **configuración secundaria basada en port forwarding y DNS dinámico con No-IP**. A continuación se describen ambos enfoques.

---

### 1. Exposición Segura con Cloudflare Tunnel (Método Principal)

Para exponer públicamente la aplicación JokeAppWeb de forma segura y profesional a través de un dominio HTTPS, se configuró un túnel mediante la plataforma Cloudflare, aprovechando las funcionalidades de su servicio Cloudflare Tunnel. Esto permite encapsular el tráfico hacia un servidor en red local (detrás de NAT o sin IP fija), a través de una conexión segura, sin necesidad de exponer directamente la IP pública ni abrir puertos adicionales.

#### Creación de túnel en Cloudflare

La configuración se realizó en la sección Tunnels del panel de control de Cloudflare, dentro del dominio principal `ralvarez.dev`, bajo un proyecto llamado `deploying-jokes`.

<div class="center">
    <img src="../../../assets/images/manual/cloudflare-tunnels.png" alt="cloudflare tunnels" class="server--image">
    <i>Configuración del cloudflare tunnels</i>
</div>

Cloudflare añade automáticamente un registro DNS tipo CNAME o A que vincula `deploying-jokes.ralvarez.dev` con el destino configurado. Esto permite acceder desde cualquier navegador a ese subdominio como si fuera una aplicación en la nube.

#### Instalación y Configuración Inicial de Cloudflared

Los pasos principales para instalar y configurar la herramienta cloudflared en el servidor fueron:

Actualizar e instalar dependencias:

```bash
sudo apt update
sudo apt upgrade -y
sudo apt install curl lsb-release -y
```

Agregar la llave GPG y el repositorio oficial de Cloudflare:

```bash
curl -L https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-archive-keyring.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflared.list
sudo apt update
```

Instalar el paquete cloudflared:

```bash
sudo apt install cloudflared -y
cloudflared --version
```

Autenticarse con Cloudflare y crear el túnel:

```bash
cloudflared tunnel login
cloudflared tunnel create deploying-jokes
```

##### Archivo config.yml

Se creó un archivo de configuración `config.yml` en `/etc/cloudflared/` con la siguiente estructura básica:

```yaml
url: http://localhost:52318
tunnel: <ID-del-túnel>
credentials-file: /home/admin/.cloudflared/<archivo-de-credenciales>.json
```

- `url` indica la dirección local donde la aplicación está siendo servida, que en este caso es el contenedor frontend accesible en el puerto 52318.
- `tunnel` es el identificador único generado al crear el túnel.
- `credentials-file` es la ruta al archivo JSON con las credenciales necesarias para que cloudflared pueda autenticar y ejecutar el túnel.

#### Configuración del Subdominio en Cloudflare

En el panel de Cloudflare, se realizaron los siguientes pasos para vincular el túnel con un dominio público:

- **Registro DNS:** Se creó un registro CNAME para el subdominio `deploying-jokes` dentro del dominio principal `ralvarez.dev`. Este CNAME apunta a `xxxx.cfargotunnel.com` (la URL del túnel proporcionada por Cloudflare).
- **Enrutamiento del túnel:** Se asoció el túnel `deploying-jokes` con el subdominio `deploying-jokes.ralvarez.dev` usando el comando:

    ```bash
    cloudflared tunnel route dns deploying-jokes deploying-jokes.ralvarez.dev
    ```

- **Configuración del servicio:** Se instaló y habilitó el servicio systemd de cloudflared para que el túnel inicie automáticamente con el sistema operativo:

    ```bash
    sudo cloudflared service install --config /etc/cloudflared/config.yml
    sudo systemctl start cloudflared
    sudo systemctl status cloudflared
    ```

#### Resultado Final

Gracias a esta configuración:

- El tráfico dirigido a `https://deploying-jokes.ralvarez.dev/` pasa a través de Cloudflare, que se encarga de gestionar el cifrado HTTPS.
- Cloudflare Tunnel redirige este tráfico al servicio local en `http://localhost:52318`, que corresponde al contenedor Docker con Nginx sirviendo el frontend.
- No es necesario abrir puertos externos en el router ni configurar certificados SSL en el servidor local, simplificando la seguridad y el despliegue.

---

### 2. Exposición mediante Port Forwarding y DNS Dinámico con No-IP (Método Secundario)

Como alternativa, se implementó una configuración tradicional basada en port forwarding y DNS dinámico, útil en escenarios donde no se puede utilizar Cloudflare Tunnel.

#### Obtención de dominio

Para efectos de este proyecto, se empleó el dominio `ralvarez.dev` obtenido en Cloudflare como base para el acceso externo y la publicación segura de la aplicación, asegurando un control centralizado y profesional sobre el entorno de despliegue.

<div class="center">
    <img src="../../../assets/images/manual/domain.png" alt="Dominio" class="server--image">
    <i>Dominio ralvarez.dev</i>
</div>

#### Asociación de dominio dinámico con IP pública (No-IP)

Para permitir el acceso remoto a la aplicación JokeAppWeb desde fuera de la red local, se realizó la configuración de un dominio dinámico mediante la plataforma No-IP, utilizando como dominio principal: `ralvarez.dev`. Esto facilita el acceso a través de un nombre de dominio en lugar de una dirección IP pública, incluso si esta cambia periódicamente (como suele suceder en conexiones residenciales).

##### Instalación y configuración del cliente No-IP (DUC)

Para mantener actualizada la IP pública asociada al dominio, se instaló el cliente oficial de No-IP DUC (Dynamic Update Client) en el servidor. A continuación, se detallan los pasos ejecutados en un sistema Linux (arquitectura ARM64):

**Instalación del cliente DUC**

```bash
# Descargar el cliente
wget --content-disposition https://www.noip.com/download/linux/latest

# Extraer los archivos
tar xf noip-duc_3.3.0.tar.gz
cd noip-duc_3.3.0/binaries

# Instalar el paquete .deb (en este caso, para arquitectura ARM64)
sudo apt install ./noip-duc_3.3.0_arm64.deb
```

**Uso del cliente DUC**

Ejecutar el programa para iniciarlo:

```bash
noip-duc
```

Iniciar sesión y enviar actualizaciones automáticas:

```bash
noip-duc -g all.ddnskey.com --username <DDNS Key Username> --password <DDNS Key Password>
```

En este paso se utilizaron las credenciales DDNS para autenticar el cliente y vincular el dominio dinámico con la IP pública del servidor.

##### Creación de un servicio para ejecutar No-IP DUC automáticamente

Para asegurar que el cliente DUC de No-IP se inicie automáticamente cada vez que el servidor se reinicie, se creó un servicio personalizado de systemd. Esto garantiza que la IP pública se actualice de forma continua sin intervención manual.

**Pasos realizados**

Verificar la ubicación del ejecutable de noip-duc:

```bash
which noip-duc
```

Crear un nuevo archivo de servicio:

```bash
sudo nano /etc/systemd/system/noip-duc.service
```

Contenido del servicio:

```ini
[Unit]
Description=No-IP Dynamic Update Client
After=network.target

[Service]
ExecStart=/usr/bin/noip-duc
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Recargar systemd y habilitar el servicio:

```bash
sudo systemctl daemon-reexec
sudo systemctl enable noip-duc
sudo systemctl start noip-duc
```

Esto garantiza que noip-duc se ejecute automáticamente al iniciar el sistema.

##### Configuración del router (Port Forwarding)

El servicio No-IP no abre puertos automáticamente, por lo que fue necesario realizar la configuración manual del router Mercusys AC10 para habilitar el acceso remoto.

**Port forwarding para acceso SSH**

Se configuró una entrada para redirigir conexiones externas al servicio SSH del servidor:

<div class="center">
    <img src="../../../assets/images/manual/ssh-service.png" alt="Port forwarding" class="server--image">
    <i>Servicio SSH</i>
</div>

Esta configuración permite acceder de forma remota al servidor vía SSH usando el puerto externo 53479, lo cual es una estrategia útil y segura al evitar el puerto 22 por defecto.

**Port forwarding para acceso HTTP**

También se configuró un reenvío de puerto para publicar un servicio HTTP personalizado:

<div class="center">
    <img src="../../../assets/images/manual/http-service.png" alt="Port forwarding" class="server--image">
    <i>Servicio HTTP</i>
</div>

Esta configuración indica que se está publicando un servicio web desde un puerto interno (52318) accesible desde Internet a través del puerto externo 40842.

##### Definición de variable de entorno para el puerto HTTP

Para facilitar la gestión y referencia del puerto interno HTTP utilizado en la configuración del router, se añadió una variable de entorno en el servidor ejecutando el siguiente comando:

```bash
echo 'export HTTP_PORT=52318' >> ~/.bashrc
```

Esto permite acceder fácilmente al valor del puerto desde scripts y sesiones de terminal, mejorando la mantenibilidad y claridad de la configuración.

##### Verificación del acceso remoto

Tras realizar la configuración de dominio dinámico, port forwarding y ejecución del cliente DUC, se realizó una verificación desde una red externa (por ejemplo, conexión de datos móviles), obteniendo resultados exitosos:

- Se confirmó el enlace de la IP pública `38.25.235.159` al dominio dinámico configurado.
- Se comprobó el acceso a la aplicación web mediante el nombre de dominio.
- Se validó la conectividad remota al servidor vía SSH usando el puerto externo configurado.
- La plataforma de No-IP indicó que la configuración DDNS y de red está funcionando correctamente.

<div class="center">
    <img src="../../../assets/images/manual/no-ip.png" alt="No-ip" class="server--image">
    <i>Verificación del acceso remoto</i>
</div>

---

Ambos métodos permiten exponer la aplicación a Internet, pero se recomienda el uso de **Cloudflare Tunnel** como solución principal por su mayor seguridad, facilidad de gestión y soporte nativo de HTTPS sin necesidad de abrir puertos en el router.

