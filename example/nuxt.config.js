export default {
  components: true,
  head: {
    title: 'Nuxt Image Example',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  target: 'static',
  buildModules: ['@sushydev/image'],
  image: {
    domains: ['images.unsplash.com', 'source.unsplash.com']
  }
}
