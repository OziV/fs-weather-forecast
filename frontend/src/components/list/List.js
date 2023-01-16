import React, { useContext } from "react";
import { GlobalContext } from "../../context/context";

export const List = () => {
  const { favorites } = useContext(GlobalContext);
  console.log(favorites);
  return (
    <>
      <div className="ul-container">
        <div className="divider"></div>
        <div className="list-items">
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default List;
