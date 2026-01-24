// import * as Linking from "expo-linking";
// import { openAuthSessionAsync } from "expo-web-browser";
// import {
//   Account,
//   Avatars,
//   Client,
//   Databases,
//   OAuthProvider,
//   Query,
//   Storage
// } from "react-native-appwrite";

// export const config = {
//   platform: "com.eden.restate",
//   endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
//   projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
//   databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
//   galleriesCollectionId:
//     process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
//   reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
//   agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
//   propertiesCollectionId:
//     process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
//   bucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID,
// };

// export const client = new Client();
// client
//   .setEndpoint(config.endpoint!)
//   .setProject(config.projectId!)
//   .setPlatform(config.platform!);

// export const avatar = new Avatars(client);
// export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);

// export async function login() {
//   try {
//     const redirectUri = Linking.createURL("/");

//     const response = await account.createOAuth2Token(
//       OAuthProvider.Google,
//       redirectUri
//     );
//     if (!response) throw new Error("Create OAuth2 token failed");

//     const browserResult = await openAuthSessionAsync(
//       response.toString(),
//       redirectUri
//     );
//     if (browserResult.type !== "success")
//       throw new Error("Create OAuth2 token failed");

//     const url = new URL(browserResult.url);
//     const secret = url.searchParams.get("secret")?.toString();
//     const userId = url.searchParams.get("userId")?.toString();
//     if (!secret || !userId) throw new Error("Create OAuth2 token failed");

//     const session = await account.createSession(userId, secret);
//     if (!session) throw new Error("Failed to create session");

//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

// export async function logout() {
//   try {
//     const result = await account.deleteSession("current");
//     return result;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

// export async function getCurrentUser() {
//   try {
//     const result = await account.get();

//     if (!result.$id) return null;

//     const avatarUrl = `${config.endpoint}/avatars/initials?name=${encodeURIComponent(
//       result.name
//     )}&project=${config.projectId}`;

//     return {
//       ...result,
//       avatar: avatarUrl,
//     };
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

// export async function getLatestProperties() {
//   try {
//     const result = await databases.listDocuments(
//       config.databaseId!,
//       config.propertiesCollectionId!,
//       [Query.orderAsc("$createdAt"), Query.limit(5)]
//     );

//     return result.documents;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// export async function getProperties({
//   filter,
//   query,
//   limit,
// }: {
//   filter: string;
//   query: string;
//   limit?: number;
// }) {
//   try {
//     const buildQuery = [Query.orderDesc("$createdAt")];

//     if (filter && filter !== "All")
//       buildQuery.push(Query.equal("type", filter));

//     if (query)
//       buildQuery.push(
//         Query.or([
//           Query.search("name", query),
//           Query.search("address", query),
//           Query.search("type", query),
//         ])
//       );

//     if (limit) buildQuery.push(Query.limit(limit));

//     const result = await databases.listDocuments(
//       config.databaseId!,
//       config.propertiesCollectionId!,
//       buildQuery
//     );

//     return result.documents;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// // write function to get property by id
// export async function getPropertyById({ id }: { id: string }) {
//   try {
//     const result = await databases.getDocument(
//       config.databaseId!,
//       config.propertiesCollectionId!,
//       id
//     );
//     return result;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
// import * as Linking from "expo-linking";
// import { openAuthSessionAsync } from "expo-web-browser";
// import {
//   Account,
//   Avatars,
//   Client,
//   Databases,
//   OAuthProvider,
//   Query,
//   Storage
// } from "react-native-appwrite";

// export const config = {
//   platform: "com.jsm.restate",
//   endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
//   projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
//   databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
//   galleriesCollectionId:
//     process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
//   reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
//   agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
//   propertiesCollectionId:
//     process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
//   bucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID,
// };

// export const client = new Client();
// client
//   .setEndpoint(config.endpoint!)
//   .setProject(config.projectId!)
//   .setPlatform(config.platform!);

// export const avatar = new Avatars(client);
// export const account = new Account(client);
// export const databases = new Databases(client);
// export const storage = new Storage(client);

// export async function login() {
//   try {
//     const redirectUri = Linking.createURL("/");

//     const response = await account.createOAuth2Token(
//       OAuthProvider.Google,
//       redirectUri
//     );
//     if (!response) throw new Error("Create OAuth2 token failed");

