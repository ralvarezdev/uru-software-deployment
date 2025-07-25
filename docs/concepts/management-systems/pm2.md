# PM2 - Process Manager para Node.js {#pm2-process-manager-nodejs}

## ¿Qué es PM2? {#que-es-pm2}

**PM2** es un administrador de procesos para aplicaciones Node.js (y otros lenguajes), diseñado para ejecutar, monitorear y mantener procesos activos en segundo plano. Se usa principalmente en entornos de producción para asegurar que las aplicaciones funcionen de manera estable y continua, incluso tras fallos o reinicios del sistema.

---

## ¿Para qué sirve PM2? {#para-que-sirve-pm2}

| Funcionalidad              | Descripción                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| Ejecución en segundo plano | Permite ejecutar apps Node.js sin dejar la terminal abierta.               |
| Reinicio automático        | Reinicia apps en caso de errores o fallos.                                 |
| Clustering                 | Ejecuta múltiples instancias (multi-core).                                 |
| Monitoreo                  | Muestra estado, CPU y RAM por proceso.                                     |
| Logging                    | Guarda logs de salida estándar y errores.                                  |
| Autostart                  | Inicia apps automáticamente al reiniciar el servidor.                      |
| Ecosystem File             | Define múltiples apps y entornos en un archivo centralizado.               |

---

## Instalación {#instalacion}

```bash
npm install -g pm2
```

> Requiere tener Node.js instalado previamente.

---

## Comandos Básicos {#comandos-basicos}

```bash
pm2 start app.js         # Ejecutar la app
pm2 list                 # Ver procesos activos
pm2 stop app             # Detener un proceso
pm2 restart app          # Reiniciar un proceso
pm2 delete app           # Eliminar un proceso de PM2
pm2 logs                 # Ver logs en tiempo real
pm2 monit                # Monitoreo interactivo en consola
```

---

## Modo Clúster {#modo-cluster}

```bash
pm2 start app.js -i max
```

- Ejecuta la app en modo clúster, usando todos los núcleos disponibles.
- Mejora el rendimiento en servidores multi-core.

---

## Ecosystem File {#ecosystem-file}

Permite definir configuración de múltiples procesos en un solo archivo.

### ecosystem.config.js {#ecosystem-config-js}

```js
module.exports = {
  apps: [
    {
      name: 'api',
      script: './server.js',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
```

### Ejecutar con ecosystem {#ejecutar-con-ecosystem}

```bash
pm2 start ecosystem.config.js --env production
```

---

## Autostart tras reinicio del servidor {#autostart-tras-reinicio-servidor}

### Guardar estado actual {#guardar-estado-actual}

```bash
pm2 save
```

### Configurar inicio automático {#configurar-inicio-automatico}

```bash
pm2 startup
```

> Este comando devuelve una línea que se debe ejecutar para registrar PM2 como servicio del sistema.

---

## Logs {#logs}

```bash
pm2 logs               # Ver todos los logs en tiempo real
pm2 logs app           # Ver logs de una app específica
```

> Los logs se almacenan por defecto en `~/.pm2/logs`.

---

## PM2 con otros lenguajes {#pm2-con-otros-lenguajes}

También se puede ejecutar scripts en otros lenguajes usando el parámetro `--interpreter`.

```bash
pm2 start script.py --interpreter python3
pm2 start script.sh
```

---

## Integración con Servidores Virtuales (VPS) {#integracion-con-vps}

1. Desplegar la app en el VPS
2. Instalar PM2 globalmente
3. Ejecutar la app con `pm2 start`
4. Guardar configuración con `pm2 save`
5. Configurar `pm2 startup` para que inicie automáticamente

---

## Comparación con Otros Process Managers {#comparacion-con-otros-process-managers}

| Herramienta | Soporte Node.js | Clustering | Logs | Autostart | Observabilidad |
|-------------|------------------|------------|------|-----------|----------------|
| PM2         | Sí               | Sí         | Sí   | Sí        | Sí             |
| forever     | Sí               | No         | Básico| Parcial   | No             |
| systemd     | Genérico         | No         | Medio| Sí        | Limitado       |
| nodemon     | Sí (dev)         | No         | No   | No        | No             |

---

## Recursos {#recursos}

- Sitio oficial: [https://pm2.keymetrics.io](https://pm2.keymetrics.io)
