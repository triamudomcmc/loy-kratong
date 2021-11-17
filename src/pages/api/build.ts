import {establishNextApi} from "next-bridge";
import {loadSceneContext} from "../../bridges/scene/init";
import {loadSceneAction} from "../../bridges/scene/actions/loadSceneAction";
import {pushKratongContext} from "../../bridges/build/init";
import {pushKratongAction} from "../../bridges/build/actions/pushKratongAction";

const api = establishNextApi("POST", [pushKratongContext.init(pushKratongAction)]);

export default api;
