<template>
  <div>
    <slot v-if="!error" />
    <div v-else class="container">
      <h1>An error occurred</h1>
      <p>{{ error.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
    };
  },
  errorCaptured(err, vm, info) {
    this.error = err;
    console.log(vm, info);
    return false;
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
  text-align: center;
}
h1 {
  color: darkblue;
}
p {
  color: black;
}
</style>
