import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Service {
    Client = new Client()
    databases;
    bucket;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);

    }
    // slug is id of post 

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatebaseId,
                conf.appwritecoolectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.error(error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatebaseId,
                conf.appwritecoolectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.error(error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatebaseId,
                conf.appwritecoolectionId,
                slug
            )
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatebaseId,
                conf.appwritecoolectionId,
                slug
            )

        } catch (error) {
            console.error(error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatebaseId,
                conf.appwritecoolectionId,
                queries
            )
        } catch (error) {
            console.error(error);
        }
    }

    // file upload service

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwritebucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwritebucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    getfilePreview(fileId){
       return this.bucket.getFilePreview(
        conf.appwritebucketId,
        fileId
       )

    }
}

const service = new Service();
export default service;

