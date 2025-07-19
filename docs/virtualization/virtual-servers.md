# Servidores Virtuales

## ¿Qué es un Servidor Virtual?

Un servidor virtual es una instancia lógica que simula el comportamiento de un servidor físico real mediante una tecnología llamada virtualización. Aunque físicamente comparten el mismo hardware, cada servidor virtual (VM) opera de forma independiente, con su propio sistema operativo, recursos y configuración.

## ¿Cómo Funciona la Virtualización?

La virtualización divide los recursos físicos (CPU, RAM, disco, red) en entornos virtuales aislados, usando un software llamado hipervisor.

### Proceso básico:

1. El hipervisor se instala sobre el hardware físico.
2. El hipervisor crea múltiples máquinas virtuales (VMs).
3. Cada VM tiene un sistema operativo (Windows, Linux, etc.).
4. Se instalan aplicaciones o servicios en cada VM.
5. Las VMs no interfieren entre sí.

## Tipos de Servidores Virtuales

### VPS (Virtual Private Server)

- Compartido físicamente, pero aislado lógicamente.
- Ideal para sitios web, apps, entornos de pruebas.

### Servidor Cloud

- Escalable bajo demanda en la nube (AWS, Azure, GCP).
- Pago por uso.

### Servidor dedicado virtual

- Más recursos garantizados.
- Se comporta como un servidor físico virtualizado.

### Contenedores (Docker, LXC)

- No son VMs completas, sino entornos ligeros que comparten el kernel.
- Ideales para microservicios y DevOps.

## Hipervisores

| Tipo      | Características                                 | Ejemplos                    |
|-----------|--------------------------------------------------|-----------------------------|
| Tipo 1    | Corre directamente sobre el hardware físico.     | VMware ESXi, Hyper-V, KVM   |
| Tipo 2    | Corre sobre un sistema operativo anfitrión.      | VirtualBox, VMware Workstation |

## ¿Para Qué Sirven?

- Hospedaje web (CMS, tiendas, blogs)
- Desarrollo y pruebas de software
- Aislamiento de entornos
- Automatización de tareas (CI/CD)
- Laboratorios de aprendizaje
- Servidores para apps móviles, APIs, bots

## Ventajas

| Ventaja           | Descripción                                           |
|-------------------|--------------------------------------------------------|
| Escalabilidad     | Se agregan recursos en minutos                        |
| Aislamiento       | VMs no afectan a otras en el mismo host              |
| Ahorro de costos  | Menor inversión comparado con hardware físico         |
| Flexibilidad      | Soporte para distintos sistemas operativos            |
| Automatización    | Ideal para DevOps, pruebas, despliegues               |
| Portabilidad      | VMs se mueven o clonan fácilmente                     |

## Diferencias con Otros Modelos

| Modelo             | Recursos | Aislamiento | Personalización | Costo  |
|--------------------|----------|-------------|------------------|--------|
| VPS / VM           | Parcial  | Medio       | Alta             | Medio  |
| Servidor dedicado  | Total    | Total       | Total            | Alto   |
| Hosting compartido | Bajo     | Bajo        | Muy limitado     | Bajo   |

## Herramientas Comunes

### Paneles de gestión:

- Proxmox VE (open source)
- VMware vSphere
- Virt-Manager (GUI Linux)
- VirtualBox (entornos locales)

### Proveedores populares:

- DigitalOcean
- Linode
- Vultr
- AWS EC2
- Azure
- Google Cloud
