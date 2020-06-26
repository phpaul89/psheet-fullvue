<template>
  <div id="next-steps">
    <div class="section-header-text">{{headerText}}</div>
    <textarea id="next-textarea" v-model="nextText"></textarea>
  </div>
</template>

<script>
export default {
  name: "NextSteps",
  data() {
    return {
      headerText: "Next Steps",
      nextText: ""
    };
  }
};
</script>

<style scoped>
#next-steps {
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

#next-textarea {
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