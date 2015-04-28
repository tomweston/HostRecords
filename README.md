# Host Records App

<img src="" alt="Host Records App">

This repo contains the code for a RESTful API Host Records App that was built using the MEAN stack:

<ul>
<li>MongoDB</li>
<li>Express</li>
<li>AngularJS</li>
<li>NodeJS</li>
</ul>

<h3>Instructions</h3>

    git clone git@github.com:tomweston/hostrecords.git

then install the Node modules with

    npm install

then make sure MongoDB is running with

    mongod

from your MongoDB directory, and then run the code with 

    node server

<h3>Todo List</h3>

<ul>
<li>Add User Authentication using express-stormpath - https://docs.stormpath.com/nodejs/express/quickstart.html</li>
<li>Create new dashboard views - eg. Total host count</li>
<li>Limit number of hosts shown on dashboard to latest entries only</li>
<li>Force IP Address field to be unique to avoid duplicates</li>
<li>Search functionality</li>
</ul> 
