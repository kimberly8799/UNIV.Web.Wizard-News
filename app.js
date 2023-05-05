const express = require("express");
const app = express();
const morgan = require("morgan");
const postBank = require("./postBank");


app.use(morgan('dev'));


app.get("/", (req,res) => {

const posts = postBank.list();

const html = `<!DOCTYPE HTML>
<html>
<head>
<title>Wizard News </title>
</head>

<body>
<ul>
  ${posts.map(post => `<li>${post.title, post.content}</li>`)}
</ul>


</body>
</html>`;

res.send(html);

}); 





const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

