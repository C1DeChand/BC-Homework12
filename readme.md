# Employee Management Tool
## By: C1DeChand - ![GitHub followers](https://img.shields.io/github/followers/C1DeChand?label=Follow&style=social)


# Table of Contents:
## [Description](#description)
## [Links](#links)
## [Installation](#installation)
## [Usage](#usage)
## [License](#license)
## [Tests](#tests)
## [FAQs](#faqs)
## [Contact](#contact)

## Description: 
A node.js Employee Management Tool created to assist employers organize their staff. You can fully populate a MySQL database with departments, positions, and employees.

## Links:
Repository: https://github.com/C1DeChand/BC-Homework12
MySQL Workbench Download: https://dev.mysql.com/downloads/workbench/

## Installation:

You must download the application from the above GitHub link. Once downloaded, you must open the file directory where the server.js file resides and open a CLI window. Run "npm i" in the CLI window to install the dependencies. You will also need to have MySQL Workbench installed in order to create the database you will need for the application. There is a link in the Links section to download MySQL Workbench. Once Workbench is installed, use the copy and paste the schema.sql code into your localhost and run it.

Finally, you will need to update the ".env.sample" file with your MySQL password and change the file name to ".env".

After all dependencies have been installed, simply run "node server.js" to use the application.

## Usage:
To use the Employee Management Tool, follow the above steps for install. Run the application in the CLI window by entering "node server.js".

To begin, you will see the Main Menu open with several options on what to do. I recommend using the application in the order that the Main Menu is ordered in.

To create, choose the option for what purpose you need (Create New Department, Create New Position, Create New Employee) and follow the prompts.

To view your departments, positions and employees, select the corresponding option.

To update employee information, select "Update Employee" and follow the prompts.
### NOTE: You will need the Employee ID number which can be found in the "View Employee" section.

To delete any of your departments, positions or employees from the system, select the corresponding option.
### NOTE: You will need the Department, Position or Employee ID number which can be found in the corresponding "View" section. It is also HIGHLY recommended you update any Employees should you choose to delete Departments or Positions. They will not be auto-updated to remaining Departments or Positions.

## License:
N/A

## Tests:
N/A

## FAQs:
Q: What is it supposed to look like when there are things in the database?
A: You can use the "seeds.sql" file code in Workbench as a demo to see what it looks like with content. You can also re-run the "schema.sql" file code again to reset the database after words if you want to start clean again.

## Contact:
N/A