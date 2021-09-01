import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function get(url) {
    return new Promise(resolve => {
        return fetch(url).then(res => res.json()).then(data => resolve(data))
    })
}
export default new Vuex.Store({
    state: {
        data: {
            giveaways: []
        }
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async getData({commit}) {
            const giveaways = await get('http://167.99.138.67:4545/giveaways/all')

            return commit('setData', {giveaways})
        }
    },
    modules: {}
})