//     const browserResult = await openAuthSessionAsync(
//       response.toString(),
//       redirectUri
//     );
//     if (browserResult.type !== "success")
//       throw new Error("Create OAuth2 token failed");

//     const url = new URL(browserResult.url);
//     const secret = url.searchParams.get("secret")?.toString();
//     const userId = url.searchParams.get("userId")?.toString();
//     if (!secret || !userId) throw new Error("Create OAuth2 token failed");

//     const session = await account.createSession(userId, secret);
//     if (!session) throw new Error("Failed to create session");

//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

// export async function logout() {
//   try {
//     const result = await account.deleteSession("current");
//     return result;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

// export async function getCurrentUser() {
//   try {
//     const result = await account.get();
//     if (result.$id) {
//       const userAvatar = avatar.getInitials(result.name);

//       return {
//         ...result,
//         avatar: userAvatar.toString(),
//       };
//     }

//     return null;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

// export async function getLatestProperties() {
//   try {
//     const result = await databases.listDocuments(
//       config.databaseId!,
//       config.propertiesCollectionId!,
//       [Query.orderAsc("$createdAt"), Query.limit(5)]
//     );

//     return result.documents;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// export async function getProperties({
//   filter,
//   query,
//   limit,
// }: {
//   filter: string;
//   query: string;
//   limit?: number;
// }) {
//   try {
//     const buildQuery = [Query.orderDesc("$createdAt")];

//     if (filter && filter !== "All")
//       buildQuery.push(Query.equal("type", filter));

//     if (query)
//       buildQuery.push(
//         Query.or([
//           Query.search("name", query),
//           Query.search("address", query),
//           Query.search("type", query),
//         ])
//       );

//     if (limit) buildQuery.push(Query.limit(limit));

//     const result = await databases.listDocuments(
//       config.databaseId!,
//       config.propertiesCollectionId!,
//       buildQuery
//     );

//     return result.documents;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// // write function to get property by id
// export async function getPropertyById({ id }: { id: string }) {
//   try {
//     const result = await databases.getDocument(
//       config.databaseId!,
//       config.propertiesCollectionId!,
//       id
//     );
//     return result;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }










import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import {
  Account,
  Avatars,
  Client,
  Databases,
  OAuthProvider,
  Query,
  Storage
} from "react-native-appwrite";

export const config = {
  platform: "com.jsm.restate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  galleriesCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
  reviewsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
  agentsCollectionId: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
  propertiesCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
  bucketId: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID,
};

export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export async function login() {
  try {
    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response) throw new Error("Create OAuth2 token failed");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    if (browserResult.type !== "success")
      throw new Error("Create OAuth2 token failed");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId) throw new Error("Create OAuth2 token failed");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create session");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    const result = await account.deleteSession("current");
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Helper: Generate a color from a string (user name)
function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).slice(-2);
  }
  return color;
}

export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      const bgColor = stringToColor(result.name); // unique background per user

      const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        result.name
      )}&size=128&background=${bgColor.substring(1)}&color=FFFFFF&bold=true&rounded=true&font-size=0.5`;

      return {
        ...result,
        avatar: avatarUrl,
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}



export async function getLatestProperties() {
  try {
    const result = await databases.listDocuments(
      config.databaseId!,
      config.propertiesCollectionId!,
      [Query.orderAsc("$createdAt"), Query.limit(5)]
    );

    return result.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProperties({
  filter,
  query,
  limit,
}: {
  filter: string;
  query: string;
  limit?: number;
}) {
  try {
    const buildQuery = [Query.orderDesc("$createdAt")];

    if (filter && filter !== "All")
      buildQuery.push(Query.equal("type", filter));

    if (query)
      buildQuery.push(
        Query.or([
          Query.search("name", query),
          Query.search("address", query),
          Query.search("type", query),
        ])
      );

    if (limit) buildQuery.push(Query.limit(limit));

    const result = await databases.listDocuments(
      config.databaseId!,
      config.propertiesCollectionId!,
      buildQuery
    );

    return result.documents;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// write function to get property by id
export async function getPropertyById({ id }: { id: string }) {
  try {
    const result = await databases.getDocument(
      config.databaseId!,
      config.propertiesCollectionId!,
      id
    );
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}
