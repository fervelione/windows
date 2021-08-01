const checkNumInputs = (inputSelector) => {
   const numInputs = document.querySelectorAll(inputSelector)

   numInputs.forEach(item => {
      item.addEventListener('input', () => {
         item.value = item.value.replace(/\D/, '')
      })
   })
}

export default checkNumInputs