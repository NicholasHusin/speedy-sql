---
layout: problem
title: 8. Add New Student
difficulty: Easy
description: |
    A quick introduction to INSERT syntax. 
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Insert a new student with the following data:
        - Name  : "Phil"
        - Age   : 20
        - Hobby : "Swimming"

    After inserting, query all the data from the Student table
    to verify that your insertion works.


initial-query: | 
    CREATE TABLE Student (name, age, hobby);
    INSERT INTO Student VALUES  ('Smith', 19, 'Skating'), 
                                ('Jessica', 20, 'Reading'), 
                                ('Alex', 18, 'Sleeping'), 
                                ('Karajan', 19, 'Playing the piano');


    CREATE TABLE Teacher (name, age, department);
    INSERT INTO Teacher VALUES  ('Smith', 40, 'Biology'), 
                                ('Albert', 24, 'Physics'), 
                                ('Heisenberg', 33, 'Physics'), 
                                ('Neumann', 40, 'Mathematics'), 
                                ('Turing', 51, 'Mathematics'), 
                                ('Karajan', 32, 'Music'),
                                ('Shostakovich', 36, 'Music');

starting-code: |
    INSERT INTO Student VALUES [YOUR CODE HERE];

    SELECT *
    FROM [YOUR CODE HERE];

solution: |
    INSERT INTO Student VALUES ('Phil', 20, 'Swimming');

    SELECT *
    FROM Student;
---

