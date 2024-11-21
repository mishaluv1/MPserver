// import json server

const jsonServer=require('json-server')

// create server for media player application

const Mpserver=jsonServer.create()

// create middleware

const middleware=jsonServer.defaults()

// set up route for json file in server

const route=jsonServer.router('db.json')

// 

const PORT= 3000 || process.env.PORT


Mpserver.use(middleware)
Mpserver.use(route)

Mpserver.listen(PORT,()=>{
    console.log(`mideoplayer server running at PORT ${PORT} and waiting for client request`);
    
})

