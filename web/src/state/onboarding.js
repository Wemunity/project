
const initialState = {
  agreeTerms: false,
  symptomStartDate: null,
  symptomEndDate: null,
  picture: null,
  name: "",
  location: "",
  age: "",
  phoneNumber: "",
  hasDriversLicense: false,
  driversLicenses: {
    car: false,
    bus: false,
    truck: false,
    minibus: false,
  },
  canContact: false,
  contactDaytime: false,
  contactNighttime: false,
  contactAnytime: false,
  contactSMS: false,
  contactEmail: false,
  contactCall: false,
  socialCare: false,
  dailyChores: false,
  professionalExperience: false,
  professionalExperiences: [],
};

// CONSTANTS
const SET_SYMPTOM_START_DATE = 'SET_SYMPTOM_START_DATE';
const SET_SYMPTOM_END_DATE = 'SET_SYMPTOM_END_DATE';
const SET_AGREE_TERMS = 'SET_AGREE_TERMS';
const SET_PICTURE = 'SET_PICTURE';
const SET_NAME = 'SET_NAME';
const SET_AGE = 'SET_AGE';
const SET_PHONE_NUMBER = 'SET_PHONE_NUMBER';
const SET_LOCATION = 'SET_LOCATION';
const SET_HAS_DRIVERS_LICENSE = 'SET_HAS_DRIVERS_LICENSE';
const SET_DRIVERS_LICENSE_CAR = 'SET_DRIVERS_LICENSE_CAR';
const SET_DRIVERS_LICENSE_BUS = 'SET_DRIVERS_LICENSE_BUS';
const SET_DRIVERS_LICENSE_TRUCK = 'SET_DRIVERS_LICENSE_TRUCK';
const SET_DRIVERS_LICENSE_MINIBUS = 'SET_DRIVERS_LICENSE_MINIBUS';
const SET_DRIVERS_LICENSES = 'SET_DRIVERS_LICENSES';
const SET_CAN_CONTACT = 'SET_CAN_CONTACT';
const SET_CONTACT_DAYTIME = 'SET_CONTACT_DAYTIME';
const SET_CONTACT_NIGHTTIME = 'SET_CONTACT_NIGHTTIME';
const SET_CONTACT_ANYTIME = 'SET_CONTACT_ANYTIME';
const SET_CONTACT_SMS = 'SET_CONTACT_SMS';
const SET_CONTACT_EMAIL = 'SET_CONTACT_EMAIL';
const SET_CONTACT_CALL = 'SET_CONTACT_CALL';
const SET_BASIC_SOCIAL_CARE = 'SET_BASIC_SOCIAL_CARE';
const SET_DAILY_CHORES = 'SET_DAILY_CHORES';
const SET_PROFESSIONAL_EXPERIENCE = 'SET_PROFESSIONAL_EXPERIENCE';
const SET_PROFESSIONAL_EXPERIENCES = 'SET_PROFESSIONAL_EXPERIENCES';

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

export const setPicture = (picture) => ({
  type: SET_PICTURE,
  picture
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

export const setPhoneNumber = (phoneNumber) => ({
  type: SET_PHONE_NUMBER,
  phoneNumber
});

export const setHasDriversLicense = (hasDriversLicense) => ({
  type: SET_HAS_DRIVERS_LICENSE,
  hasDriversLicense
});

export const setDriversLicenseCar = (car) => ({
  type: SET_DRIVERS_LICENSE_CAR,
  car
});

export const setDriversLicenseBus = (bus) => ({
  type: SET_DRIVERS_LICENSE_BUS,
  bus
});

export const setDriversLicenseTruck = (truck) => ({
  type: SET_DRIVERS_LICENSE_TRUCK,
  truck
});

export const setDriversLicenseMinibus = (minibus) => ({
  type: SET_DRIVERS_LICENSE_MINIBUS,
  minibus
});

export const setDriversLicenses = (driversLicenses) => ({
  type: SET_DRIVERS_LICENSES,
  driversLicenses
});

export const setCanContact = (canContact) => ({
  type: SET_CAN_CONTACT,
  canContact
});

export const setContactDaytime = (contactDaytime) => ({
  type: SET_CONTACT_DAYTIME,
  contactDaytime
});

export const setContactNighttime = (contactNighttime) => ({
  type: SET_CONTACT_NIGHTTIME,
  contactNighttime
});

export const setContactAnytime = (contactAnytime) => ({
  type: SET_CONTACT_ANYTIME,
  contactAnytime
});

export const setContactSMS = (contactSMS) => ({
  type: SET_CONTACT_SMS,
  contactSMS
});

export const setContactEmail = (contactEmail) => ({
  type: SET_CONTACT_EMAIL,
  contactEmail
});

export const setContactCall = (contactCall) => ({
  type: SET_CONTACT_CALL,
  contactCall
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

export const setProfessionalExperiences = (experiences) => ({
  type: SET_PROFESSIONAL_EXPERIENCES,
  experiences
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

    case SET_PICTURE:
      return { ...state, picture: action.picture };

    case SET_NAME:
      return { ...state, name: action.name };

    case SET_LOCATION:
      return { ...state, location: action.location };

    case SET_AGE:
      return { ...state, age: action.age };

    case SET_PHONE_NUMBER:
      return { ...state, phoneNumber: action.phoneNumber };

    case SET_HAS_DRIVERS_LICENSE:
      return { ...state, hasDriversLicense: action.hasDriversLicense };

    case SET_DRIVERS_LICENSE_CAR:
      return { ...state, car: action.car };

    case SET_DRIVERS_LICENSE_BUS:
      return { ...state, bus: action.bus };

    case SET_DRIVERS_LICENSE_TRUCK:
      return { ...state, truck: action.truck };

    case SET_DRIVERS_LICENSE_MINIBUS:
      return { ...state, minibus: action.minibus };

    case SET_DRIVERS_LICENSES:
      return { ...state, driversLicenses: action.driversLicenses };

    case SET_CAN_CONTACT:
      return { ...state, canContact: action.canContact };

    case SET_CONTACT_DAYTIME:
      return { ...state, contactDaytime: action.contactDaytime };

    case SET_CONTACT_NIGHTTIME:
      return { ...state, contactNighttime: action.contactNighttime };

    case SET_CONTACT_ANYTIME:
      return { ...state, contactAnytime: action.contactAnytime };

    case SET_CONTACT_SMS:
      return { ...state, contactSMS: action.contactSMS };

    case SET_CONTACT_EMAIL:
      return { ...state, contactEmail: action.contactEmail };

    case SET_CONTACT_CALL:
      return { ...state, contactCall: action.contactCall };

    case SET_BASIC_SOCIAL_CARE:
      return { ...state, socialCare: action.socialCare };

    case SET_DAILY_CHORES:
      return { ...state, dailyChores: action.dailyChores };

    case SET_PROFESSIONAL_EXPERIENCE:
      return { ...state, professionalExperience: action.professionalExperience };

    case SET_PROFESSIONAL_EXPERIENCES:
      return { ...state, professionalExperiences: action.experiences };

    default:
      return state;
  }
};
