declare class VFile {
    constructor(contents: string);
    constructor(vFile: VFile);
    constructor(options: { directory?: string, filename?: string, extension?: string, contents?: string });

    quite: boolean;
    contents: string;
    directoty: string;
    filename: string;
    extension: string;
    basename(): string;
    messages: VFile.VFileMessage[];
    history: string[];
    toString(): string;
    filePath(): string;
    move(options: { directory?: string, filename?: string, extension?: string }): VFile;
    namespace(key: string): any;
    message(reason: string | Error, location?: any): VFile.VFileMessage;
    warn(reason: string | Error, location?: any): VFile.VFileMessage;
    fail(reason: string | Error, location?: any): VFile.VFileMessage;

    hasFailed(): boolean;
}
declare namespace VFile {
    export interface VFileMessage {
        /** The Acctual Message */
        message: string;
        /** (Starting) location of the message, preceded by its file-path when available, and joined by ':'. Used by the native Error#toString(); */
        name: string;
        /** File-Path */
        file: string;
        /** Reason for message */
        reason: string;
        /** Line of error, when available */
        line?: number;
        /** Column of error, when available */
        column?: number;
        /** Stack of message, when available */
        stack?: string;
        /** Whether the associated file is still processable */
        fatal?: boolean;
        /** Full range information, when available.Has start and end properties, both set to an object with line and column, set to number */
        location: {
            start: { line?: number, column?: number },
            end: { line?: number, column?: number },
        };
    }
}

export = VFile;