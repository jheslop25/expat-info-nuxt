import { getPosts } from "../../services/posts";
import PostItem from '../../components/PostItem/index.vue';

export default {
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  components: {
    PostItem,
  },
  async mounted() {
    await getPosts(this);
    this.loading = false;
  }
}
