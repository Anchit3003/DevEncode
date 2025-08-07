// Utility functions for conversion between JSON, String, YAML
import yaml from 'js-yaml';

export function jsonToString(jsonInput) {
   try {
        const obj = JSON.parse(jsonInput);
        const str = JSON.stringify(obj, null, 4);
        return JSON.stringify(str);
      } catch (e) {
        if (jsonInput === "") {
          return "output will be here..."
        } else {
          return "Invalid JSON input"
        }
      }
}

export function stringToJson(stringInput) {
  try {
    if (stringInput !== "") {
      const rawString = stringInput;
      const cleaned = rawString.slice(1, -1);
      const cleanedString = cleaned.replace(/\\n/g, "").replace(/\\"/g, '"');
      const parsedData = JSON.parse(cleanedString);
      return JSON.stringify(parsedData, null, 2);
    }
    return '';
  } catch (e) {
    return 'Invalid String input';
  }
}

export function jsonToYaml(jsonInput) {
  try {
    const jsonData = JSON.parse(jsonInput);
    return yaml.dump(jsonData);
  } catch (e) {
    return 'Invalid JSON input';
  }
}

export function yamlToJson(yamlInput) {
  try {
    const jsonData = yaml.load(yamlInput);
    return JSON.stringify(jsonData, null, 2);
  } catch (e) {
    return 'Invalid YAML input';
  }
}

export function yamlToString(yamlInput) {
  try {
    if (yamlInput !== "") {
      return JSON.stringify(yamlInput);
    }
    return '';
  } catch (e) {
    return 'Invalid YAML input';
  }
}

export function stringToYaml(stringInput) {
  try {
    if (stringInput.startsWith('"') && stringInput.endsWith('"')) {
      try {
        const input = JSON.parse(stringInput);
        return input;
      } catch (e) {
        return 'Invalid String input';
      }
    }
    return stringInput.replace(/\\n/g, "\n");
  } catch (e) {
    return 'Invalid YAML input';
  }
}
