import PostItem from '../../components/PostItem/index.vue';
import { getHomePageData } from "../../services/posts";

export default {
  data() {
    return {
      pageData: {
        posts: [],
      },
    };
  },
  async mounted() {
    await getHomePageData(this);
  },
  components: {
    PostItem,
  },
};
