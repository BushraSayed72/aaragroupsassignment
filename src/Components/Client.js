import React, { useState } from "react";
import Lefthome from "./Lefthome.js";
import maskboy from "../Images/maskboy.jpeg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

function Client() {
  const [clientDetails, setClientDetails] = useState({
    companyName: "",
    adminName: "",
    adminEmail: "",
    industry: "",
    altNum: "",
    adminDesignation: "",
    country: "",
    headquarter: "",
    employeeCourt: "",
    gst: "",
    certificate: "",
    pan: "",
    newPan: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setClientDetails({
      ...clientDetails,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const response = await fetch(
      "http://api.reward-dragon.com:8000/rewardadmin/add-client/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(clientDetails),
      }
    );
    console.log("response", response);
  };

  return (
    <>
      <div className="client">
        <div className="clientContentR">
          <div className="leftclient">
            <div className="userinfo">
              <p className="topcrd">Add new Client</p>
              <img className="maskboy" src={maskboy} alt="" />

              <p>Only png,jpg,jpeg Image</p>
              <p>Please update your oragnization logo here</p>
            </div>
            <div className="buttons">
              <button>
                <AiOutlineUsergroupAdd />
                View all
              </button>
            </div>
          </div>
          <div className="rightclient">
            <p className="topcrd">New Client Information</p>
            <form>
              <div className="column">
                {" "}
                <div>
                  <label>Company Name</label>
                  <input
                    type="text"
                    placeholder="Company name"
                    name="companyName"
                    value={clientDetails.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Administrator Email Id </label>
                  <input
                    type="text"
                    placeholder="E.x admin@gmail.com"
                    name="adminEmail"
                    value={clientDetails.adminEmail}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Administrator Designantion </label>
                  <input
                    type="text"
                    placeholder="E.x +912222222222"
                    name="adminDesignation"
                    value={clientDetails.adminDesignation}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Headquarter City</label>
                  <input
                    type="text"
                    placeholder="Lucknow"
                    name="headquarter"
                    value={clientDetails.headquarter}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Industry</label>
                  <input
                    type="text"
                    placeholder="Ex. Customer Support"
                    name="industry"
                    value={clientDetails.industry}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="column">
                <div>
                  <label>Administator Name</label>
                  <input
                    type="text"
                    placeholder="Ex. Admin Name"
                    name="adminName"
                    value={clientDetails.adminName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Alternate Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Ex. +91555555555"
                    name="altNum"
                    value={clientDetails.altNum}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Country</label>
                  <input
                    type="text"
                    placeholder="India"
                    name="country"
                    value={clientDetails.country}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Employee Court</label>
                  <input
                    type="text"
                    placeholder="Ex. 10.000 "
                    name="employeeCourt"
                    value={clientDetails.employeeCourt}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </form>
            <hr />
            <p className="topcrd">KYC Update</p>
            <div className="bottomright">
              <div className="column">
                <div>
                  <label>Incorporation Certificate</label>
                  <input
                    type="file"
                    placeholder="png jpg jpeg supported "
                    name="certificate"
                    value={clientDetails.certificate}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Company Pan Card</label>
                  <input
                    type="file"
                    placeholder="png jpg jpeg supported "
                    name="pan"
                    value={clientDetails.pan}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="column">
                <div>
                  <label>Company pan Card</label>
                  <input
                    type="file"
                    placeholder="png jpg jpeg supported "
                    name="newPan"
                    value={clientDetails.newPan}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>GSTIN</label>
                  <input
                    type="text"
                    placeholder="Ex. 0000000 "
                    name="gst"
                    value={clientDetails.gst}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <button className="btn-submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Client;
