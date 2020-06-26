<template>
  <div id="further-notes" class="right-border">
    <div class="section-header-text">{{headerText}}</div>
    <textarea id="further-textarea" v-model="furtherText"></textarea>
  </div>
</template>

<script>
export default {
  name: "FurtherNotes",
  data() {
    return {
      headerText: "Further Notes",
      furtherText: ""
    };
  }
};
</script>

<style scoped>
#further-notes {
  width: 50%;
  height: 100%;
}

.section-header-text {
  margin: 0;
  padding: 20px 0 0 20px;
  cursor: pointer;
}

.section-header-text:hover {
  background-color: whitesmoke;
}

#further-textarea {
  width: 88%;
  height: 62%;
  max-height: 66%;

  background-color: whitesmoke;

  border: 0;
  padding: 0;
  margin: 5% 0 0 20px;

  font-family: "Muli", sans-serif;
  font-size: 1em;

  resize: none;
}
</style>