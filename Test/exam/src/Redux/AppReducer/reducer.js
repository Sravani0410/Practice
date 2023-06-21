import { ADD_USER, ERROR, LOADING, SEARCH_USER, SET_USERS } from "./actionTypes";

let AppReducerInitState = {
  users: [],
  isLoading: true,
  isError: false,
  errorMessage:"",
  searchUser:null
};
let appReducer = (state = AppReducerInitState, { type, payload }) => {

  switch (type) {
    case SET_USERS:
      return {
        ...state,
        isError:false,
        errorMessage:"",
        users:[...payload]
      }
    case LOADING:
      return {
        ...state,
        errorMessage:"",
        isError:false,
        isLoading: !state.isLoading,
      };
    case ADD_USER:
      return {
        ...state,
        errorMessage:"",
        isError:false,
        users: [...state.users, payload],
      };
      case ERROR:
        return {
          ...state,
          isError:true,
          errorMessage:payload.message
        }
        case SEARCH_USER:
          return {
            ...state,
            searchUser:payload
          }
    default:
      return state;
  }
};

export { appReducer };
