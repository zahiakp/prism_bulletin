// components/SocialShare.js
"use client"
import React from 'react';
import {FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,LinkedinShareButton,LinkedinIcon,PinterestShareButton,PinterestIcon,EmailShareButton,EmailIcon, WhatsappShareButton, WhatsappIcon,} from 'react-share';
import { shareToWhatsApp } from './SharetoWhatsapp';
import { encodeId } from '@/components/common/Decode';

const SocialShare = ({ data }:{data:any}) => {
  const bodyText = data.body.replace(/<[^>]+>/g, '').slice(0, 500);
  
  // Construct the post URL
  const postUrl = `https://bulletin.prismonline.org/${data.url}_${encodeId(data.id)}`;

  // WhatsApp sharing URL with properly constructed body and post URL
  const message = `*${data.title}*\n\n${bodyText}\n\nRead more:\n${postUrl}`;

  // Correctly encode the message for WhatsApp URL
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  return (
    <div className="social-share flex gap-2">
      <FacebookShareButton url={data.url} title={data.title} hashtag="#yourhashtag">
        <FacebookIcon size={40} round />
      </FacebookShareButton>

      <TwitterShareButton url={data.url} title={data.title} via="yourTwitterHandle">
        <TwitterIcon size={40} round />
      </TwitterShareButton>

      <LinkedinShareButton url={data.url} title={data.title} summary={data.body}>
        <LinkedinIcon size={40} round />
      </LinkedinShareButton>

      <PinterestShareButton url={data.url} media={data.image} description={data.body}>
        <PinterestIcon size={40} round />
      </PinterestShareButton>

      <EmailShareButton url={data.url} subject={data.title} body={data.body}>
        <EmailIcon size={40} round />
      </EmailShareButton>
      <WhatsappShareButton url={whatsappUrl} >
        <WhatsappIcon size={40} round></WhatsappIcon>
      </WhatsappShareButton>


      {/* <button onClick={() => shareToWhatsApp(data)}>Share on WhatsApp</button> */}
    </div>
  );
};

export default SocialShare;
