const router = require('koa-router')()
const { v4: uuidv4 } = require('uuid');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/uid', async (ctx) => {
  const { type } = ctx.query
  ctx.body = {
    code: 0,
    data: {
      uid: type == 1 ? 'testmid' : uuidv4()
    },
    msg: 'success'
  }
})

router.get('/getAd', async (ctx) => {
  ctx.body = {
    code: 0,
    data: {
      adData: {}
    },
    msg: 'success'
  }
})

module.exports = router
