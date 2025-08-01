import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  CollectionReference,
  query,
  orderBy,
  collectionData,
  doc,
  docData,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Storage, ref as storageRef, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { Recipe } from '../shared/models/recipe.models';



@Injectable({ providedIn: 'root' })
export class RecipeService {
  private readonly col = collection(this.fs, 'recipes') as CollectionReference<Recipe>;

  constructor(
    private fs: Firestore,
    private auth: Auth,
    private storage: Storage
            ) {}    

  all() {
    return collectionData(
      query(this.col, orderBy('createdAt', 'desc')),
      { idField: 'id' }
    );
  }

  get(id: string) {
    return docData(doc(this.col, id), { idField: 'id' });
  }

  add(r: Omit<Recipe, 'id' | 'createdAt'>) {
    return addDoc(this.col, { ...r, createdAt: serverTimestamp() });
  }

  update(id: string, r: Partial<Recipe>) {
    return updateDoc(doc(this.col, id), r);
  }

  remove(id: string) {
    return deleteDoc(doc(this.col, id));
  }

  uploadImage(file: File) {
    const path = `images/${Date.now()}_${file.name}`;
    const ref = storageRef(this.storage, path);
    return uploadBytes(ref, file).then(() => getDownloadURL(ref));
  }
}