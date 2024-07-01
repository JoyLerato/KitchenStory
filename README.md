Kitchen Story - Admin Backend Features
Project Overview
Kitchen Story is an e-commerce portal that allows customers to shop for basic food items. The project includes an admin backend that facilitates the management of the website's food items and admin user accounts. This writeup outlines the features and implementation of the admin backend using HTML, JavaScript, and Node.js with Express.

Admin Backend Features
The admin backend of Kitchen Story includes the following features:
1.	Admin Login
2.	Manage Food Items
3.	Change Admin Password
1. Admin Login
The admin login feature allows administrators to securely log into the backend system. The login process involves:
•	An admin login page where administrators can enter their username and password.
•	Server-side verification of credentials to ensure secure access.
•	Storing and managing admin credentials in a secure manner.
2. Manage Food Items
The admin can manage the list of food items available for purchase on the website. This includes:
•	Viewing Food Items: Displaying a list of all available food items.
•	Adding Food Items: Providing a form to add new food items, including the item's name and price.
•	Removing Food Items: Allowing the admin to delete food items from the list.
The management of food items is facilitated through a simple web interface where admins can perform these operations easily.
3. Change Admin Password
Admins can change their password to ensure account security. This feature includes:
•	A form where admins can enter their current password and new password.
•	Server-side validation to verify the current password and update the password securely in the database.
Implementation Details
Front-end
The front-end consists of HTML pages and JavaScript to handle user interactions:
•	HTML: Pages for admin login and food item management.
•	JavaScript: Client-side scripts to handle form submissions, fetch data from the server, and update the user interface dynamically.
Back-end
The back-end is implemented using Node.js with Express, providing the necessary API endpoints for the admin functionalities:
•	Express: A web framework for Node.js to handle HTTP requests and serve static files.
•	File-based Storage: Using JSON files to store admin credentials and food item data. This simplifies data management for the purposes of this project.
Data Storage
The project uses JSON files to store data:
•	admins.json: Stores admin user credentials.
•	foodItems.json: Stores the list of food items.
Workflow
1.	Admin Login: Admins navigate to the login page and enter their credentials. If valid, they are redirected to the admin dashboard.
2.	Managing Food Items:
o	Adding: Admins fill out a form to add new food items. The data is sent to the server and added to the foodItems.json file.
o	Viewing: The list of food items is fetched from the server and displayed on the admin dashboard.
o	Removing: Admins can delete items from the list. The deletion request is sent to the server, which updates the foodItems.json file.
3.	Changing Password: Admins can change their password through a secure form submission. The server validates the request and updates the admins.json file accordingly.
Conclusion
The admin backend for Kitchen Story is designed to be simple yet functional, allowing administrators to manage the website effectively. By using a combination of HTML, JavaScript, and Node.js with Express, the project demonstrates how to build a basic yet secure admin backend for an e-commerce application.

