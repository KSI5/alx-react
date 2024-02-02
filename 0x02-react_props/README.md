# Alx 0x02. React Props 📖

This project is part of the Alx School curriculum, focusing on React Props and component organization.

## Project Overview

The goal of this project is to refactor a React application by splitting it into separate components and organizing the project structure. The main components include Header, Footer, and Login.

## Task Description ⚙️

### 0. Basic components

#### 1. Create Header Component
- Create a new folder named `Header` inside `task_0/dashboard/src`.
- Move the code related to the header from `App.js` to a new file named `Header.js` inside the `Header` folder.
- Move the CSS code related to the header from `App.css` to a new file named `Header.css` inside the `Header` folder.
- Create an empty `Header.test.js` file inside the `Header` folder.

#### 2. Create Footer Component
- Create a new folder named `Footer` inside `task_0/dashboard/src`.
- Move the code related to the footer from `App.js` to a new file named `Footer.js` inside the `Footer` folder.
- Move the CSS code related to the footer from `App.css` to a new file named `Footer.css` inside the `Footer` folder.
- Create an empty `Footer.test.js` file inside the `Footer` folder.

#### 3. Create Login Component
- Create a new folder named `Login` inside `task_0/dashboard/src`.
- Move the code related to the login section from `App.js` to a new file named `Login.js` inside the `Login` folder.
- Wrap the login code in a React Fragment in `Login.js`.
- Move the CSS code related to the login from `App.css` to a new file named `Login.css` inside the `Login` folder.
- Create an empty `Login.test.js` file inside the `Login` folder.

#### 4. Modify Shell
- In `task_0/dashboard/src/index.js`:
    - Remove the root-notifications import.
    - Remove the Notifications import.
- In `task_0/dashboard/src/App.js`:
    - Import `Notifications`, `Login`, `Footer`, and `Header`.
    - Add the new `Notifications` component before the `div.App` element.
    - Wrap `Notifications` and the rest of the `div.App` within a React Fragment.
    - Replace the header code within `div.App` by the new `Header` component.
    - Replace the login code within `div.App-body` by the new `Login` component.
    - Replace the footer code within `div.App-footer` by the new `Footer` component.
- In `task_0/dashboard/src/App.test.js`:
    - Keep only the test ensuring that the component renders without crashing.

### Requirements

- Reloading the App should display the exact same page as the last task.
- The console in your browser should not show any error or warning.

## Project Structure

Certainly! Here's the updated README.md with the gear engine emoji:

```markdown
# Alx 0x02. React Props ⚙️ 📖

This project is part of the Alx School curriculum, focusing on React Props and component organization.

## Project Overview

The goal of this project is to refactor a React application by splitting it into separate components and organizing the project structure. The main components include Header, Footer, and Login.

## Task Description

### 0. Basic components

#### 1. Create Header Component
- Create a new folder named `Header` inside `task_0/dashboard/src`.
- Move the code related to the header from `App.js` to a new file named `Header.js` inside the `Header` folder.
- Move the CSS code related to the header from `App.css` to a new file named `Header.css` inside the `Header` folder.
- Create an empty `Header.test.js` file inside the `Header` folder.

#### 2. Create Footer Component
- Create a new folder named `Footer` inside `task_0/dashboard/src`.
- Move the code related to the footer from `App.js` to a new file named `Footer.js` inside the `Footer` folder.
- Move the CSS code related to the footer from `App.css` to a new file named `Footer.css` inside the `Footer` folder.
- Create an empty `Footer.test.js` file inside the `Footer` folder.

#### 3. Create Login Component
- Create a new folder named `Login` inside `task_0/dashboard/src`.
- Move the code related to the login section from `App.js` to a new file named `Login.js` inside the `Login` folder.
- Wrap the login code in a React Fragment in `Login.js`.
- Move the CSS code related to the login from `App.css` to a new file named `Login.css` inside the `Login` folder.
- Create an empty `Login.test.js` file inside the `Login` folder.

#### 4. Modify Shell
- In `task_0/dashboard/src/index.js`:
    - Remove the root-notifications import.
    - Remove the Notifications import.
- In `task_0/dashboard/src/App.js`:
    - Import `Notifications`, `Login`, `Footer`, and `Header`.
    - Add the new `Notifications` component before the `div.App` element.
    - Wrap `Notifications` and the rest of the `div.App` within a React Fragment.
    - Replace the header code within `div.App` by the new `Header` component.
    - Replace the login code within `div.App-body` by the new `Login` component.
    - Replace the footer code within `div.App-footer` by the new `Footer` component.
- In `task_0/dashboard/src/App.test.js`:
    - Keep only the test ensuring that the component renders without crashing.

### Requirements

- Reloading the App should display the exact same page as the last task.
- The console in your browser should not show any error or warning.

## Project Structure

```
- task_0/dashboard/
  - src/
    - Header/
      - Header.js
      - Header.css
      - Header.test.js
    - Footer/
      - Footer.js
      - Footer.css
      - Footer.test.js
    - Login/
      - Login.js
      - Login.css
      - Login.test.js
    - App.js
    - App.test.js
    - index.js
  - dist/
    - index.html
```

## Usage

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000/` to view the application.

## Contributing

If you would like to contribute to this project, feel free to submit a pull request or open an issue. 
