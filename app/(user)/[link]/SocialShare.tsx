// components/SocialShare.js
"use client"
import React from 'react';
import {TwitterShareButton,TwitterIcon,LinkedinShareButton,LinkedinIcon,PinterestShareButton,PinterestIcon,EmailShareButton,EmailIcon, WhatsappShareButton, WhatsappIcon,} from 'react-share';
import { shareToWhatsApp } from './SharetoWhatsapp';
import { FaFacebookF, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { shareToFacebook } from './SharetoFacebook';
import { BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { RiWhatsappFill } from 'react-icons/ri';

const SocialShare = ({ data }:{data:any}) => {
  return (
    <div className="social-share flex gap-2">
            <button className='p-3 text-lg border border-gray-300 rounded-2xl hover:text-blue-500 hover:border-blue-500 font-medium hover:bg-gray-50 transition-all duration-300' onClick={() => shareToFacebook(data)}><FaFacebookF  /></button>


      <TwitterShareButton url={data.url} title={data.title} via="yourTwitterHandle">
        <p className={`p-3 text-lg border border-gray-300 rounded-2xl hover:text-blue-500 hover:border-blue-500 font-medium hover:bg-gray-50 transition-all duration-300`}>
              <FaXTwitter />
            </p>
      </TwitterShareButton>

      <LinkedinShareButton url={data.url} title={data.title} summary={data.body}>
        <p className={`p-3 text-lg border border-gray-300 rounded-2xl hover:text-blue-500 hover:border-blue-500 font-medium hover:bg-gray-50 transition-all duration-300`}>
              <FaLinkedinIn />
            </p>
      </LinkedinShareButton>

      <PinterestShareButton url={data.url} media={data.image} description={data.body}>
        <p className={`p-3 text-lg border border-gray-300 rounded-2xl hover:text-red-500 hover:border-red-500 font-medium hover:bg-gray-50 transition-all duration-300`}>
              <FaPinterestP />
            </p>
      </PinterestShareButton>

      <EmailShareButton url={data.url} subject={data.title} body={data.body}>
        <p className={`p-3 text-lg border border-gray-300 rounded-2xl hover:text-blue-500 hover:border-blue-500 font-medium hover:bg-gray-50 transition-all duration-300`}>
              <MdEmail />
            </p>
      </EmailShareButton>


      <button className='p-3 text-lg border border-gray-300 rounded-2xl hover:text-green-500 hover:border-green-500 font-medium hover:bg-gray-50 transition-all duration-300' onClick={() => shareToWhatsApp(data)}><RiWhatsappFill /></button>
    </div>
  );
};

export default SocialShare;
