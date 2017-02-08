(function Veil() {

  'use strict';

  // vars
  var _element = null;

  // auto initialization
  init();

  // methods definitions
  function init() {
    // dom elements
    _element = document.getElementById('veil');

    // event/signals handlers
    _element.addEventListener('click', onClicked);
    document.addEventListener('keydown', onKeyPressed);
    VeilModel.dismissalRequested.add(onDismissalRequested);
    VeilModel.displayRequested.add(onDisplayRequested);
  }

  function onClicked() {
    VeilModel.requestDismissal();
  }

  function onDismissalRequested() {
    _element.classList.add('hidden');
  }

  function onDisplayRequested() {
    _element.classList.remove('hidden');
  }

  function onKeyPressed(event) {
    // exit if veil not visible
    if (!VeilModel.isVisible) {
      return;
    }

    // exit if not esc
    if (event.keyCode !== 27) {
      return;
    }

    VeilModel.requestDismissal();
  }

})();
