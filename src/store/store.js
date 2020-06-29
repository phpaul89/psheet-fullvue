import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    sheetData: {
      patient: {
        _id: "",
        name: "",
        date: "",
        gender: "",
        birthDate: "",
        personalTopics: "",
        firstScan: [
          { _id: "", name: "chakraOne", value: "" },
          { _id: "", name: "chakraTwo", value: "" },
          { _id: "", name: "chakraThree", value: "" },
          { _id: "", name: "chakraFour", value: "" },
          { _id: "", name: "chakraFive", value: "" },
          { _id: "", name: "chakraSix", value: "" },
          { _id: "", name: "chakraSeven", value: "" },
        ],
        secondScan: [
          { _id: "", name: "chakraOne", value: "" },
          { _id: "", name: "chakraTwo", value: "" },
          { _id: "", name: "chakraThree", value: "" },
          { _id: "", name: "chakraFour", value: "" },
          { _id: "", name: "chakraFive", value: "" },
          { _id: "", name: "chakraSix", value: "" },
          { _id: "", name: "chakraSeven", value: "" },
        ],
        customNotes: "",
        furtherNotes: "",
        nextSteps: "",
      },
    },
  },
  // state cannot be manipulated except by using 'mutations':
  mutations: {
    changeCustomerPropertyValue(state, propertyObject) {
      state.sheetData.patient[propertyObject.id] = propertyObject.value;
    },
    changeChakra(state, chakraObject) {
      // below line works, unclear why object notation within array of object structure works here, cannot replicate in IDE online
      state.sheetData.patient[chakraObject.id][chakraObject.fieldName] =
        chakraObject.fieldValue;
    },
    getPatientSheet(state, patientObject) {
      state.sheetData.patient = patientObject;
    },
  },
  // 'getters' are used to have a look into the state:
  getters: {
    patientSheetData: (state) => state.sheetData.patient,
    nextSteps: (state) => state.sheetData.patient.nextSteps, // 'state' as parameter, returning 'state.nextSteps'
  },
});
