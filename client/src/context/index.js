import { createContext , useReducer, useEffect } from "react";
import reducer from '../reducers'
import ThemeContext from '../context/theme'
import { FETCH_USERS, SET_USER_COUNT, SET_LOADING} from '../utils/enums'

const initialState = {
  searchTerm: "",
  users: [],
  userCount: 0,
  loading: true
}
const GlobalContext = createContext(initialState);
export const GlobalContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(x => x.json())
      .then((data) => {
          dispatch({
            type: FETCH_USERS,
              payload: {
                users: data,
              }
          });
          dispatch({
            type: SET_USER_COUNT,
              payload: {
                userCount: data.length,
              }
          });
          dispatch({
            type: SET_LOADING,
              payload: {
                loading: false,
              }
          });
        })
    },[])
  
    return (
      <GlobalContext.Provider value={[state, dispatch]}>
        <ThemeContext>
          {props.children}
        </ThemeContext>
      </GlobalContext.Provider>
    );
};
export default GlobalContext;