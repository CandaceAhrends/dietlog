import React from "react";

import "./headline.scss";

const HeadLine = ({ data }) => {
  return (
    <ul className="headline">
      <li className="headline-label ">
        <i className="fab fa-cloudscale"></i>
        <span className="headline-source headline-dots">{data.source}</span>
        <span className="headline-source headline-dots">
          {data.duration} hrs
        </span>
        {data.isTopStory ? (
          <span className="headline-source headline-dots">Top Story</span>
        ) : null}
      </li>
      <li>
        <span className="headline-header">{data.headline}</span>
      </li>
      <li className="headline-label headline-footer">
        <div>
          <span>
            <i className="fab fa-cloudscale"></i>
          </span>
          <span> {data.shares} </span>
          <span>Shares</span>
        </div>
        <div>
          <i className="fas fa-thumbs-up"></i>

          <i className="fas fa-share"></i>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </li>
    </ul>
  );
};

export default HeadLine;
