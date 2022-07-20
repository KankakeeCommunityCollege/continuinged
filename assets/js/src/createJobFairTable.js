import createTableHtml from './createTableHtml.js';

const API_PARAMS = {
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};

const SHEET_PARAMS = {
  spreadsheetId: '1Twj5nM1NazaAB5uu-NDNlX_Wv4OKIaDL05G1G3fTQOU',
  range: 'ATTENDING EMPLOYERS!A:A'
}

function fetchEmployers() {
  gapi.client.init(API_PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(SHEET_PARAMS);
  }).then((response) => {
    createTableHtml(response);
  }, function(err) { // Cannot be an arrow function
    console.error(`Error fetching Job Fair Employers: \n${err.result.error.message}`, err.result.error)
  })
}

function createJobFairTable() {
  console.log(`createJobFairTable`);
  gapi.load('client', fetchEmployers);
}

export default createJobFairTable;