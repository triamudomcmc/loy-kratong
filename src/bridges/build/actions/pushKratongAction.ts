import {pushKratongContext} from "../init";
import initialiseDB from "@handlers/firebase-admin"

const wordcut = require("wordcut")

export const isCursed = async (text: string) => {

  let rawTrainedList = await initialiseDB.collection("database").doc("main").get()
  let trainedList = rawTrainedList.get("data")

  const eslist = trainedList.split(" ")
  const dict = await initialiseDB.collection("database").doc("dict").get()

  wordcut.init("./dict.txt", true, [...eslist, ...dict.get("5000").split(" ")]);
  const words = wordcut.cut(text.replace(/ /g, "")).split("|")
  let susList: any = []
  let cursed = false
  words.forEach((word: string) => {
    if (eslist.some((val: any) => (val === word))) {
      cursed = true
    } else {
      susList.push(word)
    }
  })

  return cursed
}

export const pushKratongAction = pushKratongContext.helper.createAction(async (ApiParams, parameters, ConditionParams) => {
  try {

    if (await isCursed(parameters.data.wish.name || "")) return {
      status: false,
      report: "cursed",
      data: {location: "name"}
    }

    if (await isCursed(parameters.data.wish.content || "")) return {
      status: false,
      report: "cursed",
      data: {location: "content"}
    }

    const data = await initialiseDB.collection("rawEntities").add(parameters.data)

    return {
      status: true,
      report: "success",
      data: {id: data.id}
    }
  } catch (e) {

    return {
      status: false,
      report: "unexpected Error"
    }
  }
})
