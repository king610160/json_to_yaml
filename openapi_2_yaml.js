// change file name
const file = ''
// change read openapi's route
const collection = require(`./output_file//${file}_openapi.json`)

const fs = require("fs")
const path = require('path')
const yaml = require("js-yaml")

// target file path
const directory = path.join(__dirname, "output_file", `${file}_output`)

// transfer openapi to yaml
const yamlString = yaml.dump(collection)

// write yaml file
const yamlFilePath = path.join(directory, `${file}.yaml`)
fs.writeFileSync(yamlFilePath, yamlString, "utf8")
console.log(`YAML 檔案已成功寫入：${yamlFilePath}`)