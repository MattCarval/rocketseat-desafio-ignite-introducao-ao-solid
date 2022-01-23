import { app } from ".";

const SERVER_PORT = 3333;
const SWAGGER_PATH = "api-docs";
const SERVER_MESSSAGES = [
  `🚀 Server is up 🚀`,
  `🚀 Check server in http://localhost:${SERVER_PORT}/ 🚀`,
  `🚀 Check server in http://localhost:${SERVER_PORT}/${SWAGGER_PATH}/ 🚀`,
];

app.listen(SERVER_PORT, () => {
  SERVER_MESSSAGES.map((message, index) => {
    if (index === 0) {
      return console.log(`\n${message}`);
    }
    return console.log(message);
  });
});
