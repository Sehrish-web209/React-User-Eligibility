# React User Eligibility Checker

A simple React.js application demonstrating the use of **components, props, and state management**.
The application creates a user object, passes it to a `User` component using props, displays user information, and checks eligibility based on age using React state.

## Features

* Created a reusable `User` compon
* Passed user data from parent component using props
* Displayed user information:

  * Name
  * Email
  * City
  * Date of Birth
  * Age
* Used React `useState` hook for:

  * Managing user age
  * Managing eligibility status
* Implemented eligibility checking logic:

  * Age greater than 18 and less than 25 → Eligible
  * Otherwise → Ineligible
* Added a button to check eligibility

## Technologies Used

| Technology        | Purpose                                   |
| ----------------- | ----------------------------------------- |
| React.js          | Building reusable UI components           |
| JavaScript (ES6+) | Logic and data handling                   |
| Vite              | Project setup and development environment |
| CSS               | Styling and layout                        |

## Project Structure

```bash
react-user-eligibility-checker/
│
├── src/
│   ├── components/
│   │   └── User.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
│
├── package.json
├── package-lock.json
└── README.md
```

## How to Run Locally

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd react-user-eligibility
```

Install project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## React Concepts Practiced

* Functional Components
* Props
* Passing Objects as Props
* `useState` Hook
* Event Handling (`onClick`)
* Conditional Logic

## Author

Sehrish Maqbool
BS IT Student