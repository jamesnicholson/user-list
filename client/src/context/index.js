import { createContext , useReducer, useEffect } from "react";
import reducer from '../reducers'
import ThemeContext from '../context/theme'
import { FETCH_USERS } from '../utils/enums'

const initialState = {
    users: []
}
const GlobalContext = createContext(initialState);

export const GlobalContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(x => x.json())
      .then((data)=>{
          console.log(data)
          dispatch({
            type: FETCH_USERS,
              payload: {
                users: data,
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