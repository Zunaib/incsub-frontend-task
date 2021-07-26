import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  typeValidator,
} from "../../utils/validators";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlashed = <FontAwesomeIcon icon={faEyeSlash} />;

function Form() {
  const [name, setName] = useState({ value: "", errorMsg: "" });
  const [email, setEmail] = useState({ value: "", errorMsg: "" });
  const [type, setType] = useState({ value: "", errorMsg: "" });
  const [password, setPassword] = useState({ value: "", errorMsg: "" });
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const signUpHandler = (e: any) => {
    e.preventDefault();
    //Implement handler here
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
    <>
      <h2>Lets setup your account.</h2>
      <p className="sign-in-para">
        Already have an account?
        <a className="link" href="/#sign-in">
          Sign in
        </a>
      </p>
      <form>
        <div className="textOnInput">
          <label className={`${nameErr && "error"}`}>Your name</label>
          <input
            className={`form-control ${nameErr && "error"}`}
            type="text"
            placeholder="Your Name"
            value={name.value}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
              setName(nameValidator(ev.target.value))
            }
          />
          {nameErr && <span className="feedback-txt">{name.errorMsg}</span>}
        </div>

        <div className="textOnInput">
          <label className={`${emailErr && "error"}`}>Email address</label>
          <input
            className={`form-control ${emailErr && "error"}`}
            type="email"
            placeholder="Email Address"
            value={email.value}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(emailValidator(ev.target.value))
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
            onClick={(ev: any) => setType(typeValidator(ev.target.value))}
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
            placeholder="Password"
            value={password.value}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(passwordValidator(ev.target.value))
            }
          />
          <i
            className={`${passwordErr && "error"}`}
            onClick={togglePasswordVisiblity}
          >
            {passwordShown ? eyeSlashed : eye}
          </i>
          {passwordErr && (
            <span className="feedback-txt">{password.errorMsg}</span>
          )}
        </div>

        <button
          className="btn-submit"
          disabled={submitErr}
          onClick={signUpHandler}
        >
          Next
        </button>
      </form>
      <p className="t-and-c">
        By clicking the "Next" button, you agree to creating a free account, and
        do
        <a className="link" href="/#terms">
          Terms of Service
        </a>
        and
        <a className="link" href="/#policy">
          Privacy Policy
        </a>
      </p>
    </>
  );
}

export default Form;
