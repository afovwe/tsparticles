import type { Engine } from "tsparticles-engine";
import { HeartDrawer } from "./HeartDrawer";

/**
 * @param engine -
 * @param refresh -
 */
export async function loadHeartShape(engine: Engine, refresh = true): Promise<void> {
    await engine.addShape("heart", new HeartDrawer(), refresh);
}
