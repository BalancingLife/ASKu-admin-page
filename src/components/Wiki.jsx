import React from "react";
import "./bookmark-table.css";

const Wiki = () => {
  return (
    <div className="wiki">
      <div className="frame">
        <h2>북마크 랭킹</h2>

        <table className="bookmarkTable">
          <tr>
            <th scope="col">랭킹</th>
            <th scope="col">문서명</th>
            <th scope="col">북마크 개수</th>
          </tr>
          <tr>
            <td>1</td>
            <td>A</td>
            <td>36</td>
          </tr>
          <tr>
            <td>2</td>
            <td>B</td>
            <td>31</td>
          </tr>
          <tr>
            <td>3</td>
            <td>C</td>
            <td>17</td>
          </tr>
          <tr>
            <td>4</td>
            <td>D</td>
            <td>15</td>
          </tr>
          <tr>
            <td>5</td>
            <td>E</td>
            <td>11</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Wiki;
