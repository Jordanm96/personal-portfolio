import React from "react";
import DetailNav from "../../components/DetailNav/DetailNav";
import "./ProjectDetail.css";
import { Link } from "react-router-dom";

const TetrisClone = () => {
  return (
    <>
      <DetailNav />
      <div className="body">
        <section>
          <div className="project-detail-container">
            <a
              href="http://tetris-j.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/FirCUVg.png" alt="Tetris" />
            </a>
            <div className="project-details">
              <h4>Tetris Clone!</h4>
              <p>
                <strong>Description:</strong>To gain more understanding of react
                hooks, I made a mini version of Tetris. Using styled components
                for the first time, I was able to bring the game to life with
                accurate shapes and colors. Play the game by lining up
                tetrominos in rows to get points. The game is over when a block
                gets jammed at the top!
              </p>
              <p>
                <strong>Built Using:</strong> React, JS, Styled Components
              </p>
              <div className="git-app-links">
                <a
                  href="http://tetris-j.surge.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed App <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="https://github.com/Jordanm96/tetris"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <i className="fas fa-external-link-alt"></i>
                </a>
                <Link to="/group-run">
                  Next Project <i className="fas fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TetrisClone;
