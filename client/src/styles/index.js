import { css, keyframes } from 'styled-components'

const style = {
  primaryColor: 'black',
  secondaryColor: 'white',
  borderColor: '#5d5d5d60',
  backgroundColor: 'aliceblue',
  smallFontSize: '0.8em',
  normalFontSize: '1em',
  largeFontSize: '1.5em',
  extraLargeFontSize: '2em',
  massiveLargeFontSize: '6em',
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const title = css`
  font-size: ${style.extraLargeFontSize};
  color: ${style.primaryColor};
  text-shadow: 1px 1px ${style.secondaryColor};
  padding: 10px;
  max-width:600px;
  margin: 10px auto;
`
export const card = css`
  display: flex;
  flex-direction: row;
  backgroundColor: ${style.secondaryColor};
  border-radius: 5px;
  padding: 10px;
  margin: 10px auto;
  max-width: 600px;
  box-shadow: 0px 0px 1px 1px ${style.borderColor};
  background: ${style.secondaryColor};
  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  }
`
export const cardConent = css`
  width:50%;
  @media (max-width: 600px) {
    width: 100%;
  }
`
export const cardTitle = css`
  font-size: ${style.largeFontSize};
  padding: 20px 0 10px 0;
`
export const cardItem = css`
  font-size: ${style.normalFontSize};
  padding: 4px 0;
  border-bottom: 1px solid ${style.borderColor};
`
export const map = css`
  border-radius: 100px;
  max-width: 200px;
  box-shadow: 0px 0px 3px 0px ${style.borderColor};
`
export const userAddressMap = css`
  margin: 15px;
  padding: 5px;
`
export const userAddress = css`
  font-size: ${style.normalFontSize};
  margin: 15px;
  padding: 5px;
`
export const addressItem = css`
  font-size: ${style.normalFontSize};
`
export const userDetails = css`
  font-size: ${style.normalFontSize};
  margin: 15px 30px;
  padding: 5px;
  justify-content: space-evenly;
`
export const search = css`
  margin: 10px auto;
  width: 100%;
  max-width: 600px;
`
export const searchBar = css`
  padding: 10px;
  width: 100%;
  position: relative;
  left: -9px;
  font-size: ${style.normalFontSize};
  @media (max-width: 600px) {
    width: 90%;
    left: 0px;
  }
`
export const userCount = css`
  font-size: ${style.smallFontSize};
  padding: 5px 0;
`
export const loaderRotate = css`
  display: inline-block;
  animation: ${rotate} 8s linear infinite;
  padding: 20px;
  font-size: ${style.massiveLargeFontSize};
`;
export const loadingPage = css`
    text-align: center;
    transition: opacity 2s;
    position: absolute;
    width: 100%;
    z-index: 9;
    background: burlywood;
    height: 100%;
    top: 0px;
`;
export const appPage = css`
    transition: opacity 2s;
`;
export default style