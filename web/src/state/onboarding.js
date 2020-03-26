
const initialState = {
  agreeTerms: false,
  symptomStartDate: null,
  symptomEndDate: null,
  name: "",
  location: "",
  age: "",
  driversLicense: false,
  socialCare: false,
  dailyChores: false,
  professionalExperience: false,
};

// CONSTANTS
const SET_SYMPTOM_START_DATE = 'SET_SYMPTOM_START_DATE';
const SET_SYMPTOM_END_DATE = 'SET_SYMPTOM_END_DATE';
const SET_AGREE_TERMS = 'SET_AGREE_TERMS';
const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';
const SET_LOCATION = 'SET_LOCATION';
const SET_DRIVERS_LICENCE = 'SET_DRIVERS_LICENCE';
const SET_BASIC_SOCIAL_CARE = 'SET_BASIC_SOCIAL_CARE';
const SET_DAILY_CHORES = 'SET_DAILY_CHORES';
const SET_PROFESSIONAL_EXPERIENCE = 'SET_PROFESSIONAL_EXPERIENCE';

// ACTIONS
export const setSymptomStartDate = (symptomStartDate) => ({
  type: SET_SYMPTOM_START_DATE,
  symptomStartDate
});

export const setSymptomEndDate = (symptomEndDate) => ({
  type: SET_SYMPTOM_END_DATE,
  symptomEndDate
});

export const setAgreeTerms = (agreeTerms) => ({
  type: SET_AGREE_TERMS,
  agreeTerms
});

export const setName = (name) => ({
  type: SET_NAME,
  name
});

export const setLocation = (location) => ({
  type: SET_LOCATION,
  location
});

export const setAge = (age) => ({
  type: SET_AGE,
  age
});

export const setDriversLicense = (hasDriversLicense) => ({
  type: SET_DRIVERS_LICENCE,
  hasDriversLicense
});

export const setBasicSocialCare = (socialCare) => ({
  type: SET_BASIC_SOCIAL_CARE,
  socialCare
});

export const setDailyChores = (dailyChores) => ({
  type: SET_DAILY_CHORES,
  dailyChores
});

export const setProfessionalExperience = (professionalExperience) => ({
  type: SET_PROFESSIONAL_EXPERIENCE,
  professionalExperience
});


// REDUCERS
export default (state = initialState, action:any) => {
  switch (action.type) {
    case SET_SYMPTOM_START_DATE:
      return { ...state, symptomStartDate: action.symptomStartDate };

    case SET_SYMPTOM_END_DATE:
      return { ...state, symptomEndDate: action.symptomEndDate };

    case SET_AGREE_TERMS:
      return { ...state, agreeTerms: action.agreeTerms };

    case SET_NAME:
      return { ...state, name: action.name };

    case SET_LOCATION:
      return { ...state, location: action.location };

    case SET_AGE:
      return { ...state, age: action.age };

    case SET_DRIVERS_LICENCE:
      return { ...state, driversLicense: action.hasDriversLicense };

    case SET_BASIC_SOCIAL_CARE:
      return { ...state, socialCare: action.socialCare };

    case SET_DAILY_CHORES:
      return { ...state, dailyChores: action.dailyChores };

    case SET_PROFESSIONAL_EXPERIENCE:
      return { ...state, professionalExperience: action.professionalExperience };

    default:
      return state;
  }
};
