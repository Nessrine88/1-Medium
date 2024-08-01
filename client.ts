import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Define your Sanity client configuration
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production",
};

// Create and export the Sanity client instance
export const sanityClient = createClient(config);

// Create and export the URL builder function
export const urlFor = (source:any) => imageUrlBuilder(sanityClient).image(source);

// Handle user authentication (Note: This example is illustrative)
// You should replace this with your own logic to manage authentication
export const useCurrentUser = () => {
    // Example of a custom hook for user authentication
    // This is where you integrate with your authentication provider
    // For example:
    // const [user, setUser] = useState(null);
    // useEffect(() => {
    //     fetch('/api/current-user')
    //         .then(response => response.json())
    //         .then(data => setUser(data));
    // }, []);
    // return user;

    // Placeholder: Adjust with actual implementation
    return null; 
};
