CREATE TABLE if not exists users(
usrID integer not null unique,
fName varchar(40) not null,
lName varchar(40) not null,
email varchar(250) not null,
pwdID integer not null,
isProff boolean,
primary key (usrID) 
);

Insert into users(usrID, fName, lName, email, pwdID, isProff)
values (1, 'John', 'Doe', 'jd@gmail.com', 44, 100, 200, 300, false), 
(2, 'Johnny', 'Appleseed', 'japplZ@gmail.com', 78, 200, 350, 400, false);


Insert into users(usrID, fName, lName, email, pwdID, course1ID, course2ID, course3ID, course4ID, course5ID, isProff)
values(3, 'Ligma', 'Sphere', 'lsph3r3@gmail.com', 32, 100, 200, 300, 350, 400, true);


CREATE TABLE if not exists pwds(
pwdID integer not null,
pwdHash varchar(250), 
primary key (pwdID)
);



CREATE TABLE if not exists course(
courseID integer not null unique,
dept varchar(40),
courseNum integer not null,
primary key (courseID)
);

insert into course(courseID, dept, courseNum) values (100, 'APPM', 2000), (200, 'CSCI', 1300), (300, 'ASTR', 2600), (350, 'PHYS', 4510), (400, 'CSCI', 2400);

CREATE TABLE if not exists enrollment(
usrID integer not null,
courseID integer not null
);

insert into enrollment(usrid, courseid) values (1, 100), (1, 200), (1, 300), (2, 200), (2, 350), (2, 400), (3, 100), (3, 200), (3, 300), (3, 350), (3, 400);

#calendar table: courseID, due date, description
CREATE TABLE if not exists events(
courseID integer not null,
dueDate date not null,
description text
);

insert into events(courseID, dueDate, description) values (100, '2018-12-15', 'Read Chapter 6 of textbook');


SELECT *
FROM users U
JOIN enrollment E 
ON u.usrID=E.usrID
JOIN course C 
ON C.courseID=E.courseID;


#query to get the courses enrolled by a certain user
SELECT (c.courseID)
FROM users U
JOIN enrollment E 
ON u.usrID=E.usrID
JOIN course C 
ON C.courseID=E.courseID
where (u.usrID = 1);










