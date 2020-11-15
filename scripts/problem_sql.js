---
---
const CORRECT_ICON = `<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-check" fill="green" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                        </svg>`;
const WRONG_ICON = `<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x" fill="red" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                      </svg>`;

const CORRECT_MESSAGE = `Your answer is correct!`;
const WRONG_MESSAGE = ` Your output is different from what is expected.`;


/**
 * Runs a given query and returns an output.
 * Output is given as an HTML table element to be rendered.
 * Returns a string of error when error is encountered.
 *
 * Each execution of the function instantiates a new database instance
 * such that unwanted state changes does not persist.
 **/
async function runSql(query) {
  config = {
    locateFile: filename => `{{ site.baseurl }}/lib/${filename}`
  }

  return await initSqlJs(config).then(function(SQL){
    let table = "";
    var db = new SQL.Database();

    var initialQuery = document.getElementById('initial-query').value;
    db.run(initialQuery);

    try {
      for (const stmt of db.iterateStatements(query)) {
        table += generateTable(stmt);
      }

      db.close();
      return table;
    } catch(err) {
      db.close();
      return err;
    }
  });
}


/**
 * Generates an HTML table element based on the query result.
 **/
function generateTable(stmt) {
  let table = '';
  let addedHeader = false;

  while (stmt.step()) {
    let row = stmt.getAsObject();

    if (!addedHeader) {
      table += `<tr>`;

      for (let field of Object.keys(row)) {
        table += `<td>`;
        table += `<b>${field}</b>`;
        table += `</td>`;
      }

      table += `</tr>`;
      addedHeader = true;
    }

    table += `<tr>`;

    for (let value of Object.values(row)) {
      table += `<td>`;
      table += value;
      table += `</td>`;
    }

    table += `</tr>`;
  }

  if (table === '') {
    return '';
  }

  return `<table class="table"><tbody>` + table + `</tbody></table><br>`;
}


/**
 * Updates solve status to be displayed on home page.
 **/
function updateSolveStatus(newStatus) {
  let key = `${document.title}/status`;
  window.localStorage.setItem(key, newStatus);
}


window.addEventListener('load', async function() {
  let submitButton = document.getElementById('submit-button');

  let expectedOutput = await runSql(document.getElementById('solution').value);
  document.getElementById('expected-output').innerHTML = expectedOutput;

  submitButton.addEventListener('click', async function() {
    let actualOutput = await runSql(codeMirror.getValue());
    document.getElementById('actual-output').innerHTML = actualOutput;

    if (actualOutput === expectedOutput) {
      document.getElementById('message').innerHTML = CORRECT_ICON + CORRECT_MESSAGE;
      updateSolveStatus(CORRECT_ICON);
    } else {
      document.getElementById('message').innerHTML = WRONG_ICON + WRONG_MESSAGE;
    }
  });
});

