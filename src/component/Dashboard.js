import DashboardItem from "./DashboardItem"
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

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardItem tile={"Devlens"}/>
      <DashboardItem tile={"StyleSpy"} description={"Instantly analyze and copy CSS from any webpage element."} logosrc={styleSpyLogo}/>
      <DashboardItem tile={"SpeedBoost"} description={"Optomizes browsre resource usage to accelerate page loading."} logosrc={speedboosterLogo}/>
      <DashboardItem tile={"JSONWizard"} description={"Fromates, valuates, and pristifieds JSON responses in-browsers. "} logosrc={jsonWizardLogo}/>
      <DashboardItem tile={"TabMaster Pro"} description={"Organizes browser tab into groups and sessions,"} logosrc={tabMasterproLogo}/>
      <DashboardItem tile={"ViewportBuddy"} description={"Simulate various resolutions directly within the browser."} logosrc={viewportBuddyLogo}/>
      <DashboardItem tile={"Markup Notes"} description={"Enable annotaion and notes directly onto webpages for collaborative debugging."} logosrc={markupNotesLogo}/>
      <DashboardItem tile={"GridGuides"} description={"Overlay customizable grids and alignment guides on any webpage."} logosrc={gridGuidesLogo}/>
      <DashboardItem tile={"Palette Picker"} description={"Instantly extracts color palettes from any webpage."} logosrc={palettePickerLogo}/>
      <DashboardItem tile={"LinkChecker"} description={"Scans and highlights brokrn likns on any page."} logosrc={linkCheckerLogo}/>
      <DashboardItem tile={"DOM Snapshot"} description={"Capture and export DOM structures quickly."} logosrc={domSnapshotLogo}/>
      <DashboardItem tile={"Console Plus"} description={"Enhanced developers console with advanced filtering andlogging."} logosrc={consolePlusLogo}/>

    </div>
  )
}

export default Dashboard
