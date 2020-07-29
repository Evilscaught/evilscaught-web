import axios from "axios";

const state = {
  api: "https://jsonplaceholder.typicode.com/todos",
  fetchinStatus: "",
  newTodoStatus: "",
  todos: [],
};

// functions to store / change data
const mutations = {
  SET_FETCHING_STATUS(state, status) {
    state.fetchinStatus = status;
  },

  SET_NEW_TODO_STATUS(state, status) {
    state.newTodoStatus = status;
  },

  SET_TODOS(state, todos) {
    state.todos = todos;
  },

  ADD_TODO(state, todo) {
    state.todos.unshift(todo);
  },

  DELETE_TODO(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};

// functions
const actions = {
  async fetchTodos({ commit }) {
    commit("SET_FETCHING_STATUS", "loading");

    const response = await axios.get(state.api);

    // set data for mutations
    commit("SET_TODOS", response.data);
    commit("SET_FETCHING_STATUS", "done");
  },

  async addTodo({ commit }, newTodo) {
    commit("SET_NEW_TODO_STATUS", "loading");

    const response = await axios.post(state.api, newTodo);

    commit("ADD_TODO", response.data);
    commit("SET_NEW_TODO_STATUS", "done");

    setTimeout(() => {
      commit("SET_NEW_TODO_STATUS", "");
    }, 3000);
  },

  async deleteTodo({ commit }, id) {
    commit("DELETE_TODO", id);
    await axios.delete(state.api + id);
  },
};

// able to export data to component
const getters = {
  // allTodos: (state) => state.todos, or..
  allTodos(state) {
    return state.todos;
  },

  getNewTodoStatus(state) {
    return state.newTodoStatus;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
