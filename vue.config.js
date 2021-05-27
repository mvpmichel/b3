module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "@/variables/_variables.scss";`
        }
      }
    }
}