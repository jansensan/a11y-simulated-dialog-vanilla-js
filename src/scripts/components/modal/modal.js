(function Modal() {

  'use strict';

  // vars
  var _element = null;
  var _firstElement = null;
  var _lastElement = null;
  var _activeElement = null;

  // auto initialization
  init();

  // methods definitions
  function init() {
    // dom elements
    _element = document.getElementById('modal');
    _firstElement = document.getElementById('modalCancelButton');
    _lastElement = document.getElementById('modalCloseButton');
    _activeElement = null;

    // event/signals handlers
    _lastElement.addEventListener('click', onCloseButtonClicked);
    document.addEventListener('keydown', onKeyPressed);
    ModalModel.dismissalRequested.add(onDismissalRequested);
    ModalModel.displayRequested.add(onDisplayRequested);
  }

  function onCloseButtonClicked() {
    ModalModel.requestDismissal();
  }

  function onDismissalRequested() {
    // set aria-hidden for accessibility
    _element.setAttribute('aria-hidden', true);

    // add class to hide modal
    _element.classList.add('hidden');
  }

  function onDisplayRequested() {
    // set aria-hidden for accessibility
    _element.setAttribute('aria-hidden', false);

    // remove class that hides modal
    _element.classList.remove('hidden');

    // set focus to modal element
    _element.focus();
    updateActiveElement();
  }

  function onKeyPressed(event) {
    // exit if modal not visible
    if (!ModalModel.isVisible) {
      return;
    }

    // exit if not tab
    if (event.keyCode !== 9) {
      return;
    }

    if (!event.shiftKey) {
      // tabbing forwards
      if (_activeElement === _lastElement) {
        event.preventDefault();
        event.stopPropagation();
        _element.focus();
      }

    } else {
      // tabbing backwards
      if (_activeElement === _firstElement) {
        event.preventDefault();
        event.stopPropagation();
        _element.focus();

      } else if (_activeElement === _element) {
        event.preventDefault();
        event.stopPropagation();
        _lastElement.focus();
      }
    }

    updateActiveElement();
  }

  function updateActiveElement() {
    // hack:
    // document.activeElement is not set as soon as focus is set,
    // a minimal delay is required, hence the use of setTimeout.
    setTimeout(function () {
      _activeElement = document.activeElement;
    });
  }

})();
