# Te doy la bienvenida a mi solución de la prueba técnica de MELI 👨🏽‍💻

Esta solución fue hecha en [Next.js](https://nextjs.org/) con el toolchain: [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Quiero aclarar lo único en español serán los comentarios y documentación básica como este README, el resto (variables, funciones, etc...) quize manejarlo en inglés teniendo en cuenta la escalabilidad.

Puedes correr el servidor con
```
npm run dev
```

Luego, podrás ingresar a [http://localhost:3000](http://localhost:3000) para ver los resultados.

Si deseas ingresar a las rutas de la API puedes hacerlo con: [http://localhost:3000/api](http://localhost:3000/api) pero si lo que quieres es conocer el código, debes dirigirte a la siguiente ruta ```src/pages/api/```.

## Día 1 - Inicialización y configuración del proyecto

1. Establecí reglas y configuraciones (path aliases, etc...) del proyecto con:
    - [Prettier](https://prettier.io/docs/en/index.html)
    - [ESLint](https://eslint.org/docs/latest/)
        - [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) para accesibilidad y AST.

2. Estilos (SASS) y estructura de carpetas y archivos (Clean Architecture, Atomic Design).

## Despliegue en Vercel 🚀

The easiest way to deploy your Next.js app is to use the [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
