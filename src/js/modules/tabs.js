const tabs = (parentSelector, tabSelector, contentSelector, active, display = 'block') => {
   const parent = document.querySelector(parentSelector),
      tabs = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

   function hideTabs() {
      tabs.forEach(item => {
         item.classList.remove(active)
      })

      content.forEach(item => {
         item.style.display = 'none'
      })
   }

   function showTabs(i = 0) {
      tabs[i].classList.add(active)
      content[i].style.display = display
   }

   hideTabs()
   showTabs()

   parent.addEventListener('click', (e) => {
      const target = e.target

      if (target &&
         (target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
         tabs.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
               hideTabs()
               showTabs(i)
            }
         })
      }
   })
}

export default tabs