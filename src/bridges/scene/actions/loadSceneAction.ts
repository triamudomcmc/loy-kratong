import {loadSceneContext} from "../init";
import initialiseDB from "@handlers/firebase-admin"
export const loadSceneAction = loadSceneContext.helper.createAction(async (a, p, c) => {

  try {
    const data = await initialiseDB.collection("filteredEntities").limit(20).get()

    if (data.empty) {
      return {status: true, report: "success", data: []}
    }

    return {status: true, report: "success", data: data.docs.map(item => (item.data()))}
  } catch (e) {
    console.log(e)
    return  {
      status: false,
      report: "unexpected Error"
    }
  }
})
