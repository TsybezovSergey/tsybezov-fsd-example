/// <reference types="vite/client" />
declare module "*.svg" {
  import { FunctionComponent, SVGProps } from "react";
  const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}
declare interface RefresherProp {
  refresher: number;
}
