---
layout: problem
title: 6. Average Age in Departments
difficulty: Easy
description: |
    A quick introduction to GROUP BY functionality.
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Find the average age of all the teachers in each department.

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

solution: | 
    SELECT department, AVG(age)
    FROM Teacher
    GROUP BY department;
---

