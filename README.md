# Host Records App

This repo contains the code for a RESTful API Host Records App that was built using the MEAN stack:

<ul>
<li>MongoDB</li>
<li>Express</li>
<li>AngularJS</li>
<li>NodeJS</li>
</ul>

<h3>Example</h3>

<a href="http://s723.photobucket.com/user/tom_weston2/media/example_zps49e6fp6h.png.html" target="_blank"><img src="http://i723.photobucket.com/albums/ww236/tom_weston2/example_zps49e6fp6h.png" border="0" alt=" photo example_zps49e6fp6h.png"/></a>

<h3>Instructions</h3>

Firstly, ensure everything is up-to-date

    sudo apt-get update

Install git 

    sudo apt-get install git

You can now clone this repository into your chosen project directory

    git clone git@github.com:tomweston/hostrecords.git

Install Node.js and Node Package Manager (this will allow you to easily install modules and packages to use with Node.js)

    sudo apt-get install nodejs

Then install the Node modules with - Heres where the rest of the MEAN stack come into play

    npm install express --save body-parser mongojs

Install MongoDB - If you wish to run MongoDB on any other OS, please follow <a href="http://docs.mongodb.org/manual/installation/#installation-guides">MongoDB Installation Guide</a>

    sudo apt-get install -y mongodb-org

Make sure you start up mongod

    sudo service mongod start

Start the node server with

    node server.js
    
Navigate to 

<a href="http://localhost:3000">http://localhost:3000</a>

<h3>Todo List</h3>

<ul>
<li>Add User Authentication using express-stormpath - https://docs.stormpath.com/nodejs/express/quickstart.html</li>
<li>HTTPS</li>
<li>Create new dashboard views - eg. Total host count</li>
<li>Limit number of hosts shown on dashboard to latest entries only</li>
<li>Force IP Address field to be unique to avoid duplicates</li>
<li>Search functionality</li>
</ul> 
