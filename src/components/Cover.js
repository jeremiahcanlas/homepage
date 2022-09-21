import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { motion, AnimatePresence } from "framer-motion";

export default function Cover() {
  const query = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          gatsbyImageData(
            transformOptions: { fit: COVER, cropFocus: ATTENTION }
          )
        }
      }
    }
  `);

  //the list
  const images = query.allImageSharp.nodes;
  const length = images.length;

  // const randomizer = Math.floor(Math.random()*length)
  const [current, setCurrent] = useState(Math.floor(Math.random() * length));

  useEffect(() => {
    const timer = setTimeout(() => {
      current === length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }, 30000);

    return () => clearTimeout(timer); //this will unmount the timer and wont mess up the timeout
  }, [current, length]);

  return (
    <div className="cover">
      <AnimatePresence>
        {images.map((img, index) => {
          const image = getImage(img);

          return (
            current === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={index + 3}
                transition={{ duration: 3 }}
              >
                <div className="overlay" />
                <GatsbyImage image={image} className="image" alt="none" />
              </motion.div>
            )
          );
        })}
      </AnimatePresence>
    </div>
  );
}
