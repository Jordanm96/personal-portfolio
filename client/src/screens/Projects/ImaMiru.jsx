import React from "react";
import DetailNav from "../../components/DetailNav/DetailNav";

const ImaMiru = () => {
  return (
    <div>
      <DetailNav />
      <img src="https://i.imgur.com/pXD4D0f.png" alt="Ima Miru" />
      <h4>Ima Miru</h4>
      <p>
        <strong>Description:</strong> Ima Miru (which translates to "watch now"
        in Japanese) is an application where users can browse various anime
        shows and their corresponding descriptions. Users who sign up are able
        to add new shows to the current list on the main page. Users may also
        save shows of interest in a section called Watchlist. The Watchlist
        varies per user and lists out any show that user has saved to watch
        later.
      </p>
      <p>
        <strong>Built Using:</strong>{' '}React, JS, CSS, Express, MongoDB
      </p>
    </div>
  );
};

export default ImaMiru;
