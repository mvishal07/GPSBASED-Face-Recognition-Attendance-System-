import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import Header from "../Header";
const RegisterStudent = () => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [imageData, setImageData] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Error accessing webcam: ", err);
      });
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const dataURL = canvasRef.current.toDataURL("image/jpeg");
    setImageData(dataURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      student_id: studentId,
      name: name,
      password,
      image_data: imageData,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Student registered successfully");

        setStudentId("");
        setName("");
        setPassword("");
        setImageData("");
      } else {
        alert("Error registering student");
      }
    } catch (error) {
      console.error("Error submitting the form: ", error);
    }
  };

  return (
    <>
      <Header />
      <div className="register-stu-container">
        <h1 className="reg-h">Register Student</h1>
        <form onSubmit={handleSubmit} className="form-card">
          <div className="card1">
            <div className="login-card1">
              <h1 className="app-logo">GeoFace</h1>
              <p className="desc">
                Welcome to GeoFace | Digital Attendance System
              </p>
            </div>
            <div>
              <label htmlFor="student_id" className="labels">
                Student ID
              </label>

              <input
                type="text"
                id="student_id"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="username-input"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="labels">
                Name
              </label>

              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="username-input"
                required
              />
            </div>
            <div>
              <label className="labels">Password</label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="username-input"
              />
              <button type="submit" className="reg-btn">
                Register
              </button>
            </div>
          </div>
          <div className="card2">
            <label>Capture Image:</label>
            <br />
            <div className="video-container">
              <video ref={videoRef} autoPlay className="video-card"></video>
              <br />
              <h1 className="heading-v">Authenticate your Face ID</h1>
              <div className="ins">
                <h2 className="ins-heading">Instructions:-</h2>
                <ol className="inst-list">
                  <li className="i-1">
                    Position yourself in front of the camera, ensuring that your
                    entire face is visible on the screen.
                  </li>
                  <li className="i-1">
                    Ensure that the environment has proper lighting to enable
                    the face recognition process
                  </li>
                </ol>
              </div>

              <br />
              <button
                type="button"
                onClick={capturePhoto}
                className="capture-btn"
              >
                Capture Photo
              </button>
            </div>
            <br />
            <br />
            <canvas
              ref={canvasRef}
              width="640"
              height="480"
              style={{ display: "none" }}
            ></canvas>
            <input type="hidden" name="image_data" value={imageData} />
            <br />
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterStudent;
