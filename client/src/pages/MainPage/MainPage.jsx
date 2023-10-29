import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./MainPage.css";

const MainPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server's response (e.g., display a success message)
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });
  };

  return (
    <>
      <div align="center" style={{ backgroundColor: "#2D3032" }}>
        <br></br>
        <h1 className="raleway-font">Take a picture of what's around you</h1>
        <br></br>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Control
            style={{ width: "60%" }}
            type="file"
            size="lg"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="light">Send</Button>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default MainPage;
