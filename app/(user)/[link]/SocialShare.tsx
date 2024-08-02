// components/SocialShare.js
"use client"
import React from 'react';
import {FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,LinkedinShareButton,LinkedinIcon,PinterestShareButton,PinterestIcon,EmailShareButton,EmailIcon, WhatsappShareButton, WhatsappIcon,} from 'react-share';

const SocialShare = ({ data1 }:{data1:any}) => {
    const data = data1[0];
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
      <WhatsappShareButton url={data.url} >
        <WhatsappIcon size={40} round></WhatsappIcon>
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
