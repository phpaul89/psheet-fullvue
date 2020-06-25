<template>
  <div id="wrapper">
    <div id="sheet" class="inner-border">
      <!--components-->
      <PersonalInfo />
      <PersonalTopics />
      <Scans />
    </div>
  </div>
</template>

<script>
import PersonalInfo from "./PersonalInfo.vue";
import PersonalTopics from "./PersonalTopics.vue";
import Scans from "./Scans.vue";

export default {
  name: "Sheet",
  components: {
    PersonalInfo,
    PersonalTopics,
    Scans
  }
};
</script>

<style scoped>
#wrapper {
  background-color: white;
  box-shadow: 0px 0px 14px 1px lightgray;

  width: 21cm;
  height: 29.7cm;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#sheet {
  width: 88%;
  height: 90%;
}
</style>