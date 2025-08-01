import { Injectable } from '@angular/core';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';

@Injectable({ providedIn: 'root' })
export class FileShareService {
  private storage = getStorage();

  async uploadFile(file: File, userId: string): Promise<string> {
    const fileRef = ref(this.storage, `files/${userId}/${file.name}`);
    await uploadBytes(fileRef, file);
    return getDownloadURL(fileRef);
  }

  async listFiles(userId: string): Promise<string[]> {
    const listRef = ref(this.storage, `files/${userId}`);
    const res = await listAll(listRef);
    return Promise.all(res.items.map(item => getDownloadURL(item)));
  }
}
