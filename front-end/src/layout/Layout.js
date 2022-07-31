import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 * You will not need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Layout() {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div className="container-fluid">
      <div className="row h-100">
        {isOpen ? (
          <div className="col-md-2 side-bar">
            <Menu setIsOpen={setIsOpen}/>
          </div>
        ) : (
          <button
            className="btn rounded-circle border-0"
            id="sidebarToggle"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            ➕
          </button>
        )}
        
        <div className="col">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;

