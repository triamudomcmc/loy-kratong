import {BridgeContext, createBridgeContext} from "next-bridge";
import {ResultData} from "@components/Kratong/create";
import {ResultData as PResultData} from "@components/Principal/create";

export const sendDataContext: BridgeContext<{id: string, data: ResultData | PResultData}> = createBridgeContext("sendData", "send")
