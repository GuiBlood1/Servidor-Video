const express = require('express')
const servidor = express()

servidor.set('view engine','ejs')

servidor.get('/',(req,res)=>{
    res.render('render.ejs',{
        url : 'https://r2---sn-bg07dnsy.googlevideo.com/videoplayback?expire=1625343636&ei=NHLgYKzwKcXX3LUP0_GdkAw&ip=159.192.213.76&id=o-AEMQJ5am63clRD9JfostmKwzEhooc0GabExRf8JYj_qj&itag=18&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=NUh-A4qxD3QOAysXfIfAmogG&gir=yes&clen=9438885&ratebypass=yes&dur=126.339&lmt=1624717069364019&fexp=24001373,24007246&c=WEB&txp=5430434&n=HlpGjEcwLkj2fn&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMByaFZc466UAQH_WbLHv_D7HSqkm-gyw9f-etZcfPEYAiEA2clCl-Lrd8iRbW15cZr4Bp0mR5qUrUlG_vQnp0auS2w%3D&rm=sn-j5u-joml7l,sn-npoze7l&req_id=2831882dbadfa3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=x2&mip=179.104.255.208&mm=29&mn=sn-bg07dnsy&ms=rdu&mt=1625321582&mv=m&mvi=2&pl=21&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAPGnTrOg9q67MRVL7RbigRhw1pY_9Hw7-ZfVjCAzqjAQAiBzdMHnX7BtrrRPy0lkP5x1m8OgvHET__H-m50b7K1mlQ%3D%3D'
    })
})

servidor.listen(3000,()=>{
    console.log('test')
})