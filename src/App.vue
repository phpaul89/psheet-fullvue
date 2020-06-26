<template>
  <div id="app">
    <Sheet />
  </div>
</template>

<script>
import Sheet from "./components/Sheet.vue";

export default {
  name: "App",
  components: {
    Sheet,
  },
};
</script>

<style>
html,
body {
  background-color: whitesmoke;

  min-width: 100%;
  min-height: 100%;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Muli", sans-serif;
}

#app {
  min-width: 21cm;
  min-height: 29.7cm;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.mb-10 {
  margin-bottom: 10px;
}

.inner-border {
  box-sizing: border-box;
  border: 1px solid lightgray;
}

.bottom-border {
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
}

.right-border {
  box-sizing: border-box;
  border-right: 1px solid lightgray;
}
</style>
