export const useGreetings = () => {
  const greet = () => {
    const currentHour = new Date().getHours()
    switch (true) {
      case currentHour > 18:
        return "boa noite"
      case currentHour > 12:
        return "boa tarde"
      case currentHour < 12:
        return "bom dia"
      default:
        return "boas vindas"
    }
  }

  return { greet }
}
