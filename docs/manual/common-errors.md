#  Troubleshooting - JokeAppWeb

Esta sección ofrece una guía detallada para diagnosticar y resolver los errores más comunes durante la instalación, despliegue, ejecución y uso de JokeAppWeb.

> ℹ **Nota:** Asegúrate de haber cumplido con los requisitos del entorno antes de revisar esta sección. Consulta la guía de instalación y despliegue si tienes dudas.

---

##  Problemas en Producción

###  No se cargan los chistes al iniciar sesión

**Síntoma:**  
El usuario accede al sistema exitosamente, pero no se muestran chistes en pantalla o la interfaz permanece vacía.

**Posibles causas:**
- El backend (API) no se encuentra en ejecución.
- La URL base configurada en el frontend no corresponde al servidor real del backend.
- Existe un problema de CORS que impide la comunicación entre cliente y servidor.
- La base de datos no contiene registros de chistes.

**Solución sugerida:**  
Revisar el estado de los servicios, reiniciar los contenedores si es necesario y verificar que las variables de entorno del frontend estén correctamente definidas (en especial `VITE_API_URL`).

```bash
# Verifica si los contenedores están corriendo
docker compose ps

# Reinicia los servicios si es necesario
docker compose restart
```

---

###  Error "Unauthorized" al intentar calificar un chiste

**Síntoma:**  
El sistema devuelve un error 401 (No autorizado) al realizar acciones como dar "like" o "dislike".

**Posibles causas:**
- El token JWT del usuario ha expirado.
- El usuario no está correctamente autenticado.
- El encabezado `Authorization` no se está incluyendo en las solicitudes HTTP.

**Solución sugerida:**  
Cerrar sesión e iniciar nuevamente. Verificar en herramientas de desarrollador que los headers estén siendo enviados correctamente y revisar cualquier mensaje de error en la consola del navegador.

1. Cierra sesión desde la interfaz de usuario.
2. Vuelve a iniciar sesión.
3. Abre DevTools (F12) → pestaña "Network".
4. Realiza una acción como "like" o "dislike".
5. Haz clic sobre la solicitud.
6. En "Headers", verifica que el campo Authorization esté presente:
   Authorization: Bearer <token>


---

## Problemas de Despliegue

###  Error: "Database connection refused"

**Síntoma:**  
Durante el arranque del sistema, el backend muestra mensajes de error indicando que no puede establecer conexión con la base de datos PostgreSQL.

**Posibles causas:**
- El contenedor de PostgreSQL no se ha iniciado correctamente.
- La variable `DATABASE_URL` contiene errores de sintaxis o credenciales incorrectas.
- Hay conflictos con los volúmenes persistentes de Docker.

**Solución sugerida:**  
Revisar los logs del contenedor de base de datos, confirmar la configuración del archivo `.env` y, si persiste el problema, eliminar los volúmenes de Docker para restaurar el estado inicial.

```bash
# Verifica los logs del contenedor de la base de datos
docker compose logs db

# Verifica la variable de entorno DATABASE_URL
cat backend/.env | grep DATABASE_URL
```

---

###  Error: "Frontend not found" (404)

**Síntoma:**  
El navegador muestra un error 404 o una página en blanco al acceder a la aplicación desplegada.

**Posibles causas:**
- El frontend no ha sido compilado antes del despliegue.
- Nginx no encuentra los archivos estáticos generados por Vite.
- El archivo `docker-compose.yml` o la configuración de Nginx apunta a rutas incorrectas.

**Solución sugerida:**  
Compilar correctamente el frontend, verificar que los archivos estáticos estén en la ruta esperada y reconstruir el entorno con Docker.

```bash
# Construye el frontend con Vite
cd frontend
npm run build

# Reconstruye los contenedores de Docker
docker compose up --build
```

---

## Problemas Comunes Durante el Desarrollo

###  Incidencias frecuentes en entorno de desarrollo

| Problema                            | Diagnóstico y solución sugerida                                           |
|-------------------------------------|---------------------------------------------------------------------------|
| Cambios en React no se reflejan     | Confirmar que `npm run dev` está en ejecución y forzar recarga (Ctrl+F5) |
| El backend no responde              | Verificar que `uvicorn` está corriendo y que el puerto no esté en uso    |
| Problemas con CORS                  | Revisar la configuración de `allow_origins` en FastAPI                   |
| Errores inesperados en navegador    | Limpiar caché del navegador y borrar cookies                             |

>  **Consejo:** Ejecutar los servicios de backend y frontend en modo desarrollo puede facilitar el rastreo de errores en tiempo real.

```bash
# Iniciar el frontend en modo desarrollo
npm run dev

# Iniciar el backend (FastAPI) en modo desarrollo
uvicorn main:app --reload --port 8000
```
---

## Soluciones Avanzadas

###  Revisión de logs

Consultar los logs de los servicios es esencial para entender errores ocultos o fallos intermitentes. Es posible revisar logs globales o específicos de un servicio.

**Sugerencia:** Hacerlo mientras se reproduce el problema para identificar patrones de error o excepciones.

```bash
# Ver logs en tiempo real de todos los servicios
docker compose logs -f

# Ver logs específicos del backend
docker compose logs backend
```

---

###  Reconstrucción completa del entorno

Cuando los errores persisten y no pueden resolverse con acciones simples, se recomienda eliminar todos los contenedores, volúmenes e imágenes, y realizar una reconstrucción completa del stack Docker.

>  **Advertencia:** Esta acción eliminará datos persistentes, incluyendo registros de usuarios y chistes si no se hace una copia de seguridad previa.

```bash
# Eliminar contenedores, redes y volúmenes
docker compose down -v

# Reconstruir todo el entorno desde cero
docker compose up --build --force-recreate
```

---

##  Recomendaciones Finales

Si después de aplicar las soluciones anteriores el problema continúa:

1. Verifica que todos los servicios estén activos y escuchando en los puertos correctos.
2. Revisa la consistencia de las variables de entorno en todos los servicios.
3. Consulta la documentación técnica incluida en el repositorio.
4. Si necesitas soporte adicional, prepara y comparte al equipo técnico:
   - Capturas de pantalla del error.
   - Pasos exactos para reproducir el problema.
   - Fragmentos relevantes de los logs del sistema.

```bash
# Confirmar que todos los contenedores estén corriendo correctamente
docker compose ps
```
---

>  **Siguiente paso:** Revisa la sección [Requisitos del Entorno](./system-requirements.md) para confirmar que tu sistema está configurado correctamente.
