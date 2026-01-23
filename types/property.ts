import { Models } from "react-native-appwrite";

export interface Property extends Models.Document {
  image: string;
  rating: number;
  name: string;
  address: string;
  price: number;
  type: string; // used for filtering
}
