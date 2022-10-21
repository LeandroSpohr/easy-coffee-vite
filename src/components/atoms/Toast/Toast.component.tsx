import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


// Esse comando será executado quando clicado no botão "Teste" na Home, não consegui fazer uma 
// ligação com o back para dar o erro quando falhar ao encontrar o CPF. 

const toastfy = () => {
  toast('Algo deu errado, verifique seus dados e tente novamente.')
}

// Vai aparecer quando entrar na tela produto, tentei muito, mas ela também ocorrendo quando se
// Está na tela de login

toast.success('Bem vindo! Aproveite seu cafezinho!')

export default toastfy