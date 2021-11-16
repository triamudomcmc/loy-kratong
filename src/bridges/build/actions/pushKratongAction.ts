import {pushKratongContext} from "../init";
import initialiseDB from "@handlers/firebase-admin"

export const pushKratongAction = pushKratongContext.helper.createAction(async (ApiParams, parameters, ConditionParams) => {
  try{
    const data = await initialiseDB.collection("filteredEntities").add(parameters.data)
    return {
      status: true,
      report: "success",
      data: {id: data.id}
    }
  } catch (e) {
    console.log(e)
    return  {
      status: false,
      report: "unexpected Error"
    }
  }
})
