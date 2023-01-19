export const useIdle = () => {
  let time = 3000
  const resetTimer = () => {
    clearTimeout(time)
    time = setTimeout(() => console.log('a'), 1000)
  }

  window.onload = resetTimer
  document.ontouchstart = resetTimer
}

export default useIdle
