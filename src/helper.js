export default class DistrictRepository {
  constructor(data) {
    this.stats = this.createDataObj(data)
  }

  createDataObj(data) {
    return data.reduce((dataObj, district) => {
      if (!dataObj[district.Location]) {
        dataObj[district.Location] = { 
          location: district.Location.toUpperCase(), 
          stats: {} 
        }
      }

      dataObj[district.Location].stats[district.TimeFrame] = 
        parseFloat(Number(district.Data).toFixed(3))

      if (isNaN(dataObj[district.Location].stats[district.TimeFrame])) {
        dataObj[district.Location].stats[district.TimeFrame] = 0
      }

      return dataObj
    }, {})
  }

  findByName(name) {
    if (!name) { return undefined }

    const districtKeys = Object.keys(this.stats)
    const searchedDistrict = districtKeys.find(district => {
      return district.toUpperCase() === name.toUpperCase()
    })
    
    if (searchedDistrict) {
      return this.stats[searchedDistrict]
    } else {
      return undefined
    }
  }

  findAllMatches(search) {
    const districtKeys = Object.keys(this.stats)
    return districtKeys.reduce((results, district) => {
      if (!search || this.stats[district].location.toLowerCase().
        includes(search.toLowerCase())) {
        results.push(this.stats[district])
      }
      return results
    }, [])
  }
}
