import { encodeId } from "@/components/common/Decode";

interface PostData {
    id: string;
    title: string;
    body: string;
    url: string;
}

export const shareToWhatsApp = (post: PostData) => {
    // Limit body text to 500 characters and remove HTML tags
    const bodyText = post?.body?.replace(/<[^>]+>/g, '').slice(0, 500);
  
    // Construct the post URL
    const postUrl = `https://bulletin.prismonline.org/${post?.url}_${encodeId(post?.id)}`;
  
    // WhatsApp sharing URL with properly constructed body and post URL
    const message = `*${post?.title}*\n\n${bodyText}\n\nRead more:\n${postUrl}`;

    // Correctly encode the message for WhatsApp URL
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    // Open the WhatsApp sharing URL in a new window/tab
    window.open(whatsappUrl, '_blank');
};
