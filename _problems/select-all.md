---
layout: problem
title: Select All
difficulty: Easy
description: |
    A quick introduction to how SELECT * can be used to
    query all the data from a table.
question: |
    You are given the following tables:
        - Student (name, age, hobby)
        - Teacher (name, age, department)

    Write a query to return all the data in the Student table.

initial-query: | 
    CREATE TABLE Student (name, age, hobby);
    CREATE TABLE Teacher (name, age, department);
    INSERT INTO Student VALUES ('Bill', 20, 'Reading'), ('Joe', 18, 'Music'), ('Jessica', 19, 'Traveling');

solution: | 
    SELECT * FROM Student;
---

