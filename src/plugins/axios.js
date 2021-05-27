import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://b3trader-c4393-default-rtdb.firebaseio.com/'
        })
    }
})