import React from 'react'
import PIX from 'react-qrcode-pix'

import {Wrapper} from './QRCode.style'

interface PixProps {
  pixkey: string
  merchant: string
  city: string
  amount?: number
}

const QRCodeComponent = ({
  pixkey,
  merchant,
  city,
  amount,
}: PixProps) => (
  <Wrapper>
    <PIX
      pixkey={pixkey}
      merchant={merchant}
      city={city}
      amount={amount}
    />
  </Wrapper>
)

export default QRCodeComponent