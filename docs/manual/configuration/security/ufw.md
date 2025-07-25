# Configuración del Firewall con UFW (Uncomplicated Firewall)

Como parte de las medidas de seguridad del servidor donde se despliega la aplicación JokeAppWeb, se configuró el firewall UFW (Uncomplicated Firewall) para controlar y restringir el acceso a los servicios esenciales del sistema. Esta configuración ayuda a reducir la exposición a posibles ataques externos, permitiendo únicamente el tráfico necesario.

## Política general del firewall

Se definieron políticas por defecto que bloquean cualquier intento de conexión entrante, excepto para los puertos explícitamente permitidos, mientras que se permite la salida libre de conexiones hacia Internet para mantener la funcionalidad del sistema:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

## Puertos permitidos

Posteriormente, se habilitaron solo los puertos requeridos por los servicios activos, según se detalla a continuación:

- **Puerto 22/TCP:** acceso SSH tradicional (usado para administración remota).
- **Puerto 52318/TCP:** puerto interno utilizado por la aplicación web, el cual fue expuesto externamente mediante reglas de reenvío de puertos en el router.

```bash
sudo ufw allow 22/tcp
sudo ufw allow 52318/tcp
```

Esta configuración también se aplica de forma automática a las interfaces IPv6 si están habilitadas en el sistema.

## Activación del firewall y verificación

Una vez configuradas las reglas, se activó el firewall:

```bash
sudo ufw enable
```

Para verificar el estado actual del firewall y las reglas activas:

```bash
sudo ufw status numbered
sudo ufw status verbose
```

El resultado fue el siguiente:

```bash
Status: active

    To                         Action      From
    --                         ------      ----
[ 1] 22/tcp                     ALLOW IN    Anywhere
[ 2] 52318/tcp                  ALLOW IN    Anywhere
[ 3] 22/tcp (v6)                ALLOW IN    Anywhere (v6)
[ 4] 52318/tcp (v6)             ALLOW IN    Anywhere (v6)
```

Con esta configuración, el servidor permite únicamente el acceso necesario para la gestión remota (SSH) y para la aplicación desplegada, minimizando la superficie de ataque y reforzando la seguridad general del sistema.