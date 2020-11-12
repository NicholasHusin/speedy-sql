var codeMirror;

window.addEventListener('load', function() {
  setupCodeMirror();
  setupLocalStorage();
});

function setupCodeMirror() {
  let spot = document.getElementById("codemirror-spot");

  codeMirror = CodeMirror(spot, {
    value: restoreLocalCode() || document.getElementById("starting-code").value,
    lineNumbers: true,
  });

  codeMirror.on('change', async function() {
    saveLocalCode();
  });
}

function setupLocalStorage() {
  let resetButton = document.getElementById("reset-button");
  resetButton.addEventListener('click', resetLocalCode);
}


/**
 * Saves current code with current location as a key.
 **/
function saveLocalCode() {
  let key = `${document.title}/status`;
  let value = codeMirror.getValue();
  window.localStorage.setItem(key, value);
}

/**
 * Retrieves saved code with current location as a key.
 **/
function restoreLocalCode() {
  let key = `${document.title}/status`;
  return window.localStorage.getItem(key);
}

/**
 * Reset initial code of codemirror.
 * Session storage does not need to be handled here as codemirror
 * value change will trigger the local storage update.
 **/
function resetLocalCode() {
  let initialCode = document.getElementById("starting-code").value;
  codeMirror.setValue(initialCode);
}
