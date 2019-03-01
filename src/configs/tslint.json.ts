import jsonfile from "jsonfile";
import path from "path";

export default ($path: string) => {
  const json = {
    "defaultSeverity": "error",
    "extends": [
      "tslint:recommended",
    ],
    "jsRules": {},
    "rules": {
      "no-console": false,
      "object-literal-key-quotes": false,
      "object-literal-sort-keys": false,
    },
    "rulesDirectory": [],
  };

  jsonfile.writeFileSync(path.resolve($path + "tslint.json"), json, { spaces: 2 });
};
