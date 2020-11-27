import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {},
    mutations: {
        SET_NAVIGATION_DRAWER (state, value) {
            state.navigationDrawer = value
        }
    },
    actions: {
        setNavigationDrawer ({ commit }, value) {
            commit('SET_NAVIGATION_DRAWER', value)
        }
    },
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
            {
                title: 'Шоколады',
                url: '/chocolate'
            },
            {
                title: 'Макаронс',
                url: '/macaron'
            },
            {
                title: 'Другое',
                url: '/other'
            },
            {
                title: 'Контакты',
                url: '/contacts'
            },

        ],
        navigationDrawer: false
    },
    getters: {
        getMenuItems (state) {
            return state.menuItems
        },

        getNavigationDrawer (state) {
            return state.navigationDrawer
        }
    }
})