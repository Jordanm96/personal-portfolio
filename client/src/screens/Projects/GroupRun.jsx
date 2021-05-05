import React from "react";
import DetailNav from "../../components/DetailNav/DetailNav";

const GroupRun = () => {
  return (
    <>
      <DetailNav />
      <div className="body">
        <section>
          <div className="project-detail-container">
          <img src="https://i.imgur.com/cQXUbQw.png" alt="Group Run" />
            <div className="project-details">
            <h4>Group Run</h4>
              <p>
              <strong>Description:</strong> Group Run is an application that allows
        users to enter in and keep track of their runs/jogs. The home page
        displays all run entries created by all users. This app contains an "Add
        run" section that leads the user to a form where they may enter in their
        run data including: the date, their name, distance, time, calories
        burned and an emoji ranking system that will let them rate how
        easy/fun/challenging a specific run was. Each entry is tracked on the
        homepage users may view their progress and compare their stats with
        others.
              </p>
              <p>
              <strong>Built Using:</strong> React, JS, CSS, Airtable
              </p>
              <div className="git-app-links">
                <a>DEPLOYED APP</a>
                <a>GITHUB</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GroupRun;
