import initialiseDB from "@handlers/firebase-admin";
import {loadDataContext, sendDataContext} from "@handlers/init";

export const sendDataAction = sendDataContext.helper.createAction(async (ApiParams, parameters, ConditionParams) => {

  if (parameters.data && parameters.id) {
    await initialiseDB.collection("kratong-por-oar").doc(parameters.id).set(parameters.data)
  }else{
    return {status: false, report: "invalidData"}
  }

  return {status: true, report: "success"}
})

export const loadDataAction = loadDataContext.helper.createAction(async (ApiParams, parameters, ConditionParams) => {
  if (parameters.id) {
    await initialiseDB.collection("kratong-por-oar").doc(parameters.id).get()
  }else{
    return {status: false, report: "invalidData"}
  }

  return {status: true, report: "success"}
})
