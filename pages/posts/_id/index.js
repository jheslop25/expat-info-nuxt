import { getPostById } from "../../../services/posts";

export default {
  data() {
    return {
      postItem: {},
    };
  },
  async mounted() {
    if (!this.$route.params || !this.$route.params.id) {
      this.history.push('/home');
    }
    await getPostById(this, this.$route.params.id);
  }
};
