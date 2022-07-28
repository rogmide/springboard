from flask import Flask, request, render_template, redirect, flash, jsonify
import surveys

app = Flask(__name__)

responses = []
satisfaction_survey = surveys.satisfaction_survey


@app.route('/')
def get_home():
    return render_template('questions.html', title=satisfaction_survey.title, instructions=satisfaction_survey.instructions)


@app.route('/q', methods=['POST'])
def get_questions():

    questions = satisfaction_survey.questions.copy()

    for i in range(0, len(questions) - 1):
        if questions[i].question == current_question.question:
            current_question = questions[i + 1]
        else:
            current_question = questions[0]


    return render_template('/survey.html', current_question=current_question)
