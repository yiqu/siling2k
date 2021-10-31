import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, doc, onSnapshot, DocumentReference, docSnapshots, collectionSnapshots,
  CollectionReference, DocumentData, FieldPath, collectionData, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';
import { setDoc, addDoc, documentId , getDoc} from '@angular/fire/firestore';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { FirebaseDocObsAndId } from 'src/app/core/store/core.state';
import { SilingData } from 'src/app/models/general.models';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private firestore: Firestore) {
  }

  createDocument<T>(data: T, url: string): Promise<void> {
    const dataDoc = doc(this.firestore, 'siling/' + url);
    return setDoc(dataDoc, data);
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

  getDataByCollectionName(name: string): Observable<SilingData[]> {
    const collectionByName: CollectionReference<DocumentData> = collection(this.firestore, 'siling/' + name + '/all');
    return collectionSnapshots(collectionByName).pipe(
      take(1),
      catchError((err) => {
        console.error(err);
        return throwError(() => {
          const error: any = new Error(err);
          error.timestamp = Date.now();
          return error;
        });
      }),
      map((queryDocs: QueryDocumentSnapshot<DocumentData>[]) => {
        return queryDocs.map((queryDoc: QueryDocumentSnapshot<DocumentData>) => {
          const data = queryDoc.data() as SilingData;
          const id = queryDoc.id;
          return {
            id,
            ...data
          };
        })
      })
    );
  }

}
