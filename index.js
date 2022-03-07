const { readdirSync, rename } = require("fs");
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

var imageDirPath = "/home/kahama/Pictures/SVG Unicef_Black";
const baseUrl = "https://s3.amazonaws.com/assets.akuko.io/unicef-icons/";

// Loop through all the files in the temp directory
const files = readdirSync(imageDirPath);
const icons = [];
files.forEach((file) => {
  const name = file.split(".")[0];
  //   console.log(file.split("_BLACK")[0].split("_ICON_")[1].replace(/_/g, "-"));
  //   const name = file
  //     .split("_BLACK")[0]
  //     .split("_ICON_")[1]
  //     .replace(/_/g, "-")
  //     .toLowerCase();
  icons.push({
    id: `${name}`,
    src: `${baseUrl}${name}.svg`,
    title: `${name.replace(/-/g, " ")}`,
  });
  //   rename(imageDirPath + `/${file}`, imageDirPath + `/${name}.svg`, (err) =>
  //     console.log(err)
  //   );
});

console.log("icons : %j", icons);
