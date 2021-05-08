import React from "react";
import DetailNav from "../../components/DetailNav/DetailNav";
import { Link } from "react-router-dom";

const GroupRun = () => {
  return (
    <>
      <DetailNav />
      <div className="body">
        <section>
          <div className="project-detail-container">
            <a
              href="https://group-run-0f92c7.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://i.imgur.com/cQXUbQw.png" alt="Group Run" />
            </a>
            <div className="project-details">
              <h4>Group Run</h4>
              <p>
                <strong>Description:</strong> Group Run is an application that
                allows users to enter in and keep track of their runs/jogs. The
                home page displays all run entries created by all users. This
                app contains an "Add run" section that leads the user to a form
                where they may enter in their run data including: the date,
                their name, distance, time, calories burned and an emoji ranking
                system that will let them rate how easy/fun/challenging a
                specific run was. Each entry is tracked on the homepage users
                may view their progress and compare their stats with others.
              </p>
              <p>
                <strong>Built Using:</strong> React, JS, CSS, Airtable
              </p>
              <div className="git-app-links">
                <a
                  href="https://group-run-0f92c7.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deployed App <i className="fas fa-external-link-alt"></i>
                </a>
                <a
                  href="https://github.com/Jordanm96/Group-Run"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github <i className="fas fa-external-link-alt"></i>
                </a>
                <Link to="/">Home <i className="fas fa-angle-double-right"></i></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GroupRun;
