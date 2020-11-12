// The `initSqlJs` function is globally provided by all of the main dist files if loaded in the browser.
// We must specify this locateFile function if we are loading a wasm file from anywhere other than the current html page's folder.


async function runSql(query) {
  config = {
    locateFile: filename => `/lib/${filename}`
  }

  return await initSqlJs(config).then(function(SQL){
    //Create the database
    var db = new SQL.Database();

    var initialQuery = document.getElementById('initial-query').value;

    db.run(initialQuery);

    try {
      var stmt = db.prepare(query);
      stmt.getAsObject({$start:1, $end:1}); // {col1:1, col2:111}

      // Bind new values
      stmt.bind({$start:1, $end:2});

      return generateTable(stmt);
    } catch(err) {
      return err;
    }
  });
}

function generateTable(stmt) {
  let table = `<table class="table"><tbody>`;

  while (stmt.step()) {
    let row = stmt.getAsObject();
    table += `<tr>`;

    for (let value of Object.values(row)) {
      table += `<td>`;
      table += value;
      table += `</td>`;
    }

    table += `</tr>`;
  }

  table += `</tbody></table>`;

  return table;
}


window.addEventListener('load', async function() {
  let submitButton = document.getElementById('submit-button');

  let expectedOutput = await runSql(document.getElementById('solution').value);
  document.getElementById('expected-output').innerHTML = expectedOutput;

  submitButton.addEventListener('click', async function() {
    let actualOutput = await runSql(codeMirror.getValue());
    document.getElementById('actual-output').innerHTML = actualOutput;

    if (actualOutput === expectedOutput) {
      document.getElementById('message').innerHTML = "Your solution is correct!";
    } else {
      document.getElementById('message').innerHTML = "Your solution is wrong!";
    }
  });
});

