# Sistemas de Gestión de Contenidos (CMS) {#sistemas-de-gestion-de-contenidos-cms}

## Definición {#definicion}

<div class="center">
    <img src="../../assets/images/logo/wordpress.png" alt="Logo de Wordpress" class="logo--3rd-party">
	<i>Logo de Wordpress</i>
</div>

Un **CMS (Content Management System)** es una plataforma de software que permite a los usuarios crear, editar, organizar y publicar contenido en sitios web sin necesidad de programar manualmente. Facilita la separación entre el contenido, la estructura del sitio y su presentación visual.

## Funcionalidades Comunes {#funcionalidades-comunes}

- Edición de páginas y artículos
- Administración de archivos multimedia
- Control de usuarios, roles y permisos
- Personalización mediante temas o plantillas
- Extensibilidad con módulos o plugins
- Gestión de menús, navegación y estructura
- Optimización para buscadores (SEO)
- Internacionalización (idiomas)
- Integración con herramientas externas (CRM, e-commerce, formularios)

## Clasificación por Tipo {#clasificacion-por-tipo}

### Tradicionales (Backend + Frontend acoplado) {#tradicionales-backend-frontend-acoplado}

- WordPress
- Joomla
- Drupal
- TYPO3
- Magento
- PrestaShop

### Headless CMS (Frontend desacoplado) {#headless-cms-frontend-desacoplado}

<div class="center">
    <img src="../../assets/images/logo/netlify.png" alt="Logo de Netlify" class="logo--3rd-party">
	<i>Logo de Netlify</i>
</div>

- Strapi
- Sanity
- Contentful
- Directus
- Netlify CMS

### SaaS (CMS como servicio) {#saas-cms-como-servicio}

<div class="center">
    <img src="../../assets/images/logo/shopify.png" alt="Logo de Shopify" class="logo--3rd-party">
	<i>Logo de Shopify</i>
</div>

- Wix
- Webflow
- Squarespace
- Shopify

## CMS por Lenguaje {#cms-por-lenguaje}

| Lenguaje   | CMS destacados                                 |
|------------|------------------------------------------------|
| PHP        | WordPress, Drupal, Joomla, Magento, PrestaShop |
| JavaScript | Ghost (Node.js), Strapi, KeystoneJS            |
| Python     | Wagtail, Django CMS                            |
| .NET       | Umbraco, Orchard Core                          |
| Java       | Magnolia, OpenCMS                              |
| Ruby       | RefineryCMS                                    |

## Componentes Técnicos {#componentes-tecnicos}

- **Backend**: Administra contenido, usuarios, configuraciones
- **Frontend**: Genera la interfaz pública
- **Base de datos**: Almacena contenido estructurado
- **Sistema de plantillas**: Controla la presentación visual
- **Módulos/Plugins**: Añaden funcionalidades específicas
- **Editor WYSIWYG**: Permite edición visual del contenido
- **Gestor de archivos**: Maneja imágenes, documentos, videos
- **API**: Permiten acceso programático al contenido (REST/GraphQL)
- **Seguridad**: Control de roles, autenticación, actualización

## Casos de Uso Comunes {#casos-de-uso-comunes}

- Blogs y medios digitales
- Tiendas en línea
- Portales corporativos
- Sitios institucionales y académicos
- Documentación y bases de conocimiento
- Landing pages y catálogos de productos
- Aplicaciones SPA con backend headless

## Comparativa Técnica {#comparativa-tecnica}

| CMS        | Tipo        | Lenguaje | Base de Datos      | Frontend integrado | API disponible |
|------------|-------------|----------|--------------------|--------------------|----------------|
| WordPress  | Tradicional | PHP      | MySQL              | Sí                 | REST API       |
| Drupal     | Tradicional | PHP      | MySQL              | Sí                 | REST y GraphQL |
| Joomla     | Tradicional | PHP      | MySQL              | Sí                 | Opcional       |
| Magento    | E-commerce  | PHP      | MySQL              | Sí                 | REST y GraphQL |
| Ghost      | Headless    | Node.js  | SQLite / MySQL     | No                 | REST API       |
| Strapi     | Headless    | Node.js  | PostgreSQL, SQLite | No                 | REST y GraphQL |
| Contentful | Headless    | SaaS     | Interna            | No                 | GraphQL        |
| Wagtail    | Tradicional | Python   | PostgreSQL         | Sí                 | REST API       |

## Ventajas de Usar un CMS {#ventajas-de-usar-un-cms}

| Ventaja                  | Descripción                                                    |
|--------------------------|----------------------------------------------------------------|
| Reducción de tiempo      | Permite lanzar sitios en menos tiempo                          |
| No requiere codificación | Usuarios sin conocimientos técnicos pueden gestionar contenido |
| Escalabilidad            | Algunos CMS soportan miles de páginas y usuarios               |
| Personalización          | Uso de plantillas y extensiones adaptables                     |
| Comunidad y soporte      | Grandes comunidades con plugins y documentación                |
| Seguridad mejorada       | Actualizaciones frecuentes y plugins de seguridad disponibles  |
| Control de versiones     | Algunos CMS permiten revisar y restaurar contenido             |

## Herramientas Relacionadas {#herramientas-relacionadas}

- **cPanel / Plesk**: Paneles de hosting para instalar CMS fácilmente
- **Docker / Docker Compose**: Para desplegar CMS en contenedores
- **Git / GitHub**: Control de versiones de temas o personalizaciones
- **Vercel / Netlify**: Despliegue de frontends desacoplados
- **API Clients**: Postman, Insomnia (para consumir APIs de CMS headless)
