import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from "expo-web-browser";
import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite';

export const config={
    Platform:'com.eden.restate',
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}



export const client=new Client();

client
.setEndpoint(config.endpoint!)
.setProject(config.projectId!).
setPlatform(config.Platform!)



export const avatar=new Avatars(client);
export const account=new Account(client)

export async function login(){
    try{
const redirectUri=Linking.createURL('/')

const response=await account.createOAuth2Token(OAuthProvider.Google,redirectUri)
    if(!response) throw new Error ('Faild to login')
    const browserResult=await openAuthSessionAsync(
response.toString(),
redirectUri
    )
if (browserResult.type!=='success')throw new Error('Faild to login')
const url=new URL(browserResult.url)
const secret=url.searchParams.get('secret')?.toString();
const userId=url.searchParams.get('userId')?.toString()

if(!secret || !userId) throw new Error ('Faild to Login')


}catch(error){
        console.error(error);
        return false;
    }
}

