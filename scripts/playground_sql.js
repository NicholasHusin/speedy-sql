---
---

/**
 * Utilize Jekyll to dynamically adjust path.
 **/
config = {
  locateFile: filename => `{{ site.baseurl }}/lib/${filename}`
}

let db; 

/**
 * Runs a given query and returns an output.
 * Output is given as an HTML table element to be rendered.
 * Returns a string of error when error is encountered.
 *
 * Each execution of the function uses the same database instance
 * to make experimenting in the playground easier.
 **/
async function runSql(query) {
  let table = '';

  try {
    for (const stmt of db.iterateStatements(query)) {
      table += generateTable(stmt);
    }
    return table;
  } catch(err) {
    return err
  }
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

window.addEventListener('load', async function() {
  let submitButton = document.getElementById('submit-button');
  db = await initSqlJs(config).then(function(SQL) {
    return new SQL.Database();
  });

  submitButton.addEventListener('click', async function() {
    let actualOutput = await runSql(codeMirror.getValue());
    document.getElementById('actual-output').innerHTML = actualOutput;
  });
});

