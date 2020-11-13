---
---

config = {
  locateFile: filename => `{{ site.baseurl }}/lib/${filename}`
}

let db; 

async function runSql(query) {
  let table = "";

  try {
    for (const stmt of db.iterateStatements(query)) {
      table += generateTable(stmt);
    }
    return table;
  } catch(err) {
    return err
  }
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
  db = await initSqlJs(config).then(function(SQL) {
    return new SQL.Database();
  });

  submitButton.addEventListener('click', async function() {
    let actualOutput = await runSql(codeMirror.getValue());
    document.getElementById('actual-output').innerHTML = actualOutput;
  });
});

