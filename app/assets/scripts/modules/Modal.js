class Modal {
  constructor() {
    this.openModalBtn = document.querySelectorAll('.open-modal');
    this.closeModalX = document.querySelector('.modal__close');
    this.modal = document.querySelector('.modal');
    this.events();
  }

  events() {
    this.openModalBtn.forEach(btn => {
      btn.addEventListener('click', this.openModal.bind(this))
    })

    this.closeModalX.addEventListener('click', this.closeModal.bind(this))
  }

  openModal() {
    this.modal.classList.add('modal--is-visible')
  }

  closeModal() {
    this.modal.classList.remove('modal--is-visible')
  }
}

export default Modal;
