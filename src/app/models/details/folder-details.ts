import { FileInfo } from "@capacitor/filesystem";

export class FolderDetail {
    name: string;
    path: string;
    files: FileDetail[];

    constructor({ uri, files }: any) {
        this.name = '';
        this.path = uri;
        this.files = files;
    }
}

export class FileDetail {
    name: string;
    path: string;
    constructor({ name, uri }: FileInfo) {
        this.name = name;
        this.path = uri;
    }
}