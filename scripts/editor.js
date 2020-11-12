var codeMirror;

window.addEventListener('load', function() {
  let spot = document.getElementById("codemirror-spot");

  codeMirror = CodeMirror(spot, {
    value: "",
    lineNumbers: true,
  });
});

