// components/SocialShare.js
"use client"
import React from 'react';
import {FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,LinkedinShareButton,LinkedinIcon,PinterestShareButton,PinterestIcon,EmailShareButton,EmailIcon, WhatsappShareButton, WhatsappIcon,} from 'react-share';

const SocialShare = ({ data1 }:{data1:any}) => {
    const data = data1[0];
  return (
    <div className="social-share">
      <FacebookShareButton url={data.url} title={data.title} hashtag="#yourhashtag">
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={data.url} title={data.title} via="yourTwitterHandle">
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={data.url} title={data.title} summary={data.body}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <PinterestShareButton url={data.url} media={data.image} description={data.body}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>

      <EmailShareButton url={data.url} subject={data.title} body={data.body}>
        <EmailIcon size={32} round />
      </EmailShareButton>
      <WhatsappShareButton url={data.url} >
        <WhatsappIcon size={32} round></WhatsappIcon>
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
