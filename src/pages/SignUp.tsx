import SignUpForm from "../components/signup/Form";

function SignUp() {
  return (
    <div className="signup-container">
      <div className="child left"></div>
      <div className="child middle">
        <div className="step-row">
          <span>Step 1 of 3</span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="form-container">
          <h2>Lets setup your account.</h2>
          <p className="sign-in-para">
            Already have an account?
            <a className="link" href="/#sign-in">
              Sign in
            </a>
          </p>
          <SignUpForm />
          <p className="t-and-c">
            By clicking the "Next" button, you agree to creating a free account,
            and do
            <a className="link" href="/#terms">
              Terms of Service
            </a>
            and
            <a className="link" href="/#policy">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <div className="child right">
        <h2>Dummy Heading</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
