const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

express()
  // .use(express.static(path.join(__dirname, 'public')))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/', (req, res) => res.render('pages/index'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .post('/lmgtfy', (request, response) => {
    link = `https://lmgtfy.com/?q=${request.body.text}`
    message = `*I can help you google that, <@${request.body.user_id}>!*\n<${encodeURI(link)}>`
    content = {
      "response_type": "in_channel",
      "text": message
    }
    response.send(content)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
