<template>
  <div class="container">
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
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
  text-align: center;
}
h1 {
  color: darkblue;
}
p {
  color: black;
}
a {
  color: darkblue;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
