import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn241609Reducer from '../features/SignIn241609/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn241609: SignIn241609Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});