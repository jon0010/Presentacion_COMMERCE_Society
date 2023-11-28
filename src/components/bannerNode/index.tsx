import React from "react";
import bannerNode from "../../assets/bannerNode.jpg";

export const NodeBanner = () => {
  return (
    <div className="banner-container mx-auto">
      <img
        src={bannerNode}
        alt="Logo de Node.js"
        className="node-logo img-fluid"
      />
    </div>
  );
};
