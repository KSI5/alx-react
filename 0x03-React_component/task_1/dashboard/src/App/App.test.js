// App.test.js

import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { mount } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = mount(<App />);

    expect(component).toBeDefined();
    component.unmount();
  });

  it("should render Notifications component", () => {
    const component = mount(<App />);

    expect(component.find(Notifications)).toHaveLength(1);
    component.unmount();
  });

  it("should render Header component", () => {
    const component = mount(<App />);

    expect(component.find(Header)).toHaveLength(1);
    component.unmount();
  });

  it("should render Login Component", () => {
    const component = mount(<App />);

    expect(component.find(Login)).toHaveLength(1);
    component.unmount();
  });

  it("should render Footer Component", () => {
    const component = mount(<App />);

    expect(component.find(Footer)).toHaveLength(1);
    component.unmount();
  });

  it("does not render courselist if logged out", () => {
    const component = mount(<App isLoggedIn={false} />);

    expect(component.find(CourseList)).toHaveLength(0);
    component.unmount();
  });

  it("renders courselist if logged in", () => {
    const component = mount(<App isLoggedIn={true} />);

    expect(component.find(CourseList)).toHaveLength(1);
    expect(component.find(Login)).toHaveLength(0);
    component.unmount();
  });
});

describe("When ctrl + h is pressed", () => {
  let originalAlert; // to store the original alert function

  beforeEach(() => {
    // Store the original alert function before mocking
    originalAlert = window.alert;
    // Mock the alert function
    window.alert = jest.fn();
  });

  afterEach(() => {
    // Restore the original alert function after each test
    window.alert = originalAlert;
  });

  it("calls logOut function", () => {
    const mockedLogOut = jest.fn();
    const wrapper = mount(<App logOut={mockedLogOut} />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(mockedLogOut).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  it("checks that alert function is called", () => {
    const wrapper = mount(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(window.alert).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    wrapper.unmount();
  });
});
