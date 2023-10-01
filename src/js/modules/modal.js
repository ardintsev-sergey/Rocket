document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal')
  const openModalHeaderBtn = document.querySelector('.header__contacts-btn')
  const openModalCheckBtn = document.querySelector('.check__registry-btn')
  const closeModalkBtn = document.querySelector('.modal__close-btn')

  openModalHeaderBtn.addEventListener('click', () => {
    modal.classList.add('modal--opened')
  })

  openModalCheckBtn.addEventListener('click', () => {
    modal.classList.add('modal--opened')
  })


  closeModalkBtn.addEventListener('click', ()=>{
    modal.classList.remove('modal--opened')
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('modal--opened')
    }
  });
})
