import "../styles/extensionBar.css";

function ExtensionBar({ filter, setFilter }) {
  return (
    <div className="extension-bar">
      <h2 className="extension-bar-title">Extensions List</h2>
      <div className="extension-activities">
        <button
          onClick={() => setFilter("all")}
          className={`btn btn-all ${filter === "all" ? "change-background" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`btn btn-active ${filter === "active" ? "change-background" : ""}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("inactive")}
          className={`btn btn-inactive ${filter === "inactive" ? "change-background" : ""}`}
        >
          Inactive
        </button>
      </div>
    </div>
  );
}

export default ExtensionBar;