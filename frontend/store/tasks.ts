export const state = () => ({
  items: []
});

export const mutations = {
  setTasks: (state, tasks) => {
    state.items = tasks
  }
};

export const actions = {
  getTasks: ({ commit }) => {
    // get tasks
    const tasks = [];

    commit('setTasks', tasks);
  }
}
