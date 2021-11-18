import {loadListContext} from "../init";
import dotenv from "dotenv"
import init from "@handlers/firebase-admin"

dotenv.config()

export const loadListAction = loadListContext.helper.createAction(async (ApiParams, parameters, ConditionParams) => {
  if (parameters.password !== process.env.PASSWORD) {
    return {status: false, report: "access denied"}
  }

  const data = await init.collection("rawEntities").limit(20).get()
  const raw = data.docs.length > 0 ? data.docs.map((item) => ({...item.data(), id: item.id})) : []

  const ard = await init.collection("archivedEntities").limit(20).get()
  const archived = ard.docs.length > 0 ? ard.docs.map((item) => ({...item.data(), id: item.id})) : []

  const show = await init.collection("filteredEntities").limit(20).get()
  const display = show.docs.length > 0 ? show.docs.map((item) => ({...item.data(), id: item.id})) : []

  return {status: true, report: "success", data: {raw: raw, archived: archived, display: display}}
})
