import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client
			.setEndpoint("https://cloud.appwrite.io/v1")
			.setProject("66055275628ba1cbb0a0");
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	async createPost({ title, slug, content, featuredImage, status, userId }) {
		try {
			// Construct the document object
			const document = {
				title,
				content,
				status,
				userId,
				// Only include 'featuredImage' if it's provided
				...(featuredImage && { featuredImage }),
			};

			// Call the createDocument function with the updated document object
			return await this.databases.createDocument(
				"660553694b06153ba4c6",
				"6605539b9ea7fe30917c",
				slug,
				document
			);
		} catch (error) {
			console.log("Appwrite service :: createPost :: error", error);
			throw error;
		}
	}

	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				"660553694b06153ba4c6",
				"6605539b9ea7fe30917c",
				slug,
				{
					title,
					content,
					featuredImage,
					status,
				}
			);
		} catch (error) {
			console.log("Appwrite serive :: updatePost :: error", error);
		}
	}

	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				"660553694b06153ba4c6",
				"6605539b9ea7fe30917c",
				slug
			);
			return true;
		} catch (error) {
			console.log("Appwrite serive :: deletePost :: error", error);
			return false;
		}
	}

	async getPost(slug) {
		try {
			return await this.databases.getDocument(
				"660553694b06153ba4c6",
				"6605539b9ea7fe30917c",
				slug
			);
		} catch (error) {
			console.log("Appwrite serive :: getPost :: error", error);
			return false;
		}
	}

	async getPosts(queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				"660553694b06153ba4c6",
				"6605539b9ea7fe30917c",
				queries
			);
		} catch (error) {
			console.log("Appwrite serive :: getPosts :: error", error);
			return false;
		}
	}

	// file upload service

	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				"660554f8bc548483b10a",
				ID.unique(),
				file
			);
		} catch (error) {
			console.log("Appwrite serive :: uploadFile :: error", error);
			return false;
		}
	}

	async deleteFile(fileId) {
		try {
			await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
			return true;
		} catch (error) {
			console.log("Appwrite serive :: deleteFile :: error", error);
			return false;
		}
	}

	getFilePreview(fileId) {
		return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
	}
}

const service = new Service();
export default service;
