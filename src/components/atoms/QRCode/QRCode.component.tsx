import React from 'react'
import PIX from 'react-qrcode-pix'

import {Wrapper} from './QRCode.style'

interface PixProps {
  pixkey: string
  merchant: string
  city: string
  amount?: number
  onLoad?: (payload: string) => void
  showQRCode?: boolean
}

const QRCodeComponent = ({
  pixkey,
  merchant,
  city,
  amount,
  onLoad,
  showQRCode = true,
}: PixProps) => (
  <Wrapper 
    showQRCode={showQRCode}
  >
    <PIX
      pixkey={pixkey}
      merchant={merchant}
      city={city}
      amount={amount}
      onLoad={onLoad}
    />
  </Wrapper>
)

export default QRCodeComponent