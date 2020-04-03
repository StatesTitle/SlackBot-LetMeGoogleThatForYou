const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  // .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .post('/lmgtfy', (request, response) => {
    content = {
      "response_type": "in_channel",
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "*Let Me Google That For You!*"
          }
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `[${request.params.text}](https://google.com)`
          }
        }]
      }
      response.send(content)
    }
  )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
