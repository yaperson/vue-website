<script>
import headerNav from './components/header.vue'

export default {
  components: {
      headerNav: headerNav
    }
}
</script>

<template>
  <headerNav/>
  <main>
    <router-view />
  </main>
</template>

<style>

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  height: 100vh;
  width: 100%;
}

body {
  max-height: 100vh;
  background: rgb(246, 249, 252);
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: black
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}

</style>