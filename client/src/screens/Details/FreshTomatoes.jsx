import React from "react";
import DetailNav from "../../components/DetailNav/DetailNav";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  return (
    <>
      <DetailNav />
      <div className="body">
        <section>
          <div className="project-detail-container">
            <img src="https://i.imgur.com/PzMIvjU.png" alt="Fresh Tomatoes" />
            <div className='project-details'>
              <h4>Fresh Tomatoes</h4>
              <p>
                <strong>Description:</strong> Fresh Tomatoes (inspired by rotten
                tomatoes) is an application that allows users to access a list
                of movies with reviews written by the users themselves. People
                who access this app will create an account so that they may view
                and add movies they have watched. Creating an account will also
                allow users to leave reviews on movies they have watched. Fresh
                Tomatoes lets the user become a movie critic, as they write
                their own personal opinions on the movie and leave it with a
                rating to help other users decide what to watch next.
              </p>
              <p>
                <strong>Built Using:</strong> REACT, JS, CSS, POSTGRESQL, RUBY
                ON RAILS
              </p>
              <div className='git-app-links'>
              <a href='https://fresh-tomatoes.netlify.app/' target='_blank' rel='noopener noreferrer'>Visit App {'->'}</a>
              <a href='https://github.com/Jordanm96/fresh-tomatoes' target='_blank' rel='noopener noreferrer'>GITHUB</a>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
