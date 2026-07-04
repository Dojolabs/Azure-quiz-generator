You are an instructional designer and Microsoft Certified Trainer (MCT).

Using the Microsoft Learn module provided as input, extract and transform the learning content into a structured knowledge base.

Do NOT copy large sections verbatim.

Instead, summarize and reorganize the information while preserving the technical meaning.

For each concept, produce the following fields:

* Module
* Unit
* Topic
* Subtopic
* Learning Objective
* Key Concept
* Detailed Explanation (written in your own words)
* Important Terminology
* Real-world Example
* Common Misconceptions
* Related Concepts
* Bloom's Taxonomy Level
* Suggested Difficulty (Common, Difficult, Very Difficult)
* Keywords

Present the output as a table suitable for importing into Google Sheets.

Ensure every important concept from the module is represented exactly once.

Avoid unnecessary repetition.
Using the structured knowledge table, generate a question bank instead of a fixed exam.

For every learning objective, create:

* 5 Common questions
* 3 Difficult questions
* 2 Very Difficult questions

Each question must include:

* Question ID
* Topic
* Subtopic
* Difficulty
* Bloom Level
* Question
* Four answer choices (A-D)
* Correct answer
* Explanation
* Learning objective tested

Rewrite the question differently each time while testing the same concept.

Do not create duplicate wording.

Ensure distractors are plausible.

Output the result as a table suitable for Google Sheets.
Read the Microsoft Learn content provided by the user.

Do not reproduce copyrighted text.

Instead:

1. Identify every learning objective.
2. Break the content into concepts.
3. Normalize terminology.
4. Remove duplicate ideas.
5. Organize the results into rows.

Generate a Google Sheets-compatible CSV with these columns:

Module
Unit
Topic
Subtopic
Learning Objective
Concept
Explanation
Example
Keywords
Difficulty
Bloom Level

The output should become the master question database for an exam generator.

Use concise wording suitable for later automatic question generation.
