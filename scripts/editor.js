var codeMirror;

window.addEventListener('load', function() {
  setupCodeMirror();
  setupResetButton();
});

/**
 * Instantiates code mirror instance.
 **/
function setupCodeMirror() {
  let spot = document.getElementById('codemirror-spot');

  codeMirror = CodeMirror(spot, {
    mode: 'text/x-sql',
    value: restoreLocalCode() || document.getElementById('starting-code').value,
    lineNumbers: true,
  });

  codeMirror.on('change', async function() {
    saveLocalCode();
  });
}

/**
 * Setup button to reset saved code on editor.
 **/
function setupResetButton() {
  let resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetLocalCode);
}


/**
 * Saves current code with current location as a key.
 **/
function saveLocalCode() {
  let key = `${document.title}/code`;
  let value = codeMirror.getValue();
  window.localStorage.setItem(key, value);
}

/**
 * Retrieves saved code with current location as a key.
 **/
function restoreLocalCode() {
  let key = `${document.title}/code`;
  return window.localStorage.getItem(key);
}

/**
 * Reset initial code of codemirror.
 * Local storage does not need to be handled here as codemirror
 * value change will trigger the local storage update.
 **/
function resetLocalCode() {
  let initialCode = document.getElementById('starting-code').value;
  codeMirror.setValue(initialCode);
}
