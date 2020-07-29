import axios from "axios";

const state = {
  loadingStatus: null,
  photos: [],
};

const mutations = {
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status;
  },
  SET_PHOTOS(state, photos) {
    state.photos = photos;
  },
};

const actions = {
  async fetchPhotos({ commit }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=10");
    commit("SET_PHOTOS", response.data);
    commit("SET_LOADING_STATUS", "Fetched data");
  },
};

const getters = {
  allPhotos(state) {
    return state.photos;
  },
};

export default {
  mutations,
  actions,
  state,
  getters,
};
