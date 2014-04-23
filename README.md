pdfBrief - LettrIt
==========


Installation
----------

Make sure you're using `ruby 1.9.3`,
    rvm use ruby-1.9.3-p327
    
then install dependencies
    npm install
    bower install

and finally start the server
    grunt serve
    
Dependencies
------------
You need a server, that handles your pdf-create requests and serves you a `.pdf` file. You can use [briefServer](https://github.com/frosch03/briefServer.git) for this task.

Problems
--------

At the moment, i wrote my local ip-address hardcoded into the source. To get it working, search for `192.168.0.17` and replace it with you own ip.
