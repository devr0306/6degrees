import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, arrayUnion } from "firebase/firestore";

// Import Firebase modules
import { app } from "../firebase/config";

export const addConnection = async (userID, connectionID) => {
    const firestore = getFirestore(app);

  try {
    const docRef = doc(firestore, "users", userID);

    // Update the document with the arrayUnion operation to add 'valueToAdd' to the array field
    await updateDoc(docRef, {
      ["connections"]: arrayUnion(connectionID)
    });

    console.log("Value added to the array field successfully.");
  } catch (error) {
    console.error("Error adding value to array field:", error.message);
  }
};

export const getEvents = async () => {
    const firestore = getFirestore(app);

    try {
      // Reference to the collection
      const collectionRef = collection(firestore, "events");
  
      // Retrieve all documents in the collection
      const querySnapshot = await getDocs(collectionRef);
  
      // Convert the query snapshot to an array of document data
      const documents = querySnapshot.docs.map((doc) => doc.data());
      console.log(documents);
  
      return documents;
    } catch (error) {
      console.error("Error getting documents from collection:", error.message);
      return [];
    }
};





