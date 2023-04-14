# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

user = User.create(username: "testuser1", email: "testemail@email.com", password: "testpassword")
question = Question.create(question_text:"What is something you learned recently that surprised you?")