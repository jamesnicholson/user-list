import { css } from 'styled-components'

const style = {
  primaryColor: 'black',
  secondaryColor: 'white',
  borderColor: '#ccc',
  backgroundColor: 'aliceblue'
};

export const title = css`
  font-size: 2em;
  color: ${style.primaryColor};
  text-shadow: 1px 1px ${style.secondaryColor};
  padding: 10px;
  margin: 10px 5px;
`
export const card = css`
  backgroundColor: ${style.secondaryColor};
  border: 1px solid #6633996b;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 20px;
  max-width: 600px;
  box-shadow: 1px 1px 0px 2px;
  background: white;
`
export default style