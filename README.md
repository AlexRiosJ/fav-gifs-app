## ❤️ GIFs App

Aplicación para busqueda de GIFs usando la [API de Giphy](https://developers.giphy.com/).

### Características Principales

- Pantalla principal muestra Trending GIFs.
- Busca GIFs en la barra de búsqueda.
- Click en el corazón del GIFs y guardalo en favoritos.
- Filtra tu búsqueda por favoritos.
- Sección de favoritos donde se mostrarán todos los que has guardado.
- Rejilla de GIFs con relación/aspecto correcto y sin huecos.

### Implementación

- Interfaz con [`create-react-app`](https://create-react-app.dev/) para facilitar el manejo "reactivo" del sitio.
- Estilo con [Bootswatch](https://bootswatch.com/).
- Hooks de React para facilitar el manejo del state de la aplicación.
- React Router para manejo de rutas en la URL.

### Retos Superados

- Rejilla de GIFs sin huecos.
- Agregar favoritos a `localStorage`.
- Sección de todos los favoritos.
- Botones de GIFs reactivos y animados.

### Problemas Encontrados

- Archivo de configuración (.env) no es leido desde CodeSandbox.
  - Sí funciona desde otro editor usando `npm start`.
  - Para que funcione en CodeSandbox se escribe directamente la API_KEY de Giphy.
- Al traer las imagenes y esperar a que carguen y se muestran ya aparece el `card` y se muestran los botones del GIF flotando.

### Giphy API

- Se utilizan tres endpoints:
  - `api.giphy.com/v1/gifs/trending`
    - Consulta de GIFs en tendencia.
    - Para la carga principal de Home y el botón de tendencias
  - `api.giphy.com/v1/gifs/search`
    - Consulta de GIFs por búsqueda.
  - `api.giphy.com/v1/gifs`
    - Consulta de GIFs con lista de IDs.
    - Para la carga de los GIFs favoritos en la sección de favoritos.

### Contribución

Si queries contribuir, por favor levanta un Issue y Pull Request. Será un gusto revisarlo y colaborar juntos.
