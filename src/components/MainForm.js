import "react-toastify/dist/ReactToastify.css";
import "./MainForm.css";

import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "react-spinner-material";
import axios from "axios";
import logo from "../components/assests/blockchainlogo.png";
import technival from "../components/assests/Technival.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MainForm = () => {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("");
  const [groupASize, setGroupASize] = useState("");
  const [groupBSize, setGroupBSize] = useState("");
  const [addDetails, setAddDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSubmitBtn, setShowSubmitBtn] = useState(false);
  const [verified, setVerified] = useState(false);
  const [groupA1, setGroupA1] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
  });
  const [groupA2, setGroupA2] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
  });
  const [groupA3, setGroupA3] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
  });
  const [groupB1, setGroupB1] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
  });
  const [groupB2, setGroupB2] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
  });
  const [groupB3, setGroupB3] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
  });

  const handleClick = () => {
    setAddDetails(true);
    setShowSubmitBtn(true);
  };

  const postData = async (data) => {
    console.log(data);
    setLoading(true);
    const res = await axios
      .post("https://temp-app-studentapi.herokuapp.com/api/v1/student", data)
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    if (res) {
      setLoading(false);
      toast.warn("Team Successfully Registered !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {};
    if (groupASize === 1) {
      if (
        groupA1.name === "" ||
        groupA1.rollNo === "" ||
        groupA1.branch === "" ||
        groupA1.email === "" ||
        groupA1.phoneNo === "" ||
        groupB1.name === "" ||
        groupB1.rollNo === "" ||
        groupB1.branch === "" ||
        groupB1.email === "" ||
        groupB1.phoneNo === "" ||
        groupB2.name === "" ||
        groupB2.rollNo === "" ||
        groupB2.branch === "" ||
        groupB2.email === "" ||
        groupB2.phoneNo === "" ||
        groupB3.name === "" ||
        groupB3.rollNo === "" ||
        groupB3.branch === "" ||
        groupB3.email === "" ||
        groupB3.phoneNo === ""
      ) {
        toast.warn("Please Enter All Details !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      data = {
        team: {
          teamname: teamName,
          teamsize: 4,
          groupA: [
            {
              name: groupA1.name,
              rollNo: groupA1.rollNo,
              branch: groupA1.branch,
              email: groupA1.email,
              phoneNo: groupA1.phoneNo,
            },
          ],
          groupB: [
            {
              name: groupB1.name,
              rollNo: groupB1.rollNo,
              branch: groupB1.branch,
              email: groupB1.email,
              phoneNo: groupB1.phoneNo,
            },
            {
              name: groupB2.name,
              rollNo: groupB2.rollNo,
              branch: groupB2.branch,
              email: groupB2.email,
              phoneNo: groupB2.phoneNo,
            },
            {
              name: groupB3.name,
              rollNo: groupB3.rollNo,
              branch: groupB3.branch,
              email: groupB3.email,
              phoneNo: groupB3.phoneNo,
            },
          ],
        },
      };
    } else if (groupASize === 2) {
      if (
        groupA1.name === "" ||
        groupA1.rollNo === "" ||
        groupA1.branch === "" ||
        groupA1.email === "" ||
        groupA1.phoneNo === "" ||
        groupA2.name === "" ||
        groupA2.rollNo === "" ||
        groupA2.branch === "" ||
        groupA2.email === "" ||
        groupA2.phoneNo === "" ||
        groupB1.name === "" ||
        groupB1.rollNo === "" ||
        groupB1.branch === "" ||
        groupB1.email === "" ||
        groupB1.phoneNo === "" ||
        groupB2.name === "" ||
        groupB2.rollNo === "" ||
        groupB2.branch === "" ||
        groupB2.email === "" ||
        groupB2.phoneNo === ""
      ) {
        toast.warn("Please Enter All Details !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      data = {
        team: {
          teamname: teamName,
          teamsize: 4,
          groupA: [
            {
              name: groupA1.name,
              rollNo: groupA1.rollNo,
              branch: groupA1.branch,
              email: groupA1.email,
              phoneNo: groupA1.phoneNo,
            },
            {
              name: groupA2.name,
              rollNo: groupA2.rollNo,
              branch: groupA2.branch,
              email: groupA2.email,
              phoneNo: groupA2.phoneNo,
            },
          ],
          groupB: [
            {
              name: groupB1.name,
              rollNo: groupB1.rollNo,
              branch: groupB1.branch,
              email: groupB1.email,
              phoneNo: groupB1.phoneNo,
            },
            {
              name: groupB2.name,
              rollNo: groupB2.rollNo,
              branch: groupB2.branch,
              email: groupB2.email,
              phoneNo: groupB2.phoneNo,
            },
          ],
        },
      };
    } else if (groupASize === 3) {
      if (
        groupA1.name === "" ||
        groupA1.rollNo === "" ||
        groupA1.branch === "" ||
        groupA1.email === "" ||
        groupA1.phoneNo === "" ||
        groupA2.name === "" ||
        groupA2.rollNo === "" ||
        groupA2.branch === "" ||
        groupA2.email === "" ||
        groupA2.phoneNo === "" ||
        groupA3.name === "" ||
        groupA3.rollNo === "" ||
        groupA3.branch === "" ||
        groupA3.email === "" ||
        groupA3.phoneNo === "" ||
        groupB1.name === "" ||
        groupB1.rollNo === "" ||
        groupB1.branch === "" ||
        groupB1.email === "" ||
        groupB1.phoneNo === ""
      ) {
        toast.warn("Please Enter All Details !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      data = {
        team: {
          teamname: teamName,
          teamsize: 4,
          groupA: [
            {
              name: groupA1.name,
              rollNo: groupA1.rollNo,
              branch: groupA1.branch,
              email: groupA1.email,
              phoneNo: groupA1.phoneNo,
            },
            {
              name: groupA2.name,
              rollNo: groupA2.rollNo,
              branch: groupA2.branch,
              email: groupA2.email,
              phoneNo: groupA2.phoneNo,
            },
            {
              name: groupA3.name,
              rollNo: groupA3.rollNo,
              branch: groupA3.branch,
              email: groupA3.email,
              phoneNo: groupA3.phoneNo,
            },
          ],
          groupB: [
            {
              name: groupB1.name,
              rollNo: groupB1.rollNo,
              branch: groupB1.branch,
              email: groupB1.email,
              phoneNo: groupB1.phoneNo,
            },
          ],
        },
      };
    }
    postData(data);
  };

  return (
    <div id="xyz">
      <div
        id="leftside"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          id="logo"
          src={logo}
          alt="Logo"
          style={{ height: "36%", marginLeft: "3%" }}
        ></img>
        <br className="media"></br>
        <img
          id="tech"
          src={technival}
          alt="technival_logo"
          style={{
            height: "15%",
            marginRight: "3%",
            marginLeft: "auto",
            marginTop: "-4%",
          }}
        ></img>
      </div>
      <div id="scroll">
        <div className="rightside">
          <ToastContainer />
          <form id="maininfo" onSubmit={submitHandler}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <br />
                <h1 className="head1">Team and Group Details</h1>
                <h3> Fill the Team and Group details here.</h3>
                <div className="box">
                  <label className="labels" htmlFor="teamName">
                    Team Name:
                  </label>
                  <br></br>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    sx={{ minWidth: 230, maxWidth: 230 }}
                    value={teamName}
                    onChange={(e) => {
                      setTeamName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div id="tsize">
                <div>
                  <label className="labels" htmlFor="GroupASize">
                    Group A Size :{" "}
                  </label>
                  <br></br>
                  <FormControl
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    sx={{ minWidth: 230 }}
                  >
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={groupASize}
                      onChange={(e) => {
                        setGroupASize(e.target.value);
                        setGroupBSize(4 - e.target.value);
                      }}
                      label="Group A Size"
                    >
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <br />
                <div>
                  <label className="labels" htmlFor="GroupBSize">
                    Group B Size :{" "}
                  </label>
                  <br></br>
                  <FormControl
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    sx={{ minWidth: 230 }}
                  >
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={groupBSize}
                      onChange={(e) => {
                        setGroupBSize(e.target.value);
                        setGroupASize(4 - e.target.value);
                      }}
                      label="Group B Size"
                    >
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <br />
            {!addDetails && (
              <Button
                id="memberdetail"
                variant="contained"
                onClick={handleClick}
                disabled={
                  teamName === "" || groupASize === "" || groupBSize === ""
                }
              >
                Add Member Details
              </Button>
            )}
            <br />
            <br />
            {addDetails &&
              groupASize >= 1 &&
              groupBSize >= 1 &&
              teamName !== "" &&
              groupASize !== "" &&
              groupBSize !== "" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h1 className="head1">Team Members Details</h1>
                  <h3> Fill the details of the team members here.</h3>
                  <h1 className="head2">Group A details :</h1>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 className="mem">Member 1 : </h3>
                    <br />
                    <label className="det" htmlFor="name">
                      Name :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupA1.name}
                      onChange={(e) =>
                        setGroupA1({ ...groupA1, name: e.target.value })
                      }
                    />
                    <br className="media"></br>
                    <label className="det" htmlFor="roll">
                      Roll No :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupA1.rollNo}
                      onChange={(e) => {
                        setGroupA1({ ...groupA1, rollNo: e.target.value });
                        if (e.target.value.length >= 9) {
                          let str = e.target.value.substring(6, 9);
                          let val = "";
                          if (str === "153") val = "CSE(AI&ML)";
                          else if (str === "154") val = "CSE(DS)";
                          else if (str === "010") val = "CSE";
                          else if (str === "012") val = "CS";
                          else if (str === "011") val = "CS&IT";
                          else if (str === "164") val = "AI&ML";
                          else if (str === "013") val = "IT";
                          setGroupA1({
                            ...groupA1,
                            rollNo: e.target.value,
                            branch: val,
                          });
                        } else if (e.target.value.length < 9) {
                          setGroupA1({
                            ...groupA1,
                            rollNo: e.target.value,
                            branch: "",
                          });
                        }
                      }}
                    />
                    <br></br>
                    <label className="det" htmlFor="branch">
                      Branch :{" "}
                    </label>
                    <FormControl
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2, minWidth: 120 }}
                    >
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={groupA1.branch}
                        onChange={(e) => {
                          setGroupA1({ ...groupA1, branch: e.target.value });
                        }}
                      >
                        <MenuItem value={"CSE(AI&ML)"}>CSE(AI & ML)</MenuItem>
                        <MenuItem value={"CSE(DS)"}>CSE(DS)</MenuItem>
                        <MenuItem value={"CSE"}>CSE</MenuItem>
                        <MenuItem value={"CS"}>CS</MenuItem>
                        <MenuItem value={"CS&IT"}>CS & IT</MenuItem>
                        <MenuItem value={"AI&ML"}>AI & ML</MenuItem>
                        <MenuItem value={"IT"}>IT</MenuItem>
                      </Select>
                    </FormControl>
                    <br className="media"></br>
                    <label className="det" htmlFor="email">
                      College Email :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupA1.email}
                      onChange={(e) =>
                        setGroupA1({ ...groupA1, email: e.target.value })
                      }
                    />
                    <br></br>
                    <label className="det" htmlFor="phone">
                      Phone No :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupA1.phoneNo}
                      onChange={(e) =>
                        setGroupA1({ ...groupA1, phoneNo: e.target.value })
                      }
                    />
                  </div>
                  {groupASize > 1 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h3 className="mem">Member 2 : </h3>
                      <br />
                      <label className="det" htmlFor="name">
                        Name :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA2.name}
                        onChange={(e) =>
                          setGroupA2({ ...groupA2, name: e.target.value })
                        }
                      />
                      <br className="media"></br>
                      <label className="det" htmlFor="roll">
                        Roll No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA2.rollNo}
                        onChange={(e) => {
                          setGroupA2({ ...groupA2, rollNo: e.target.value });
                          if (e.target.value.length >= 9) {
                            let str = e.target.value.substring(6, 9);
                            let val = "";
                            if (str === "153") val = "CSE(AI&ML)";
                            else if (str === "154") val = "CSE(DS)";
                            else if (str === "010") val = "CSE";
                            else if (str === "012") val = "CS";
                            else if (str === "011") val = "CS&IT";
                            else if (str === "164") val = "AI&ML";
                            else if (str === "013") val = "IT";
                            setGroupA2({
                              ...groupA2,
                              rollNo: e.target.value,
                              branch: val,
                            });
                          } else if (e.target.value.length < 9) {
                            setGroupA2({
                              ...groupA2,
                              rollNo: e.target.value,
                              branch: "",
                            });
                          }
                        }}
                      />
                      <br></br>
                      <label className="det" htmlFor="branch">
                        Branch :{" "}
                      </label>
                      <FormControl
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2, minWidth: 120 }}
                      >
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={groupA2.branch}
                          onChange={(e) => {
                            setGroupA2({ ...groupA2, branch: e.target.value });
                          }}
                        >
                          <MenuItem value={"CSE(AI&ML)"}>CSE(AI & ML)</MenuItem>
                          <MenuItem value={"CSE(DS)"}>CSE(DS)</MenuItem>
                          <MenuItem value={"CSE"}>CSE</MenuItem>
                          <MenuItem value={"CS"}>CS</MenuItem>
                          <MenuItem value={"CS&IT"}>CS & IT</MenuItem>
                          <MenuItem value={"AI&ML"}>AI & ML</MenuItem>
                          <MenuItem value={"IT"}>IT</MenuItem>
                        </Select>
                      </FormControl>
                      <br className="media"></br>
                      <label className="det" htmlFor="email">
                        College Email :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA2.email}
                        onChange={(e) =>
                          setGroupA2({ ...groupA2, email: e.target.value })
                        }
                      />
                      <br></br>
                      <label className="det" htmlFor="phone">
                        Phone No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA2.phoneNo}
                        onChange={(e) =>
                          setGroupA2({ ...groupA2, phoneNo: e.target.value })
                        }
                      />
                    </div>
                  )}
                  {groupASize > 2 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h3 className="mem">Member 3 : </h3>
                      <br />
                      <label className="det" htmlFor="name">
                        Name :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA3.name}
                        onChange={(e) =>
                          setGroupA3({ ...groupA3, name: e.target.value })
                        }
                      />
                      <br className="media"></br>
                      <label className="det" htmlFor="roll">
                        Roll No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA3.rollNo}
                        onChange={(e) => {
                          setGroupA3({ ...groupA3, rollNo: e.target.value });
                          if (e.target.value.length >= 9) {
                            let str = e.target.value.substring(6, 9);
                            let val = "";
                            if (str === "153") val = "CSE(AI&ML)";
                            else if (str === "154") val = "CSE(DS)";
                            else if (str === "010") val = "CSE";
                            else if (str === "012") val = "CS";
                            else if (str === "011") val = "CS&IT";
                            else if (str === "164") val = "AI&ML";
                            else if (str === "013") val = "IT";
                            setGroupA3({
                              ...groupA3,
                              rollNo: e.target.value,
                              branch: val,
                            });
                          } else if (e.target.value.length < 9) {
                            setGroupA3({
                              ...groupA3,
                              rollNo: e.target.value,
                              branch: "",
                            });
                          }
                        }}
                      />
                      <br></br>
                      <label className="det" htmlFor="branch">
                        Branch :{" "}
                      </label>
                      <FormControl
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2, minWidth: 120 }}
                      >
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={groupA3.branch}
                          onChange={(e) => {
                            setGroupA3({ ...groupA3, branch: e.target.value });
                          }}
                        >
                          <MenuItem value={"CSE(AI&ML)"}>CSE(AI & ML)</MenuItem>
                          <MenuItem value={"CSE(DS)"}>CSE(DS)</MenuItem>
                          <MenuItem value={"CSE"}>CSE</MenuItem>
                          <MenuItem value={"CS"}>CS</MenuItem>
                          <MenuItem value={"CS&IT"}>CS & IT</MenuItem>
                          <MenuItem value={"AI&ML"}>AI & ML</MenuItem>
                          <MenuItem value={"IT"}>IT</MenuItem>
                        </Select>
                      </FormControl>
                      <br className="media"></br>
                      <label className="det" htmlFor="email">
                        College Email :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA3.email}
                        onChange={(e) =>
                          setGroupA3({ ...groupA3, email: e.target.value })
                        }
                      />
                      <br></br>
                      <label className="det" htmlFor="phone">
                        Phone No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA3.phoneNo}
                        onChange={(e) =>
                          setGroupA3({ ...groupA3, phoneNo: e.target.value })
                        }
                      />
                    </div>
                  )}
                </div>
              )}
            {addDetails &&
              groupASize >= 1 &&
              groupBSize >= 1 &&
              teamName !== "" &&
              groupASize !== "" &&
              groupBSize !== "" && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h1 className="head2">Group B details :</h1>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3 className="mem">Member 1 : </h3>
                    <br />
                    <label className="det" htmlFor="name">
                      Name :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupB1.name}
                      onChange={(e) =>
                        setGroupB1({ ...groupB1, name: e.target.value })
                      }
                    />
                    <br className="media"></br>
                    <label className="det" htmlFor="roll">
                      Roll No :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupB1.rollNo}
                      onChange={(e) => {
                        setGroupB1({ ...groupB1, rollNo: e.target.value });
                        if (e.target.value.length >= 9) {
                          let str = e.target.value.substring(6, 9);
                          let val = "";
                          if (str === "031") val = "ECE";
                          else if (str === "030") val = "EN";
                          else if (str === "040") val = "ME";
                          else if (str === "000") val = "CE";
                          else if (str === "014") val = "MCA";
                          else if (str === "070") val = "MBA";
                          setGroupB1({
                            ...groupB1,
                            rollNo: e.target.value,
                            branch: val,
                          });
                        } else if (e.target.value.length < 9) {
                          setGroupB1({
                            ...groupB1,
                            rollNo: e.target.value,
                            branch: "",
                          });
                        }
                      }}
                    />
                    <br></br>
                    <label className="det" htmlFor="branch">
                      Branch :{" "}
                    </label>
                    <FormControl
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2, minWidth: 120 }}
                    >
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={groupB1.branch}
                        onChange={(e) => {
                          setGroupB1({ ...groupB1, branch: e.target.value });
                        }}
                      >
                        <MenuItem value={"ECE"}>ECE</MenuItem>
                        <MenuItem value={"EN"}>EN</MenuItem>
                        <MenuItem value={"ME"}>ME</MenuItem>
                        <MenuItem value={"CE"}>CE</MenuItem>
                        <MenuItem value={"MCA"}>MCA</MenuItem>
                        <MenuItem value={"MBA"}>MBA</MenuItem>
                      </Select>
                    </FormControl>
                    <br className="media"></br>
                    <label className="det" htmlFor="email">
                      College Email :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupB1.email}
                      onChange={(e) =>
                        setGroupB1({ ...groupB1, email: e.target.value })
                      }
                    />
                    <br></br>
                    <label className="det" htmlFor="phone">
                      Phone No :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupB1.phoneNo}
                      onChange={(e) =>
                        setGroupB1({ ...groupB1, phoneNo: e.target.value })
                      }
                    />
                  </div>
                  {groupBSize > 1 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h3 className="mem">Member 2 : </h3>
                      <br />
                      <label className="det" htmlFor="name">
                        Name :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB2.name}
                        onChange={(e) =>
                          setGroupB2({ ...groupB2, name: e.target.value })
                        }
                      />
                      <br className="media"></br>
                      <label className="det" htmlFor="roll">
                        Roll No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB2.rollNo}
                        onChange={(e) => {
                          setGroupB2({ ...groupB2, rollNo: e.target.value });
                          if (e.target.value.length >= 9) {
                            let str = e.target.value.substring(6, 9);
                            let val = "";
                            if (str === "031") val = "ECE";
                            else if (str === "040") val = "ME";
                            else if (str === "030") val = "EN";
                            else if (str === "000") val = "CE";
                            else if (str === "014") val = "MCA";
                            else if (str === "070") val = "MBA";
                            setGroupB2({
                              ...groupB2,
                              rollNo: e.target.value,
                              branch: val,
                            });
                          } else if (e.target.value.length < 9) {
                            setGroupB2({
                              ...groupB2,
                              rollNo: e.target.value,
                              branch: "",
                            });
                          }
                        }}
                      />
                      <br></br>
                      <label className="det" htmlFor="branch">
                        Branch :{" "}
                      </label>
                      <FormControl
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2, minWidth: 120 }}
                      >
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={groupB2.branch}
                          onChange={(e) => {
                            setGroupB2({ ...groupB2, branch: e.target.value });
                          }}
                        >
                          <MenuItem value={"ECE"}>ECE</MenuItem>
                          <MenuItem value={"EN"}>EN</MenuItem>
                          <MenuItem value={"ME"}>ME</MenuItem>
                          <MenuItem value={"CE"}>CE</MenuItem>
                          <MenuItem value={"MCA"}>MCA</MenuItem>
                          <MenuItem value={"MBA"}>MBA</MenuItem>
                        </Select>
                      </FormControl>
                      <br className="media"></br>
                      <label className="det" htmlFor="email">
                        College Email :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB2.email}
                        onChange={(e) =>
                          setGroupB2({ ...groupB2, email: e.target.value })
                        }
                      />
                      <br></br>
                      <label className="det" htmlFor="phone">
                        Phone No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB2.phoneNo}
                        onChange={(e) =>
                          setGroupB2({ ...groupB2, phoneNo: e.target.value })
                        }
                      />
                    </div>
                  )}
                  {groupBSize > 2 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <h3 className="mem">Member 3 : </h3>
                      <br />
                      <label className="det" htmlFor="name">
                        Name :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB3.name}
                        onChange={(e) =>
                          setGroupB3({ ...groupB3, name: e.target.value })
                        }
                      />
                      <br className="media"></br>
                      <label className="det" htmlFor="roll">
                        Roll No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB3.rollNo}
                        onChange={(e) => {
                          setGroupB3({ ...groupB3, rollNo: e.target.value });
                          if (e.target.value.length >= 9) {
                            let str = e.target.value.substring(6, 9);
                            let val = "";
                            if (str === "031") val = "ECE";
                            else if (str === "040") val = "ME";
                            else if (str === "030") val = "EN";
                            else if (str === "000") val = "CE";
                            else if (str === "014") val = "MCA";
                            else if (str === "070") val = "MBA";
                            setGroupB3({
                              ...groupB3,
                              rollNo: e.target.value,
                              branch: val,
                            });
                          } else if (e.target.value.length < 9) {
                            setGroupB3({
                              ...groupB3,
                              rollNo: e.target.value,
                              branch: "",
                            });
                          }
                        }}
                      />
                      <br></br>
                      <label className="det" htmlFor="branch">
                        Branch :{" "}
                      </label>
                      <FormControl
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2, minWidth: 120 }}
                      >
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={groupB3.branch}
                          onChange={(e) => {
                            setGroupB3({ ...groupB3, branch: e.target.value });
                          }}
                        >
                          <MenuItem value={"ECE"}>ECE</MenuItem>
                          <MenuItem value={"EN"}>EN</MenuItem>
                          <MenuItem value={"ME"}>ME</MenuItem>
                          <MenuItem value={"CE"}>CE</MenuItem>
                          <MenuItem value={"MCA"}>MCA</MenuItem>
                          <MenuItem value={"MBA"}>MBA</MenuItem>
                        </Select>
                      </FormControl>
                      <br className="media"></br>
                      <label className="det" htmlFor="email">
                        College Email :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB3.email}
                        onChange={(e) =>
                          setGroupB3({ ...groupB3, email: e.target.value })
                        }
                      />
                      <br></br>
                      <label className="det" htmlFor="phone">
                        Phone No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB3.phoneNo}
                        onChange={(e) =>
                          setGroupB3({ ...groupB3, phoneNo: e.target.value })
                        }
                      />
                    </div>
                  )}
                </div>
              )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {showSubmitBtn &&
                teamName !== "" &&
                groupASize !== "" &&
                groupBSize !== "" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ReCAPTCHA
                      sitekey="6LdiBjsjAAAAAC1Tmm6mWraZYH_TuIGDAKXo5qK2"
                      onChange={() => {
                        setVerified(true);
                      }}
                    />
                    {!loading && (
                      <Button
                        id="but"
                        variant="contained"
                        type="submit"
                        style={{ width: "37%" }}
                        disabled={!verified}
                      >
                        Submit
                      </Button>
                    )}
                    {loading && (
                      <Button
                        id="but"
                        variant="contained"
                        type="submit"
                        style={{
                          width: "37%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Spinner
                          radius={30}
                          color={"#FFFFFF"}
                          stroke={3}
                          visible={true}
                        />
                      </Button>
                    )}
                  </div>
                )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
