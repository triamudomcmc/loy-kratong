import { BridgeContext, createBridgeContext } from "next-bridge";
import { ResultData } from "@components/Kratong/create";
import { ResultData as PResultData } from "@components/Principal/create";
import { ResultData as CResultData } from "@components/CUPSAA/create";

export const sendDataContext: BridgeContext<{ id: string; data: ResultData | PResultData | CResultData }> =
  createBridgeContext("sendData", "send");
