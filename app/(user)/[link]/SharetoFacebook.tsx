import { encodeId } from "@/components/common/Decode";

interface PostData {
    id: string;
    title: string;
    body: string;
    url: string;
}

export const shareToFacebook = (post: PostData) => {
    // Construct the post URL (with ID encoded)
    const postUrl = `https://bulletin.prismonline.org/${post?.url}_${encodeId(post?.id)}`;

    // Facebook share URL
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`;

    // Open the Facebook sharing URL in a new window/tab
    window.open(facebookUrl, '_blank');
};
