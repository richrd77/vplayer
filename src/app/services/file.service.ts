import { Injectable } from '@angular/core';
import { Filesystem, Directory, Encoding, FileInfo } from '@capacitor/filesystem';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FolderDetail } from '../models/details/folder-details';
import { HomeFolder } from '../models/home/home-folder';

@Injectable()
export class FileService {
    public async GetDirectories(): Promise<HomeFolder[]> {
        let p: string | undefined = '';
        const result: HomeFolder[] = [];
        debugger;
        let loopactive = true;
        while (loopactive) {
            // this.ExtractDirectories(p).then(e => {
            //     console.log(e);
            //     console.log(e.map(a => a.path));
            //     console.log(e.map(a => a.isRead));
            // });
            try {
                let extractedFiles = await this.ExtractDirectories(p);
                console.log(`path=${p}; extractedfiles=${extractedFiles.map(d => d.path)}`);
                result.push(...extractedFiles);
            } catch (error) {
                console.log(error);
            }
            if (p) {
                const found = result.find(d => d.path === p);
                console.log('found', found);
                if (found) {
                    found.isRead = true;
                }
            }
            p = result.find(f => !f.isRead)?.path;
            if (!p) {
                break;
            }
            console.log('new path=' + p);
            console.log(result.filter(f => !f.isRead).map(p => p.path));
            console.log(result.filter(f => f.isRead).map(p => p.path));
        }
        return result;
    }

    private async ExtractDirectories(path: string | undefined): Promise<HomeFolder[]> {
        return (await Filesystem.readdir({
            directory: Directory.ExternalStorage,
            path: path ? path : ''
        })).files.map(f => new HomeFolder(f)).filter(f => f.name.indexOf('.') != 0);
    }

    public ExtractFiles(path: string): Observable<FolderDetail> {
        return from(Filesystem.readdir({
            directory: Directory.Documents,
            path: path
        })).pipe(map(f => {
            console.log(f);
            return new FolderDetail({});
        }));
    }
}