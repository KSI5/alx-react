# 0x07-react_redux_action_creator_normalizr

This project is a series of tasks as part of the ALX Software Engineering program's React-Redux module. Each task builds on the previous one and focuses on different aspects of React, Redux, and Normalizr.

## Table of Contents

1. [Task 0: Read data from a JSON](#task-0-read-data-from-a-json)
2. [Task 1: Normalize a nested JSON](#task-1-normalize-a-nested-json)
3. [Task 2: Filter a normalized Schema](#task-2-filter-a-normalized-schema)
4. [Task 3: Create actions for the course list](#task-3-create-actions-for-the-course-list)
5. [Task 4: Create actions for the UI](#task-4-create-actions-for-the-ui)
6. [Task 5: Create actions for the notification list](#task-5-create-actions-for-the-notification-list)
7. [Task 6: Bound the actions](#task-6-bound-the-actions)
8. [Task 7: Async Action Creators](#task-7-async-action-creators)

## Task 0: Read data from a JSON

Reuse the latest dashboard project from the React course 0x06-React_state. Place `notifications.json` into the root of the project directory.

Create a `notifications.js` file in a `schema` folder:

- Import the JSON data from `notifications.json`.
- Create a function named `getAllNotificationsByUser` that accepts `userId` as an argument.
- The function should return a list containing all the context objects from the `notifications.json` data when the author id is the same as the userId.

In the same `schema` directory, create a `notifications.test.js` file:

- Add a test that uses the id `5debd764a7c57c7839d722e9` and verifies the expected data.

## Task 1: Normalize a nested JSON

Copy over the dashboard from Task 0 into a `task_1` directory at the root of the project.

Modify `src/schema/notifications.js` to set up a schema using Normalizr.

Create entities for users, messages, and notifications. Add tests to verify the normalized data.

## Task 2: Filter a normalized Schema

Copy the contents of the dashboard from Task 1 into a `task_2` directory at the root of the project.

Modify the function `getAllNotificationsByUser` to use the normalized dataset.

## Task 3: Create actions for the course list

Copy the dashboard from Task 2 into a `task_3` directory.

Create action types (`SELECT_COURSE` and `UNSELECT_COURSE`) and corresponding action creators.

Write tests for the action creators.

## Task 4: Create actions for the UI

Copy the dashboard from Task 3 into a `task_4` directory.

Create action types (`LOGIN`, `LOGOUT`, `DISPLAY_NOTIFICATION_DRAWER`, `HIDE_NOTIFICATION_DRAWER`) in `uiActionTypes.js`.

Create action creators for each type in `uiActionCreators.js` and write tests for them.

## Task 5: Create actions for the notification list

Copy the dashboard from Task 4 into a `task_5` directory.

Create action types (`MARK_AS_READ` and `SET_TYPE_FILTER`) and filter states in `notificationActionTypes.js`.

Create action creators for each type in `notificationActionCreators.js` and write tests for them.

## Task 6: Bound the actions

Copy the dashboard from Task 5 into a `task_6` directory.

Modify Course, Notification, and UI actions creators to be bound.

## Task 7: Async Action Creators

Set up Redux and Redux Thunk. Install `redux` and `redux-thunk` in your project.

Simulate an API by copying `login-success.json` into the `dist` folder.

Modify `uiActionTypes.js` to add two action types: `LOGIN_SUCCESS` and `LOGIN_FAILURE`.

Create async action creators in `uiActionCreators.js` for login success and failure.

Write tests for the async action creators.


---

**Repository:**
- [GitHub Repository](https://github.com/KSI5/alx-react)
- **Directory:** `0x07-react_redux_action_creator_normalizr`

