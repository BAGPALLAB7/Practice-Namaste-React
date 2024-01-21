import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../src/utils/Store/appStore";
import Header from "../src/components/Header";
import { BrowserRouter } from "react-router-dom";

import {logo} from "../src/utils/image/logo.png";
import {cartLogo} from "../src/utils/image/cartIcon.png"
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


  const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});



it("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
