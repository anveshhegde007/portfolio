import { motion } from "framer-motion";

function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      backgroundColor: "#0f172a",
      color: "white",
      minHeight: "100vh",
      padding: "40px"
    }}>
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Anvesh Hegde H D
        </h1>
        <h3 style={{ color: "#38bdf8" }}>
          Computer Science Undergraduate
        </h3>
        <p style={{ maxWidth: "600px", marginTop: "20px" }}>
          I build modern web applications and work on Machine Learning projects.
          Passionate about solving real-world problems using technology.
        </p>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        style={{ marginTop: "60px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ marginBottom: "20px" }}>Projects</h2>

        <div style={{ display: "grid", gap: "20px" }}>
          
          <div style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Parkinson’s Disease Detection</h3>
            <p>Machine learning model using multimodal data for early detection.</p>
          </div>

          <div style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Municipality Database System</h3>
            <p>SQL-based relational database for managing municipal records.</p>
          </div>

          <div style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>Ideal Café Website</h3>
            <p>Responsive React-based website for café menu and display.</p>
          </div>

        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        style={{ marginTop: "60px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Contact</h2>
        <p>Email: anveshhegde0089@gmail.com</p>
        <p>GitHub: github.com/anveshhegde007</p>
      </motion.div>

    </div>
  );
}

export default App;
