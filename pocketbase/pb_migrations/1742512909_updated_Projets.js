/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // update collection data
  unmarshal({
    "name": "Projects"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // update collection data
  unmarshal({
    "name": "Projets"
  }, collection)

  return app.save(collection)
})
