---
layout: problem
title: 5. Average Teacher Age
difficulty: Easy
description: |
    A quick introduction to aggregation functionality.
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Find the average age of all the teachers.

initial-query: | 
    CREATE TABLE Student (name, age, hobby);
    INSERT INTO Student VALUES  ('Smith', 19, 'Skating'), 
                                ('Jessica', 20, 'Reading'), 
                                ('Alex', 18, 'Sleeping'), 
                                ('Karajan', 19, 'Playing the piano');


    CREATE TABLE Teacher (name, age, department);
    INSERT INTO Teacher VALUES  ('Smith', 40, 'Biology'), 
                                ('Angelica', 28, 'History'), 
                                ('Albert', 23, 'Physics'), 
                                ('Neumann', 41, 'Mathematics'), 
                                ('Karajan', 32, 'Music');

starting-code: |
    SELECT AVG(age)
    FROM [YOUR CODE HERE];

solution: | 
    SELECT AVG(age)
    FROM Teacher;
---

