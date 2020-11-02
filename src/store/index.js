import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {},
    mutations: {},
    actions: {},
    state: {
        menuItems: [
            {
                title: 'О нас',
                url: '/about'
            },
            {
                title: 'Торты',
                url: '/cakes'
            },
            {
                title: 'Конфеты',
                url: '/candy'
            },

        ]
    },
    getters: {
        getMenuItems (state) {
            return state.menuItems
        }
    }
})