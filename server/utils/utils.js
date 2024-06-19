import fs from 'fs';

function loadJson(filepath) {
  const loadedJson = fs.readFileSync(filepath);
  return JSON.parse(loadedJson);
}

export default loadJson;