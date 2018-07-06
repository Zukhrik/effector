//@flow

//$todo
import connect from 'connect'
//$todo
import serve from 'serve-static'

import {render} from './render'

const app = connect()

app.use('/static', serve(__dirname))

app.use((req, res) => {
 res.setHeader('Content-Type', 'text/html; charset=utf-8')
 res.end(render(), 'utf8')
})

app.listen(3000)

console.log(`SSR server started`)
