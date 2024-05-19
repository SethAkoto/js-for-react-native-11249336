import {formatArrayStrings}  from "./arrayManipulation.js";

function createUserProfiles(originalNames, modifiedNames) {
  const userProfiles = [];

  for (let i = 0; i < originalNames.length; i++) {
    userProfiles.push({
      "id": i + 1,
      "originalName": originalNames[i],
      "modifiedName": modifiedNames[i],
    });
  }

  return userProfiles;
}
