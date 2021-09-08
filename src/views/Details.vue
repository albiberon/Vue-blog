<template>
  <div class="details">
    <div v-if="error">{{ error }}</div>
    <div v-if="post" class="post">
      <h2>{{ post.title }}</h2>
      <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else><Spinner/></div>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
import Spinner from "../components/Spinner.vue"
import { useRoute } from 'vue-router'


export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    const route = useRoute()
    const { post, error, load } = getPost(route.params.id);
    

    console.log(route)
    console.log(route.params.id)

    load();

    return {post, error};
  },
};
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}
.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre {
    white-space: pre-wrap;
}
</style>