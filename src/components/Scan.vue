<template>
  <div id="scan" class="bottom-border">
    <div id="scan-text">{{scanText}}</div>
    <div id="scan-chakra">
      <div id="scan-chakra-upper">
        <PercentagePie v-bind:tag="fields.chakraOne" />
        <PercentagePie tag="2" />
        <PercentagePie tag="3" />
        <PercentagePie tag="4" />
        <PercentagePie tag="5" />
        <PercentagePie tag="6" />
        <PercentagePie tag="7" />
      </div>
      <div id="scan-chakra-lower">
        <div class="underscore">
          <input maxlength="3" v-model="fields.chakraOne" />
        </div>
        <div class="underscore">
          <input maxlength="3" v-model="fields.chakraTwo" />
        </div>
        <div class="underscore">
          <input maxlength="3" v-model="fields.chakraThree" />
        </div>
        <div class="underscore">
          <input maxlength="3" v-model="fields.chakraFour" />
        </div>
        <div class="underscore">
          <input maxlength="3" v-model="fields.chakraFive" />
        </div>
        <div class="underscore">
          <input maxlength="3" v-model="fields.chakraSix" />
        </div>
        <div class="underscore">
          <input maxlength="3" v-model="fields.chakraSeven" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PercentagePie from "./PercentagePie.vue";

export default {
  name: "Scan",
  components: { PercentagePie },
  props: {
    scanText: String
  },
  data() {
    return {
      fields: [
        { chakraOne: "" },
        { chakraTwo: "" },
        { chakraThree: "" },
        { chakraFour: "" },
        { chakraFive: "" },
        { chakraSix: "" },
        { chakraSeven: "" }
      ]
    };
  }
};
</script>

<style scoped>
#scan {
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: row;
  align-items: center;
}

#scan-text {
  width: 20%;
  height: 100%;

  margin-left: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
}

#scan-text:hover {
  background-color: whitesmoke;
  cursor: pointer;
}

#scan-chakra {
  width: 80%;
  height: 100%;
}

#scan-chakra-upper {
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.circle {
  height: 70%;
  width: 6.5%;
  border-radius: 50%;
}

.first {
  background-color: red;
}

.second {
  background-color: orange;
}

.third {
  background-color: yellow;
}

.fourth {
  background-color: limegreen;
}

.fifth {
  background-color: skyblue;
}

.sixth {
  background-color: plum;
}

.seventh {
  background-color: white;
  border: 1px solid black;
}

#scan-chakra-lower {
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.underscore {
  height: 60%;
  width: 6.5%;

  border-bottom: 1px solid lightgray;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.underscore input {
  width: 100%;
  height: 100%;

  background: none;
  background-color: whitesmoke;
  border: 0;

  padding: 0;

  font-family: "Muli", sans-serif;
  font-size: 1em;
  text-align: center;
}
</style>