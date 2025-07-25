
El sistema fue desplegado y probado en un entorno Linux con arquitectura ARM64, específicamente sobre una distribución Ubuntu 25.04. A continuación, se detallan los requisitos de hardware, software y componentes externos necesarios para replicar el entorno de ejecución.

### Sistema Operativo

**Ubuntu 25.04** (64 bits, arquitectura ARM64)

> **Nota:** También puede ser desplegado en otras distribuciones Linux compatibles como Debian, siempre que se instalen las versiones adecuadas de los servicios utilizados.

### Herramientas y paquetes del sistema instalados

| Paquete                | Versión   | Función                                 |
|------------------------|-----------|-----------------------------------------|
| docker-ce              | 5:28.3.2  | Motor de contenedores Docker            |
| docker-ce-cli          | 5:28.3.2  | Interfaz de línea de comandos           |
| docker-compose-plugin  | 2.38.2    | Orquestación de servicios               |
| docker-rootless-extras | 5:28.3.2  | Ejecución sin privilegios               |
| docker-model-plugin    | 0.1.33    | Complemento de Docker                   |
| nginx                  | 1.26.3    | Servidor web y proxy inverso            |
| noip-duc               | 3.3.0     | Cliente DDNS de No-IP                   |
| openssh-server         | 1:9.9p1   | Servidor SSH                            |
| ufw                    | 0.36.2    | Firewall de red                         |

### Puertos requeridos

Los siguientes puertos deben estar disponibles en el servidor y/o configurados en el router para permitir la operación completa del sistema:

| Puerto | Uso                                              |
|--------|--------------------------------------------------|
| 22     | Acceso SSH desde red local                       |
| 52318  | Puerto interno del servidor web                  |

> Si se utiliza Cloudflare Tunnel, los puertos 80 y 443 no son necesarios externamente.

### Equipamiento de red

Para permitir el acceso desde el exterior, se empleó un router **Mercusys AC10**, el cual permite configurar reglas de port forwarding para exponer puertos internos del servidor hacia el exterior. Esta funcionalidad es necesaria para habilitar servicios como SSH o HTTP desde fuera de la red local.