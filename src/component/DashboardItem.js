import "../styles/dashboarditem.css";
import { useState } from "react";
import logo from "../images/logo-devlens.svg";

function DashboardItem({tile, description, logosrc}) {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="dashboard-item">
      <div className="dashboard-item-content">
        <img className="dashboard-item-img" src={logosrc || logo } alt="dev" />
        <div className="dashboard-item-info">
          <h3 className="dashboard-item-title">
            {tile || "Title of the Extension"}
          </h3>
          <p className="dashboard-item-desc">
           {description || " Quickly inspect page layouts and visualize element boundaries.."}
          </p>
        </div>
        </div>

        <div className="dashboard-item-actions">
          <button className="dashboard-item-remove-btn">Remove</button>
          <label className="toggle-switch">
            <input
              className="dashboard-item-toggle-input"
              type="checkbox"
              checked={isToggled}
              onChange={() => setIsToggled((prev) => !prev)}
            />
            <span className="slider"></span>
          </label>
      </div>
    </div>
  )
}

export default DashboardItem;