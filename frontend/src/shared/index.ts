import dynamic from "next/dynamic";

export { ROUTES } from "./routes/routes";
export {
  Win95Button,
  Win95Card,
  Win95Error,
  Win95Input,
  Win95Label,
  Win95Toast,
  Win95Calendar,
} from "./ui";

export { declensionMap } from "./utils/declensionMap";

export * from "./api-generated/model";

export { baseUrl } from "./index.const";

export * from "./lib/";
