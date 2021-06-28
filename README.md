# Description
Github API Explorer React App

This application is bootstrap from create react app. To speed up the process of development I have used two CSS libaries/framework Ant Design and Bootstrap for CSS Styling and also used inline stylying at some places. Hope that is fine. I have also wrote test cases for reducer, api and utils which has 100% coverage, but for containers and components I wrote a few tets cases for demonstatrion.

I tried using the same mocks provided in the document and created the UI Design. It is compatiable with the Mobile screen as well. 

For Recent Searches I am using Local storage and react state for storing the recent search values and everything else is stored in Redux.
For Icons I am using primer/octicons-react.

I kept a router which will help us to go back at previous page, using links on top of the page.

# Assumptions
- There were few cases where the Github API did not respond anything or doesnt have any repos or commits, So I am assiming as no content and displaying the No Content page.
- I assumed even after we refresh the page it should load the current contents instead of routing back to home page. So if you are in Repos Page and did a browser refresh it will use params from url and load the current contents.
- I assumed the location key will be available in the search user API but it is not available so I kept Location not found text on the User Card.

## To Get Started
First Install Node Modules `npm install`

## To Start the server
`npm start`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To run the test cases and check the coverage
`npm test`

### Author
Siddharth Sunchu 
