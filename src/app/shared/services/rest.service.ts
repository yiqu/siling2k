import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, doc, onSnapshot, DocumentReference, docSnapshots, collectionSnapshots,
  CollectionReference, DocumentData, FieldPath, collectionData, QueryDocumentSnapshot,
  DocumentSnapshot, collection,  } from '@angular/fire/firestore';
import { setDoc, addDoc, documentId , getDoc, updateDoc} from '@angular/fire/firestore';
import { EMPTY, Observable, throwError } from 'rxjs';
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
    return setDoc(dataDoc, data as any);
  }

  updateDocument(silingData: SilingData): Promise<void> {
    if (silingData && silingData.company && silingData.id) {
      const dataDocRef: DocumentReference<DocumentData> = doc(this.firestore, 'siling/' +
        silingData.company + "/" + "all" + "/" + silingData.id);
      const dataDoc = updateDoc(dataDocRef, {
        amount: silingData.amount
      });
      return dataDoc;
    }
    return Promise.resolve();
  }

  addDocumentToCollection<T>(data: T, url: string): FirebaseDocObsAndId {
    const dataDoc = doc(collection(this.firestore, 'siling/' + url));
    const id: string = dataDoc.id;
    const datawithId = {
      ...data,
      id: id
    }
    return {
      operationObs: setDoc(dataDoc, datawithId),
      id: id
    };
  }

  getDocument<T>(url: string): Observable<T> {
    const dataDoc = doc(this.firestore, 'siling/' + url);
    return docSnapshots(dataDoc).pipe(
      take(1),
      map((res: DocumentSnapshot<DocumentData>) => {
        return res.data() as T;
      }),
      catchError((err) => {
        console.error(err);
        return throwError(() => {
          const error: any = new Error(err);
          error.timestamp = Date.now();
          return error;
        });
      })
    );
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

  getCollection<T>(url: string): Observable<T[]> {
    const collectionByName: CollectionReference<DocumentData> = collection(this.firestore, 'siling/' + url);
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
          const data = queryDoc.data() as T;
          const id = queryDoc.id;
          return {
            //id,
            ...data
          };
        })
      })
    );
  }

}
