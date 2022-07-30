from crypt import methods
import re
from turtle import position
from flask import Flask, request, render_template, redirect, flash, jsonify, session
# from flask_session import Session
import surveys

app = Flask(__name__)
app.config['SECRET_KEY'] = '123'
# app.config["SESSION_PERMANENT"] = False
# Session(app)

responses = []
result = []
satisfaction_survey = surveys.satisfaction_survey
survey_with_text = surveys.personality_quiz
# questions = satisfaction_survey.questions.copy()
questions = survey_with_text.questions.copy()
position = 0


@app.route('/')
def get_home():
    # return render_template('questions.html', title=satisfaction_survey.title, instructions=satisfaction_survey.instructions)
    return render_template('questions.html', title=survey_with_text.title, instructions=survey_with_text.instructions)


@app.route('/q/<res>', methods=['POST'])
def get_questions(res):

    # Declare global variable, is not like Javescript python throw a error if "global is not use"
    global current_question, questions, responses, position, result

    nums = res[:2:]
    text = res[2::]
    print(text)
    if int(nums) != 10:
        nums = str(nums)
        if int(res[0]) <= 1:
            responses.append(nums)
        else:
            if text == '':
                responses.append(['notYesNo', nums[1]])
            else:
                responses.append(['notYesNo', nums[1], text])

    if len(questions) != position:
        current_question = questions[position]
        position += 1

        # self.allow_text = allow_text

        return render_template('/survey.html', current_question=current_question, position=position)
    else:
        for i in range(0, len(questions)):
            if isinstance(responses[i], list):
                if len(responses[i]) <= 2:
                    result.append(
                        [questions[i].question, questions[i].choices[int(responses[i][1])]])
                else:
                    result.append([questions[i].question, questions[i].choices[int(
                        responses[i][1])], responses[i][2]])
            else:
                if int(responses[i]) == 1:
                    result.append([questions[i].question, 'Yes'])
                else:
                    result.append([questions[i].question, 'No'])

        print(result)
        return render_template('/thank_you.html', result=result)


@app.route('/q/<res>')
def get_back(res):
    return redirect('/survey')


@app.route('/survey')
def get_survey():
    flash('Please complete the survey', 'error')
    return render_template('/survey.html', current_question=current_question, position=position)


@app.route('/thank_you')
def get_thanks():
    return render_template('thank_you.html')
