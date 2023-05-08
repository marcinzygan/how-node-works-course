const fs = require("fs");
const superagent = require("superagent");

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject("could not find file");
      }
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("could not write file");
      resolve("sucess");
    });
  });
};

const getDogPic = async function () {
  try {
    const dog = await readFilePromise(`${__dirname}/dog.txt`);
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${dog}/images/random`
    );
    const data = res.body.message;
    await writeFilePromise("dog-img.txt", data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getDogPic();

// readFilePromise(`${__dirname}/dog.txt`).then((data) => {
//   return superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       return writeFilePromise("dog-img.txt", res.body.message);
//     })
//     .then(() => console.log("file saved"))
//     .catch((err) => {
//       if (err) return console.log("ERROR");
//     });
// });
// fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
//   console.log(data);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);
//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         console.log("img saved");
//       });
//     })
//     .catch((err) => {
//       if (err) return console.log("ERROR");
//     });
// });
