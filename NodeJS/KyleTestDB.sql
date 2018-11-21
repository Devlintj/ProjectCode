CREATE TABLE if not exists users(
usrID integer not null unique,
fName varchar(40) not null,
lName varchar(40) not null,
email varchar(250) not null,
pwdID integer not null,
course1ID integer, 
course2ID integer, 
course3ID integer, 
course4ID integer, 
course5ID integer,
course6ID integer, 
course7ID integer, 
course8ID integer,
isProff boolean,
primary key (usrID) 
);

Insert into users(usrID, fName, lName, email, pwdID, course1ID, course2ID, course3ID, isProff)
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

CREATE TABLE if not exists enrollment(
usrID integer not null,
courseID integer not null,
foreign key (sID),
foreign key (courseID)
);


