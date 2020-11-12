---
layout: problem
title: 3. Find Biology Teacher
difficulty: Easy
description: |
    A quick introduction on how to filter results using the WHERE clause.
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Write a query to find all the teachers that belong to the "Biology" department.

initial-query: | 
    CREATE TABLE Student (name, age, hobby);
    CREATE TABLE Teacher (name, age, department);
    INSERT INTO Teacher VALUES  ('Smith', 40, 'Biology'), 
                                ('Angelica', 28, 'History'), 
                                ('Darwin', 60, 'Biology'), 
                                ('Albert', 23, 'Physics'), 
                                ('Neumann', 41, 'Mathematics'), 
                                ('Mendel', 42, 'Biology'), 
                                ('Leeuwenhoek', 34, 'Biology'), 
                                ('Karajan', 32, 'Music');

solution: | 
    SELECT *
    FROM Teacher
    WHERE department = 'Biology';
---

