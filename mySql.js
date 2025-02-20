//CREATE DATABASE
CREATE DATABASE databasename;

        DROP DATABASE databasename;

//CREATE TABLE

CREATE TABLE table_name (      
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
); 
  //EX
    CREATE TABLE Persons (
        PersonID int,
        LastName varchar(255),
        FirstName varchar(255),
        Address varchar(255),
        City varchar(255)
    );
//CREATE A COPY OF TABLE FROM EXISTING TABLE
    CREATE TABLE new_table_name AS
    SELECT column1, column2,...
    FROM existing_table_name
    WHERE ....;

   //EX
    CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers;

//DROP TABLE 
DROP TABLE table_name; // DELETES ENTIRE TABLE

TRUNCATE TABLE table_name;// ONLY DELETE ENTRIES NOT TABLE

//ALTER TABLE

//ALTER TABLE - ADD Column
ALTER TABLE table_name ADD column_name datatype;

ALTER TABLE Persons MODIFY COLUMN DateOfBirth year; // CHAGES THA TYPE OF COLUMN

ALTER TABLE Persons DROP COLUMN DateOfBirth;

//MySQL Constraints:= to specify rules for the data in a table. EX: NOT NULL,PEIMARY KEY, FOREIGN KEY, UNIQUE
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);