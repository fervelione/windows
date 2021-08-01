const windows = () => {
   const imgPopup = document.createElement('div'),
      workSection = document.querySelector('.works'),
      bigImage = document.createElement('img');

   imgPopup.classList.add('popup')
   workSection.appendChild(imgPopup)

   imgPopup.style.display = 'none'
   imgPopup.style.justifyContent = 'center'
   imgPopup.style.alignItems = 'center'

   bigImage.addEventListener('click', (e) => {
      e.preventDefault()

      let target = e.target

      if (target && target.clasList.contains('preview')) {
         imgPopup.style.display = 'flex'
         imgPopup.style.overflow = 'hidden'
         const path = target.parentNode.getAttribute('href')
         bigImage.setAttribute('src', path)
      }
      if (target && target.matches('div.popup')) {
         imgPopup.style.display = 'none';
      }
   })
}

export default windows