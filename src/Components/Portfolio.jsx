/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpeg";

const imageAltText = "book, copy and pen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [

  {
    title: "Kathmandu University Computer Club",
    description:
      "I am the Vice President of our college computer club - KUCC",
    url: "https://kucc.ku.edu.np/",
  },
  {
    title: "AI/ML Nepal",
    description:
      "I am a core community member at AI/ML Nepal - a pay-it-forward community of AI/ML proffesionals and enthusisasts.",
    url: "https://www.aimlnepal.com/",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    description:
      "I am currently an Alpha MLSA. I am working on upgrading to the Beta MLSA badge.",
    url: "https://drive.google.com/file/d/11oz87seV_jUyvQeYq78GSBzicqdus2s1/view?usp=drive_link",
  },
  {
    title: "My Resume",
    description:
      "Take detailed a look at my Education, Work and Volunteer Experiences as well as other Certifications and Honors.",
    url: "https://drive.google.com/file/d/11oz87seV_jUyvQeYq78GSBzicqdus2s1/view?usp=drive_link",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>My Involvements</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
