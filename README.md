[![codecov](https://codecov.io/gh/LunarrPhase/Staff-Relations-Managment/graph/badge.svg?token=3A12FZGFGP)](https://codecov.io/gh/LunarrPhase/Staff-Relations-Managment)


# Staff Relations Management

A centralized platform to streamline all aspects of staff relations, including mental health awareness, task tracking, meal booking, car wash booking, reports and performance feedback.

## Table of Contents
1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage](#usage)
4. [Key Resources](#key-resources)
5. [Project Structure](#project-structure)



## Project Description

This project, "Staff Relations Management," equips companies with a centralized platform to streamline all aspects of staff relations. It allows employers to create healthier work environments and promote mental health awareness, track employee time on tasks for accurate client billing and efficient financial and capacity management, and foster a culture of continuous performance feedback. By integrating these features, the platform simplifies the management of employee well-being, productivity, and feedback, ultimately enhancing overall staff relations.

## Installation Instructions

### Prerequisites
- Node.js
- npm

### Installation Steps
1. Clone the repository: `git clone https://github.com/LunarrPhase/Staff-Relations-Managment`
2. Navigate to the project directory: `cd  Staff-Relations-Managment`
3. Install dependencies: `npm install`
4. Start the application: `npm start`

## Usage

To use the application, follow these steps:
1. Open your browser and navigate to `http://localhost:3000`.
2. - Log in with your credentials. 
    - If you don't have an account, create one then log in using one these access codes for Manager, HR, and Staff roles respectively: **mR123123**, **hR456456**, **uR789789**
3. Use the dashboard to monitor and manage employee relations, task timesheets, and performance feedback.

## Key Resources

- [Video Demo](#link-to-your-video-demo)
- [Publicly Hosted Application](http://staff-relations-management.azurewebsites.net/)
- [GitHub Repository](https://github.com/LunarrPhase/Staff-Relations-Managment)


## Project Structure

- **.github/workflows/**: Contains YAML files that define automated workflows for GitHub Actions, specifying tasks such as testing, building, and deploying code.
- **.vscode/**: Contains configuration files for Visual Studio Code, such as settings, launch configurations, and extensions specific to the project.
- **Documentation/**: A directory dedicated to documentation related to the project. This includes user guides, meeting minutes, design documents, and more.
- **__tests__/**: Contains test files for the app functions. These are automated tests that ensure the application behaves as expected.
- **coverage/**: Holds code coverage reports generated by testing tools. Code coverage reports show how much of the code is covered by tests.

- **node_modules/**: A directory where npm (Node Package Manager) installs the project dependencies. This directory is populated automatically and should not be manually edited.
- **src/**: The source code for the application. This directory contains all the html, css, js, and media.
  - **firebase_functions.js** and **functions.js**: Contains functions used in various parts of the app such as carwash bookings, timesheets, and reports.
  - **firestore-import.js**: Houses firestore imports.
  - **firebaseInit.js**: Initializes firebase database so we can use its services and exports firebase functions.
 
- **.DS_Store**: A macOS system file that stores custom attributes of a folder, such as the position of icons. 

- **README.md**: A markdown file that contains the documentation for the project. It includes information on how to set up, run, and contribute to the project. It is this file.



