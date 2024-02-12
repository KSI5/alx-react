# 0x03. React Component 📖

## Introduction
This project focuses on understanding React components, lifecycles, event handling, and the creation of Higher Order Components (HOCs). Through a series of tasks, you will convert functional components into class components, handle events, create reusable components, and optimize performance using pure components.

## Learning Objectives
By the end of this project, you should be able to:

- Understand when to use a Class or a function to create a component.
- Grasp the lifecycle of a Class component.
- Test React components effectively.
- Utilize Jest spies to verify function calls.
- Comprehend the concept of Higher Order Components (HOCs).
- Optimize performance and control component rendering.

## Resources
Make sure to read or watch the following resources:

- [React components](https://reactjs.org/docs/react-component.html)
- [React Developer Tools](https://github.com/facebook/react-devtools)
- [Enzyme Shallow](https://enzymejs.github.io/enzyme/docs/api/shallow.html)
- [Enzyme Mount](https://enzymejs.github.io/enzyme/docs/api/mount.html)
- [Enzyme Unmount](https://enzymejs.github.io/enzyme/docs/api/unmount.html)
- [React Pure components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
- [React Higher Order Components](https://reactjs.org/docs/higher-order-components.html)
- [Jest mock function](https://jestjs.io/docs/mock-functions)

## Project Structure⚙️
The project is organized into several tasks, each focusing on specific aspects of React components. Follow the instructions in each task to complete the project successfully.

### Task 0: Commence with class components
Convert the `App` function into a React class and ensure that the tests are still passing. Reloading the app should display the same page as the last task with no console errors or warnings.

**File:** `task_0/dashboard/src/App/App.js`

### Task 1: Lifecycles
Add a lifecycle to a component. Listen for keyboard events and trigger an alert and function call when specific keys are pressed. Ensure proper cleanup by removing the event listener when the component is unmounted.

**Files:** `task_1/dashboard/src/App/App.js`, `task_1/dashboard/src/App/App.test.js`

### Task 2: Handling Events
Create a new event-handling function within the `Notifications` component and test its functionality. Ensure proper binding and cleanup in both the `Notifications` and `NotificationItem` components.

**Files:** `task_2/dashboard/src/Notifications/NotificationItem.js`, `task_2/dashboard/src/Notifications/NotificationItem.test.js`, `task_2/dashboard/src/Notifications/Notifications.js`, `task_2/dashboard/src/Notifications/Notifications.test.js`

### Task 3: Reusable comments & specialization
Implement a `BodySection` component for containment and a specialized `BodySectionWithMarginBottom` component. Wrap existing components in the `App` component with the new ones.

**File:** `task_3/dashboard/src/BodySection/BodySection.js`, `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js`, `task_3/dashboard/src/App/App.js`

### Task 4: Specialization
Create a specialized component `BodySectionWithMarginBottom` with specific styling in a separate CSS file. Utilize propTypes and the spread operator to pass props efficiently.

**Files:** `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js`, `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.css`

### Task 5: Use the new components
Modify the `App` component to include the newly created `BodySectionWithMarginBottom` and `BodySection` components.

**File:** `task_3/dashboard/src/App/App.js`

### Task 6: Test the new components
Write tests for the `BodySection` and `BodySectionWithMarginBottom` components to ensure correct rendering and functionality.

**Files:** `task_3/dashboard/src/BodySection/BodySection.test.js`, `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js`

### Task 7: Create WithLogging HOC
Create a Higher Order Component (HOC) named `WithLogging` to log mount and unmount events for wrapped components. Modify the displayName for better debugging.

**File:** `task_4/dashboard/src/HOC/WithLogging.js`

### Task 8: Write a test for the HOC
Write tests for the `WithLogging` HOC to verify that `console.log` is called on mount and unmount for different wrapped elements.

**File:** `task_4/dashboard/src/HOC/WithLogging.test.js`

### Task 9: Declare a pure component
Modify the `NotificationItem` component to make it a "pure" component, updating only when props and state change.

**File:** `task_5/dashboard/src/Notifications/NotificationItem.js`

### Task 10: Make your own pure component
Optimize the `Notifications` component to update only when the new property `listNotifications` has a longer list than before.

**File:** `task_5/dashboard/src/Notifications/Notifications.js`

### Task 11: Add a test
Write tests for the `Notifications` component to verify that it does not rerender when updating with the same list and does rerender with a longer list.

**File:** `task_5/dashboard/src/Notifications/Notifications.test.js`

