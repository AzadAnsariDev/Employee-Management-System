
# Employee Management System (EMS)

This is a simple Employee Management System built using React.  
The main goal of this project is to understand how role-based systems work in real applications.

In this system, an Admin can manage employees and assign tasks, while Employees can log in and see only their own tasks.  
This project is created for learning and practice purposes.

---

## About the Project

The Employee Management System helps in managing employees and their tasks in a structured way.  
It has two types of users: **Admin** and **Employee**.

The admin can create employees, assign tasks, and track their status.  
Employees can log in and update the status of the tasks assigned to them.

The project focuses on clean UI, basic performance optimization, and proper project structure.

---

## Features

### Admin
- Admin login
- Create employees with a unique Employee ID
- Assign tasks to employees
- View task status (New, Active, Completed, Failed)

### Employee
- Employee login
- View assigned tasks
- Update task status
- Simple and responsive dashboard

---

## Tech Stack

- React
- Tailwind CSS
- JavaScript (ES6)
- Context API
- LocalStorage

----

## How to Run the Project

Follow these steps to run the project locally:

```bash
git clone <repository-url>
cd ems
npm install
npm run dev

```

## Demo Login Details

These credentials are only for demo and testing purposes.

Admin Login

Email: admin@me.com

Password: 123

Employee Login (Static Accounts)

e1@e.com
 / 123

e2@e.com
 / 123

e3@e.com
 / 123

e4@e.com
 / 123

e5@e.com
 / 123

## New Employee Signup

New employees can be created using the Signup page

A unique Employee ID is automatically generated

Newly created employees can log in immediately after signup

Login credentials are documented here for demo purposes and are not displayed on the UI.

---

## Project Structure
src/
 ├── components/
 ├── context/
 ├── pages/
 ├── utils/
 └── App.jsx

 -----

## What I Learned From This Project

How to build role-based login in React

Managing global state using Context API

Storing and retrieving data using localStorage

Creating reusable components

Improving performance using memoization techniques

Writing proper project documentation

----

## Future Improvements

Backend authentication and database integration

Password encryption

Role-based protected routes

Pagination for large task lists

Better UI and animations

## Author

Azad Ansari
BSc IT Student
Aspiring Frontend Developer

