declare global {
    declare namespace NodeJs {
        interface ProcessEnv {
            PORT?: number;
            MONGO_PATH: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
// export {};
