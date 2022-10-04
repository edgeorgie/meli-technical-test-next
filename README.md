# Te doy la bienvenida a mi solución de la prueba técnica de MELI para el cargo de Front-end Developer 👨🏽‍💻

## TL;DR 👻 

La solución está dividida en 2 repositorios, por el lado del [Front-end](https://github.com/edgeorgie/meli-technical-test-next) fue hecha en [Next.js](https://nextjs.org/) con el toolchain: [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). El [Back-end](https://github.com/edgeorgie/meli-technical-test-backend) fue hecho de acuerdo a lo especificado: Node.js y Express.js, y [desplegué el back-end](https://meli-technical-test-backend-production-78cf.up.railway.app/api/items) en [Railway](https://railway.app/).

REPOS: 
- Solución [Front-end](https://github.com/edgeorgie/meli-technical-test-next)
- Solución [Back-end](https://github.com/edgeorgie/meli-technical-test-backend)

Quiero aclarar que lo único en español serán los comentarios y documentación básica como este README, el resto (variables, funciones, etc...) quize manejarlo en inglés teniendo en cuenta la escalabilidad.

### Acerca del Front-end...

### Acerca del Back-end...
1. Opté por usar Axios y crear una instancia como tal para permitirme así tener un mejor dominio y manipulación de las llamadas a la API y sus respuestas (teniendo en cuenta la escalabilidad, esto hacía más sencillo el hecho de que se podían crear objetos para estructurar todos los distintos llamados a la API para poder invocarlos y pasar por parametros las urls y los params con una simple razón: mejor legibilidad y disminuye lo extenso del código que podría generar no hacerlo con instancias de Axios), y eso me facilitó a su vez evitar las conversiones a JSON.
2. Con respecto a los endpoints, normalmente veo que las APIs, aparte de tener la opción de paginación, a su vez tienen una opción/query para filtrar por cantidad de resultados, decidí manejarlo de una forma más sencilla pero hard-code implementado el método slice para delimitar a los 4 productos que la prueba exige.

### Local
Puedes correr el servidor del front-end y back-end (separados) con
```
npm run dev
```

Luego, podrás ingresar a [http://localhost:3000](http://localhost:3000) para ver los resultados del front-end.

Si deseas ingresar a las rutas de la API puedes hacerlo con: 
- [http://localhost:3001/api/items](http://localhost:3001/api/items).
- [http://localhost:3001/api/items/:id](http://localhost:3001/api/items/:id).

## Roadmap 🏁

### Día 1 (30 sept) - Inicialización y configuración del proyecto | Front-end

1. Establecí reglas y configuraciones (path aliases, etc...) del proyecto con:
    - [Prettier](https://prettier.io/docs/en/index.html)
    - [ESLint](https://eslint.org/docs/latest/)
        - [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) para accesibilidad y AST.

2. Estructura de carpetas y archivos (Clean Architecture, Atomic Design).
3. Estructuración visual de la aplicación y lógica de navegación
    1. Implementé buenas prácticas de estructura (semántica) con JSX, y con relación a lo visual: SASS.
    2. Estructuré las páginas y componentes adecuados para llevar a cabo una correcta navegación.

### Día 2 (01 oct) - Features del Front-end | Inicialización del Back-end

1. Breadcrumb, página de detalle de producto terminadas junto con correcciones mínimas de diseño en otras features como el navbar.

2. Setup del servidor con node y express.
3. Estructuración básica de las carpetas y archivos.
4. Definición de las rutas de la API en su respectivo folder.
5. Creación de los servicios a la API de MELI con [Axios](https://github.com/axios/axios).
    - Implementación y configuración de una instancia propia de Axios para el adecuado manejos de los parámetros e interceptores.
6. Definición de la estructura y lógica de los controladores.
7. Refactorización.

### Día 3 (02 oct) -> Domingo, decidí tomar un break 😴

### Día 4 (03 oct) - Testing y despliegue en Railway 🚀 | Back-end

1. Testing de rutas y respuestas con [Jest](https://jestjs.io/) y [Supertest](https://www.npmjs.com/package/supertest).
2. [Despligue en Railway](https://meli-technical-test-backend-production-78cf.up.railway.app/api/items).

### Día 4 (03 oct) -

### Despliegue en Vercel 🚀

The easiest way to deploy your Next.js app is to use the [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
