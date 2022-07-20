import createTableHtml from './createTableHtml.js';

const API_PARAMS = {
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};

const SHEET_PARAMS = {
  spreadsheetId: '1Twj5nM1NazaAB5uu-NDNlX_Wv4OKIaDL05G1G3fTQOU',
  range: 'ATTENDING EMPLOYERS!A:A' // A:A b/c we only need the first column which contains the company names
}

const DATATABLES_PARAMS = {
  responsive: true, // Activate responsive powers GO!
  paging: false, // Don't paginate. Should all be on one page
  'order': []  // Disable initial column ordering
}

function fetchEmployers() {
  gapi.client.init(API_PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(SHEET_PARAMS);
  }).then((response) => {
    let createTablePromise = new Promise(resolve => createTableHtml(response, resolve)) // Promise resolves after table HTML is built into page.

    createTablePromise.then(PARENT => { // PARENT was passed to resolve(PARENT) in createTableHtml
      const TABLE = PARENT.querySelector('#employerTable'); // TABLE is the first child of PARENT

      $(TABLE).DataTable(DATATABLES_PARAMS); // DataTables() function is from <https://datatables.net/>
    })
  }, function(err) { // Cannot be an arrow function
    console.error(`Error fetching Job Fair Employers: \n${err.result.error.message}`, err.result.error)
  })
}

function createJobFairTable() {
  gapi.load('client', fetchEmployers);
}

export default createJobFairTable;