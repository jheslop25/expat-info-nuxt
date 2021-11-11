import moment from "moment";

export default {
  data() {
    return {
      date: null
    };
  },
  props: ['post'],
  mounted() {
    this.date = moment(this.post.created_at).format('YYYY-MM-DD');
  }
};
