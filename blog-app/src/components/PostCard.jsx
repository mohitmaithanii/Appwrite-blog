import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
	const filePreviewUrl = appwriteService.getFilePreview(featuredImage);

	if (!featuredImage || !filePreviewUrl) {
		return (
			<div className="w-full p-4 bg-gray-100 rounded-xl">
				<h2 className="text-xl font-bold">{title}</h2>
				<p>Featured image not available</p>
				<Link to={`/post/${$id}`} className="text-blue-500 hover:underline">
					Read more
				</Link>
			</div>
		);
	}

	return (
		<Link to={`/post/${$id}`}>
			<div className="w-full p-4 bg-gray-100 rounded-xl">
				<div className="justify-center w-full mb-4">
					<img src={filePreviewUrl} alt={title} className="rounded-xl" />
				</div>
				<h2 className="text-xl font-bold">{title}</h2>
			</div>
		</Link>
	);
}

export default PostCard;
