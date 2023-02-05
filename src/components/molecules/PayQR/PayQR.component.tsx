import React, { useState } from 'react'
import QRCode from '../../atoms/QRCode'

import coffeeCup from '../../../assets/images/favicon.svg'
import { toast } from 'react-toastify'
import { useFormats } from '../../../utils/useFormats'
import Typography from '../../atoms/Typography'
import { PayQR, QRWrapper } from './PayQR.styles'

interface PayQRComponentInterface {
  amount: number
}

const PayQRComponent = ({ amount }: PayQRComponentInterface) => {
  const { formatCurrency } = useFormats()
  const [viewPIX, setViewPIX] = useState<string>('')

  return (
    <PayQR>
      <Typography as="h2" centralized>Valor atual no QR<br />{formatCurrency(amount)}</Typography>
      <Typography as="h4" centralized>Clique para copiar o pix</Typography>
      <QRWrapper
        onClick={() => { navigator.clipboard.writeText(viewPIX), toast.success('PIX copiado com sucesso!') }}
      >
        <QRCode
          pixkey="26442024000194"
          merchant="Facil Promotora de Vendas e Servicos Ltda"
          city="PASSO FUNDO"
          amount={amount || 0.001}
          image={coffeeCup}
          onLoad={(payload) => setViewPIX(payload)}
        />
      </QRWrapper>
    </PayQR >
  )
}

export default PayQRComponent