import React from "react";
//import { ComponentName } from 'primereact/{componentname}';
import { Card } from "primereact/card";
import { Button } from "primereact/button";
class CardComponent extends React.Component {
  render() {
    return (
      <div>
        <br />

        <Card
          style={{width: "440px", background: "#eeeeee", border: "2px", borderColor: "black" }}
          title="One GitHub profile..."
        >
          <div style={{ display: "flex" }}>
            <span style={{ marginLeft: "3px", background: "#cccccc", border: "6px", borderColor: "red"  }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="130"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
              </svg>
            </span>
            <span style={{ marginLeft: "30px", display: "inline-block" }}>
              <div style={{ fontSize: "125%" }}>David Lee Jones</div>
              <div>Lucene Plastics LTD</div>
              <br />
              <Button
                label="Edit"
                icon="pi pi-pencil"
                style={{ marginRight: ".25em" }}
              />
              <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary"
              />
            </span>
          </div>
        </Card>
      </div>
    );
  }
}
export default CardComponent;
