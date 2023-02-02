import React from 'react'
import PIX from 'react-qrcode-pix'

import { Wrapper } from './QRCode.style'

interface PixProps {
  pixkey: string
  merchant: string
  city: string
  amount?: number
  onLoad?: (payload: string) => void
  showQRCode?: boolean
  image?: string
}

const QRCodeComponent = ({
  pixkey,
  merchant,
  city,
  amount,
  onLoad,
  showQRCode = true,
  image,
}: PixProps) => (
  <Wrapper showQRCode={showQRCode}>
    <PIX
      pixkey={pixkey}
      merchant={merchant}
      city={city}
      amount={amount}
      onLoad={onLoad}
      image={image}
    />
  </Wrapper>
)

export default QRCodeComponent
