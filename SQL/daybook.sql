CREATE TABLE if not exists student(
sID integer not null serial primary key,
fName varchar(40) not null,
lName varchar(40) not null,
email varchar(250) not null,
pwdID integer not null foreign key,
);

INSERT INTO student (sID, fName, lName, email, pwdID) VALUES ("Bridget", "Smith", "bridget.smith@colorado.edu", (select pID from pwds where pID=pwdID));
INSERT INTO student (sID, fName, lName, email, pwdID) VALUES ("Reilly", "McGavern", "reilly.mcgavern@colorado.edu", (select pID from pwds where pID=pwdID));
INSERT INTO student (sID, fName, lName, email, pwdID) VALUES ("Nicole", "Richter", "nicole.richter@colorado.edu", (select pID from pwds where pID=pwdID));

CREATE TABLE if not exists pwds(
pID integer not null serial primary key ,
pwdHash varchar(250)
);

#uses pgcrypto to hash a password as it gets inputted into the database
INSERT INTO pwds(pwdhash) values (crypt('password', gen_salt('md5')));

#to join password ids from student_acct and pwds use this stmt
SELECT * FROM student 
INNER JOIN pwds 
ON student.pwdID = pwds.pID;

CREATE TABLE if not exists course(
courseID integer not null primary key,
dept varchar(40),
courseNum integer not null,
);

CREATE TABLE if not exists enrollment(
sID integer not null foreign key,
courseID integer not null foreign key,
);

#to create a table with students enrolled in courses use this stmt
SELECT *
FROM student S
JOIN enrollment E 
ON S.sID=E.sID
JOIN course C 
ON C.courseID=E.courseID;

#calendar table: courseID, due date, description
CREATE TABLE if not exists events(
courseID integer not null foreign key,
dueDate date not null,
description text,
);


		