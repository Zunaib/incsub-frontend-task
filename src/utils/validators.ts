export const emailValidator = (email: string) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return { value: email, errorMsg: "" };
  } else if (email.trim() === "") {
    return { value: email, errorMsg: "Email is required" };
  } else {
    return { value: email, errorMsg: "Please enter a valid email" };
  }
};

export const nameValidator = (name: string) => {
  if (name.trim() === "") {
    return { value: name, errorMsg: "Name is required" };
  } else if (name.length < 4) {
    return { value: name, errorMsg: "Minimum 4 characters" };
  } else {
    return { value: name, errorMsg: "" };
  }
};

export const typeValidator = (type: string) => {
  if (type !== "default") {
    return { value: type, errorMsg: "" };
  } else {
    return { value: type, errorMsg: "Type is required" };
  }
};

export const passwordValidator = (password: string) => {
  if (password.trim() === "") {
    return { value: password, errorMsg: "Password is required" };
  } else if (password.length < 8) {
    return { value: password, errorMsg: "Minimum 8 characters" };
  } else {
    return { value: password, errorMsg: "" };
  }
};
