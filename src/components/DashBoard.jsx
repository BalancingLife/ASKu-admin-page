import React from "react";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="frame">
        <div className="item">
          <div className="rounded-box">위키</div>
        </div>
        <div className="item">
          <div className="rounded-box">사용자</div>
        </div>
        <div className="item">
          <div className="rounded-box">관리자</div>
        </div>
        <div className="item">
          <div className="rounded-box">설정</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
