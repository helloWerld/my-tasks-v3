"use client";

import React, { createContext, useContext } from "react";
import { db } from "@/lib/firebase.config";
import {
  collection,
  addDoc,
  Timestamp,
  setDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";

const FirestoreContext = createContext();

export const FirestoreProvider = ({ children }) => {
  const { user } = useAuth();

  const checkUser = () => {
    if (!user) {
      throw new Error("No user logged in.");
    }
  };

  const addDocument = async (collectionName, data) => {
    checkUser();

    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        uid: user.uid,
        createdAt: Timestamp.fromDate(new Date()),
      });
      return docRef;
    } catch (error) {
      console.error("Error adding documents", error);
    }
  };

  const updateDocument = async (collectionName, data, docId) => {
    checkUser();

    try {
      if (docId) {
        const docRef = doc(db, collectionName, docId);

        await setDoc(
          docRef,
          { ...data, uid: user.uid, updatedAt: Timestamp.fromDate(new Date()) },
          { merge: true }
        );
      }
    } catch (error) {
      console.error("Error updating document", error);
    }
  };

  const deleteUserDocument = async (collectionName, docId) => {
    checkUser();
    console.log("Document Id from Firestore context", docId);
    try {
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && docSnap.data().uid === user.uid) {
        await deleteDoc(docRef);
        console.log("Document deleted: ", docId);
      } else {
        throw new Error("You dont have permission to delete this document");
      }
    } catch (error) {
      console.error("Error deleting document", error);
    }
  };

  const updateDocStatus = async (taskId, taskStatus) => {
    const taskDocRef = doc(db, "myTasks", taskId);

    try {
      await updateDoc(taskDocRef, {
        isComplete: !taskStatus,
      });
    } catch (error) {
      console.error("Error updating task status");
    }
  };

  return (
    <FirestoreContext.Provider
      value={{
        addDocument,
        updateDocument,
        deleteUserDocument,
        updateDocStatus,
      }}
    >
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirestore = () => useContext(FirestoreContext);
