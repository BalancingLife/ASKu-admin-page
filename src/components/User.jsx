import React from "react";

const User = () => {
  return (
    <div className="user">
      <div className="frame">
        <h2>사용자 리스트</h2>
        <table className="bookmarkTable">
          <tr>
            <th scope="col">index</th>
            <th scope="col">닉네임</th>
            <th scope="col">기여도</th>
          </tr>
          <tr>
            <td>1</td>
            <td>김</td>
            <td>36</td>
          </tr>
          <tr>
            <td>2</td>
            <td>이</td>
            <td>31</td>
          </tr>
          <tr>
            <td>3</td>
            <td>박</td>
            <td>17</td>
          </tr>
          <tr>
            <td>4</td>
            <td>최</td>
            <td>15</td>
          </tr>
          <tr>
            <td>5</td>
            <td>정</td>
            <td>11</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default User;
