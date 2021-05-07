import React from "react";
import DetailNav from "../../components/DetailNav/DetailNav";
import "./ProjectDetail.css";
import { Link } from "react-router-dom";

const ImaMiru = () => {
  return (
    <>
      <DetailNav />
      <div className="body">
        <section>
          <div className="project-detail-container">
            <a
              href="https://ima-miru.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/pXD4D0f.png" alt="Ima Miru" />
            </a>
            <div className="project-details">
              <h4>Ima Miru</h4>
              <p>
                <strong>Description:</strong> Ima Miru (which translates to
                "watch now" in Japanese) is an application where users can
                browse various anime shows and their corresponding descriptions.
                Users who sign up are able to add new shows to the current list
                on the main page. Users may also save shows of interest in a
                section called Watchlist. The Watchlist varies per user and
                lists out any show that user has saved to watch later.
              </p>
              <p>
                <strong>Built Using:</strong> React, JS, CSS, Express, MongoDB
              </p>
              <div className="git-app-links">
                <a
                  href="https://ima-miru.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed App <i class="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="https://github.com/Jordanm96/ima-miru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github <i class="fas fa-external-link-alt"></i>
                </a>
                <Link to="/group-run">Next Project <i class="fas fa-angle-double-right"></i></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ImaMiru;
