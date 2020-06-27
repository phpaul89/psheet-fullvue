<template>
  <!-- Custom notes -->
  <div id="custom-notes" class="bottom-border">
    <div class="section-header-text">{{headerText}}</div>
    <textarea id="notes-textarea" @input="changed"></textarea>
  </div>
</template>

<script>
export default {
  name: "CustomNotes",
  data() {
    return {
      headerText: "Custom Notes"
    };
  },
  methods: {
    changed: function(event) {
      const propertyObject = {
        id: "customNotes",
        value: event.target.value
      };
      this.$store.commit("changeCustomerPropertyValue", propertyObject);
    }
  }
};
</script>

<style scoped>
#custom-notes {
  width: 100%;
  height: 20%;
}

.section-header-text {
  margin: 0;
  padding: 20px 0 0 20px;
  cursor: pointer;
}

.section-header-text:hover {
  background-color: whitesmoke;
}

#notes-textarea {
  width: 94%;
  height: 62%;
  max-height: 70%;

  background-color: whitesmoke;

  border: 0;
  padding: 0;
  margin: 2.5% 0 0 20px;

  font-family: "Muli", sans-serif;
  font-size: 1em;

  resize: none;
}
</style>