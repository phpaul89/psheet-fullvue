<template>
  <div id="personal-info" class="bottom-border">
    <!-- Headtext of personal info -->
    <div class="section-header-text">{{ headerText }}</div>
    <!-- Labels of personal info -->
    <div class="section-content">
      <div id="section-left-input">
        <div class="section-input-labels">
          <div class="name-label mb-10">Name</div>
          <div class="gender-checkbox mb-10">Gender</div>
          <div class="birth-date-label mb-10">Date of birth</div>
        </div>
        <!-- Input side of personal info -->
        <div class="section-input">
          <!-- Name -->
          <div id="name">
            <input
              class="mb-10"
              id="name"
              @input="changed"
              :value="this.$store.getters.patientSheetData($sheetIndex).name"
            />
          </div>
          <!-- Gender -->
          <div id="gender">
            <div id="gender-text" class="mb-10">
              <div
                v-bind:class="{
                  'select-option': true,
                  'gender-active':
                    this.$store.getters.patientSheetData($sheetIndex).gender ===
                    'Male',
                }"
                v-on:click="changedGender('Male')"
              >
                Male
              </div>
              <div
                v-bind:class="{
                  'select-option': true,
                  'gender-active':
                    this.$store.getters.patientSheetData($sheetIndex).gender ===
                    'Female',
                }"
                v-on:click="changedGender('Female')"
              >
                Female
              </div>
              <div
                v-bind:class="{
                  'select-option': true,
                  'gender-active':
                    this.$store.getters.patientSheetData($sheetIndex).gender ===
                    'Other',
                }"
                v-on:click="changedGender('Other')"
              >
                Other
              </div>
            </div>
          </div>
          <!-- Birthdate -->
          <div id="birth">
            <input
              class="mb-10"
              id="birthDate"
              @input="changed"
              :value="
                this.$store.getters.patientSheetData($sheetIndex).birthDate
              "
            />
          </div>
        </div>
      </div>
      <div id="section-right-input">
        <div class="date-input">
          <input
            type="date"
            id="date"
            @input="changed"
            :value="this.$store.getters.patientSheetData($sheetIndex).date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  inject: ["$sheetIndex"],
  data() {
    return {
      headerText: "Personal Info",
      activeGenderCustomer: "",
    };
  },
  methods: {
    selectGender: function(option) {
      if (option === this.activeGenderCustomer) {
        this.genderCustomer = "";
        this.activeGenderCustomer = "";
      } else {
        this.genderCustomer = option;
        this.activeGenderCustomer = option;
      }
    },
    changed: function(event) {
      const propertyObject = {
        id: event.target.id,
        value: event.target.value,
      };
      this.$store.commit("changeCustomerPropertyValue", propertyObject);
    },
    changedGender: function(gender) {
      const propertyObject = {
        id: "gender",
        value: (this.activeGenderCustomer =
          gender === this.activeGenderCustomer ? "" : gender),
      };
      this.$store.commit("changeCustomerPropertyValue", propertyObject);
    },
  },
};
</script>

<style scoped>
#personal-info {
  width: 100%;
  height: 20%;
}

.section-header-text {
  margin: 0;
  padding: 20px 0 0 20px;
}

.section-content {
  display: flex;
  flex-direction: row;

  margin-top: 20px;
}

#section-left-input,
#section-right-input {
  width: 50%;

  display: flex;
  flex-direction: row;
}

#section-right-input {
  justify-content: flex-end;
}

.section-input-labels {
  display: flex;
  flex-direction: column;

  padding-left: 20px;
}

.section-input {
  display: flex;
  flex-direction: column;

  margin-left: 20px;
}

.section-input input {
  background-color: whitesmoke;
  border: 0;
  padding: 0;

  font-family: "Muli", sans-serif;
  font-size: 1em;
}

.date-input {
  margin-right: 20px;
}

.date-input input {
  background-color: whitesmoke;
  border: 0;
  cursor: pointer;
}

#name {
  display: flex;
  flex-direction: row;
}

#gender-text {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.select-option {
  margin-right: 10px;
}

.gender-active {
  background-color: lightgreen;
}
</style>
