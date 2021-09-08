<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="postsWithTag.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts"/>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
// challenge
//   - create a tag route, which the tag as a route paramater (/posts/:tag)
//   - in the Tag view, make a request for all the posts
//   - use the useRoute function to access the tag route parameter
//   - use a computed property to return an array of posts which have that tag
//   - use the PostList component to output the required posts
//   - show the spinner until the data is loaded, and error if there is one

import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router";
import { computed } from '@vue/reactivity';
import TagCloud from '../components/TagCloud.vue'

export default {
  name : "Tag",
  components: { PostList, Spinner, TagCloud},
  props: ["posts"],
  setup() {
    const route = useRoute()
    const tag = route.params.tag
    //const filteredPosts = posts.filter(e => e.tags.includes(tag))
    //console.log(filteredPosts)

    const { posts, error, load } = getPosts()
    console.log(route.params.tag)
    load()

    const postsWithTag = computed( () => {
        return posts.value.filter( (p) => p.tags.includes(tag))
    }
    )

    return { posts, error, postsWithTag}
  },
};
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>