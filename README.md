Custom Metadata
===============

Howdy there! If you are reading this, you probably found our blog post on
Clarifai showing off how to make use of Custom Metadata! This repo shows
off how to do that in conjunction with our visual similarity.

### Setup
The first step you are going to want to be sure to take care of is to [sign up
for a free account with Clarifai](https://clarifai.com/developer/account/signup).
From there you need to be sure to have [NodeJS](https://nodejs.org/en/downloads)
installed for the appropriate operating system.

You can clone down this repository! Then when you go inside your fresh repo, 
run a small `npm install` to get both [`csv-parse`](https://github.com/adaltas/node-csv-parse) 
and [`clarifai`](https://github.com/clarifai/clarifai-javascript) installed!

One important thing, unlike the blog post, I chose to use the environment variables
approach to including your keys. To setup a `CLARIFAI_API_KEY` environment variables,
head over to terminal and write:

```bash
$ export CLARIFAI_API_KEY="YOUR_API_KEY"
```

### Usage

If you want to upload the [csv](https://raw.githubusercontent.com/maxcell/custom-metadata/master/shoe-data.csv),
then you should go with the `upload.js` file and run it with `node upload.js`.

Then you have the freedom to play around with the search in `search.js`. Run
it with `node search.js`.

### Final Notes

This example just shows off how to use custom metadata 
and visual similarity for our search. Though you can use any combination of our search functionality!
[Read more about the API in our guide](https://clarifai.com/developer/guide/).

