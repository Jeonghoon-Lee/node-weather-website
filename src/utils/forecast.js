const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const key = '12dffd5b2123d425dbc6796b197c32c5'
  const url = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}?units=si&lang=en`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, `${body.daily.data[0].summary} 
          It is currently ${body.currently.temperature} degrees out. 
          High today is a ${body.currently.temperatureHigh} with a low of ${body.currently.temperatureLow}. 
          There is a ${body.currently.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast