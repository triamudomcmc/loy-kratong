import dotenv from "dotenv"
import init from "@handlers/firebase-admin"
import {updateListContext} from "../init";

dotenv.config()

export const updateListAction = updateListContext.helper.createAction( async (ApiParams, parameters, ConditionParams) => {

  if (parameters.password !== process.env.PASSWORD) {
    return {status: false, report: "access denied"}
  }

  const data = await init.collection("rawEntities").doc(parameters.id).get()

  const d = data.data()
  if (d) {
    await init.collection(parameters.type === "display" ? "filteredEntities" : "archivedEntities").doc(data.id).set(d)
  }

  await data.ref.delete()

  return {status: true, report: "success", data: {type: parameters.type}}
})
