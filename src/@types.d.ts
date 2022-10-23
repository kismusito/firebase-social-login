import "styled-components";
import { CustomTheme } from "./utils/style/theme";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
