const express = require('express')
const app = express()
const port = 5000

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Authorization')
    next()
})

app.get('/', (req, res) => {
    res.json([{
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "cases": 65975,
            "deaths": 2124,
            "recovered": 43779
        },
        {
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "cases": 65975,
            "deaths": 2124,
            "recovered": 43779
        },
        {
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "cases": 65975,
            "deaths": 2124,
            "recovered": 43779
        },
        {
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "cases": 65975,
            "deaths": 2124,
            "recovered": 43779
        },
        {
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "cases": 65975,
            "deaths": 2124,
            "recovered": 43779
        },
        {
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "cases": 65975,
            "deaths": 2124,
            "recovered": 43779
        }
    ])
})

app.get('/:id', (req, res) => {
    res.json({
        "country": "DZ",
        "last_update": "2020-11-13T18:25:32",
        "cases": 65975,
        "deaths": 2124,
        "recovered": 43779
    })
})

app.get('/diff', (req, res) => {
    res.json([{
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "new_cases": 867,
            "new_deaths": 13,
            "new_recovered": 799,
            "new_cases_percentage": 1.33,
            "new_deaths_percentage": 0.62,
            "new_recovered_percentage": 1.86
        },
        {
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "new_cases": 867,
            "new_deaths": 13,
            "new_recovered": 799,
            "new_cases_percentage": 1.33,
            "new_deaths_percentage": 0.62,
            "new_recovered_percentage": 1.86
        },
        {
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "new_cases": 867,
            "new_deaths": 13,
            "new_recovered": 799,
            "new_cases_percentage": 1.33,
            "new_deaths_percentage": 0.62,
            "new_recovered_percentage": 1.86
        },
        {
            "country": "DZ",
            "last_update": "2020-11-13T18:25:32",
            "new_cases": 867,
            "new_deaths": 13,
            "new_recovered": 799,
            "new_cases_percentage": 1.33,
            "new_deaths_percentage": 0.62,
            "new_recovered_percentage": 1.86
        }
    ])
})

app.get('/:id', (req, res) => {
    res.json({
        "country": "DZ",
        "last_update": "2020-11-13T18:25:32",
        "new_cases": 867,
        "new_deaths": 13,
        "new_recovered": 799,
        "new_cases_percentage": 1.33,
        "new_deaths_percentage": 0.62,
        "new_recovered_percentage": 1.86
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))