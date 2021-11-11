export const getPosts = async (context) => {
  try {
    const response = await context.$axios.$get('/api/posts');

    if (response && response.posts) {
      context.posts = response.posts;
    }
  } catch (e) {
    console.log('e', e);
  }
}

export const getHomePageData = async (context) => {
  try {
    const response = await context.$axios.$get('/api/pages');
    console.log('response', response);

    if (response && response.data && !response.data.error) {
      context.pageData = response.data;
    }
  } catch (e) {
    console.log('e', e);
  }
}

export const getPostById = async (context, id) => {
  try {
    const response = await context.$axios.$get(`/api/posts/${id}`);

    if (response && response.post && !response.error) {
      context.postItem = response.post;
    }
  } catch (e) {
    console.log('e', e);
  }
};
