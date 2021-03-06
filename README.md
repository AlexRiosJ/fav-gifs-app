## ❤️ GIFs App

Aplicación para busqueda de GIFs usando la [API de Giphy](https://developers.giphy.com/).

### Características Principales

- Pantalla principal muestra Trending GIFs.
- Búsqueda de GIFs en la barra de búsqueda apartir de 3 caracteres.
- Click en el corazón del GIFs para guardarlo en favoritos.
- Filtrar búsqueda por favoritos.
- Sección de favoritos donde se mostrarán todos los GIFs guardados.
- Rejilla de GIFs con relación/aspecto correcto y sin huecos.
- Pagina 404 Not Found divertida con un GIF de error aleatorio.

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

- Se utilizan cuatro endpoints:
  - `api.giphy.com/v1/gifs/trending`
    - Consulta de GIFs en tendencia.
    - Para la carga principal de Home y el botón de tendencias
  - `api.giphy.com/v1/gifs/search`
    - Consulta de GIFs por búsqueda.
  - `api.giphy.com/v1/gifs`
    - Consulta de GIFs con lista de IDs.
    - Para la carga de los GIFs favoritos en la sección de favoritos.
  - `api.giphy.com/v1/gifs/random`
    - Consulta de un GIF aleatorio con un tag dado.
    - Para la página 404 Not Found.

### Deploy en Netlify

- Además de CodeSandbox, también puedes encontrar la aplicación corriendo en Netlify.
  - [`https://fav-gifs.netlify.app`](https://fav-gifs.netlify.app)

### Contribución

Si gustas contribuir, por favor levanta un Issue y Pull Request. Será un gusto revisarlo y colaborar juntos.
