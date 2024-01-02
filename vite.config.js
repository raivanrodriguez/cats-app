import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: 'http://raivanrodriguez.github.io/cats-app',

})