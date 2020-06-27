import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    customerData: {
      name: "",
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
  // state cannot be manipulated except by using 'mutations':
  mutations: {
    changeCustomerPropertyValue(state, propertyObject) {
      console.log("propertyObject: ", propertyObject);
      state.customerData[propertyObject.id] = propertyObject.value;
    },
    changeChakra(state, chakraObject) {
      console.log("chakraObject: ", chakraObject);
      state.customerData[chakraObject.id][chakraObject.fieldName] =
        chakraObject.fieldValue;
    },
  },
  // 'getters' are used to have a look into the state:
  getters: {
    nextSteps: (state) => state.customerData.nextSteps, // 'state' as parameter, returning 'state.nextSteps'
  },
});
