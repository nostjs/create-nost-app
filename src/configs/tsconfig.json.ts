import jsonfile from "jsonfile";
import path from "path";

export default ($path: string) => {
  const json = {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "outDir": "./build",
      "strict": true,
      "types": ["node"],
      "esModuleInterop": true,
    },
  };

  jsonfile.writeFileSync(path.resolve($path + "tsconfig.json"), json, { spaces: 2 });
};
