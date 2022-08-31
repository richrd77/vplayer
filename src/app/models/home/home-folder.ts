import { FileInfo } from "@capacitor/filesystem";

export class HomeFolder {
    name: string;
    path: string;

    constructor({ name, uri }: FileInfo) {
        this.name = name;
        this.path = uri;
    }
}