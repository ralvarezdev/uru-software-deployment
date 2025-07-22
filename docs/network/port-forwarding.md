## ¿Qué es el Port Forwarding?

Port forwarding (reenvío de puertos) es una técnica de red utilizada para redirigir solicitudes entrantes desde una IP pública y puerto específico hacia una dirección IP interna en una red privada, y opcionalmente a otro puerto.

En términos simples, permite acceder desde el exterior a servicios alojados dentro de una red privada.

## ¿Para qué sirve?

El port forwarding permite:

- Acceder remotamente a servidores web, SSH, cámaras IP, videojuegos, etc.
- Exponer servicios internos a internet.
- Habilitar administración remota.

### Ejemplos de uso

| Servicio         | IP Interna         | Puerto interno | Puerto externo |
|------------------|--------------------|----------------|----------------|
| Servidor Web     | 192.168.1.100      | 80             | 80             |
| SSH a Raspberry  | 192.168.1.101      | 22             | 2222           |
| Cámara IP        | 192.168.1.50       | 80             | 8080           |

## ¿Dónde se configura?

- En el router que conecta la red local a Internet.
- En firewalls locales (iptables, UFW).
- En servidores o balanceadores cloud (AWS, GCP, Azure).

## ¿Cómo funciona?

1. Un cliente externo realiza una solicitud a la IP pública del router en un puerto específico.
2. El router tiene una regla de port forwarding que redirige esa solicitud a una IP interna y puerto correspondiente.
3. El servicio local responde y el router reenvía la respuesta al cliente.

### Ejemplo

- IP pública del router: `200.45.12.100`
- Port forwarding: `200.45.12.100:80` → `192.168.1.10:3000`
- Resultado: cualquier persona accediendo a `http://200.45.12.100` será redirigida al servicio Node.js corriendo en la red local.

## Tipos de Port Forwarding

1. **Estático**: El puerto externo redirige siempre a la misma IP y puerto interno.
2. **Dinámico**: Se utiliza generalmente con túneles SSH, no con routers domésticos.
3. **Inverso (Reverse Port Forwarding)**: Se abre un túnel desde la red privada hacia una máquina externa, útil si no se puede hacer port forwarding desde el router.

## Seguridad

El port forwarding puede ser riesgoso si se mal configura. Recomendaciones:

- Solo exponer los puertos necesarios.
- Usar puertos no estándar cuando sea posible.
- Configurar firewall (ufw, iptables) para limitar acceso.
- Utilizar autenticación fuerte y cifrado (TLS, SSH).
- Utilizar VPN cuando sea posible.
