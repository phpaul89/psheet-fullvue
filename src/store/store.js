import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    sheetData: {
      patient: {
        name: "",
        date: "",
        gender: "",
        birthDate: "",
        personalTopics: "",
        firstScan: {
          chakraOne: "",
          chakraTwo: "",
          chakraThree: "",
          chakraFour: "",
          chakraFive: "",
          chakraSix: "",
          chakraSeven: "",
        },
        secondScan: {
          chakraOne: "",
          chakraTwo: "",
          chakraThree: "",
          chakraFour: "",
          chakraFive: "",
          chakraSix: "",
          chakraSeven: "",
        },
        customNotes: "",
        furtherNotes: "",
        nextSteps: "",
      },
    },
  },
  // state cannot be manipulated except by using 'mutations':
  mutations: {
    changeCustomerPropertyValue(state, propertyObject) {
      //console.log("propertyObject: ", propertyObject);
      state.sheetData.patient[propertyObject.id] = propertyObject.value;
    },
    changeChakra(state, chakraObject) {
      //console.log("chakraObject: ", chakraObject);
      state.sheetData.patient[chakraObject.id][chakraObject.fieldName] =
        chakraObject.fieldValue;
    },
  },
  // 'getters' are used to have a look into the state:
  getters: {
    sheetData: (state) => state.sheetData.patient,
    nextSteps: (state) => state.sheetData.patient.nextSteps, // 'state' as parameter, returning 'state.nextSteps'
  },
});
