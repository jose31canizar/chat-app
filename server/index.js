const Hapi = require("hapi");
const server = new Hapi.Server();
server.connection({ port: 3000, host: "localhost" });
// route configuration as an object
const routes = [
  {
    method: "GET",
    path: "/",
    handler: function(request, reply) {
      reply("Hello, world!");
    }
  },
  {
    method: "GET",
    path: "/{name}",
    handler: function(request, reply) {
      reply(`Hello, ${request.params.name}`);
    }
  }
];
server.route(routes);
server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
