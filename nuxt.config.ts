export default defineNuxtConfig({
vite: {
  plugins: [
     {
      name: 'custom-hmr',
      enforce: 'post',
      handleHotUpdate({file, server}) {
        if (file.endsWith('.mjml')) {
          console.log('reloading mjml file...')
          server.ws.send({type: 'full-reload', path: '*'})
        }
      }
    }
  ]
}
})