# ¿Qué es una IP Pública?

Una IP pública es una dirección única asignada a un dispositivo o red para permitir el acceso desde cualquier punto de Internet.

## Características

- Asignada por un proveedor de servicios (ISP o nube).
- Visible desde Internet.
- Necesaria para recibir tráfico externo.

### Ejemplos:
- IPv4: `190.123.45.67`
- IPv6: `2800:200:e010::1`

## ¿Para qué sirve?

- Identificar y acceder a servidores o redes desde Internet.
- Recibir solicitudes externas en servicios como HTTP, SSH, VPN, etc.
- Asociar nombres de dominio a direcciones IP para facilitar el acceso. 

# Relación entre IP Pública, Port Forwarding y Dominios

Supongamos que tienes un servidor web en tu red local.

## Escenario

- Tu proveedor te asigna una IP pública: `190.123.45.67`.
- Tu aplicación web corre en `192.168.1.10:3000` (IP privada).
- Configuras port forwarding: rediriges el puerto 80 del router hacia `192.168.1.10:3000`.

## Acceso mediante dominio

- Registras `miapp.com`.
- Configuras en el DNS que `miapp.com` apunte a `190.123.45.67`.
- Cuando un usuario entra a `http://miapp.com`, el flujo es:
  1. Resolución DNS → IP pública
  2. El router recibe la solicitud
  3. Aplica port forwarding
  4. Redirige al servidor interno
  5. El servidor responde al usuario

## Diagrama

<div class="center">
    <img src="../../assets/images/diagrams/public-ip.png" alt="Diagrama de flujo de acceso a un servicio interno mediante IP pública y port forwarding" 
		 class="logo--3rd-party">
	<i>Diagrama de flujo de acceso a un servicio interno mediante IP pública y port forwarding</i>
</div> 

# Conclusión

Las direcciones IP públicas son fundamentales para que cualquier dispositivo o red pueda ser accesible desde Internet, funcionando como un punto de entrada visible para el mundo exterior. Sin embargo, en la mayoría de los entornos, especialmente en redes domésticas o empresariales, los servicios internos no están directamente expuestos. Aquí es donde entra en juego el port forwarding, que permite redirigir el tráfico entrante desde esa IP pública hacia servicios específicos dentro de la red local, manteniendo un nivel de aislamiento y control.

También, los nombres de dominio desempeñan un papel esencial al ofrecer una forma mucho más amigable de acceder a estos servicios, ya que en lugar de recordar direcciones IP numéricas, los usuarios simplemente pueden escribir un nombre como miapp.com, que será traducido automáticamente a la IP pública correspondiente mediante el sistema DNS.

Unidos, estos elementos como la IP pública, el port forwarding y los dominios forman una arquitectura básica pero poderosa para publicar aplicaciones y servicios locales en Internet. Esta combinación es ampliamente utilizada en soluciones de hosting doméstico, entornos de desarrollo remoto, aplicaciones autoalojadas, dispositivos IoT y más, proporcionando una forma estructurada, accesible y controlada de hacer visibles los recursos internos al mundo exterior.