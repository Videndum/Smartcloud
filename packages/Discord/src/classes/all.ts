import { Configuration } from "./configuration";
import { User } from "./user";
import { Modules } from "./modules";
import { Actions } from "./actions";

/**
 * @extends Discord
 */
export const user = new User();
export const configs = new Configuration();
export const modules = new Modules();
export const actions = new Actions();
