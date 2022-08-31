import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding, FileInfo } from '@capacitor/filesystem';
import { HomeFolder } from '../models/home/home-folder';

@Injectable()
export class FileService {
    public async GetDirectories(): Promise<HomeFolder[]> {
        const folders = await Filesystem.readdir({
            directory: Directory.ExternalStorage,
            path: ''
        });
        return folders.files.map(f => new HomeFolder(f));
    }
}