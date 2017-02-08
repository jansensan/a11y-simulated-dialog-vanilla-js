var ModalModel = ModalModel || (function () {

  'use strict';

  var _model = {
    // properties
    isVisible: false,
    triggerElement: null,

    // signals
    // (should be used as read-only)
    dismissalRequested: new signals.Signal(),
    displayRequested: new signals.Signal(),

    // methods
    requestDismissal: requestDismissal,
    requestDisplay: requestDisplay,
  };
  return _model;

  function requestDismissal() {
    if (!_model.isVisible) {
      return;
    }

    _model.isVisible = false;
    _model.dismissalRequested.dispatch();
  }

  function requestDisplay() {
    if (_model.isVisible) {
      return;
    }

    _model.isVisible = true;
    _model.displayRequested.dispatch();
  }

})();
