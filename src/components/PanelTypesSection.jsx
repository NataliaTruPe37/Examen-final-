import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const panelTypes = [
  {
    type: "Monocrystalline",
    description:
      "Known for high efficiency (15-20%) and sleek design. Ideal for limited spaces with high power output.",
    image: "/cristalino.jpg",
    recommendedFor:
      "Best suited for residential customers who have limited roof space but require high power output.",
  },
  {
    type: "Polycrystalline",
    description:
      "Moderate efficiency (13-16%) and more affordable. Best for large installations.",
    image: "/poly.webp",
    recommendedFor:
      "Great for residential and commercial customers who need a cost-effective solution for larger installations.",
  },
  {
    type: "Thin Film",
    description:
      "Lightweight and flexible, suitable for unconventional installations like portable systems.",
    image: "/OIP.jpg",
    recommendedFor:
      "Ideal for customers needing portable or off-grid solutions, such as RV owners or temporary setups.",
  },
];

const PanelTypesSection = () => {
  const [show, setShow] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState(null);

  const handleShow = (panel) => {
    setSelectedPanel(panel);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedPanel(null);
  };

  return (
    <div id="panel-types" className="container my-5">
      <h2 className="mb-4">Types of Solar Panels</h2>
      <div className="row">
        {panelTypes.map((panel, index) => (
          <div key={index} className="col-md-4">
            <div
              className="card shadow-sm"
              style={{ border: "1px solid #c3e6cb", backgroundColor: "#d4edda" }}
            >
              <img
                src={panel.image}
                className="card-img-top"
                alt={`${panel.type} panel`}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{panel.type}</h5>
                <p className="card-text">{panel.description}</p>
                <Button
                  variant="primary"
                  onClick={() => handleShow(panel)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        {selectedPanel && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedPanel.type} Panel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedPanel.description}</p>
              <h5>Recommended For:</h5>
              <p>{selectedPanel.recommendedFor}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default PanelTypesSection;

