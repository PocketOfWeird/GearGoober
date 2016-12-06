import excel2json from 'excel-to-json'


export const defaultBarcodeState = {
  "checkedIn": true, "damaged": false, "missing": false
}

export const uploadEquipment = e => {
  const input = e.target.files[0]
  const output = '/'
  console.log(input);
  /*
  excel2json({input, output}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  })
  */
}
