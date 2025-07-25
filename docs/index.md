# Despliegue de Software {:#despliegue-de-software}

En la presente documentación, se explica todo lo relacionado con el despliegue de software, en particular, los temas visto durante la materia de Despliegue de Software del curso de Ingeniería en Computación de la Universidad Rafael Urdaneta (URU) durante el trimestre 2025-B.

<div class="center">
    <img src="assets/images/logo/uru-var2.png" alt="Universidad Rafael 
Urdaneta" class="logo--3rd-party">
    <i>Universidad Rafael Urdaneta</i>
</div>

## Integrantes

A continuación, se presenta la lista de los integrantes del equipo que ha colaborado en la creación de esta documentación:

- Victoria Acosta, [Victoriaag6](https://github.com/Victoriaag6).
- Ramón Álvarez, [ralvarezdev](https://github.com/ralvarezdev).
- Idiar Chacín, [idiarj](https://github.com/idiarj).
- Carlos Fernández, [carlosfernandezdev](https://github.com/carlosfernandezdev).
- Angelina Pineda, [Ange1023](https://github.com/Ange1023).
- Valeria Salcedo, [valeriasalcedo](https://github.com/valeriasalcedo).

## Índice

1. **Almacenamiento**
    1. [RAID](concepts/storage/raid.md#raid)
   	    1. [Tipos de RAID](concepts/storage/raid.md#tipos-de-raid)
			1. [RAID 0](concepts/storage/raid.md#raid0)
			2. [RAID 1](concepts/storage/raid.md#raid1)
			3. [RAID 5](concepts/storage/raid.md#raid5)
			4. [RAID 6](concepts/storage/raid.md#raid6)
			5. [RAID 10](concepts/storage/raid.md#raid10)
            6. [RAID 50](concepts/storage/raid.md#raid50)
            7. [RAID 60](concepts/storage/raid.md#raid60)
        2. [Hot Swap](concepts/storage/raid.md#hot-swap)
        3. [Controladoras RAID](concepts/storage/raid.md#controladoras-raid)
            1. [Por Software](concepts/storage/raid.md#por-software)
        	2. [Por Hardware](concepts/storage/raid.md#por-hardware)
2. **Virtualización**
    1. Contenedores
        1. [Docker](concepts/virtualization/containers/docker.md)
    2. [Máquinas Virtuales (VM)](concepts/virtualization/virtual-machines.md#maquinas-virtuales)
        1. [Definición](concepts/virtualization/virtual-machines.md#definicion)
        2. [Propósito General](concepts/virtualization/virtual-machines.md#proposito-general)
        3. [Componentes Técnicos](concepts/virtualization/virtual-machines.md#componentes-tecnicos)
        4. [Tipos de Hipervisores](concepts/virtualization/virtual-machines.md#tipos-de-hipervisores)
        5. [Gestión y Uso](concepts/virtualization/virtual-machines.md#gestion-y-uso)
        6. [Formatos de Disco Virtual](concepts/virtualization/virtual-machines.md#formatos-de-disco-virtual)
        7. [Casos de Uso](concepts/virtualization/virtual-machines.md#casos-de-uso)
    3. [Servidores Virtuales (VPS)](concepts/virtualization/virtual-servers.md#servidores-virtuales)
        1. [¿Qué es un Servidor Virtual?](concepts/virtualization/virtual-servers.md#que-es-un-servidor-virtual)
		2. [¿Cómo Funciona un VPS?](concepts/virtualization/virtual-servers.md#como-funciona-un-vps)
		3. [Tipos de Servidores Virtuales](concepts/virtualization/virtual-servers.md#tipos-de-servidores-virtuales)
		4. [Hipervisores Utilizados en VPS](concepts/virtualization/virtual-servers.md#hipervisores-utilizados-en-vps)
        5. [Usos Comunes del VPS](concepts/virtualization/virtual-servers.md#usos-comunes-del-vps)
        6. [Ventajas del VPS](concepts/virtualization/virtual-servers.md#ventajas-del-vps)
        7. [Comparación con Otros Modelos de Hosting](concepts/virtualization/virtual-servers.md#comparacion-con-otros-modelos-de-hosting)
        8. [Herramientas de Gestión y Paneles](concepts/virtualization/virtual-servers.md#herramientas-de-gestion-y-paneles)
        9. [Notas Técnicas](concepts/virtualization/virtual-servers.md#notas-tecnicas)
    4. Empaquetadores
        1. [Vite](concepts/bundlers/vite.md)
3. **Sistemas de Gestión**
    1. [PM2](concepts/management-systems/pm2.md)
    2. [CMS](concepts/management-systems/cms.md)
4. **Redes**
    1. [Dominio](concepts/network/domain.md)
    2. [IP Pública](concepts/network/public-ip.md)
    3. [Port Forwarding](concepts/network/port-forwarding.md)
    4. Protocolos
        1. Seguridad
            1. [SSL/TLS](concepts/network/protocols/security/ssl-tls.md)
    5. Seguridad
        1. Firewall
            1. [UFW](concepts/network/security/firewall/ufw.md)
    6. Hosting
        1. [Apache](concepts/network/hosting/apache.md)
        2. [Nginx](concepts/network/hosting/nginx.md#nginx)
            1. [¿Qué es Nginx?](concepts/network/hosting/nginx.md#que-es-nginx)
            2. [¿Para qué Sirve Nginx?](concepts/network/hosting/nginx.md#para-que-sirve-nginx)
            3. [Arquitectura de Nginx](concepts/network/hosting/nginx.md#arquitectura-de-nginx)
            4. [Casos de Uso Comunes](concepts/network/hosting/nginx.md#casos-de-uso-comunes)
            5. [Balanceo de Carga](concepts/network/hosting/nginx.md#balanceo-de-carga)
            6. [Algoritmos Soportados](concepts/network/hosting/nginx.md#algoritmos-soportados)
        	7. [Soporte para HTTPS (TLS/SSL)](concepts/network/hosting/nginx.md#soporte-para-https-tls-ssl)
            8. [Ventajas de Nginx](concepts/network/hosting/nginx.md#ventajas-de-nginx)
            9. [Diferencias con Apache](concepts/network/hosting/nginx.md#diferencias-con-apache)
           10. [Seguridad](concepts/network/hosting/nginx.md#seguridad)
        3. [Virtual Host](concepts/network/hosting/virtual-host.md)