import "react-toastify/dist/ReactToastify.css";
import "./MainForm.css";

import {
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "react-spinner-material";
import axios from "axios";
import logo from "../components/assests/blockchainlogo.png";
import technival from "../components/assests/technivalimg.png";
import { useNavigate } from "react-router-dom";

const MainForm = () => {
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);
  const [teamName, setTeamName] = useState("");
  const [groupASize, setGroupASize] = useState("");
  const [groupBSize, setGroupBSize] = useState("");
  const [addDetails, setAddDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSubmitBtn, setShowSubmitBtn] = useState(false);
  const [verified, setVerified] = useState(false);
  const [isInvalid, setIsInvalid] = useState({
    groupA1name: false,
    groupA2name: false,
    groupA3name: false,
    groupB1name: false,
    groupB2name: false,
    groupB3name: false,

    groupA1rollNo: false,
    groupA2rollNo: false,
    groupA3rollNo: false,
    groupB1rollNo: false,
    groupB2rollNo: false,
    groupB3rollNo: false,

    groupA1email: false,
    groupA2email: false,
    groupA3email: false,
    groupB1email: false,
    groupB2email: false,
    groupB3email: false,

    groupA1phone: false,
    groupA2phone: false,
    groupA3phone: false,
    groupB1phone: false,
    groupB2phone: false,
    groupB3phone: false,
  });
  const [groupA1, setGroupA1] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
    hosteller: "",
  });
  const [groupA2, setGroupA2] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
    hosteller: "",
  });
  const [groupA3, setGroupA3] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
    hosteller: "",
  });
  const [groupB1, setGroupB1] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
    hosteller: "",
  });
  const [groupB2, setGroupB2] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
    hosteller: "",
  });
  const [groupB3, setGroupB3] = useState({
    name: "",
    rollNo: "",
    branch: "",
    email: "",
    phoneNo: "",
    hosteller: "",
  });

  const isValidName = (name) => {
    return /^[A-Za-z\s]*$/.test(name);
  };

  const isValidRollNo = (roll) => {
    return /^[0-9]+$/.test(roll);
  };

  const isValidEmail = (email) => {
    return email.includes("@akgec.ac.in");
  };

  const isValidMobile = (mobile) => {
    return /^[0-9]{10}$/.test(mobile);
  };

  const handleClick = () => {
    setAddDetails(true);
    setShowSubmitBtn(true);
  };

  const postData = async (data) => {
    const captchaToken = await recaptchaRef.current.getValue();
    recaptchaRef.current.reset();
    console.log(data);
    console.log(captchaToken);
    setLoading(true);
    const res = await axios
      .post("https://temp-app-studentapi.herokuapp.com/api/v1/student", {
        data,
        captchaToken,
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Someone is already registered from your team or Invalid Details",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      });
    if (res) {
      setTeamName("");
      setGroupASize("");
      setGroupBSize("");
      setAddDetails(false);
      setLoading(false);
      setShowSubmitBtn(false);
      setVerified(false);
      const obj = {
        name: "",
        rollNo: "",
        branch: "",
        email: "",
        phoneNo: "",
        hosteller: "",
      };
      setGroupA1(obj);
      setGroupA2(obj);
      setGroupA3(obj);
      setGroupB1(obj);
      setGroupB2(obj);
      setGroupB3(obj);
      toast.success("Team Successfully Registered !", {
        position: "top-center",
        autoClose: 3000,
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
        groupA1.hosteller === "" ||
        groupB1.name === "" ||
        groupB1.rollNo === "" ||
        groupB1.branch === "" ||
        groupB1.email === "" ||
        groupB1.phoneNo === "" ||
        groupB1.hosteller === "" ||
        groupB2.name === "" ||
        groupB2.rollNo === "" ||
        groupB2.branch === "" ||
        groupB2.email === "" ||
        groupB2.phoneNo === "" ||
        groupB2.hosteller === "" ||
        groupB3.name === "" ||
        groupB3.rollNo === "" ||
        groupB3.branch === "" ||
        groupB3.email === "" ||
        groupB3.phoneNo === "" ||
        groupB3.hosteller === ""
      ) {
        toast.error("Please Enter All Details !", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      if (
        isInvalid.groupA1name ||
        isInvalid.groupA1rollNo ||
        isInvalid.groupA1email ||
        isInvalid.groupA1phone ||
        isInvalid.groupB1name ||
        isInvalid.groupB1rollNo ||
        isInvalid.groupB1email ||
        isInvalid.groupB1phone ||
        isInvalid.groupB2name ||
        isInvalid.groupB2rollNo ||
        isInvalid.groupB2email ||
        isInvalid.groupB2phone ||
        isInvalid.groupB3name ||
        isInvalid.groupB3rollNo ||
        isInvalid.groupB3email ||
        isInvalid.groupB3phone
      ) {
        toast.error("Please Enter Valid details !", {
          position: "top-center",
          autoClose: 3000,
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
          groupA: [
            {
              name: groupA1.name,
              rollNo: groupA1.rollNo,
              branch: groupA1.branch,
              email: groupA1.email,
              phoneNo: groupA1.phoneNo,
              hosteler: groupA1.hosteller,
            },
          ],
          groupB: [
            {
              name: groupB1.name,
              rollNo: groupB1.rollNo,
              branch: groupB1.branch,
              email: groupB1.email,
              phoneNo: groupB1.phoneNo,
              hosteler: groupB1.hosteller,
            },
            {
              name: groupB2.name,
              rollNo: groupB2.rollNo,
              branch: groupB2.branch,
              email: groupB2.email,
              phoneNo: groupB2.phoneNo,
              hosteler: groupB2.hosteller,
            },
            {
              name: groupB3.name,
              rollNo: groupB3.rollNo,
              branch: groupB3.branch,
              email: groupB3.email,
              phoneNo: groupB3.phoneNo,
              hosteler: groupB3.hosteller,
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
        groupA1.hosteller === "" ||
        groupA2.name === "" ||
        groupA2.rollNo === "" ||
        groupA2.branch === "" ||
        groupA2.email === "" ||
        groupA2.phoneNo === "" ||
        groupA2.hosteller === "" ||
        groupB1.name === "" ||
        groupB1.rollNo === "" ||
        groupB1.branch === "" ||
        groupB1.email === "" ||
        groupB1.phoneNo === "" ||
        groupB1.hosteller === "" ||
        groupB2.name === "" ||
        groupB2.rollNo === "" ||
        groupB2.branch === "" ||
        groupB2.email === "" ||
        groupB2.phoneNo === "" ||
        groupB2.hosteller === ""
      ) {
        toast.error("Please Enter All Details !", {
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
      if (
        isInvalid.groupA1name ||
        isInvalid.groupA1rollNo ||
        isInvalid.groupA1email ||
        isInvalid.groupA1phone ||
        isInvalid.groupA2name ||
        isInvalid.groupA2rollNo ||
        isInvalid.groupA2email ||
        isInvalid.groupA2phone ||
        isInvalid.groupB1name ||
        isInvalid.groupB1rollNo ||
        isInvalid.groupB1email ||
        isInvalid.groupB1phone ||
        isInvalid.groupB2name ||
        isInvalid.groupB2rollNo ||
        isInvalid.groupB2email ||
        isInvalid.groupB2phone
      ) {
        toast.error("Please Enter Valid details !", {
          position: "top-center",
          autoClose: 3000,
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
          groupA: [
            {
              name: groupA1.name,
              rollNo: groupA1.rollNo,
              branch: groupA1.branch,
              email: groupA1.email,
              phoneNo: groupA1.phoneNo,
              hosteler: groupA1.hosteller,
            },
            {
              name: groupA2.name,
              rollNo: groupA2.rollNo,
              branch: groupA2.branch,
              email: groupA2.email,
              phoneNo: groupA2.phoneNo,
              hosteler: groupA2.hosteller,
            },
          ],
          groupB: [
            {
              name: groupB1.name,
              rollNo: groupB1.rollNo,
              branch: groupB1.branch,
              email: groupB1.email,
              phoneNo: groupB1.phoneNo,
              hosteler: groupB1.hosteller,
            },
            {
              name: groupB2.name,
              rollNo: groupB2.rollNo,
              branch: groupB2.branch,
              email: groupB2.email,
              phoneNo: groupB2.phoneNo,
              hosteler: groupB2.hosteller,
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
        groupA1.hosteller === "" ||
        groupA2.name === "" ||
        groupA2.rollNo === "" ||
        groupA2.branch === "" ||
        groupA2.email === "" ||
        groupA2.phoneNo === "" ||
        groupA2.hosteller === "" ||
        groupA3.name === "" ||
        groupA3.rollNo === "" ||
        groupA3.branch === "" ||
        groupA3.email === "" ||
        groupA3.phoneNo === "" ||
        groupA3.hosteller === "" ||
        groupB1.name === "" ||
        groupB1.rollNo === "" ||
        groupB1.branch === "" ||
        groupB1.email === "" ||
        groupB1.phoneNo === "" ||
        groupB1.hosteller === ""
      ) {
        toast.error("Please Enter All Details !", {
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
      if (
        isInvalid.groupA1name ||
        isInvalid.groupA1rollNo ||
        isInvalid.groupA1email ||
        isInvalid.groupA1phone ||
        isInvalid.groupA2name ||
        isInvalid.groupA2rollNo ||
        isInvalid.groupA2email ||
        isInvalid.groupA2phone ||
        isInvalid.groupA3name ||
        isInvalid.groupA3rollNo ||
        isInvalid.groupA3email ||
        isInvalid.groupA3phone ||
        isInvalid.groupB1name ||
        isInvalid.groupB1rollNo ||
        isInvalid.groupB1email ||
        isInvalid.groupB1phone
      ) {
        toast.error("Please Enter Valid details !", {
          position: "top-center",
          autoClose: 3000,
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
          groupA: [
            {
              name: groupA1.name,
              rollNo: groupA1.rollNo,
              branch: groupA1.branch,
              email: groupA1.email,
              phoneNo: groupA1.phoneNo,
              hosteler: groupA1.hosteller,
            },
            {
              name: groupA2.name,
              rollNo: groupA2.rollNo,
              branch: groupA2.branch,
              email: groupA2.email,
              phoneNo: groupA2.phoneNo,
              hosteler: groupA2.hosteller,
            },
            {
              name: groupA3.name,
              rollNo: groupA3.rollNo,
              branch: groupA3.branch,
              email: groupA3.email,
              phoneNo: groupA3.phoneNo,
              hosteler: groupA3.hosteller,
            },
          ],
          groupB: [
            {
              name: groupB1.name,
              rollNo: groupB1.rollNo,
              branch: groupB1.branch,
              email: groupB1.email,
              phoneNo: groupB1.phoneNo,
              hosteler: groupB1.hosteller,
            },
          ],
        },
      };
    }

    postData(data);
  };

  return (
    <div id="xyz">
      {/*<div
        id="leftside"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img id="logo" src={logo} alt="Logo" style={{ marginLeft: "3%" }}></img>
        <br className="media"></br>
        <img
          id="tech"
          src={technival}
          alt="technival_logo"
          style={{
            marginRight: "3%",
            marginLeft: "auto",
            marginTop: "-4%",
          }}
        ></img>
        </div>*/}
      <div className="headerouter">
        <div className="headerinner">
          <div className="headerinnerchild">
            <div className="headerinnerchild2">
              <img
                src={logo}
                alt="brllogo"
                height="100%"
                width="100%"
                className="brllogo"
              />
            </div>
          </div>
          <div className="headerinnerchild1">
            <img
              src={technival}
              alt="brllogo"
              height="100%"
              width="100%"
              className="technivallogo"
            />
          </div>
        </div>
      </div>
      <div id="scroll" style={{ minHeight: "85vh" }}>
        <div className="rightside">
          <ToastContainer />
          <form
            id="maininfo"
            onSubmit={submitHandler}
            data-netlify-recaptcha="true"
            data-netlify="true"
          >
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
                <h1 className="head1">Team Details</h1>
                <div className="box">
                  <div style={{ width: "100%" }}>
                    <div style={{ width: "100" }}>
                      <label className="labels" htmlFor="teamName">
                        Team Name:
                      </label>
                      <br></br>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        className="tdyn"
                        name="teamName"
                        value={teamName}
                        style={{ boxSizing: "border-box" }}
                        onChange={(e) => {
                          setTeamName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
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
                    sx={{ minWidth: 230, mb: 4, pr: 2 }}
                    style={{ width: "100%", boxSizing: "border-box" }}
                  >
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      name="groupASize"
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
                    sx={{ minWidth: 230, mb: 4, pr: 2 }}
                    style={{ width: "100%", boxSizing: "border-box" }}
                  >
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={groupBSize}
                      name="groupBSize"
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
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  id="memberdetail"
                  variant="contained"
                  onClick={handleClick}
                  style={{ backgroundColor: "#5B3532", color: "white" }}
                  disabled={
                    teamName === "" || groupASize === "" || groupBSize === ""
                  }
                >
                  Add Member Details
                </Button>
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
                  <h1 className="head1">Team Members Details</h1>
                  <h1 className="head2">Group A details :</h1>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    className="memberdiv"
                  >
                    <h3 className="mem">Member 1 : </h3>
                    <br />
                    <label className="det" htmlFor="name">
                      Name :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      name="groupA1name"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupA1.name}
                      onChange={(e) => {
                        setGroupA1({ ...groupA1, name: e.target.value });
                        setIsInvalid({
                          ...isInvalid,
                          groupA1name: !isValidName(e.target.value),
                        });
                      }}
                      aria-describedby="component-helper-text"
                    />
                    {isInvalid.groupA1name && (
                      <FormHelperText id="component-helper-text">
                        Invalid name!
                      </FormHelperText>
                    )}
                    <br className="media"></br>
                    <label className="det" htmlFor="roll">
                      Roll No :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      name="groupA1rollNo"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupA1.rollNo}
                      onChange={(e) => {
                        setGroupA1({ ...groupA1, rollNo: e.target.value });
                        setIsInvalid({
                          ...isInvalid,
                          groupA1rollNo: !isValidRollNo(e.target.value),
                        });
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
                      aria-describedby="component-helper-text"
                    />
                    {isInvalid.groupA1rollNo && (
                      <FormHelperText id="component-helper-text">
                        Invalid Roll Number!
                      </FormHelperText>
                    )}
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
                        name="groupA1branch"
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
                      name="groupA1email"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupA1.email}
                      onChange={(e) => {
                        setGroupA1({ ...groupA1, email: e.target.value });
                        setIsInvalid({
                          ...isInvalid,
                          groupA1email: !isValidEmail(e.target.value),
                        });
                      }}
                      aria-describedby="component-helper-text"
                    />
                    {isInvalid.groupA1email && (
                      <FormHelperText id="component-helper-text">
                        Invalid College email!
                      </FormHelperText>
                    )}
                    <br></br>
                    <label className="det" htmlFor="phone">
                      Phone No :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      name="groupA1phoneNo"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupA1.phoneNo}
                      onChange={(e) => {
                        setGroupA1({ ...groupA1, phoneNo: e.target.value });
                        setIsInvalid({
                          ...isInvalid,
                          groupA1phone: !isValidMobile(e.target.value),
                        });
                      }}
                      aria-describedby="component-helper-text"
                    />
                    {isInvalid.groupA1phone && (
                      <FormHelperText id="component-helper-text">
                        Invalid Phone Number!
                      </FormHelperText>
                    )}
                    <br></br>
                    <label className="det" htmlFor="branch">
                      Are you Hosteller ?{" "}
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
                        name="groupA1hosteler"
                        value={groupA1.hosteller}
                        onChange={(e) => {
                          setGroupA1({ ...groupA1, hosteller: e.target.value });
                        }}
                      >
                        <MenuItem value={"YES (Boys Hostel)"}>
                          YES (Boys Hostel)
                        </MenuItem>
                        <MenuItem value={"YES (Girls Hostel)"}>
                          YES (Girls Hostel)
                        </MenuItem>
                        <MenuItem value={"NO"}>NO</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  {groupASize > 1 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="memberdiv"
                    >
                      <h3 className="mem">Member 2 : </h3>
                      <br />
                      <label className="det" htmlFor="name">
                        Name :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupA2name"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA2.name}
                        onChange={(e) => {
                          setGroupA2({ ...groupA2, name: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupA2name: !isValidName(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupA2name && (
                        <FormHelperText id="component-helper-text">
                          Invalid name!
                        </FormHelperText>
                      )}
                      <br className="media"></br>
                      <label className="det" htmlFor="roll">
                        Roll No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        name="groupA2rollNo"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA2.rollNo}
                        onChange={(e) => {
                          setGroupA2({ ...groupA2, rollNo: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupA2rollNo: !isValidRollNo(e.target.value),
                          });
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
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupA2rollNo && (
                        <FormHelperText id="component-helper-text">
                          Invalid Roll Number!
                        </FormHelperText>
                      )}
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
                          name="groupA2branch"
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
                        name="groupA2email"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA2.email}
                        onChange={(e) => {
                          setGroupA2({ ...groupA2, email: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupA2email: !isValidEmail(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupA2email && (
                        <FormHelperText id="component-helper-text">
                          Invalid College email!
                        </FormHelperText>
                      )}
                      <br></br>
                      <label className="det" htmlFor="phone">
                        Phone No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupA2phoneNo"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA2.phoneNo}
                        onChange={(e) => {
                          setGroupA2({ ...groupA2, phoneNo: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupA2phone: !isValidMobile(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupA2phone && (
                        <FormHelperText id="component-helper-text">
                          Invalid Phone Number!
                        </FormHelperText>
                      )}
                      <br></br>
                      <label className="det" htmlFor="branch">
                        Are you Hosteller ?{" "}
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
                          name="groupA2hosteler"
                          value={groupA2.hosteller}
                          onChange={(e) => {
                            setGroupA2({
                              ...groupA2,
                              hosteller: e.target.value,
                            });
                          }}
                        >
                          <MenuItem value={"YES (Boys Hostel)"}>
                            YES (Boys Hostel)
                          </MenuItem>
                          <MenuItem value={"YES (Girls Hostel)"}>
                            YES (Girls Hostel)
                          </MenuItem>
                          <MenuItem value={"NO"}>NO</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  )}
                  {groupASize > 2 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="memberdiv"
                    >
                      <h3 className="mem">Member 3 : </h3>
                      <br />
                      <label className="det" htmlFor="name">
                        Name :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupA3name"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA3.name}
                        onChange={(e) => {
                          setGroupA3({ ...groupA3, name: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupA3name: !isValidName(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupA3name && (
                        <FormHelperText id="component-helper-text">
                          Invalid name!
                        </FormHelperText>
                      )}
                      <br className="media"></br>
                      <label className="det" htmlFor="roll">
                        Roll No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupA3rollNo"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA3.rollNo}
                        onChange={(e) => {
                          setGroupA3({ ...groupA3, rollNo: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupA3rollNo: !isValidRollNo(e.target.value),
                          });
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
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupA3rollNo && (
                        <FormHelperText id="component-helper-text">
                          Invalid Roll Number!
                        </FormHelperText>
                      )}
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
                          name="groupA3branch"
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
                        name="groupA3email"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA3.email}
                        onChange={(e) => {
                          setGroupA3({ ...groupA3, email: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupA3email: !isValidEmail(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupA3email && (
                        <FormHelperText id="component-helper-text">
                          Invalid College email!
                        </FormHelperText>
                      )}
                      <br></br>
                      <label className="det" htmlFor="phone">
                        Phone No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupA3phoneNo"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupA3.phoneNo}
                        onChange={(e) => {
                          setGroupA3({ ...groupA3, phoneNo: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupA3phone: !isValidMobile(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupA3phone && (
                        <FormHelperText id="component-helper-text">
                          Invalid Phone Number!
                        </FormHelperText>
                      )}
                      <br></br>
                      <label className="det" htmlFor="branch">
                        Are you Hosteller ?{" "}
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
                          name="groupA3hosteler"
                          value={groupA3.hosteller}
                          onChange={(e) => {
                            setGroupA3({
                              ...groupA3,
                              hosteller: e.target.value,
                            });
                          }}
                        >
                          <MenuItem value={"YES (Boys Hostel)"}>
                            YES (Boys Hostel)
                          </MenuItem>
                          <MenuItem value={"YES (Girls Hostel)"}>
                            YES (Girls Hostel)
                          </MenuItem>
                          <MenuItem value={"NO"}>NO</MenuItem>
                        </Select>
                      </FormControl>
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
                    className="memberdiv"
                  >
                    <h3 className="mem">Member 1 : </h3>
                    <br />
                    <label className="det" htmlFor="name">
                      Name :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      name="groupB1name"
                      variant="outlined"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupB1.name}
                      onChange={(e) => {
                        setGroupB1({ ...groupB1, name: e.target.value });
                        setIsInvalid({
                          ...isInvalid,
                          groupB1name: !isValidName(e.target.value),
                        });
                      }}
                      aria-describedby="component-helper-text"
                    />
                    {isInvalid.groupB1name && (
                      <FormHelperText id="component-helper-text">
                        Invalid name!
                      </FormHelperText>
                    )}
                    <br className="media"></br>
                    <label className="det" htmlFor="roll">
                      Roll No :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      name="groupB1rollNo"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupB1.rollNo}
                      onChange={(e) => {
                        setGroupB1({ ...groupB1, rollNo: e.target.value });
                        setIsInvalid({
                          ...isInvalid,
                          groupB1rollNo: !isValidRollNo(e.target.value),
                        });
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
                      aria-describedby="component-helper-text"
                    />
                    {isInvalid.groupB1rollNo && (
                      <FormHelperText id="component-helper-text">
                        Invalid Roll Number!
                      </FormHelperText>
                    )}
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
                        name="groupB1branch"
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
                      name="groupB1email"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupB1.email}
                      onChange={(e) => {
                        setGroupB1({ ...groupB1, email: e.target.value });
                        setIsInvalid({
                          ...isInvalid,
                          groupB1email: !isValidEmail(e.target.value),
                        });
                      }}
                      aria-describedby="component-helper-text"
                    />
                    {isInvalid.groupB1email && (
                      <FormHelperText id="component-helper-text">
                        Invalid College email!
                      </FormHelperText>
                    )}
                    <br></br>
                    <label className="det" htmlFor="phone">
                      Phone No :{" "}
                    </label>
                    <TextField
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      name="groupB1phoneNo"
                      sx={{ mb: 4, pr: 2 }}
                      value={groupB1.phoneNo}
                      onChange={(e) => {
                        setGroupB1({ ...groupB1, phoneNo: e.target.value });
                        setIsInvalid({
                          ...isInvalid,
                          groupB1phone: !isValidMobile(e.target.value),
                        });
                      }}
                      aria-describedby="component-helper-text"
                    />
                    {isInvalid.groupB1phone && (
                      <FormHelperText id="component-helper-text">
                        Invalid Phone Number!
                      </FormHelperText>
                    )}
                    <br></br>
                    <label className="det" htmlFor="branch">
                      Are you Hosteller ?{" "}
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
                        name="groupB1hosteler"
                        value={groupB1.hosteller}
                        onChange={(e) => {
                          setGroupB1({ ...groupB1, hosteller: e.target.value });
                        }}
                      >
                        <MenuItem value={"YES (Boys Hostel)"}>
                          YES (Boys Hostel)
                        </MenuItem>
                        <MenuItem value={"YES (Girls Hostel)"}>
                          YES (Girls Hostel)
                        </MenuItem>
                        <MenuItem value={"NO"}>NO</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  {groupBSize > 1 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="memberdiv"
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
                        name="groupB2name"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB2.name}
                        onChange={(e) => {
                          setGroupB2({ ...groupB2, name: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupB2name: !isValidName(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupB2name && (
                        <FormHelperText id="component-helper-text">
                          Invalid name!
                        </FormHelperText>
                      )}
                      <br className="media"></br>
                      <label className="det" htmlFor="roll">
                        Roll No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupB2rollNo"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB2.rollNo}
                        onChange={(e) => {
                          setGroupB2({ ...groupB2, rollNo: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupB2rollNo: !isValidRollNo(e.target.value),
                          });
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
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupB2rollNo && (
                        <FormHelperText id="component-helper-text">
                          Invalid Roll Number!
                        </FormHelperText>
                      )}
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
                          name="groupB2branch"
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
                        name="groupB2email"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB2.email}
                        onChange={(e) => {
                          setGroupB2({ ...groupB2, email: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupB2email: !isValidEmail(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupB2email && (
                        <FormHelperText id="component-helper-text">
                          Invalid College email!
                        </FormHelperText>
                      )}
                      <br></br>
                      <label className="det" htmlFor="phone">
                        Phone No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupB2phoneNo"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB2.phoneNo}
                        onChange={(e) => {
                          setGroupB2({ ...groupB2, phoneNo: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupB2phone: !isValidMobile(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupB2phone && (
                        <FormHelperText id="component-helper-text">
                          Invalid Phone Number!
                        </FormHelperText>
                      )}
                      <br></br>
                      <label className="det" htmlFor="branch">
                        Are you Hosteller ?{" "}
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
                          name="groupB2hosteler"
                          value={groupB2.hosteller}
                          onChange={(e) => {
                            setGroupB2({
                              ...groupB2,
                              hosteller: e.target.value,
                            });
                          }}
                        >
                          <MenuItem value={"YES (Boys Hostel)"}>
                            YES (Boys Hostel)
                          </MenuItem>
                          <MenuItem value={"YES (Girls Hostel)"}>
                            YES (Girls Hostel)
                          </MenuItem>
                          <MenuItem value={"NO"}>NO</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  )}
                  {groupBSize > 2 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="memberdiv"
                    >
                      <h3 className="mem">Member 3 : </h3>
                      <br />
                      <label className="det" htmlFor="name">
                        Name :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupB3name"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB3.name}
                        onChange={(e) => {
                          setGroupB3({ ...groupB3, name: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupB3name: !isValidName(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupB3name && (
                        <FormHelperText id="component-helper-text">
                          Invalid name!
                        </FormHelperText>
                      )}
                      <br className="media"></br>
                      <label className="det" htmlFor="roll">
                        Roll No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        name="groupB3rollNo"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB3.rollNo}
                        onChange={(e) => {
                          setGroupB3({ ...groupB3, rollNo: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupB3rollNo: !isValidRollNo(e.target.value),
                          });
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
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupB3rollNo && (
                        <FormHelperText id="component-helper-text">
                          Invalid Roll Number!
                        </FormHelperText>
                      )}
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
                          name="groupB3branch"
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
                        name="groupB3email"
                        variant="outlined"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB3.email}
                        onChange={(e) => {
                          setGroupB3({ ...groupB3, email: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupB3email: !isValidEmail(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupB3email && (
                        <FormHelperText id="component-helper-text">
                          Invalid College email!
                        </FormHelperText>
                      )}
                      <br></br>
                      <label className="det" htmlFor="phone">
                        Phone No :{" "}
                      </label>
                      <TextField
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        name="groupB3phoneNo"
                        sx={{ mb: 4, pr: 2 }}
                        value={groupB3.phoneNo}
                        onChange={(e) => {
                          setGroupB3({ ...groupB3, phoneNo: e.target.value });
                          setIsInvalid({
                            ...isInvalid,
                            groupB3phone: !isValidMobile(e.target.value),
                          });
                        }}
                        aria-describedby="component-helper-text"
                      />
                      {isInvalid.groupB3phone && (
                        <FormHelperText id="component-helper-text">
                          Invalid Phone Number!
                        </FormHelperText>
                      )}
                      <br></br>
                      <label className="det" htmlFor="branch">
                        Are you Hosteller ?{" "}
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
                          name="groupB3hosteler"
                          value={groupB3.hosteller}
                          onChange={(e) => {
                            setGroupB3({
                              ...groupB3,
                              hosteller: e.target.value,
                            });
                          }}
                        >
                          <MenuItem value={"YES (Boys Hostel)"}>
                            YES (Boys Hostel)
                          </MenuItem>
                          <MenuItem value={"YES (Girls Hostel)"}>
                            YES (Girls Hostel)
                          </MenuItem>
                          <MenuItem value={"NO"}>NO</MenuItem>
                        </Select>
                      </FormControl>
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
                      ref={recaptchaRef}
                      sitekey="6Ld4RDsjAAAAAG9ZmoRfRsKQlXtT5DYSjrsABbac"
                      onChange={() => {
                        setVerified(!verified);
                      }}
                    />
                    {/* <div data-netlify-recaptcha="true"></div> */}
                    {!loading && (
                      <Button
                        id="but"
                        variant="contained"
                        type="submit"
                        style={{
                          width: "37%",
                          backgroundColor: "#5B3532",
                          color: "white",
                        }}
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
