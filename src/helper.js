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
    const searchedDistrict = districtKeys.find(district => (
      district.toUpperCase() === name.toUpperCase()
    ))
    
    if (searchedDistrict) {
      return this.stats[searchedDistrict]
    } else {
      return undefined
    }
  }

  findAllMatches(search) {
    const districtKeys = Object.keys(this.stats)
    return districtKeys.reduce((results, district) => {
      if (!search || 
        this.stats[district].location.toLowerCase()
          .includes(search.toLowerCase())) {
        results = [...results,this.stats[district]]
      }
      return results
    }, [])
  }

  findAverage(district) {
    const districtToAverage = this.findByName(district)
    const yearValues = Object.values(districtToAverage.stats)
    const average = yearValues.reduce((average, year) => {
      average += year
      return average
    }, 0)
    return parseFloat(Number(average / yearValues.length).toFixed(3))
  }

  compareDistrictAverages(district1, district2) {
    const avg1 = this.findAverage(district1)
    const avg2 = this.findAverage(district2)
    const result = parseFloat(Number(avg1 / avg2).toFixed(3))
    return { 
      [district1.toUpperCase()]: avg1, 
      [district2.toUpperCase()]: avg2, 
      compared: result 
    }
  }
}
