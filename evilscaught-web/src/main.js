import Vue from 'vue';
import Home from './pages/Home.vue';
import Away from './components/Away.vue';
import NotFound from './pages/PageNotFound.vue';


Vue.config.productionTip = true;

const routes = {
    '/evilscaught-web/': Home,
    '/home': Home,
    '/away': Away
}

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute] || NotFound
        }
    },
    render(h) { return h(this.ViewComponent) }
})
