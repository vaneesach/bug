import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={onClick} style={{ cursor: "pointer", border: "1px solid #ddd", padding: "10px", borderRadius: "8px", textAlign: "center", height: "100%" }}>
        <img src={imgUrl} alt={title} style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "0px" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
