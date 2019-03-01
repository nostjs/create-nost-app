import { exec } from "child_process";
import colors from "colors/safe";
import fs from "fs";
import * as create from "./src/configs";

if (process.argv[2]) {
  if (process.argv[2].match(/^-h$/) || process.argv[2].match(/^--help$/)) {
    console.log("ajuda");
  } else {
    if (fs.existsSync(process.argv[2])) {
      console.log(colors.red("This directory is already in use"));
    } else {
      fs.mkdirSync(process.argv[2]);
      fs.mkdirSync(process.argv[2] + "/src");
      fs.mkdirSync(process.argv[2] + "/build");
      fs.writeFileSync(process.argv[2] + "/index.ts", "");
      create.tsconfigJSON(process.argv[2] + "/");
      create.tslintJSON(process.argv[2] + "/");
      create.packageJSON(process.argv[2] + "/");

      const child = exec("npm install --prefix " + process.argv[2], (error, stdout, stderr) => {
        console.log("stdout: " + stdout);
        console.log("stderr: " + stderr);
        if (error !== null) {
          console.log("exec error: " + error);
        }
      });
    }
  }
} else {
  console.log("Usage: create-nost-app " + colors.green("<my-project>"));
}
