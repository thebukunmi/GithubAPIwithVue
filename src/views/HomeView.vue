<template>
  <div class="container">
    <h1>Repositories</h1>
    <div v-if="filteredRepos.length">
      <router-link :to="{ name: 'Repository', params: { id: filteredRepos[currentPage - 1].name } }">
        <h2>{{ filteredRepos[currentPage - 1].name }}</h2>
      </router-link>
      <p>{{ filteredRepos[currentPage - 1].description }}</p>
      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === filteredRepos.length">Next</button>
      </div>
    </div>
    <div v-else>
      <p>No repositories found.</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      repos: [],
      searchQuery: '',
      currentPage: 1,
    };
  },
  computed: {
    filteredRepos() {
      return this.repos.filter(repo => repo.name.includes(this.searchQuery));
    },
  },
  methods: {
    async fetchRepos() {
      try {
        const response = await axios.get(`https://api.github.com/users/thebukunmi/repos`);
        this.repos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    searchRepos() {
      this.currentPage = 1;
    },
    nextPage() {
      if (this.currentPage < this.filteredRepos.length) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  created() {
    this.fetchRepos();
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
  text-align: center;
}
h2 {
  color: darkblue;
}
p {
  color: black;
}
.pagination {
  display: flex;
  justify-content: space-between;
}
button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

