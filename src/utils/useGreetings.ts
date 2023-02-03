export const useGreetings = () => {
  const greet = () => {
    const currentTime = new Date().getHours()
    return currentTime > 12 ? (currentTime > 18 ? 'boa noite' : 'boa tarde') : 'bom dia'
  }

  return { greet }
}
