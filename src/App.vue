<template>
  <div id="app">
    <Sheet />
    <div id="action-bar">
      <button id="save" v-on:click="saveSheet">Save</button>
    </div>
  </div>
</template>

<script>
import Sheet from "./components/Sheet.vue";

export default {
  name: "App",
  components: {
    Sheet,
  },
  methods: {
    saveSheet: function() {
      console.log("Saved sheet data: ", this.$store.getters.sheetData);

      fetch("http://localhost:3000/saveSheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // w/o headers option, req.body in backend would be empty
        body: JSON.stringify({ sheetData: this.$store.getters.sheetData }),
      })
        .then((response) => response.text())
        .then((response) => {
          console.log("hello again from frontend: ", response);
        })
        .catch(function(error) {
          console.log("Looks like there was a problem: \n", error);
        });
    },
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

#action-bar {
  height: 29.7cm;
}

#save {
  background: white;
  border: 1px solid gray;
  border-radius: 50%;
  margin: 0 10px 10px 10px;
  padding: 14px 6px 14px 6px;

  font-family: "Muli", sans-serif;
  font-size: 1em;
  color: black;

  transition-duration: 0.2s;
}

#save:hover {
  background: lightgreen;
  cursor: pointer;

  transition-duration: 0.2s;
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
