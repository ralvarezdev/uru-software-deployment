# Servidores Virtuales (VPS)

## ¿Qué es un Servidor Virtual?

Un **servidor virtual**, o **VPS (Virtual Private Server)**, es una instancia de servidor aislada que opera dentro de una máquina física compartida mediante tecnologías de virtualización. Aunque varios servidores virtuales pueden ejecutarse sobre el mismo hardware, **cada VPS cuenta con su propio sistema operativo, recursos asignados (CPU, RAM, disco) y configuraciones**, funcionando como si fuera un servidor independiente.

> A diferencia de una máquina virtual genérica que se usa con fines técnicos o de laboratorio, el VPS está pensado para entornos de producción y servicios online.

## ¿Cómo Funciona un VPS?

Un proveedor (como DigitalOcean, AWS o Linode) utiliza un hipervisor para dividir un servidor físico en múltiples VPS. Cada VPS tiene acceso restringido a los recursos asignados, pero se comporta como un servidor completo.

### Proceso básico:

1. El hipervisor se instala sobre el hardware físico (ESXi, KVM, etc.).
2. Se crean múltiples VPS, cada uno con su propio sistema operativo.
3. El cliente accede a su VPS mediante SSH o consola remota.
4. Puede instalar software, configurar servicios, o desplegar aplicaciones.
5. Cada VPS es independiente de los demás a nivel de software.

## Tipos de Servidores Virtuales

### VPS (Virtual Private Server)

- Aislado lógicamente dentro de un nodo físico.
- Uso común en alojamiento web, APIs, servicios empresariales.
- Acceso root y configuración personalizada.

### Servidor Cloud

- Similar al VPS, pero escalable dinámicamente desde la nube.
- Ofrece alta disponibilidad, balanceo y facturación por hora.

### Servidor Dedicado Virtual

- Recursos garantizados más cercanos al servidor dedicado.
- Mayor rendimiento, ideal para tráfico alto o aplicaciones críticas.

### Contenedores (Docker, LXC)

- Alternativa ligera a un VPS: no es una VM, comparte el kernel del host.
- Ideal para microservicios, CI/CD, aplicaciones desacopladas.

## Hipervisores Utilizados en VPS

| Tipo      | Características                                 | Ejemplos                    |
|-----------|--------------------------------------------------|-----------------------------|
| Tipo 1    | Corre directamente sobre el hardware físico.     | VMware ESXi, Hyper-V, KVM   |
| Tipo 2    | Corre sobre un sistema operativo anfitrión.      | Poco usado en VPS públicos  |

> En la mayoría de los VPS comerciales se usa KVM o Xen como hipervisor tipo 1.

## Usos Comunes del VPS

- Alojamiento de sitios web con CMS (WordPress, Joomla, etc.)
- Servidores de bases de datos (MySQL, PostgreSQL, MongoDB)
- Servidores de aplicaciones (Node.js, Django, Laravel)
- Implementación de APIs REST
- Automatización de tareas (bots, scrapers, jobs en cron)
- VPN, correo, DNS y otros servicios de red personalizados

## Ventajas del VPS

| Ventaja           | Descripción                                           |
|-------------------|--------------------------------------------------------|
| Escalabilidad     | Se pueden aumentar recursos sin migrar                 |
| Aislamiento       | Cada VPS es independiente del resto del sistema        |
| Ahorro de costos  | Más económico que un servidor físico dedicado          |
| Acceso root       | Control total del sistema operativo y configuraciones  |
| Rendimiento       | Recursos garantizados frente a hosting compartido      |
| Versatilidad      | Compatible con casi cualquier software o stack         |

## Comparación con Otros Modelos de Hosting

| Modelo             | Recursos | Aislamiento | Personalización | Costo  |
|--------------------|----------|-------------|------------------|--------|
| VPS                | Medio    | Medio-Alto  | Alto             | Medio  |
| Servidor dedicado  | Total    | Total       | Total            | Alto   |
| Hosting compartido | Bajo     | Bajo        | Muy limitado     | Bajo   |

## Herramientas de Gestión y Paneles

### Paneles de administración opcionales:

- Webmin / Virtualmin
- cPanel / WHM (licencia comercial)
- Plesk
- CyberPanel
- ISPConfig

### Proveedores populares de VPS:

- DigitalOcean
- Linode
- Vultr
- Hetzner
- AWS Lightsail
- Google Cloud VM instances
- Azure Virtual Machines

## Notas Técnicas

- En un VPS no tienes acceso al hipervisor, solo al sistema operativo de tu instancia.
- El rendimiento puede depender de la carga general del nodo físico, aunque esté garantizado hasta cierto límite.
- Los proveedores ofrecen backups, snapshots, balanceo de carga y monitoreo desde su panel.

