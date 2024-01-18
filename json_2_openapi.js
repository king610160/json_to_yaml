// only need to change file name
const file = 'Quiz_app_collection'

const fs = require("fs")
const path = require('path')
const collection = require(`./${file}.json`) // any Postman collection JSON file
const { transpile } = require("postman2openapi")

// make the file
const directory = path.join(__dirname, "output_file", `${file}_output`)
fs.mkdirSync(directory, { recursive: true })

// Returns a JavaScript object representation of the OpenAPI definition.
const openapi = transpile(collection)

// transfer json to openapi
const jsonString = JSON.stringify(openapi, null, 2)

// write json file
const jsonFilePath = path.join(directory, `${file}_openapi.json`)
fs.writeFileSync(jsonFilePath, jsonString, 'utf8')
console.log(`JSON 檔案已成功寫入：${jsonFilePath}`)