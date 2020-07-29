const state = {
  employees: [
    {
      name: "Joost",
      age: 21,
      city: "Amsterdam",
      hairColor: "red",
      eyeColor: "orangered",
      hobbys: ["gym", "gaming", "skateboarding"],
    },
    {
      name: "Bommel",
      age: 21,
      city: "Leeuwarden",
      hairColor: "red",
      eyeColor: "ocean blue",
      hobbys: ["gym", "gaming", "skateboarding"],
    },
    {
      name: "Mark",
      age: 29,
      city: "Amsterdam",
      hairColor: "pink",
      eyeColor: "blue",
      hobbys: ["food", "skateboarding"],
    },
    {
      name: "Bob",
      age: 18,
      city: "Rotterdam",
      hairColor: "red",
      eyeColor: "red",
      hobbys: [],
    },
    {
      name: "Margriet",
      age: 21,
      city: "Alkmaar",
      hairColor: "blonde",
      eyeColor: "gray",
      hobbys: ["food"],
    },
    {
      name: "Edward",
      age: 21,
      city: "Delft",
      hairColor: "blonde",
      eyeColor: "gray",
      hobbys: ["food"],
    },
    {
      name: "dasfasd",
      age: 21,
      city: "Delft",
      hairColor: "blonde",
      eyeColor: "gray",
      hobbys: ["food"],
    },
  ],
};
const mutations = {};
const actions = {};
const getters = {
  allEmployees() {
    return state.employees;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
