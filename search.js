/* search.js */
const Clarifai = require('clarifai')

let app = new Clarifai.App({ apiKey: process.env.CLARIFAI_API_KEY })

// Searching by visual similarity
app.inputs.search([
    {
      input: {
        url: 'https://farm4.staticflickr.com/3370/3344620504_b547190891_o_d.jpg'
      }
    },
    {
      input: {
        metadata: {
          sale: "TRUE"
        }
      }
    }])
.then((response) => {
  console.log("Search Results\n===============")

  response.hits.map(
    (hit) => {
      console.log(`Price: $${hit.input.data.metadata.price}USD; URL: ${hit.input.data.image.url}`)
  })
})
