import React, { useState } from "react";
import data from "../courses.json";

function getQueryCourses(query) {
  return [];
}

const Searchbar = () => {
  const [courses, setCourses] = useState([]);

  return (
    <div>
      <input onChange={(e) => setCourses(getQueryCourses(e.target.value))} />
      {courses.map((course) => (
        <div></div>
      ))}
    </div>
  );
};

export default Searchbar;
