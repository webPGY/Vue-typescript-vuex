import Vue from 'vue';
import Vuex from 'vuex';
//vuex状态管理数据存储到浏览器缓存
import VuexPersistence from 'vuex-persist';
import Dem from './modules/Dem';
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    locale: 'zh'
  },
  getters: {
    getAntLocale: (state: any) => {
      return state.locale === 'zh';
    }
  },
  mutations: {
    setLocale(state: any, language: string) {
      state.locale = language;
    }
  },
  actions: {
    async changeLanguage({ commit, state }: any) {
      commit('setSystemSetCount', 'en');
    }
  },
  plugins: [vuexLocal.plugin],
  namespace: true,
  modules: {
    Dem
  }
} as any)
