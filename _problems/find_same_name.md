---
layout: problem
title: 4. Find Same Name
difficulty: Easy
description: |
    A quick introduction on how to use JOIN to combine multiple tables.
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Find all the common names between the students and the teachers.

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

solution: | 
    SELECT Student.name
    FROM Student JOIN Teacher
    WHERE Student.name = Teacher.name;
---

