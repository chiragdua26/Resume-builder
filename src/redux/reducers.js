import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Define initial state for the form fields
const initialState = {
  name: '',
  email: '',
  address: '',
  phone: '',
  education: [],
  experience: [],
  skills: [],
};

// Reducer for the Resume form
const resumeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [...state.education, action.education],
      };
    case 'REMOVE_EDUCATION':
      return {
        ...state,
        education: state.education.filter((edu, index) => index !== action.index),
      };
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experience: [...state.experience, action.experience],
      };
    case 'REMOVE_EXPERIENCE':
      return {
        ...state,
        experience: state.experience.filter((exp, index) => index !== action.index),
      };
    case 'ADD_SKILL':
      return {
        ...state,
        skills: [...state.skills, action.skill],
      };
    case 'REMOVE_SKILL':
      return {
        ...state,
        skills: state.skills.filter((skill, index) => index !== action.index),
      };
    default:
      return state;
  }
};

// Combine the form reducer with other reducers
const rootReducer = combineReducers({
  form: formReducer,
  resumeForm: resumeFormReducer,
});

export default rootReducer;
