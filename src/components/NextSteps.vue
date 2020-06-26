<template>
  <div id="next-steps">
    <div class="section-header-text">{{headerText}}</div>
    {{$store.getters.nextSteps}}
    <textarea id="next-textarea" v-model="nextText" @input="changed"></textarea>
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
  },
  methods: {
    changed: function(event) {
      console.log(event.target.value);
      this.$store.commit("change", event.target.value);
    }
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