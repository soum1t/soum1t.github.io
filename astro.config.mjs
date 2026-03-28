import tailwindcss from '@tailwindcss/vite'
import { defineConfig, fontProviders } from 'astro/config'

export default defineConfig({
  site: 'https://soum1t.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "JetBrains Mono",
    cssVariable: "--font-jetbrains-mono",
  }]
})