import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthThirdPartyAppProvider } from "utils/enums/provider-keys";

export const thirdPartyAppProviders = {
  [AuthThirdPartyAppProvider.FACEBOOK]: new FacebookAuthProvider(),
  [AuthThirdPartyAppProvider.GOOGLE]: new GoogleAuthProvider(),
};
