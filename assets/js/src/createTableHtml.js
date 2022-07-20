const PARENT = document.getElementById('attendingEmployers');
const DATATABLES_PARAMS = {
  responsive: true, // Activate responsive powers GO!
  paging: false, // Don't paginate. Should all be on one page
  'order': []  // Disable initial column ordering
}

function createTableRows(data) {
  let html = '';
  data.forEach(row => {
    html += `<tr>
      <td>${row[0]}</td>
    </tr>`;
  });
  return html;
}

function createTableHtml(response) {
  const values = response.result.values;
  const theadData = values.slice(1,2)
  const tbodyData = values.slice(2);

  const html = `<table id="employerTable" class="table table-striped table-hover">
  <thead>
    <tr>
      <th>
        ${theadData[0]}
      </th>
    </tr>
  </thead>
  <tbody>
    ${createTableRows(tbodyData.sort())}
  </tbody>
</table>`;
  
  console.log(html);
  PARENT.innerHTML = '';
  PARENT.innerHTML = html;
  const table = PARENT.querySelector('#employerTable');

  $(table).DataTable(DATATABLES_PARAMS);
}

export default createTableHtml;