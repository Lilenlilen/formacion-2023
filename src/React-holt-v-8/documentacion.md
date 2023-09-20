# explicaciones extras del curso

<https://react-v8.holt.courses/>

npm init -y para comenzar a trabajar con el paquete de npm, eso nos genera el package.json, donde vamos a ir agregando todas nuestras dependencias.
INSTALAMOS prettier: npm i -D prettier@2.7.1
EXTENSION de visual studio, y luego click derecho y Format document. Tambien tenemos que agregar un fichero en raiz, que se llame .prettierrc y dentro un objeto vacio para tener las configuraciones por defecto de Prettier.
INSTALAMOS ESLint: npm install -D eslint@8.24.0 eslint-config-prettier@8.5.0
Agregamos en el package.json, los scripts para prettier, esLint, etc.
Utilizamos VITE como herramienta de conmpilacion.
Intalacion de VITE: npm install -D vite@3.1.4 @vitejs/plugin-react@2.1.0
Instalamos REACT: npm install react@18.2.0 react-dom@18.2.0
en la instalacion de REACT, no incluimos el -D porque no es una herramienta de desarrollo, es una dependencia de produccion.
