import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    flex-direction: row;
  }
`

export const CardCon = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #344e7a;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 50vw;
    height: 100vh;
  }
`
export const InputCon = styled(CardCon)`
  width: 50vw;
  height: 100vh;
  background-color: white;
`
export const MainHeading = styled.h1`
  font-size: 30px;
  color: ${props => (props.InputHead ? 'black' : 'white')};
`

export const Heading = styled.p`
  font-size: 20px;
  color: ${props => (props.InputHead ? 'black' : 'white')};
`

export const CardInnerCon = styled.div`
  width: 85vw;
  height: 35vh;
  border-radius: 15px;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  @media (min-width: 768px) {
    width: 35vw;
    height: 40vh;
  }
`

export const InputInnerCon = styled.div`
  width: 90vw;
  height: 40vh;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 768px) {
    width: 35vw;
    height: 45vh;
  }
`

export const Input = styled.input`
  width: 75vw;
  height: 40px;
  @media (min-width: 768px) {
    width: 25vw;
    height: 40px;
  }
`
