import React, { useState } from "react";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    course: "Cybersecurity 101", // Default course
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required!";
    if (!formData.email) newErrors.email = "Email is required!";
    if (!formData.password) newErrors.password = "Password is required!";
    if (!formData.course) newErrors.course = "Course selection is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        localStorage.setItem("registrationData", JSON.stringify(formData)); // Store form data in local storage
        alert("Registration data saved to local storage!");
        
        // Clear form data
        setFormData({
          name: "",
          email: "",
          password: "",
          course: "Cybersecurity 101",
        });
      } catch (error) {
        console.error("Error saving form data:", error);
        alert("An error occurred while saving registration data.");
      }
    }
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "0 auto",
      padding: "30px",
      backgroundColor: "#f4f7fc",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      color: "#2c041d",
      fontSize: "24px",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    select: {
      width: "100%",
      padding: "10px",
      marginTop: "5px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      backgroundColor: "#2c041d",
      color: "white",
      padding: "12px",
      fontSize: "16px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    errorMessage: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register for Cybersecurity Course</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {errors.name && <p style={styles.errorMessage}>{errors.name}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {errors.email && <p style={styles.errorMessage}>{errors.email}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          {errors.password && <p style={styles.errorMessage}>{errors.password}</p>}
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="course" style={styles.label}>Select Course:</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={styles.select}
            required
          >
            <option value="Cybersecurity 101">Introduction to Cybersecurity</option>
            <option value="Advanced Cybersecurity">Advanced Cybersecurity</option>
            <option value="Ethical Hacking">Ethical Hacking Basics</option>
            <option value="Data Protection">Data Protection and Privacy</option>
          </select>
          {errors.course && <p style={styles.errorMessage}>{errors.course}</p>}
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
