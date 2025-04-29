import React from "react";
import { motion } from "framer-motion";

const DogImage = ({ pictureDog }) => (
  <div>
    <motion.img
      src={pictureDog}
      alt="Random Dog"
      className="dog-image"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

export default DogImage;
