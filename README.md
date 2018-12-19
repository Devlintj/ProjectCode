# ProjectCode
The purpose of this application is to aid students and professors in keeping track of all assignments for school. The 
application has two user types. Students and Professors. Students can only view assignments that the student is enrolled in. Professors
have the ability to add assignments for a course on a specific day. For both user types, when there is an assignment on a certain day the
day corresponding to the calendar is marked red. The calendar is pretty intuitive to use. The links at the top of the page are Next, Prev,
and Logout. The next ans prev links will move the calendar forward or backward. These features scale indefinitely. In principle you could
navigate to whatever month in the future or past desired. Currently the enrollment feature for a user to sign up for a class is not 
implemented.The create profile feature is implemented. It defaults the user to be a student. All functionality of the application is found
in the NODEJS directory. The other directories have the html and sql code outlines. The sql database used is called kyleTestDB.sql and is 
in the NODEJS directory. It is basilcally a copy of the sql code found in the SQL directory. Within the NODEJS directory, there are three
sub directories. Public contains all of the statics files served inside the node.js code. Most of these files are the CSS files for all of
the pages. Routes conatins all of the node.js and express.js code to define the functionality for each of the applications routes. Views
contains the express html templates used to render html pages in our application. Outside of the sub directories, are the json files,
server.js, database.js, and the test sql database. The dbHandler.py code is not used in the application and therefore unnecessary. To run the applicaton run the command
node server.js
in the terminal of the local machine. Also, one must create a database with the guidelines present in the SQL directory and the file 
kyleTestDB.sql. Then one must alter the credentials in the database.js file. Then go to the local host port 4000 on the machine and the
application will be running there. 
