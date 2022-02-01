import feather from 'vue-icon'
// import bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  try {
    Vue.use(feather, 'v-icon')
    Vue.use(BootstrapVue)  //use bootstrap
  } catch (e) {
    console.error(e.message)
  }
}