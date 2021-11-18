import {BridgeContext, createBridgeContext} from "next-bridge";

export const loadListContext: BridgeContext<{password: string}> = createBridgeContext("load", "filter")
export const updateListContext: BridgeContext<{password: string, id: string, type: "archive" | "display"}> = createBridgeContext("update", "filter")
