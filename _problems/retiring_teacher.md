---
layout: problem
title: 9. Retiring Teacher
difficulty: Easy
description: |
    A quick introduction to DELETE syntax. 
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Coincidentally, all the "Mathematics" teachers are retiring this year.
    As such, you need to delete all the teachers belonging to "Mathematics" department.

    After deleting, query all the data from the Teacher table to verify that your deletion works.


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
    DELETE
    FROM  [YOUR CODE HERE]
    WHERE [YOUR CODE HERE];

    SELECT *
    FROM  [YOUR CODE HERE];

solution: |
    DELETE
    FROM Teacher
    WHERE department = 'Mathematics';

    SELECT *
    FROM Teacher;
---

