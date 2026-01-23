import { ID } from "react-native-appwrite";
import { config, databases } from "./appwrite";
import {
    agentImages,
    galleryImages,
    propertiesImages,
    reviewImages,
} from "./data";

const COLLECTIONS = {
  AGENT: config.agentsCollectionId,
  REVIEWS: config.reviewsCollectionId,
  GALLERY: config.galleriesCollectionId,
  PROPERTY: config.propertiesCollectionId,
};

const propertyTypes = [
  "House",
  "Townhouse",
  "Condo",
  "Duplex",
  "Studio",
  "Villa",
  "Apartment",
  "Other",
];

// Corrected facilities enum to match Appwrite
const facilities = ["Laundry", "Parking", "Gym", "Wifi", "pet-friendly"];

function getRandomSubset<T>(array: T[], minItems: number, maxItems: number): T[] {
  const subsetSize = Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[i]];
  }
  return arrayCopy.slice(0, subsetSize);
}

async function seed() {
  try {
    // Clear existing data
    for (const key in COLLECTIONS) {
      const collectionId = COLLECTIONS[key as keyof typeof COLLECTIONS];
      const documents = await databases.listDocuments(config.databaseId!, collectionId!);
      for (const doc of documents.documents) {
        await databases.deleteDocument(config.databaseId!, collectionId!, doc.$id);
      }
    }
    console.log("✅ Cleared all existing data.");

    // Seed Agents
    const agents = [];
    for (let i = 1; i <= 5; i++) {
      const avatar = agentImages[Math.floor(Math.random() * agentImages.length)];
      console.log(`Creating agent ${i} with avatar: ${avatar}`);
      const agent = await databases.createDocument(config.databaseId!, COLLECTIONS.AGENT!, ID.unique(), {
        name: `Agent ${i}`,
        email: `agent${i}@example.com`,
        avatar,
      });
      console.log(`✅ Seeded agent: ${agent.name}`);
      agents.push(agent);
    }

    // Seed Reviews
    const reviews = [];
    for (let i = 1; i <= 20; i++) {
      const avatar = reviewImages[Math.floor(Math.random() * reviewImages.length)];
      console.log(`Creating review ${i} with avatar: ${avatar}`);
      const review = await databases.createDocument(config.databaseId!, COLLECTIONS.REVIEWS!, ID.unique(), {
        name: `Reviewer ${i}`,
        avatar,
        review: `This is a review by Reviewer ${i}.`,
        rating: Math.floor(Math.random() * 5) + 1,
      });
      console.log(`✅ Seeded review: ${review.name}`);
      reviews.push(review);
    }

    // Seed Galleries
    const galleries = [];
    for (const image of galleryImages) {
      console.log(`Creating gallery with image: ${image}`);
      const gallery = await databases.createDocument(config.databaseId!, COLLECTIONS.GALLERY!, ID.unique(), { image });
      console.log(`✅ Seeded gallery with ID: ${gallery.$id}`);
      galleries.push(gallery);
    }

    // Seed Properties
    for (let i = 1; i <= 20; i++) {
      const assignedAgent = agents[Math.floor(Math.random() * agents.length)];
      const assignedReviews = getRandomSubset(reviews, 5, 7);
      const assignedGalleries = getRandomSubset(galleries, 3, 8);

      // Pick valid facilities from corrected enum
      const selectedFacilities = getRandomSubset(facilities, 1, facilities.length);

      const image = propertiesImages[i % propertiesImages.length]; // safe indexing
      const type = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];

      console.log(`\nCreating property ${i}`);
      console.log(`Type options: ${propertyTypes.join(", ")}`);
      console.log(`Selected type: ${type}`);
      console.log(`Image: ${image}`);
      console.log(`Agent ID: ${assignedAgent.$id}`);
      console.log(`Facilities: ${selectedFacilities.join(", ")}`);
      console.log(`Reviews IDs: ${assignedReviews.map(r => r.$id).join(", ")}`);
      console.log(`Gallery IDs: ${assignedGalleries.map(g => g.$id).join(", ")}`);

      const property = await databases.createDocument(config.databaseId!, COLLECTIONS.PROPERTY!, ID.unique(), {
        name: `Property ${i}`,
        type,
        description: `This is the description for Property ${i}.`,
        address: `123 Property Street, City ${i}`,
        geolocation: `192.168.1.${i}, 192.168.1.${i}`,
        price: Math.floor(Math.random() * 9000) + 1000,
        area: Math.floor(Math.random() * 3000) + 500,
        bedrooms: Math.floor(Math.random() * 5) + 1,
        bathrooms: Math.floor(Math.random() * 5) + 1,
        rating: Math.floor(Math.random() * 5) + 1,
        facilities: selectedFacilities,
        Image: image, // must match Appwrite attribute exactly
        agent: assignedAgent.$id,
        reviews: assignedReviews.map((review) => review.$id),
        gallery: assignedGalleries.map((gallery) => gallery.$id),
      });
      console.log(`✅ Seeded property: ${property.name}`);
    }

    console.log("\n🎉 Data seeding completed successfully.");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  }
}

export default seed;
