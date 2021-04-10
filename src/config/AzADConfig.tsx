import IAzADConfig from '../interfaces/IAzADConfig';

export const AzADConfig: IAzADConfig = {
    auth: {
        clientId: "e86f54a8-a894-4446-bafc-9527bf648f1e",
        authority: "https://login.microsoftonline.com/71530602-cd4f-4243-81ca-9e66bcf73a39",
        redirectUri: "http://localhost:3000",
        graphScopes: ["openid", "profile", "User.Read"]
    }
};

