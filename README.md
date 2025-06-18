# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Alex Zimmer

**Email**: [mailto:zimmead@mail.uc.edu](zimmead@mail.uc.edu)

**Short-bio**: I am a second-year Computer Science major at the University of Cincinnati.

![Alex's headshot](https://github.com/AlexZimmzer/waph-zimmead/blob/main/labs/lab0/images/headshot.png)

## Lab 1

## Overview
In this lab, I worked with basic HTML, JavaScript, Ajax, CSS, jQuery, and Web API integration to create a simple information page with multiple exercises related to these languages. This helped me gain a further understanding of both front-end and back-end web development, and introduced me to asynchronous programming with Ajax.

Lab URL: [https://github.com/AlexZimmzer/waph-zimmead/tree/main/labs/lab2](https://github.com/AlexZimmzer/waph-zimmead/tree/main/labs/lab2)

## Task 1: Basic HTML with forms, JavaScript

In this task, I created an HTML webpage following a provided template with my headshot and an nteractable form.

![waph-zimmead.html](https://github.com/AlexZimmzer/waph-zimmead/blob/main/labs/lab2/images/waph-zimmead-html.png)

I enhanced this page using JavaScript to include multiple different sub-tasks, including an inline JS code that displays the current date and time when clicked, a code that displays both a digital clock ad analog clock, and code that shows and hides my email when clicked on.

![Simple HTML and JS](https://github.com/AlexZimmzer/waph-zimmead/blob/main/labs/lab2/images/simpleHTMLJS.png)

## Task 2: Ajax, CSS, jQuery, and Web API integration

I continued to enhance this site with Ajax; a tool that uses JavaScript to send HTTP Requests at any time. This allows the page to be modified without a reload, invoked by a callback function. I displayed this by creating an Ajax request form that used the echo.php application from Lab 1 to send an Ajax GET request and display the response below. 

![Ajax Request in console](https://github.com/AlexZimmzer/waph-zimmead/blob/main/labs/lab2/images/testAjax.png)

I also used CSS to style the page using inline, internal, and external styling. This was done using a remote CSS program, a simple internal styling code in the head tag, and inline code to modify the styling of the Ajax request button.

![CSS Styling](https://github.com/AlexZimmzer/waph-zimmead/blob/main/labs/lab2/images/cssStyling.png)

I also used jQuery, a JavaScript library that uses simple APIs to accomplish difficult tasks with less code. To do this, I had to add the library to my page using code provided in the lecture slides. I also created two different Ajax request options, Ajax GET and Ajax POST, designed to collect data from the server and modifying data on the server respectively. The console views of these requests with their request methods are seen below.

![Ajax GET Request](https://github.com/AlexZimmzer/waph-zimmead/blob/main/labs/lab2/images/ajaxGet.png)

![Ajax POST Request](https://github.com/AlexZimmzer/waph-zimmead/blob/main/labs/lab2/images/ajaxPost.png)

I also added a code that would send a request to display a random joke from a joke API as the page is loaded in the jQuery Ajax.

![Joke API Integration](https://github.com/AlexZimmzer/waph-zimmead/blob/main/labs/lab2/images/joke.png)
