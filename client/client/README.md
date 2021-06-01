# Mini Project

Mini Project as a proof of concept for the role of **Frontend Developer at CleverX**. Please read the following document carefully and feel free to ask any questions on Angel List, in case you are confused about anything.

## Folder and Files

- Main.js: it is used for providing the path to our app, onclicking the button on it will move to next page.
- Pop.js: it generates a form wherein user can create a new project by filling in the required details
- Popup.js: Component to represent the list of cards saved by user
- Pop3.js: final page where user can see purchase summary to confirm their entered details or here they can cancel the purchase

## Getting Started with Create React App

- Clone the Repo, here you will see the Client Folder, inside it Click on Client, open that folder in terminal, and Run "npm install" to install the dependencies.
- Similarly, Open the root folder of the repo in the terminal and run "npm install" to install the dependencies of the Server.

## APIs USed

**GET** /project - Get the project data.

**POST** /project - Post the project data.

**AXIOS** I used axios to get and post data on the Api

**@testing-library/react** I used testing library to deploy unit tests for my App.

**Moment** I used Moment library for the Date Manipulation, but later on I removed it and moved to simple manipulation.

**Dropbox** I used dropbox to upload the visa images on the server.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000] to view it in the browser.

The page will reload if you make edits.
You will also see if any errors in the console.

### `nodemon app.js`

it will run the app.js and by runnig app.js the server is started. I used Nodemon because it automatically reloads the server as we change or save the enviroment.

### `npm run test || npm test`

You can run this command to run the unit test deployed by the developer. By running this command, and then press "a" to run all test, you will get the result of 4 tests, showing result separately for all components of the ReactJs app.

## Documentation for the App.

While developing the desired App, I have used ReactJs , Vanilla CSS, and the already provided Server(based on NodeJs and ExpressJS). I have used Vanilla CSS because it was mentioned on the main repo that React and CSS skills will be analyzed in the whole app so I used vanilla CSS instead of BootStrap or any other UI-kit.

## How to Start the App?

- Open the Root folder of the App in the terminal, run "Nodemon app.js", it will execute the server.
- After running the server, open the Client/Client in the terminal and then run "npm start", it will execute the App.

# Description

- Moving Forward in the app, you will see the "Redirect to Form" button on the webpage, on clicking that the app will be directed to the Page1 of the required modal, here you will see the input boxes for different fields, such as Title, Description, Upload Attachement, Delivery Date and Cost. Except the Upload Attachement all of them are required for submitting the data. Required Validation is performed in the handleSubmit() function in "Pop.js" file. Moreover below these input boxes, you will see two labels, that will be showing you the CleverX fee for the Project Cost and then the total cost for the project. They will be updated as the input for the Project Cost updates.

- After submitting the information, clicking on the "Create Project" Button will move you to the next modal, where you can select your payment process. Visa card payment is available for that app, first cell of the app is choosen by default, but in case if you want to pay by second card, then you can click on second cell, it will be selected. "Add Card" button is a dummy button, it does nothing.

- After Clicking on "Pay" Button, you will be directed to the third and the last modal of this app, where you will be getting the information for the project such as Project Cost and the total project cost inclusive of CleverX fee(20%).
  Below that you will notice that delivery dys for the project is mentioned which are calculated as per the entered Delivery date using the "CalcDays" function in "pop3.js" file.

- it's the end of the required App. if you want to cancel the order for the project, you can simply click the "Cancel" Button which will close the form for the project.

# Note

Responsiveness of this app was not required by the team, so I didn't deployed it for different screen sizes. I developed it on my screen size.

![alt text](https://www.dropbox.com/s/tpm9yeh4v54rm3n/main.png?raw=1)

![alt text](https://www.dropbox.com/s/brzmcqf99unrhxb/page1.png?raw=1)

![alt text](https://www.dropbox.com/s/931wuuexzy5otw7/page2.png?raw=1)

![alt text](https://www.dropbox.com/s/neqrcryj716uxhr/page3.png?raw=1)
