import React from "react";
import { useLocation } from 'react-router-dom';
import AccordianMain from "../components/AccordianMain";
import "./resources.css";

const Resources = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultExpandedIndex = parseInt(queryParams.get('expand')) || 0;

  return (
    <div>
    
      <AccordianMain defaultExpandedIndex={defaultExpandedIndex} />
    </div>
  );
};

export default Resources;
