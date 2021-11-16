import {BridgeContext, createBridgeContext} from "next-bridge";

export const loadSceneContext: BridgeContext<{}> = createBridgeContext("loadScene", "scene")
