---
layout: problem
title: 7. Student Teacher Union
difficulty: Easy
description: |
    A quick introduction to set operations.
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Find the name and age of:
        - Students that are at least 19 years old.
        - Teachers who belong to the "Music" department.

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
    SELECT name, age
    FROM Student
    WHERE age >= 19

    UNION

    SELECT name, age
    FROM Teacher
    WHERE department = 'Music';
---

