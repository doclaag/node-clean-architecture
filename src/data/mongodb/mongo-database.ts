import mongoose from 'mongoose';

interface Options {
    mongoUrl: string;
    dbName: string;
}

export class MongoDatabase {
    static async connect(options: Options) {

        const { dbName, mongoUrl } = options;

        try {
            await mongoose.connect(mongoUrl, {
                dbName: dbName,
            });
        } catch (error) {
            console.log('MongoDatabase.connect', error);
            throw error;
        }
    };
    static disconnect() {
        console.log('MongoDatabase.disconnect');
    };
};