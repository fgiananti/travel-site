class Modal {
  constructor() {
    this.openModalButton = document.querySelectorAll('.open-modal');
    this.modal = document.querySelector('.modal');
    this.closeModalButton = document.querySelector('.modal__close');
    this.events();
  }

  events() {
    // clicking the open modal openModalButton
    this.openModalButton.forEach(button => {
      button.addEventListener('click', this.openModal.bind(this));
    });
    // clicking the x close modal button
    this.closeModalButton.addEventListener('click', this.closeModal.bind(this));
    // pushes the escape key
    document.addEventListener('keyup', this.keyPressHandler.bind(this));
  }

  openModal() {
    this.modal.classList.add('modal--is-visible');
    return false;
  }

  closeModal() {
    this.modal.classList.remove('modal--is-visible');
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }
  }
}

export default Modal;
