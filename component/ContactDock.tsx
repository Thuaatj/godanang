"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function ContactDock() {
  const contacts = [
    {
      name: "Facebook",
      icon: FaFacebook,
      link: "https://www.facebook.com/profile.php?id=61587024129118",
      bg: "from-blue-500 to-blue-700",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/godanang6868/",
      bg: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      name: "Threads",
      icon: FaThreads,
      link: "https://www.threads.com/@godanang6868?hl=vi",
      bg: "from-black to-gray-800",
    },
    // {
    //   name: "TikTok",
    //   icon: FaTiktok,
    //   link: "#",
    //   bg: "from-gray-900 to-black",
    // },
    {
      name: "Phone",
      icon: FaPhoneAlt,
      link: "tel:0776711777",
      bg: "from-green-500 to-green-700",
    },
  ];

  return (
    <>
      <div className="fixed bottom-28 right-6 z-50 flex flex-col gap-4">
        {contacts.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, -6, 6, -6, 6, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                rotate: 0,
              }}
              whileTap={{ scale: 0.95 }}
              className={`
                group relative
                w-14 h-14
                flex items-center justify-center
                rounded-full
                bg-gradient-to-br ${item.bg}
                shadow-xl
                hover:shadow-2xl
                transition-all duration-300
              `}
            >
              <span className="absolute inset-0 rounded-full bg-white opacity-10 animate-ping"></span>

              <Icon className="text-white text-xl relative z-10" />

              <span className="absolute right-16 whitespace-nowrap bg-black text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                {item.name}
              </span>
            </motion.a>
          );
        })}
      </div>

      {/* Chatwoot Script */}
      <Script id="chatwoot-widget" strategy="afterInteractive">
        {`
          (function(d,t) {
            var BASE_URL="https://crm.smb.govietnamtour.net";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 'k6scCCCEz1wk8PKYsfMRmce3',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");
        `}
      </Script>

      <style jsx global>{`
  body .woot-widget-holder {
    bottom: 120px !important;
  }
`}</style>
    </>
  );
}