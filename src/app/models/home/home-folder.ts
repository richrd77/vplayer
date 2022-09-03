import { FileInfo } from "@capacitor/filesystem";

export class HomeFolder {
    name: string;
    path: string;
    type: string;
    isRead: boolean;

    constructor({ name, uri, type }: FileInfo) {
        this.name = name;
        this.path = uri;
        this.type = type;
        this.isRead = false;
    }
}