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
        image="https://i.ibb.co/NVzhKmf/watersysaus.png"
        title="Water Systems Australia"
        category="Mobile-Friendly Web Application"
        description="This project was developed in a team for a capstone studio course at uni. Our team was presented with the document
                     proposing this concept, and we then developed it based on spec. The implementation meets all the requirements of
                     the original proposal. Unfortunately I do not have a live version of this application to exhibit since it is hosted
                     on the UQCloud which requires UQ authentication. The code base is located on my GitHub though, and the SQL file is
                     located there too."
        github="https://github.com/nb0yc33/watersysaus"
      />
      <Thumbnail
        image="https://i.ibb.co/KymSXXt/busting.png"
        title="Busting"
        category="Mobile-Friendly Web Application"
        description="I developed this web tool with three other team mates for the UQ Computing Society 2020 Hackathon
                    (over the span of a weekend). Busting directs users to their nearest public (government-managed)
                    toilet. This application won the 'Most Philanthropic Award'. "
        github="https://github.com/lachlanharnett/UQCS-Hackathon-2020"
        link="https://lachlanharnett.github.io/UQCS-Hackathon-2020/"
      />
      <Thumbnail
        image="https://i.ibb.co/MnQZXk1/tc.png"
        title="TECH_CENTRAL"
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