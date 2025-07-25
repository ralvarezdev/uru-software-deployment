# UFW (Uncomplicated Firewall)

## ¿Qué es UFW?

UFW (Uncomplicated Firewall) es una herramienta de firewall diseñada para simplificar la configuración de iptables, el sistema de filtrado de paquetes predeterminado en Linux. Está especialmente pensado para usuarios que no son expertos en seguridad pero necesitan proteger sus sistemas de manera eficiente.

## ¿Para qué sirve?

- Bloquear o permitir conexiones entrantes y salientes.
- Proteger el sistema contra accesos no autorizados.
- Configurar reglas básicas de red sin necesidad de manejar iptables directamente.
- Ideal para servidores y equipos personales con Linux.

## ¿Cómo funciona?

UFW actúa como una capa simplificada sobre iptables, permitiendo definir reglas de firewall con comandos sencillos. Trabaja con los siguientes conceptos básicos:

- **Reglas de entrada (incoming):** Controlan qué conexiones pueden acceder al sistema.
- **Reglas de salida (outgoing):** Definen qué conexiones pueden salir del sistema.
- **Perfiles por aplicación:** Algunos servicios (como Apache o SSH) tienen reglas predefinidas.

## Comandos Básicos de UFW

### Instalación y Activación

```bash
sudo apt update && sudo apt install ufw  # Instalar UFW (en Debian/Ubuntu)
sudo ufw enable                         # Activar el firewall
sudo ufw disable                        # Desactivar el firewall
```

### **Ver estado del firewall**  
```bash
sudo ufw status              # Muestra reglas activas
sudo ufw status verbose      # Muestra detalles extendidos
```

### **Políticas por defecto**  
```bash
sudo ufw default deny incoming   # Bloquear todo el tráfico entrante
sudo ufw default allow outgoing  # Permitir todo el tráfico saliente
```

### **Permitir tráfico por puerto o servicio**  
```bash
sudo ufw allow 22           # SSH
sudo ufw allow 80           # HTTP
sudo ufw allow 443          # HTTPS
sudo ufw allow 3306         # MySQL
```

### **Permitir desde una IP específica**  
```bash
sudo ufw allow from 192.168.1.100
```

### **Permitir desde una IP a un puerto específico**  
```bash
sudo ufw allow from 192.168.1.100 to any port 22
```

### **Permitir un rango de IP**  
```bash
sudo ufw allow from 192.168.0.0/24
```

### **Permitir por interfaz de red (ej: eth0)**  
```bash
sudo ufw allow in on eth0 to any port 80
```

### **Denegar tráfico**  
```bash
sudo ufw deny 3306                  # Bloquear MySQL
sudo ufw deny from 192.168.1.10     # Bloquear una IP
```

### **Borrar reglas**  
```bash
sudo ufw delete allow 80            # Eliminar regla del puerto 80
```

### **Limitar conexiones repetidas (protección contra fuerza bruta)**  
```bash
sudo ufw limit ssh                  # Limita intentos de conexión SSH
```

### **Activar registro de actividad del firewall**  
```bash
sudo ufw logging on                 # Habilita logs (ubicación: /var/log/ufw.log)
```

### **Ver aplicaciones reconocidas por UFW**  
```bash
sudo ufw app list                   # Muestra perfiles predefinidos
```

## **Configuración para Servidores Web**  

### **Apache**  
**Perfiles disponibles:**  
- **Apache**: Puerto 80 (HTTP)  
- **Apache Secure**: Puerto 443 (HTTPS)  
- **Apache Full**: Puertos 80 y 443 (HTTP + HTTPS)  

**Ejemplos de uso:**  
```bash
sudo ufw allow 'Apache'          # Solo HTTP (puerto 80)
sudo ufw allow 'Apache Secure'   # Solo HTTPS (puerto 443)
sudo ufw allow 'Apache Full'     # HTTP y HTTPS (80 y 443)
```

### **Nginx**  
**Perfiles disponibles:**  
- **Nginx HTTP**: Puerto 80 (HTTP)  
- **Nginx HTTPS**: Puerto 443 (HTTPS)  
- **Nginx Full**: Puertos 80 y 443 (HTTP + HTTPS)  

**Ejemplos de uso:**  
```bash
sudo ufw allow 'Nginx HTTP'      # Solo HTTP (puerto 80)
sudo ufw allow 'Nginx HTTPS'     # Solo HTTPS (puerto 443)
sudo ufw allow 'Nginx Full'      # HTTP y HTTPS (80 y 443)
```