(function Main() {

  'use strict';

  // vars
  var _inlineModalButton = null;
  var _modalButton = null;

  // auto initialization
  init();

  // methods definitions
  function init() {
    // dom elements
    _inlineModalButton = document.getElementById('showModalInlineButton');
    _modalButton = document.getElementById('showModalButton');

    // event/signals handlers
    _inlineModalButton.addEventListener('click', onInlineButtonClicked);
    _modalButton.addEventListener('click', onButtonClicked);
    ModalModel.dismissalRequested.add(onDismissalRequested);
    VeilModel.dismissalRequested.add(onDismissalRequested);
  }

  function displayModal() {
    // add class to prevent scrolling
    document.body.classList.add('has-veil');

    VeilModel.requestDisplay();
    ModalModel.requestDisplay();
  }

  function onButtonClicked() {
    ModalModel.triggerElement = _modalButton;
    displayModal();
  }

  function onDismissalRequested() {
    // remove class to allow scrolling
    document.body.classList.remove('has-veil');

    ModalModel.requestDismissal();
    VeilModel.requestDismissal();

    // return focus
    ModalModel.triggerElement.focus();
  }

  function onInlineButtonClicked() {
    ModalModel.triggerElement = _inlineModalButton;
    displayModal();
  }

})();
