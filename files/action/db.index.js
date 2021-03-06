const Waterline = require('waterline')

const adapters = require('./config/adapters')
const connections = require('./config/connections')
const modelConfig = require('./config/model')
const modelObject = require('require-all')(require('path').resolve(__dirname) + '/src/models')

const orm = new Waterline()
const models = Object.keys(modelObject)

// load each model collection
models.forEach(model => orm.loadCollection(modelObject[model](Waterline, modelConfig)))
orm.initialize({adapters, connections}, (err, ormObject) => {
  if (err) throw new Error(err)
  const models = Object.keys(ormObject.collections)
  models.forEach(model => {
    model = model.charAt(0).toUpperCase() + model.slice(1)
    global[model] = orm.collections[model]
  })
  console.log(`\tModels loaded successfully !!`)
})
