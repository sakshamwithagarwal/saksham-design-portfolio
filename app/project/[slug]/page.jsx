// 'use client'
// import { useEffect } from "react";
// import locomotiveScroll from "locomotive-scroll";
import { motion as m } from "framer-motion";
import "./project.css";
import ExpandedProject from "./ExpandedProject";

async function getProject(params) {
  const res = await fetch("https://api-ap-south-1.hygraph.com/v2/clha5gtcw11sx01taepog266q/master", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query Projects($slug: String!) {
        projects(where: { slug: $slug }) {
          id
          projectName
          projectDescription
          projectThumbnail {
            url
          }
          tags
          slug
          projectContent {
            html
          }
        }
      }`,
      variables: {
        slug: params.slug
      }
    })
  })

  const data = await res.json();
  console.log('project',data.data);
  return data.data.projects[0];
}

const Project = async ( { params } ) => {
  console.log('slug',params);
  
  const project = await getProject(params);
  // console.log(project);
  

  return (
    <>
    <ExpandedProject project={project}/>
    </>
  );
};

export default Project;


