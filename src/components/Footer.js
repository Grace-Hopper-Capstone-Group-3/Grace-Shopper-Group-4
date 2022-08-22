import React from "react";
import githublogo from "./imgs/GitHub-Mark-Light-32px.png" 

const Footer = () => {
    return (
        <footer className="footer-container">
        <div className="footer-text-container">
          <p>
            Website built and designed by Luke Bourneuf, Austin Benton, and Max
            Villagomez
          </p>
        </div>
        <a href="https://github.com/Grace-Hopper-Capstone-Group-3/Grace-Shopper-Group-3.git">
          <div className="github-logo">
            <img src={githublogo}/>
          </div>
        </a>
      </footer>
    )
}

export default Footer