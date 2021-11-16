import {establishNextApi} from "next-bridge";
import {loadDataContext, sendDataContext} from "@handlers/init";
import {loadDataAction, sendDataAction} from "@handlers/action";
import {loadSceneContext} from "../../bridges/scene/init";
import {loadSceneAction} from "../../bridges/scene/actions/loadSceneAction";

const api = establishNextApi("POST", [loadSceneContext.init(loadSceneAction)]);

export default api;
