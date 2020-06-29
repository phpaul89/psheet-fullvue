<template>
  <div id="scan" class="bottom-border">
    <div id="scan-text">{{ scanText }}</div>
    <div id="scan-chakra">
      <div id="scan-chakra-upper">
        <PercentagePie
          v-for="field in this.chakraFields[scanId]"
          :tag="field.value.toString()"
          :id="field.name + scanId"
          v-bind:key="field.name"
        />
      </div>
      <div id="scan-chakra-lower">
        <div
          class="underscore"
          v-for="field in this.chakraFields[scanId]"
          v-bind:key="field.name"
        >
          <input
            maxlength="3"
            @input="changed(scanId, field.name, field.value)"
            v-model="field.value"
          />
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
    scanText: String,
    scanId: String,
    chakraFields: Object,
  },
  methods: {
    changed: function(scanId, fieldName, fieldValue) {
      const chakraObject = {
        id: scanId,
        fieldName: fieldName,
        fieldValue: fieldValue,
      };

      this.$store.commit("changeChakra", chakraObject);
    },
  },
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
  width: 38px;

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
