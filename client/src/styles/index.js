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
`
export default style