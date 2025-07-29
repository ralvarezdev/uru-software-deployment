## Preparación del Entorno

Antes de iniciar el despliegue del sistema, es necesario preparar el entorno en el servidor o máquina local que actuará como host. A continuación, se detallan los pasos para instalar las herramientas necesarias y configurar las variables de entorno requeridas para el funcionamiento de JokeAppWeb.

## Instalación de herramientas necesarias

Para preparar el entorno de ejecución del sistema JokeAppWeb, es necesario instalar una serie de herramientas que permitirán la orquestación de servicios, gestión de contenedores, configuración del firewall, y exposición del sistema a través de la red. A continuación, se detallan los pasos necesarios.

Se debe contar con privilegios de superusuario para instalar estas herramientas.


#### Actualización del sistema

Se recomienda comenzar actualizando el sistema para contar con las últimas versiones de los paquetes disponibles:

```bash
sudo apt update
sudo apt upgrade
```

#### Instalación de Git

Git fue el sistema de control de versiones utilizado para gestionar el código fuente de la aplicación. Para instalarlo, se ejecutó:

```bash
sudo apt install git
```

#### Instalación de Docker y Docker Compose

Docker es el motor de contenedores que se emplea para ejecutar tanto el backend como la base de datos y otras dependencias de la aplicación. Se instala usando el script oficial:

```bash
curl -sSL https://get.docker.com | sh
```

Luego, se agrega el usuario actual al grupo docker para evitar usar sudo en cada comando:

```bash
sudo usermod -aG docker $USER
```

> Importante: se debe cerrar y volver a iniciar sesión para que este cambio tenga efecto.

Habilitar el servicio de Docker al arranque del sistema:

```bash
sudo systemctl enable docker
```

Verificar que Docker esté correctamente instalado:

```bash
docker run hello-world
```

Instalar el complemento oficial de Docker Compose (para versiones modernas):

```bash
sudo apt install docker-compose-plugin
```

#### Instalación de Nginx

Aunque el despliegue externo se realiza mediante túneles de Cloudflare, se instala Nginx como servidor web auxiliar y para futuras configuraciones de proxy inverso:

```bash
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

#### Instalación de UFW (Firewall)

El firewall UFW se emplea para permitir únicamente las conexiones necesarias hacia el servidor:

```bash
sudo apt install ufw
```
#### Instalación del cliente DDNS No-IP

Para mantener el dominio enlazado a una IP pública dinámica, se instala el cliente No-IP:

```bash
wget --content-disposition https://www.noip.com/download/linux/latest
tar xf noip-duc_3.3.0.tar.gz
cd noip-duc_3.3.0/binaries
sudo apt install ./noip-duc_3.3.0_arm64.deb  
```

#### Instalación de Cloudflared (cliente de túneles de Cloudflare)

Para exponer de forma segura la aplicación frontend sin abrir puertos en el router ni configurar certificados SSL manualmente, se emplea Cloudflare Tunnel. El cliente cloudflared se instala de la siguiente manera:

```bash
curl -L https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-archive-keyring.gpg] https://pkg.cloudflare.com/cloudflared $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/cloudflared.list
sudo apt update
sudo apt install cloudflared -y
```
