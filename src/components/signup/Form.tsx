import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Form() {
  const [name, setName] = useState({ value: "", errorMsg: "" });
  const [email, setEmail] = useState({ value: "", errorMsg: "" });
  const [type, setType] = useState({ value: "", errorMsg: "" });
  const [password, setPassword] = useState({ value: "", errorMsg: "" });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const setEmailValidator = (email: string) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmail({ value: email, errorMsg: "" });
    } else if (email.trim() === "") {
      setEmail({ value: email, errorMsg: "Email is required" });
    } else {
      setEmail({ value: email, errorMsg: "Please enter a valid email" });
    }
  };

  const nameValidator = (name: string) => {
    if (name.trim() === "") {
      setName({ value: name, errorMsg: "Name is required" });
    } else if (name.length < 4) {
      setName({ value: name, errorMsg: "Minimum 4 characters" });
    } else {
      setName({ value: name, errorMsg: "" });
    }
  };

  const typeValidator = (type: string) => {
    if (type !== "default") {
      setType({ value: type, errorMsg: "" });
    } else {
      setType({ value: type, errorMsg: "Type is required" });
    }
  };

  const passwordValidator = (password: string) => {
    if (password.trim() === "") {
      setPassword({ value: password, errorMsg: "Password is required" });
    } else if (password.length < 8) {
      setPassword({ value: password, errorMsg: "Minimum 8 characters" });
    } else {
      setPassword({ value: password, errorMsg: "" });
    }
  };

  const nameErr = name.errorMsg.length > 0;
  const emailErr = email.errorMsg.length > 0;
  const typeErr = type.errorMsg.length > 0;
  const passwordErr = password.errorMsg.length > 0;

  const nameSubErr = name.value.length === 0 || nameErr;
  const emailSubErr = email.value.length === 0 || emailErr;
  const typeSubErr = type.value.length === 0 || typeErr;
  const passwordSubErr = password.value.length === 0 || passwordErr;
  const submitErr = nameSubErr || emailSubErr || typeSubErr || passwordSubErr;

  return (
    <form>
      <div className="textOnInput">
        <label className={`${nameErr && "error"}`}>Your name</label>
        <input
          className={`form-control ${nameErr && "error"}`}
          type="text"
          value={name.value}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            nameValidator(ev.target.value)
          }
        />
        {nameErr && <span className="feedback-txt">{name.errorMsg}</span>}
      </div>

      <div className="textOnInput">
        <label className={`${emailErr && "error"}`}>Email address</label>
        <input
          className={`form-control ${emailErr && "error"}`}
          type="email"
          value={email.value}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            setEmailValidator(ev.target.value)
          }
        />
        {emailErr && <span className="feedback-txt">{email.errorMsg}</span>}
      </div>

      <div className="textOnInput">
        <label className={`${typeErr && "error"}`}>Type</label>
        <select
          className={`form-control ${typeErr && "error"}`}
          placeholder="I would describe my user type as"
          defaultValue={type.value}
          onClick={(ev: any) => typeValidator(ev.target.value)}
        >
          <option value="default">I would describe my user type as</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
          <option value="photographer">Photographer</option>
        </select>
        {typeErr && <span className="feedback-txt">{type.errorMsg}</span>}
      </div>

      <div className="textOnInput">
        <label className={`${passwordErr && "error"}`}>Password</label>
        <input
          className={`form-control ${passwordErr && "error"}`}
          type={passwordShown ? "text" : "password"}
          name="password"
          value={password.value}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
            passwordValidator(ev.target.value)
          }
        />
        <i
          className={`${passwordErr && "error"}`}
          onClick={togglePasswordVisiblity}
        >
          {eye}
        </i>
        {passwordErr && (
          <span className="feedback-txt">{password.errorMsg}</span>
        )}
      </div>

      <button className="btn-submit" disabled={submitErr}>
        Next
      </button>
    </form>
  );
}

export default Form;
