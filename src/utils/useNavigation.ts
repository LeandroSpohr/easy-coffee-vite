import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  const goTo = (path: string) => navigate(path)

  const goToHome = () => navigate('/')
  const goToRegister = () => navigate('/cadastro')
  const goToProducts = () => navigate('/produtos')
  const goToCart = () => navigate('/carrinho')
  const goToMyAccount = () => navigate('/minha-conta')
  const goToPurchaseHistoric = () => navigate('/historico-de-compras')

  return {
    goBack,
    goTo,
    goToHome,
    goToRegister,
    goToProducts,
    goToCart,
    goToMyAccount,
    goToPurchaseHistoric,
  }
}
