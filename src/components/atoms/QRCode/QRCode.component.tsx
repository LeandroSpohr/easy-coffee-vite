import React from 'react'
import QRCode, {QRCodeProps} from 'react-qr-code'

import {Wrapper} from './QRCode.style'

interface QRCodeInterface extends QRCodeProps {
  value: string
  size?: number
}

const QRCodeComponent = ({
  value,
  size
}: QRCodeInterface) => (
  <Wrapper>
    <QRCode value={value} size={size} />
  </Wrapper>
)

export default QRCodeComponent