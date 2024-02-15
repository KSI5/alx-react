# 0x05-react_state


# Overview 📜

This repository contains a series of tasks aimed at practicing React state management techniques, including local state, context, and React hooks. Each task focuses on a specific aspect of state management and provides opportunities to implement and test different state-related functionalities.

## Task 0: Adding a local state for notifications

In this task, we focus on adding local state management to the application to handle notifications. We modify the `App` component to create local state for managing the display of notifications. We also implement functions to show and hide the notification panel. Additionally, we update the `Notifications` component to interact with the new state and provide functionality to display and hide notifications.

## Task 1: Controlled components and state callback

Task 1 involves creating controlled components within the `Login` component to manage form inputs and their corresponding state. We add local state for the `isLoggedIn` flag and the user's email and password. We implement functions to handle input changes and submission. Furthermore, we add logic to enable/disable the submit button based on the input values.

## Task 2: Context

In this task, we introduce the concept of context to manage user authentication state across components. We create a React context containing user information and authentication functions. We then integrate this context into the `App` component to handle user login/logout actions. Additionally, we update the `Header` component to display user information and provide a logout functionality.

## Task 3: Context consumer & advanced state

Task 3 involves leveraging context consumer to subscribe to changes in user authentication state in the `Footer` component. We modify the `Footer` component to conditionally display a link based on the user's login status. Additionally, we enhance the `App` component to manage a list of notifications using advanced state management techniques. We implement functions to mark notifications as read and update the UI accordingly.

## Task 4: Introduction to react hook

In the final task, we explore React hooks by enhancing the `CourseListRow` component to include a checkbox for each row. We use React hooks to manage the state of the checkboxes and apply conditional styling to rows based on checkbox selection.

By completing these tasks, developers gain practical experience in implementing various state management techniques in React applications, including local state, context, and React hooks. Additionally, thorough testing ensures the reliability and correctness of the implemented functionalities.
