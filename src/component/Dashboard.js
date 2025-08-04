import React, { useState } from "react";
import DashboardItem from "./DashboardItem";
import ExtensionBar from "./ExtensionBar";
import "../styles/dashboard.css";
import styleSpyLogo from "../images/logo-style-spy.svg";
import speedboosterLogo from "../images/logo-speed-boost.svg";
import jsonWizardLogo from "../images/logo-json-wizard.svg";
import tabMasterproLogo from "../images/logo-tab-master-pro.svg";
import viewportBuddyLogo from "../images/logo-viewport-buddy.svg";
import markupNotesLogo from "../images/logo-markup-notes.svg";
import gridGuidesLogo from "../images/logo-grid-guides.svg";
import palettePickerLogo from "../images/logo-palette-picker.svg";
import linkCheckerLogo from "../images/logo-link-checker.svg";
import domSnapshotLogo from "../images/logo-dom-snapshot.svg";
import consolePlusLogo from "../images/logo-console-plus.svg";
import logo from "../images/logo-devlens.svg";

const initialItems = [
  { id: 1, tile: "Devlens", description: "Quickly inspect page layouts and visualize element boundaries.", logosrc: logo, toggled: false },
  { id: 2, tile: "StyleSpy", description: "Instantly analyze and copy CSS from any webpage element.", logosrc: styleSpyLogo, toggled: false },
  { id: 3, tile: "SpeedBoost", description: "Optomizes browsre resource usage to accelerate page loading.", logosrc: speedboosterLogo, toggled: false },
  { id: 4, tile: "JSONWizard", description: "Fromates, valuates, and pristifieds JSON responses in-browsers.", logosrc: jsonWizardLogo, toggled: false },
  { id: 5, tile: "TabMaster Pro", description: "Organizes browser tab into groups and sessions,", logosrc: tabMasterproLogo, toggled: false },
  { id: 6, tile: "ViewportBuddy", description: "Simulate various resolutions directly within the browser.", logosrc: viewportBuddyLogo, toggled: false },
  { id: 7, tile: "Markup Notes", description: "Enable annotaion and notes directly onto webpages for collaborative debugging.", logosrc: markupNotesLogo, toggled: false },
  { id: 8, tile: "GridGuides", description: "Overlay customizable grids and alignment guides on any webpage.", logosrc: gridGuidesLogo, toggled: false },
  { id: 9, tile: "Palette Picker", description: "Instantly extracts color palettes from any webpage.", logosrc: palettePickerLogo, toggled: false },
  { id: 10, tile: "LinkChecker", description: "Scans and highlights brokrn likns on any page.", logosrc: linkCheckerLogo, toggled: false },
  { id: 11, tile: "DOM Snapshot", description: "Capture and export DOM structures quickly.", logosrc: domSnapshotLogo, toggled: false },
  { id: 12, tile: "Console Plus", description: "Enhanced developers console with advanced filtering andlogging.", logosrc: consolePlusLogo, toggled: false },
];

function Dashboard() {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState("all");

  const handleToggle = (id) => {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, toggled: !item.toggled } : item
      )
    );
  };

  const filteredItems = items.filter(item => {
    if (filter === "active") return item.toggled;
    if (filter === "inactive") return !item.toggled;
    return true;
  });

  return (
    <div>
      <ExtensionBar filter={filter} setFilter={setFilter} />
      <div className="dashboard">
        {filteredItems.map(item => (
          <DashboardItem
            key={item.id}
            tile={item.tile}
            description={item.description}
            logosrc={item.logosrc}
            isToggled={item.toggled}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;