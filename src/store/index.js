import { createStore } from 'vuex';
import projectData from './modules/projectData';
import paygProject from './modules/paygProject';
import pageContent from './modules/pageContent';


export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    projectData,
    paygProject,
    pageContent
  }
})
