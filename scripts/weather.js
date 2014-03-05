/**
 * Created by crobinson on 3/3/14.
 *
 * This was pulled from the weather underground api
 *
 */

var weather = {
    "response": {
        "version":"0.1",
        "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
        "features": {
            "forecast10day": 1
        }
    },
    "forecast":{
        "txt_forecast": {
            "date":"8:00 AM MST",
            "forecastday": [
                {
                    "period":0,
                    "icon":"chancetstorms",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancetstorms.gif",
                    "title":"Thursday",
                    "fcttext":"Overcast with a chance of a thunderstorm and rain showers. High of 57F. Breezy. Winds from the SSW at 15 to 20 mph. Chance of rain 90% with rainfall amounts near 0.3 in. possible.",
                    "fcttext_metric":"Overcast with a chance of a thunderstorm and rain showers. High of 14C. Windy. Winds from the SSW at 20 to 30 km/h. Chance of rain 90% with rainfall amounts near 6.6 mm possible.",
                    "pop":"90"
                }
                ,
                {
                    "period":1,
                    "icon":"rain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/rain.gif",
                    "title":"Thursday Night",
                    "fcttext":"Overcast with rain showers, then a chance of rain after midnight. Low of 39F. Winds from the SSW at 5 to 10 mph. Chance of rain 70%.",
                    "fcttext_metric":"Overcast with rain showers, then a chance of rain after midnight. Low of 4C. Winds from the SSW at 10 to 15 km/h. Chance of rain 70%.",
                    "pop":"70"
                }
                ,
                {
                    "period":2,
                    "icon":"rain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/rain.gif",
                    "title":"Friday",
                    "fcttext":"Overcast with a chance of rain, then rain in the afternoon. High of 57F. Breezy. Winds from the South at 10 to 20 mph with gusts to 30 mph. Chance of rain 60%.",
                    "fcttext_metric":"Overcast with a chance of rain, then rain in the afternoon. High of 14C. Windy. Winds from the South at 20 to 35 km/h with gusts to 45 km/h. Chance of rain 60%.",
                    "pop":"60"
                }
                ,
                {
                    "period":3,
                    "icon":"rain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/rain.gif",
                    "title":"Friday Night",
                    "fcttext":"Overcast with rain. Low of 45F. Breezy. Winds from the South at 15 to 25 mph with gusts to 30 mph. Chance of rain 80% with rainfall amounts near 0.5 in. possible.",
                    "fcttext_metric":"Overcast with rain. Low of 7C. Windy. Winds from the South at 30 to 35 km/h with gusts to 45 km/h. Chance of rain 80% with rainfall amounts near 13.7 mm possible.",
                    "pop":"80"
                }
                ,
                {
                    "period":4,
                    "icon":"rain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/rain.gif",
                    "title":"Saturday",
                    "fcttext":"Overcast with rain. High of 54F. Breezy. Winds from the South at 15 to 20 mph. Chance of rain 70%.",
                    "fcttext_metric":"Overcast with rain. High of 12C. Windy. Winds from the South at 25 to 30 km/h. Chance of rain 70%.",
                    "pop":"70"
                }
                ,
                {
                    "period":5,
                    "icon":"chancerain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancerain.gif",
                    "title":"Saturday Night",
                    "fcttext":"Partly cloudy with a chance of rain. Low of 39F. Winds from the South at 5 to 10 mph. Chance of rain 40%.",
                    "fcttext_metric":"Partly cloudy with a chance of rain. Low of 4C. Winds from the South at 10 to 15 km/h. Chance of rain 40%.",
                    "pop":"40"
                }
                ,
                {
                    "period":6,
                    "icon":"chancerain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancerain.gif",
                    "title":"Sunday",
                    "fcttext":"Overcast with a chance of rain. High of 55F. Winds from the SSW at 5 to 10 mph. Chance of rain 40%.",
                    "fcttext_metric":"Overcast with a chance of rain. High of 13C. Winds from the SSW at 10 to 15 km/h. Chance of rain 40%.",
                    "pop":"40"
                }
                ,
                {
                    "period":7,
                    "icon":"mostlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
                    "title":"Sunday Night",
                    "fcttext":"Overcast. Low of 39F. Winds from the SSE at 5 to 10 mph.",
                    "fcttext_metric":"Overcast. Low of 4C. Winds from the SSE at 10 to 15 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":8,
                    "icon":"mostlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
                    "title":"Monday",
                    "fcttext":"Partly cloudy in the morning, then overcast. High of 57F. Winds from the South at 5 to 10 mph.",
                    "fcttext_metric":"Partly cloudy in the morning, then overcast. High of 14C. Winds from the South at 5 to 15 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":9,
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "title":"Monday Night",
                    "fcttext":"Partly cloudy. Low of 46F. Winds from the SE at 5 to 10 mph.",
                    "fcttext_metric":"Partly cloudy. Low of 8C. Winds from the SE at 10 to 15 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":10,
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "title":"Tuesday",
                    "fcttext":"Partly cloudy. High of 59F. Winds less than 5 mph.",
                    "fcttext_metric":"Partly cloudy. High of 15C. Winds less than 5 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":11,
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "title":"Tuesday Night",
                    "fcttext":"Partly cloudy. Low of 45F. Winds less than 5 mph.",
                    "fcttext_metric":"Partly cloudy. Low of 7C. Winds less than 5 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":12,
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "title":"Wednesday",
                    "fcttext":"Clear. High of 61F. Winds less than 5 mph.",
                    "fcttext_metric":"Clear. High of 16C. Winds less than 5 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":13,
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "title":"Wednesday Night",
                    "fcttext":"Partly cloudy. Low of 46F. Winds from the SE at 5 to 10 mph.",
                    "fcttext_metric":"Partly cloudy. Low of 8C. Winds from the SE at 10 to 15 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":14,
                    "icon":"mostlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
                    "title":"Thursday",
                    "fcttext":"Mostly cloudy. High of 64F. Winds from the South at 5 to 10 mph.",
                    "fcttext_metric":"Mostly cloudy. High of 18C. Winds from the South at 10 to 15 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":15,
                    "icon":"mostlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
                    "title":"Thursday Night",
                    "fcttext":"Mostly cloudy with a chance of a thunderstorm. Low of 50F. Winds less than 5 mph. Chance of rain 20%.",
                    "fcttext_metric":"Mostly cloudy with a chance of a thunderstorm. Low of 10C. Winds less than 5 km/h.",
                    "pop":"20"
                }
                ,
                {
                    "period":16,
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "title":"Friday",
                    "fcttext":"Partly cloudy. High of 66F. Winds from the West at 5 to 10 mph.",
                    "fcttext_metric":"Partly cloudy. High of 19C. Winds from the West at 10 to 15 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":17,
                    "icon":"clear",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/clear.gif",
                    "title":"Friday Night",
                    "fcttext":"Clear. Low of 50F. Winds less than 5 mph.",
                    "fcttext_metric":"Clear. Low of 10C. Winds less than 5 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":18,
                    "icon":"clear",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/clear.gif",
                    "title":"Saturday",
                    "fcttext":"Clear. High of 68F. Winds less than 5 mph.",
                    "fcttext_metric":"Clear. High of 20C. Winds less than 5 km/h.",
                    "pop":"0"
                }
                ,
                {
                    "period":19,
                    "icon":"clear",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/clear.gif",
                    "title":"Saturday Night",
                    "fcttext":"Clear. Low of 52F. Winds less than 5 mph.",
                    "fcttext_metric":"Clear. Low of 11C. Winds less than 5 km/h.",
                    "pop":"0"
                }
            ]
        },
        "simpleforecast": {
            "forecastday": [
                {"date":{
                    "epoch":"1393567200",
                    "pretty":"11:00 PM MST on February 27, 2014",
                    "day":27,
                    "month":2,
                    "year":2014,
                    "yday":57,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"February",
                    "monthname_short":"Feb",
                    "weekday_short":"Thu",
                    "weekday":"Thursday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":1,
                    "high": {
                        "fahrenheit":"57",
                        "celsius":"14"
                    },
                    "low": {
                        "fahrenheit":"39",
                        "celsius":"4"
                    },
                    "conditions":"Chance of a Thunderstorm",
                    "icon":"chancetstorms",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancetstorms.gif",
                    "skyicon":"cloudy",
                    "pop":90,
                    "qpf_allday": {
                        "in": 0.42,
                        "mm": 10.7
                    },
                    "qpf_day": {
                        "in": 0.26,
                        "mm": 6.6
                    },
                    "qpf_night": {
                        "in": 0.14,
                        "mm": 3.6
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 16,
                        "kph": 26,
                        "dir": "SSE",
                        "degrees": 160
                    },
                    "avewind": {
                        "mph": 13,
                        "kph": 21,
                        "dir": "WSW",
                        "degrees": 239
                    },
                    "avehumidity": 53,
                    "maxhumidity": 59,
                    "minhumidity": 43
                }
                ,
                {"date":{
                    "epoch":"1393653600",
                    "pretty":"11:00 PM MST on February 28, 2014",
                    "day":28,
                    "month":2,
                    "year":2014,
                    "yday":58,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"February",
                    "monthname_short":"Feb",
                    "weekday_short":"Fri",
                    "weekday":"Friday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":2,
                    "high": {
                        "fahrenheit":"57",
                        "celsius":"14"
                    },
                    "low": {
                        "fahrenheit":"45",
                        "celsius":"7"
                    },
                    "conditions":"Rain",
                    "icon":"rain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/rain.gif",
                    "skyicon":"mostlycloudy",
                    "pop":60,
                    "qpf_allday": {
                        "in": 0.36,
                        "mm": 9.1
                    },
                    "qpf_day": {
                        "in": 0.02,
                        "mm": 0.5
                    },
                    "qpf_night": {
                        "in": 0.54,
                        "mm": 13.7
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 20,
                        "kph": 32,
                        "dir": "South",
                        "degrees": 189
                    },
                    "avewind": {
                        "mph": 17,
                        "kph": 27,
                        "dir": "South",
                        "degrees": 179
                    },
                    "avehumidity": 49,
                    "maxhumidity": 63,
                    "minhumidity": 32
                }
                ,
                {"date":{
                    "epoch":"1393740000",
                    "pretty":"11:00 PM MST on March 01, 2014",
                    "day":1,
                    "month":3,
                    "year":2014,
                    "yday":59,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"March",
                    "monthname_short":"Mar",
                    "weekday_short":"Sat",
                    "weekday":"Saturday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":3,
                    "high": {
                        "fahrenheit":"54",
                        "celsius":"12"
                    },
                    "low": {
                        "fahrenheit":"39",
                        "celsius":"4"
                    },
                    "conditions":"Rain",
                    "icon":"rain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/rain.gif",
                    "skyicon":"cloudy",
                    "pop":70,
                    "qpf_allday": {
                        "in": 0.39,
                        "mm": 9.9
                    },
                    "qpf_day": {
                        "in": 0.14,
                        "mm": 3.6
                    },
                    "qpf_night": {
                        "in": 0.11,
                        "mm": 2.8
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 18,
                        "kph": 29,
                        "dir": "South",
                        "degrees": 175
                    },
                    "avewind": {
                        "mph": 13,
                        "kph": 21,
                        "dir": "South",
                        "degrees": 173
                    },
                    "avehumidity": 50,
                    "maxhumidity": 71,
                    "minhumidity": 47
                }
                ,
                {"date":{
                    "epoch":"1393826400",
                    "pretty":"11:00 PM MST on March 02, 2014",
                    "day":2,
                    "month":3,
                    "year":2014,
                    "yday":60,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"March",
                    "monthname_short":"Mar",
                    "weekday_short":"Sun",
                    "weekday":"Sunday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":4,
                    "high": {
                        "fahrenheit":"55",
                        "celsius":"13"
                    },
                    "low": {
                        "fahrenheit":"39",
                        "celsius":"4"
                    },
                    "conditions":"Chance of Rain",
                    "icon":"chancerain",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancerain.gif",
                    "skyicon":"partlycloudy",
                    "pop":40,
                    "qpf_allday": {
                        "in": 0.11,
                        "mm": 2.8
                    },
                    "qpf_day": {
                        "in": 0.04,
                        "mm": 1.0
                    },
                    "qpf_night": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 9,
                        "kph": 14,
                        "dir": "SSW",
                        "degrees": 196
                    },
                    "avewind": {
                        "mph": 4,
                        "kph": 6,
                        "dir": "SSW",
                        "degrees": 205
                    },
                    "avehumidity": 47,
                    "maxhumidity": 63,
                    "minhumidity": 43
                }
                ,
                {"date":{
                    "epoch":"1393912800",
                    "pretty":"11:00 PM MST on March 03, 2014",
                    "day":3,
                    "month":3,
                    "year":2014,
                    "yday":61,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"March",
                    "monthname_short":"Mar",
                    "weekday_short":"Mon",
                    "weekday":"Monday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":5,
                    "high": {
                        "fahrenheit":"57",
                        "celsius":"14"
                    },
                    "low": {
                        "fahrenheit":"46",
                        "celsius":"8"
                    },
                    "conditions":"Mostly Cloudy",
                    "icon":"mostlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
                    "skyicon":"mostlycloudy",
                    "pop":0,
                    "qpf_allday": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "qpf_day": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "qpf_night": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 7,
                        "kph": 11,
                        "dir": "SSE",
                        "degrees": 154
                    },
                    "avewind": {
                        "mph": 4,
                        "kph": 6,
                        "dir": "South",
                        "degrees": 186
                    },
                    "avehumidity": 46,
                    "maxhumidity": 58,
                    "minhumidity": 41
                }
                ,
                {"date":{
                    "epoch":"1393999200",
                    "pretty":"11:00 PM MST on March 04, 2014",
                    "day":4,
                    "month":3,
                    "year":2014,
                    "yday":62,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"March",
                    "monthname_short":"Mar",
                    "weekday_short":"Tue",
                    "weekday":"Tuesday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":6,
                    "high": {
                        "fahrenheit":"59",
                        "celsius":"15"
                    },
                    "low": {
                        "fahrenheit":"45",
                        "celsius":"7"
                    },
                    "conditions":"Partly Cloudy",
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "skyicon":"partlycloudy",
                    "pop":0,
                    "qpf_allday": {
                        "in": 0.01,
                        "mm": 0.3
                    },
                    "qpf_day": {
                        "in": 0.01,
                        "mm": 0.3
                    },
                    "qpf_night": {
                        "in": 0.02,
                        "mm": 0.5
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 5,
                        "kph": 8,
                        "dir": "SSE",
                        "degrees": 160
                    },
                    "avewind": {
                        "mph": 2,
                        "kph": 3,
                        "dir": "SW",
                        "degrees": 229
                    },
                    "avehumidity": 52,
                    "maxhumidity": 61,
                    "minhumidity": 45
                }
                ,
                {"date":{
                    "epoch":"1394085600",
                    "pretty":"11:00 PM MST on March 05, 2014",
                    "day":5,
                    "month":3,
                    "year":2014,
                    "yday":63,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"March",
                    "monthname_short":"Mar",
                    "weekday_short":"Wed",
                    "weekday":"Wednesday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":7,
                    "high": {
                        "fahrenheit":"61",
                        "celsius":"16"
                    },
                    "low": {
                        "fahrenheit":"46",
                        "celsius":"8"
                    },
                    "conditions":"Partly Cloudy",
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "skyicon":"mostlysunny",
                    "pop":0,
                    "qpf_allday": {
                        "in": 0.02,
                        "mm": 0.5
                    },
                    "qpf_day": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "qpf_night": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 4,
                        "kph": 6,
                        "dir": "South",
                        "degrees": 182
                    },
                    "avewind": {
                        "mph": 2,
                        "kph": 3,
                        "dir": "SE",
                        "degrees": 132
                    },
                    "avehumidity": 47,
                    "maxhumidity": 58,
                    "minhumidity": 42
                }
                ,
                {"date":{
                    "epoch":"1394172000",
                    "pretty":"11:00 PM MST on March 06, 2014",
                    "day":6,
                    "month":3,
                    "year":2014,
                    "yday":64,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"March",
                    "monthname_short":"Mar",
                    "weekday_short":"Thu",
                    "weekday":"Thursday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":8,
                    "high": {
                        "fahrenheit":"64",
                        "celsius":"18"
                    },
                    "low": {
                        "fahrenheit":"50",
                        "celsius":"10"
                    },
                    "conditions":"Mostly Cloudy",
                    "icon":"mostlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
                    "skyicon":"mostlycloudy",
                    "pop":0,
                    "qpf_allday": {
                        "in": 0.03,
                        "mm": 0.8
                    },
                    "qpf_day": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "qpf_night": {
                        "in": 0.03,
                        "mm": 0.8
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 8,
                        "kph": 13,
                        "dir": "SE",
                        "degrees": 133
                    },
                    "avewind": {
                        "mph": 5,
                        "kph": 8,
                        "dir": "SSW",
                        "degrees": 211
                    },
                    "avehumidity": 35,
                    "maxhumidity": 48,
                    "minhumidity": 27
                }
                ,
                {"date":{
                    "epoch":"1394258400",
                    "pretty":"11:00 PM MST on March 07, 2014",
                    "day":7,
                    "month":3,
                    "year":2014,
                    "yday":65,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"March",
                    "monthname_short":"Mar",
                    "weekday_short":"Fri",
                    "weekday":"Friday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":9,
                    "high": {
                        "fahrenheit":"66",
                        "celsius":"19"
                    },
                    "low": {
                        "fahrenheit":"50",
                        "celsius":"10"
                    },
                    "conditions":"Partly Cloudy",
                    "icon":"partlycloudy",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
                    "skyicon":"partlycloudy",
                    "pop":0,
                    "qpf_allday": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "qpf_day": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "qpf_night": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 7,
                        "kph": 11,
                        "dir": "West",
                        "degrees": 267
                    },
                    "avewind": {
                        "mph": 6,
                        "kph": 10,
                        "dir": "West",
                        "degrees": 276
                    },
                    "avehumidity": 27,
                    "maxhumidity": 42,
                    "minhumidity": 24
                }
                ,
                {"date":{
                    "epoch":"1394344800",
                    "pretty":"11:00 PM MST on March 08, 2014",
                    "day":8,
                    "month":3,
                    "year":2014,
                    "yday":66,
                    "hour":23,
                    "min":"00",
                    "sec":0,
                    "isdst":"0",
                    "monthname":"March",
                    "monthname_short":"Mar",
                    "weekday_short":"Sat",
                    "weekday":"Saturday",
                    "ampm":"PM",
                    "tz_short":"MST",
                    "tz_long":"America/Denver"
                },
                    "period":10,
                    "high": {
                        "fahrenheit":"68",
                        "celsius":"20"
                    },
                    "low": {
                        "fahrenheit":"52",
                        "celsius":"11"
                    },
                    "conditions":"Clear",
                    "icon":"clear",
                    "icon_url":"http://icons-ak.wxug.com/i/c/k/clear.gif",
                    "skyicon":"sunny",
                    "pop":0,
                    "qpf_allday": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "qpf_day": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "qpf_night": {
                        "in": 0.00,
                        "mm": 0.0
                    },
                    "snow_allday": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_day": {
                        "in": 0,
                        "cm": 0
                    },
                    "snow_night": {
                        "in": 0,
                        "cm": 0
                    },
                    "maxwind": {
                        "mph": 3,
                        "kph": 5,
                        "dir": "WSW",
                        "degrees": 243
                    },
                    "avewind": {
                        "mph": 2,
                        "kph": 3,
                        "dir": "WSW",
                        "degrees": 252
                    },
                    "avehumidity": 20,
                    "maxhumidity": 32,
                    "minhumidity": 18
                }
            ]
        }
    }
};