const PARENT = document.getElementById('attendingEmployers');

function createTableRows(data) {
  let html = '';
  data.forEach(row => {
    html += `<tr>
      <td>${row[0]}</td>
    </tr>`;
  });
  return html;
}

function createTableHtml(response, resolve) {
  const VALUES = response.result.values; // values of a spreadsheet are always held under `response.result.values` if the response object
  const THEAD_DATA = VALUES.slice(1, 2); // First row of spreadsheet values is the instructions row, second is our header row
  const TBODY_DATA = VALUES.slice(2); // Everything else is data to process as the table body
  // Since our data consists of a single column we can skip iterating over rows and access the first item (company name) directly
  const html = `<table id="employerTable" class="table table-striped table-hover">
  <thead>
    <tr>
      <th>
        ${THEAD_DATA[0]}
      </th>
    </tr>
  </thead>
  <tbody>
    ${createTableRows(TBODY_DATA.sort())}
  </tbody>
</table>`;
  
  PARENT.innerHTML = '';
  PARENT.innerHTML = html;
  return resolve(PARENT); // PARENT is passed to resolve() so that it can be accessed in the .then() block
}

export default createTableHtml;