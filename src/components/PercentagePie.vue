<template>
  <div class="circle">
    <canvas :id="id" width="36" height="36" class="cnv"></canvas>
  </div>
</template>

<script>
export default {
  name: "PercentagePie",
  props: {
    tag: String,
    id: String,
  },
  watch: {
    tag: function() {
      this.updatePie(this.tag);
    },
  },
  methods: {
    updatePie: function(inputValue) {
      const canvas = document.getElementById(this.id);
      const context = canvas.getContext("2d");
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 18;

      /* full circle: */
      context.beginPath();
      context.moveTo(centerX, centerY);
      /* draw arc from 0 to 2 * Math.PI which is equivalent to 360 deg */
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.closePath();
      context.fillStyle = "#fff";
      context.fill();

      /* 
      grey full circle is defined in CSS and here, purpose:
      CSS: defined to display circle upon mounting components
      here: so that color circle is resetted after input changes
      */

      /* part circle: */
      context.beginPath();
      context.moveTo(centerX, centerY);
      context.arc(
        centerX,
        centerY,
        radius,
        0 * Math.PI,
        ((2 * inputValue) / 100) * Math.PI,
        false
      );
      context.fillStyle = this.fillColorPie(this.id);
      context.fill();
    },
    fillColorPie: function(idString) {
      if (idString.includes("One")) {
        return "red";
      } else if (idString.includes("Two")) {
        return "orange";
      } else if (idString.includes("Three")) {
        return "yellow";
      } else if (idString.includes("Four")) {
        return "limegreen";
      } else if (idString.includes("Five")) {
        return "skyblue";
      } else if (idString.includes("Six")) {
        return "plum";
      } else if (idString.includes("Seven")) {
        return "white";
      } else {
        return "black";
      }
    },
  },
};
</script>

<style scoped>
.cnv {
  background-color: #fff;
  border-radius: 18px;
  border: 1px solid black;
}
</style>
