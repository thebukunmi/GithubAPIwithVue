<template>
  <div class="container" v-if="repo && files">
    <h1>{{ repo.name }}</h1>
    <p>{{ repo.description }}</p>
    <p><strong>Stars:</strong> {{ repo.stargazers_count }}</p>
    <p><strong>Forks:</strong> {{ repo.forks_count }}</p>
    <h2>Files</h2>
    <ul>
      <li v-for="file in files" :key="file.sha">
        <a :href="file.html_url" target="_blank">{{ file.name }}</a>
      </li>
    </ul>
    <div class="back-to-respository">
      <router-link to="/">Back to Repositories</router-link>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      repo: null,
      files: [],
    };
  },
  async created() {
    try {
      const repoResponse = await axios.get(`https://api.github.com/repos/thebukunmi/${this.$route.params.id}`);
      this.repo = repoResponse.data;
      const filesResponse = await axios.get(`https://api.github.com/repos/thebukunmi/${this.$route.params.id}/contents`);
      this.files = filesResponse.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>


<style>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h1 {
  color: darkblue;
}
p {
  color: black;
}
h2 {
  color: darkblue;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
}

a {
  color: darkblue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.back-to-respository{
  background-color: darkblue;
  margin: 0 auto;
  padding: 15px;
  width: 150px;
}

.back-to-respository a{
  color: white;
}
</style>

