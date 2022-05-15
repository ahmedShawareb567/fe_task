<template>
  <div class="c-date-range__wrapper">
    <div class="c-date-range__inputs">
      <div class="c-date-range__item">
        <label for="start date">Start</label>
        <input
          type="date"
          v-model="startDate"
          :min="dateRange.start"
          :max="dateRange.end"
        />
      </div>
      <div class="c-date-range__item">
        <label for="End date">End</label>
        <input
          type="date"
          v-model="endDate"
          :disabled="!startDate"
          @change="filterChart"
        />
      </div>
    </div>
    <div v-if="dateError" class="c-date-error">{{ dateError }}</div>
  </div>
</template>

<script>
import dateFormat from "../../mixins/dateFormat";
export default {
  mixins: [dateFormat],

  data() {
    return {
      startDate: null,
      endDate: null,
      dateError: null,
    };
  },

  computed: {
    dateRange() {
      const range = this.$store.getters.startEndDate;
      return {
        start: this.formatDate(range.start),
        end: this.formatDate(range.end),
      };
    },
  },

  methods: {
    filterChart() {
      const range = {
        start: Date.parse(this.dateRange.start),
        end: Date.parse(this.dateRange.end),
      };
      const inputs = {
        start: Date.parse(this.startDate),
        end: Date.parse(this.endDate),
      };
      if (
        inputs.start < range.start ||
        inputs.start > range.end ||
        inputs.end > range.end ||
        inputs.end < range.start
      ) {
        return (this.dateError = `Date has to be between ${this.dateRange.start} And ${this.dateRange.end}`);
      }
      this.$store.dispatch("dateRangeFilter", inputs);
    },
  },
};
</script>

<style lang="scss">
.c-date-range__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  .c-date-range__inputs {
    display: flex;
    gap: 16px;
    input[type="date"] {
      background: none;
      border: 1px solid;
      padding: 2px 8px;
    }
  }
  .c-date-error {
    color: #fff;
    background: rgba($color: #f00, $alpha: 0.5);
    padding: 8px 32px;
    font-size: 13px;
    border-radius: 5px;
  }
}
</style>
