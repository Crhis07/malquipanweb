import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Configuración con orden de compilación correcto
export default defineConfig({
  plugins: [
    tailwindcss(), // Primero procesa el CSS nativo de v4
    react()        // Luego transforma los componentes de React 19
  ],
})