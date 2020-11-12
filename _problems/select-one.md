---
layout: problem
title: Select One
difficulty: Easy
description: |
    A quick introduction on how to project a particular attribute using the SELECT syntax.
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Write a query to return the name of all the teachers.

initial-query: | 
    CREATE TABLE Student (name, age, hobby);
    CREATE TABLE Teacher (name, age, department);
    INSERT INTO Teacher VALUES  ('Smith', 40, 'Biology'), 
                                ('Angelica', 28, 'History'), 
                                ('Albert', 23, 'Physics'), 
                                ('Neumann', 41, 'Mathematics'), 
                                ('Karajan', 32, 'Music');

solution: | 
    SELECT name FROM Teacher;
---

