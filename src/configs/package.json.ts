import jsonfile from "jsonfile";
import path from "path";

export default ($path: string) => {
  const json = {
    "name": "create-nost-app",
    "version": "1.0.0",
    "description": "Developed with NostJS.",
    "main": "build/index.js",
    "dependencies": {},
    "devDependencies": {
      "@types/node": "^11.9.6",
      "tslint": "^5.13.0",
      "typescript": "^3.3.3333",
    },
    "scripts": {
      "build": "tsc --build",
      "watch": "tsc --watch",
      "app": "node build/index.js",
      "mon": "nodemon build/index.js",
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
  };

  jsonfile.writeFileSync(path.resolve($path + "package.json"), json, { spaces: 2 });
};
