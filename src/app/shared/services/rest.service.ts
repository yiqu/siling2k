import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, doc, onSnapshot, DocumentReference, docSnapshots, collectionSnapshots,
  CollectionReference, DocumentData, FieldPath } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { setDoc, addDoc, documentId , getDoc} from '@angular/fire/firestore';
import { SilingData } from 'src/app/models/general.models';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public silingCollection?: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {

  }

  addToCollection(entry: SilingData) {
    const collectionDoc = doc(collection(this.firestore, 'siling/' + entry.company + '/all'));
    const id: string = collectionDoc.id;
    const dataToSave = {
      ...entry,
      id
    }
    setDoc(collectionDoc, dataToSave);
  }

}
