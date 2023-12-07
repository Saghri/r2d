import React from "react";
import "./Company_profile.css";

export default function Company_profile() {
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/company profile.pdf";

    link.download = "R2D.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="company_profile">
      <div className="profile_document">
      <object
        data={process.env.PUBLIC_URL + "/company profile.pdf"}
        type="application/pdf"
        width="100%"
        height="600px"
      />
      </div>
      <button className="download_Profile" onClick={handleDownload}>Download Company Profile</button>
    </div>
  );
}
