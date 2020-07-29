const state = {
  vals: ''
}
const mutations = {
  changeState(state: any, datas: string) {
    state.vals = datas;
  }
}
const actions = {
  changeSevice({ commit }: any, val: string) {
    commit('changeState', val);
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
