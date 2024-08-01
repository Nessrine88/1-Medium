// Fetch posts directly in the component
import { sanityClient } from "../../client";
import { Post } from "./types";

export const fetchPosts = async (): Promise<Post[]> => {
    const query = `*[_type == "post"]{
      _id,
      title,
      author -> {name, image},
      description,
      mainImage,
      slug
    }`;
    
    const posts = await sanityClient.fetch(query);
    return posts as Post[];
  };