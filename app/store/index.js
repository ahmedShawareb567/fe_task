import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state() {
      return {
        performanceData: [],
        startEnd: {},
      };
    },
    mutations: {
      SET_PERFORMANCE_DATA(state, payload) {
        state.performanceData = payload;
        const dates = payload.map(per => per.date_ms);
        state.startEnd = {
          start: Math.min(...dates),
          end: Math.max(...dates),
        };
      },
      DATE_RANGE_FILTER(state, payload) {
        state.performanceData = state.performanceData.filter(per => {
          return per.date_ms >= payload.start && per.date_ms <= payload.end;
        });
      },
    },
    actions: {
      getPerformanceData({
        commit,
      }) {
        axios
          .get('https://fe-task.getsandbox.com/performance')
          .then(res => {
            commit('SET_PERFORMANCE_DATA', res.data);
          });
      },
      dateRangeFilter({
        commit,
      }, payload) {
        commit('DATE_RANGE_FILTER', payload);
      },
    },
    getters: {
      performanceData: (state) => state.performanceData,
      startEndDate(state) {
        return state.startEnd;
      },
    },
  });
};

export default createStore;
