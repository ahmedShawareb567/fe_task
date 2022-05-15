import moment from 'moment';

export default {
  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format('DD MMM YYYY');
    },
  },
};
