<template>
  <div id="app">
    <ErrorBoundary>
      <router-view />
    </ErrorBoundary>
  </div>
</template>

<script>
import ErrorBoundary from './components/ErrorBoundary.vue';

export default {
  components: {
    ErrorBoundary,
  },
};
</script>
