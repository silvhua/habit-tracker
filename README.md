# Water Tracking App

## Features
- Individual user history

## Back end
* JSON file per user with array of objects. Each object has these properties:
  * timestamp
  * metric: glasses of water
  * value

### API response body:

```json
[
  {
    "metric": "cups of water",
    "value": 1,
    "timestamp": 1718817621730,
    "comments": "Coffee with milk"
  },
  {
    "metric": "cups of water",
    "value": 1,
    "timestamp": 1718817669482,
    "comments": "Chugged it"
  },
  {
    "metric": "cups of water",
    "value": 2,
    "timestamp": 1718817734213,
    "comments": "Very thirsty"
  }
]
```

## Front end
* Login with username (text input)
* Form to enter:
  * Cups of water (number input)
  * Comments
* You have consumed __ cups of water today (update per day);

### API request body
```javascript
  {
    "metric": "cups of water",
    "value": {number},
    "comments": {string}
  }
```