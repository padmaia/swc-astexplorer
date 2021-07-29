let settings =
{
  "jsc": {
    "target": "es2016",
    "parser": {
      "syntax": "ecmascript",
      "jsx": true,
      "dynamicImport": false,
      "numericSeparator": false,
      "privateMethod": false,
      "functionBind": false,
      "exportDefaultFrom": false,
      "exportNamespaceFrom": false,
      "decorators": false,
      "decoratorsBeforeExport": false,
      "topLevelAwait": false,
      "importMeta": false
    }
  }
};

let code = `
import React from 'react';
const comp = () => <amp-something className="something" />
`;

const swc = import("@swc/wasm-web");
swc.then(swc => {
  console.log("SWC Loaded", swc);
  let result = swc.transformSync(code, settings);
  console.log("result from transformSync", result);
  console.log(result.code);
  document.getElementById("result").innerHTML = "<xmp>" + result.code + "</xmp>";
  document.getElementById("source").innerHTML = "<xmp>" + code + "</xmp>";
});