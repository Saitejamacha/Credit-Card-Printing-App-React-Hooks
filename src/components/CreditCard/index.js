import {useState} from 'react'

import {
  AppContainer,
  CardCon,
  InputCon,
  MainHeading,
  Heading,
  CardInnerCon,
  InputInnerCon,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNum] = useState('')
  const [cardHolderName, setCardHolderName] = useState('CARDHOLDER NAME')

  const onChangeCardNumber = event => {
    setCardNum(event.target.value)
  }

  const onChangeCardHolderName = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <AppContainer>
      <CardCon>
        <MainHeading>Credit Card</MainHeading>
        <CardInnerCon>
          <Heading>{cardNumber}</Heading>
          <Heading>{cardHolderName}</Heading>
        </CardInnerCon>
      </CardCon>
      <InputCon>
        <InputInnerCon>
          <MainHeading InputHead>Payment Method</MainHeading>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeCardNumber}
            value={cardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeCardHolderName}
            // value={cardHolderName}
          />
        </InputInnerCon>
      </InputCon>
    </AppContainer>
  )
}

export default CreditCard
