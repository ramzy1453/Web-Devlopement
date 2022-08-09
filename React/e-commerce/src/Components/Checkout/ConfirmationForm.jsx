import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConfirmationForm = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ margin: "20px" }}>Confirmation sent at gmail...</div>
      <Button variant="contained" onClick={() => navigate("/")}>
        Return Home
      </Button>
    </div>
  );
};

export default ConfirmationForm;
