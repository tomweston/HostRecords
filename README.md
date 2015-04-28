# Host Records App

<a href="http://s723.photobucket.com/user/tom_weston2/media/example_zps49e6fp6h.png.html" target="_blank"><img src="http://i723.photobucket.com/albums/ww236/tom_weston2/example_zps49e6fp6h.png" border="0" alt=" photo example_zps49e6fp6h.png"/></a>

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
<li>HTTPS</li>
<li>Create new dashboard views - eg. Total host count</li>
<li>Limit number of hosts shown on dashboard to latest entries only</li>
<li>Force IP Address field to be unique to avoid duplicates</li>
<li>Search functionality</li>
</ul> 
