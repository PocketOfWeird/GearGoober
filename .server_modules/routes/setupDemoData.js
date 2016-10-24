let seeder = require('mongoose-seed');


const modelPaths = [
  './.server_modules/models/tennant.js',
  './.server_modules/models/user.js',
  './.server_modules/models/category.js',
  './.server_modules/models/equipment.js',
]

const modelNames = ['Tennant', 'User', 'Category', 'Equipment']

const setupDemoData = (databaseUrl, runningAs) => (req, res) => {

  if (runningAs !== 'demo') return res.json({ success: false, message: "Not running in Demo mode" })

  // load demo data
  const demoData = require('../demo_data')

  // Run the database seeder
  seeder.connect(databaseUrl, () => {

    seeder.loadModels(modelPaths)

    seeder.clearModels(modelNames, () => {
      seeder.populateModels(demoData, () => {
        return res.json({ success: true, message: "Demo Data has been populated in the db" })
      })
    })
  })
}

module.exports = setupDemoData
