import React from "react"
import Thumbnail from './thumbnail.jsx';
import './projects.scss';
 
function Projects(props) {
  return (
    <div className="thumbnails">
      <Thumbnail
        image="https://i.ibb.co/yXgBPgV/wescarr.png"
        title="Wesley Cardiology Records"
        category="Web Application"
        description="I'm currently developing a data entry solution for the Wesley Hospital's Cardiology area.
                    This web application enables medical professionals to input comprehensive data for all cardiology procedures
                    that are performed. My role has involved both backend (PHP with the CodeIgniter framework) and frontend
                    work (HTML, CSS, JS). I have also been responsible for overhauling the database via MSSQL. "
        github="https://github.com/nb0yc33/wesleycardiology"
      />

      <Thumbnail
        image="https://i.ibb.co/MnQZXk1/tc.png"
        category="Web Application"
        description="TECH_CENTRAL is a video-sharing platform that I developed for the course INFS3202-Web Information Systems. 
                     It is designed to be specifically for sharing tech reviews and tech-related videos with other people interested
                     in technology."
        github="https://github.com/nb0yc33/TECH_CENTRAL"
      />

      <Thumbnail
        image="https://i.ibb.co/8XLqdx2/moviepicker.png"
        title="MoviePicker"
        category="Web Application"
        description="MoviePicker is a simple responsive web application that I developed for the purpose of making it
                    easier for groups of people to pick a good movie to watch. The user first selects a genre, and then they are presented
                    with a random critically acclaimed movie belonging to that genre."
        link="http://moviepicker.online/"
      />
    </div>
  )
}
 
export default Projects;