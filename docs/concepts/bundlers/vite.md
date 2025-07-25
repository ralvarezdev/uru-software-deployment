#  Vite: Documentación Detallada

##  ¿Qué es Vite?

**Vite** (pronunciado /vit/, que significa "rápido" en francés) es una herramienta de construcción y servidor de desarrollo *frontend* creada por **Evan You**, el autor de Vue.js. Vite está diseñada para proporcionar una experiencia de desarrollo moderna, más rápida y eficiente en comparación con herramientas tradicionales como Webpack.

Vite consta de dos partes principales:

1. **Servidor de desarrollo** ultra-rápido con *hot module replacement* (HMR).
2. **Build tool** basada en Rollup para producción.

<div class="center" style="display: flex; justify-content: center;">
    <img src="../../assets/images/logo/vite-logo.jpeg" alt="Logo de Vite" class="logo--3rd-party">

</div>

##  ¿Para qué sirve Vite?

- Desarrollar aplicaciones frontend modernas (con frameworks como **React**, **Vue**, **Svelte**, **Lit**, etc.).
- Compilar proyectos escritos en **TypeScript**, **JSX**, **TSX**, **SCSS**, **PostCSS**, etc.
- Proveer un flujo de desarrollo con recarga rápida (HMR).
- Realizar construcciones de producción altamente optimizadas.

##  ¿Cómo funciona Vite?

### En desarrollo:
- Utiliza **ES Modules nativos del navegador** para cargar archivos de forma directa.
- Usa **esbuild**, una herramienta escrita en Go, para transpilar TypeScript/JSX hasta 10-100x más rápido que Babel.
- Solo transpila/transforma el código cuando es solicitado por el navegador, lo que acelera el arranque.

### En producción:
- Usa **Rollup** para construir un bundle optimizado.
- Aplica **code-splitting**, **tree shaking**, **lazy loading**, y más.

##  Características principales

- **Arranque instantáneo** del servidor de desarrollo.
-  **Hot Module Replacement** (HMR) rápido.
-  **Soporte listo para usar** para frameworks modernos.
-  **Soporte para TypeScript, JSX, CSS, JSON, y más** sin configuración adicional.
-  **Plugins compatibles con Rollup** y sistema de plugins propio.
-  Compatible con pruebas usando Vitest, Playwright o Cypress.
##  Instalación

```bash
npm create vite@latest
# o
yarn create vite
# o
pnpm create vite
```

Luego sigue el prompt para seleccionar un framework (React, Vue, Svelte, etc.).

## Estructura típica de un proyecto Vite

```
my-app/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ main.ts
│  └─ App.vue
├─ index.html
├─ vite.config.ts
├─ package.json
└─ tsconfig.json
```
## Casos de uso

### 1. Aplicaciones SPA modernas

Ideal para proyectos con React, Vue, Svelte, Preact, Lit, etc., que buscan velocidad y simplicidad.

### 2. Proyectos con múltiples entradas

Vite permite múltiples páginas y entradas usando configuraciones en `vite.config.js`.

### 3. Component libraries

Es excelente para construir librerías de componentes (e.g., usando VitePress o Storybook con Vite).

### 4. Desarrollo de prototipos rápidos

Gracias a su inicio instantáneo y configuración mínima, Vite es ideal para prototipado.

### 5. Migraciones desde Webpack

Muchas aplicaciones están migrando de Webpack a Vite por la diferencia de rendimiento, especialmente en proyectos grandes.
##  Configuración básica (`vite.config.js`)

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
```
##  Recursos útiles

- Sitio oficial: [https://vitejs.dev](https://vitejs.dev)
- GitHub: [https://github.com/vitejs/vite](https://github.com/vitejs/vite)
- Plantillas oficiales: [Vite templates](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- Comparación con Webpack: [https://vitejs.dev/guide/why.html](https://vitejs.dev/guide/why.html)
## Ventajas

- Velocidad extrema en desarrollo.
- Configuración mínima.
- Excelente soporte para TypeScript y JSX.
- Comunidad en crecimiento y ecosistema robusto.
##  Desventajas

- Todavía es relativamente joven comparado con Webpack.
- Menos plugins disponibles para casos complejos (aunque está creciendo rápidamente).
- Puede requerir ajustes al migrar proyectos grandes con configuraciones Webpack personalizadas.
##  Conclusión

Vite es una herramienta moderna que resuelve problemas comunes del desarrollo frontend tradicional, especialmente en términos de velocidad. Su arquitectura basada en ESModules y esbuild ofrece un rendimiento sin igual durante el desarrollo. Para nuevos proyectos o migraciones que buscan eficiencia, Vite es una opción sobresaliente.
