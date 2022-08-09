import Commerce from "@chec/commerce.js";
import env from "../env";

export const commerce = new Commerce(env.REACT_APP_CHEC_PUBLIC_KEY, true);
