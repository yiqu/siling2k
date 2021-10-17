import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, doc, onSnapshot, DocumentReference, docSnapshots, collectionSnapshots,
  CollectionReference, DocumentData, FieldPath } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { setDoc, addDoc, documentId , getDoc} from '@angular/fire/firestore';
import { FirebaseDocObsAndId } from 'src/app/core/store/core.state';
import { SilingData } from 'src/app/models/general.models';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private firestore: Firestore) {
  }

  addEntryToCollection(entry: SilingData): FirebaseDocObsAndId {
    const collectionDoc = doc(collection(this.firestore, 'siling/' + entry.company + '/all'));
    const id: string = collectionDoc.id;
    const dataToSave = {
      ...entry,
      id
    }
    return {
      operationObs: setDoc(collectionDoc, dataToSave),
      id: id
    };
  }

}
