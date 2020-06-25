<template>
  <div class="circle"></div>
</template>

<script>
export default {
  name: "PercentagePie",
  props: {
    tag: String
  },
  created: function() {
    console.log("tag is: ", this.tag);
  }
};
</script>

<style scoped>
</style>