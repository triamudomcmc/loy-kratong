import initialiseDB from "@handlers/firebase-admin";
import { loadDataContext, sendDataContext } from "@handlers/init";
import { v4 as uuidv4 } from "uuid";

export const sendDataAction = sendDataContext.helper.createAction(async (ApiParams, parameters, ConditionParams) => {
  if (parameters.data && parameters.id) {
    await initialiseDB
      .collection("filteredEntities")
      .add(parameters.data);
  } else {
    return { status: false, report: "invalidData" };
  }

  return { status: true, report: "success" };
});

export const loadDataAction = loadDataContext.helper.createAction(async (ApiParams, parameters, ConditionParams) => {
  if (parameters.id) {
    await initialiseDB
      .collection("kratong-por-oar")
      .doc(parameters.id ?? uuidv4())
      .get();
  } else {
    return { status: false, report: "invalidData" };
  }

  return { status: true, report: "success" };
});
