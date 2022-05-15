<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <date-range />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="chartData" />
    </div>
  </div>
</template>

<script>
import DateRange from "../components/vue-components/date-range.vue";
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    DateRange,
  },

  computed: {
    chartData() {
      return this.$store.getters.performanceData;
    },
  },
  methods: {
    getPerformanceData() {
      this.$store.dispatch("getPerformanceData");
    },
  },
  mounted() {
    this.getPerformanceData();
  },
};
</script>
