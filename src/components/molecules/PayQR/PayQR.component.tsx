import React, { useState } from 'react'
import QRCode from '../../atoms/QRCode'

import coffeeCup from '../../../assets/images/favicon.svg'
import { toast } from 'react-toastify'
import { useFormats } from '../../../utils/useFormats'
import Typography from '../../atoms/Typography'
import { ButtonWrapper, PayQR, QRWrapper } from './PayQR.styles'
import { useUser } from '../../../context/User'
import Button from '../../atoms/Button'
import { useRemove } from '../../../utils/useRemove'
import { ButtonEnum } from '../../../models/Enums/Button'


const PayQRComponent = () => {
  const { formatCurrency } = useFormats()
  const [viewPIX, setViewPIX] = useState<string>('')
  const { state } = useUser()
  const { removePaymentValue } = useRemove()

  const clearPaymentValue = () => {
    removePaymentValue()
    toast.success('Suas compras foram pagas! Você não está com um peso na consciência, certo?')
  }

  return (
    <PayQR>
      <Typography as="h2" centralized>QR com {formatCurrency(state.paymentValue)}</Typography>
      <QRWrapper
        onClick={() => { navigator.clipboard.writeText(viewPIX), toast.success('PIX copiado com sucesso!') }}
      >
        <QRCode
          pixkey="26442024000194"
          merchant="Facil Promotora de Vendas e Servicos Ltda"
          city="PASSO FUNDO"
          amount={state.paymentValue || 0.001}
          image={coffeeCup}
          onLoad={(payload) => setViewPIX(payload)}
        />
      </QRWrapper>
      <Typography as="h4" centralized>Clique para copiar o pix</Typography>
      <br />
      <ButtonWrapper onClick={clearPaymentValue}>
        <Button buttonType={ButtonEnum.OutlinedMainButton}>Clique ao pagar</Button>
      </ButtonWrapper>
    </PayQR >
  )
}

export default PayQRComponent