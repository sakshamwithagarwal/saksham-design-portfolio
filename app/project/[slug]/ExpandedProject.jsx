'use client'
import React, {useEffect} from 'react'
import { motion as m } from "framer-motion";


const ExpandedProject = ({project}) => {
  const projectVariants = {
    hidden: {
      opacity: 0,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
      y: -96,
    },
    visible: {
      opacity: 1,
      transition: {
        bounce: 0.1,
        duration: 0.8,
        restDelta: 0.00001,
        type: "spring",
      },
      y: 0,
    },
  };

  // 🔝 Scroll to top on load
  useEffect(() => {
    document.querySelector(".project-container").scrollTop = 0;
  }, []);
  return (
     <m.div
      className="project-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15, delay: 0.25, ease: "easeOut" }}
    >
      {/* <button onClick={() => {document.querySelector('.project-container').scrollTop = 0}} style={{position: 'fixed', bottom: 10, left: 10}}>Top</button> */}
      { project ? (
        <m.div
          className="project-main"
          // data-scroll
          // data-scroll-speed="7"
          // data-scroll-position="top"
          // ref={scrollRef}
          variants={{
            hidden: { staggerChildren: 0.1, staggerDirection: -1 },
            visible: { staggerChildren: 0.1, staggerDirection: -1 },
          }}
          initial="hidden"
          animate="visible"
          // exit="hidden"
        >
          <m.div
            variants={projectVariants}
            className="project-content-container"
            dangerouslySetInnerHTML={{ __html: project.projectContent.html }}
          ></m.div>

          <div className="project-next"></div>
        </m.div>
      ) : (
        ""
      )} 
    </m.div> 
  )
}

export default ExpandedProject