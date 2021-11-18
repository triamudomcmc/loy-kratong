import {loadListContext} from "../init";
import dotenv from "dotenv"
import init from "@handlers/firebase-admin"

dotenv.config()

export const loadListAction = loadListContext.helper.createAction(async (ApiParams, parameters, ConditionParams) => {
  if (parameters.password !== process.env.PASSWORD) {
    return {status: false, report: "access denied"}
  }

  const data = await init.collection("rawEntities").limit(20).get()

  return {status: true, report: "success", data: data.docs.length > 0 ? data.docs.map((item) => ({...item.data(), id: item.id})) : []}
})
