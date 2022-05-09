export const state = () => ({
  items: []
});

export const mutations = {
  setTasks: (state, tasks) => {
    state.items = tasks
  }
};

export const actions = {
  async getTasks({ commit }) {
    // get tasks
    const tasks = await this.$axios.$get('/tasks');

    commit('setTasks', tasks);
  }
}
