/* upload.js */
const Clarifai = require('clarifai')
const parse = require('csv-parse')
const fs = require('fs')

const app = new Clarifai.App({ apiKey: process.env.CLARIFAI_API_KEY })

const uploadInputs = (inputs) => {
    app.inputs.create(inputs).then(
      // Success
      (response) => { console.log("Successful Upload!") },
      // Error
      (error) => { console.error(error) }
    )
}

const convertData = (data) => {
  return {
    url: data.imageSrc,
    metadata: data
  }
}

fs.readFile(__dirname+"/shoe-data.csv", 'utf8', (err, data) => {
  if(err) { return console.log(err) }
  parse(data, { columns: true }, (err, output) => { 
    if(err) { return err; }
    shoeData = output.map((shoe) => { return convertData(shoe) })

    uploadInputs(shoeData);
  });
})
