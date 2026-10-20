# Taller IV – Programación Web

## Estructura

```text
backend/
  src/
    controllers/
      healthController.js
      infoController.js
    routes/
      index.js
    services/
      infoService.js
    app.js
    server.js
  .env.example
frontend/
  src/
    pages/
      HomePage.jsx
    routes/
      rutas.jsx
    App.jsx
    main.jsx
    styles.css
  .env.example
```

## Requisitos

- Node.js >= 22
- npm >= 10

## Pasos de ejecución

1. Descomprimir el proyecto y entrar a la carpeta raíz:

   ```bash
   cd taller-iv
   ```

2. Crear los archivos de variables de ambiente (si no existen) a partir de los ejemplos:

   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

3. Instalar dependencias (instala backend y frontend con workspaces):

   ```bash
   npm install
   ```

4. Iniciar backend y frontend a la vez, en distintas terminales:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador:

   - Frontend: http://localhost:5173/home
   - Backend: http://localhost:3005/api/health


## Variables de ambiente

Backend (`backend/.env`):

```dotenv
PORT=3005
CORS_ORIGIN=http://localhost:5173
```

Frontend (`frontend/.env`):

```dotenv
VITE_API_URL=http://localhost:3005/api
```

## Endpoints

| Método | Ruta          | Descripción                                             |
|--------|---------------|---------------------------------------------------------|
| GET    | `/api/health` | Indica que el API está funcionando                      |
| GET    | `/api/info`   | Integrantes: nombre, edad, carrera y materias aprobadas |

```bash
curl http://localhost:3005/api/health
curl http://localhost:3005/api/info
```
