
from flask import Flask, request, render_template, redirect, flash, session
import surveys

app = Flask(__name__)
app.config['SECRET_KEY'] = '123'

satisfaction_survey = surveys.satisfaction_survey
survey_with_text = surveys.personality_quiz

# Uncomment this one and comment the other one to test 2 survey
# questions = satisfaction_survey.questions.copy()
questions = survey_with_text.questions.copy()

'''
Disclaimer
I complicated myself by using buttons instead of radio buttons, 
and I had to do a lot of logic to finish this task
I keep going becaouse I needed to do research to 
make it work this way, if you notice I never user request.args or request.form

PS: Sorry for the Mess, ill try to explain
'''


@app.route('/')
def get_home():
    '''
    Load the homepage and reset the survey in the user session

    Variable
        questions:
            Store the Questions that are loaded at the start of the survey
        session["position"] = 0:
            Store the position of the question to move the question to question start at 0
        session["responses"] = []:
            Store the responses that are going to be returned to the user start an empty
        session["temp_res"] = []:
            Store temporary responses use this one to help form the final responses to the user
    '''
    global questions

    # Reseting te survey all the variable go to state of beginning
    session["position"] = 0
    session["responses"] = []
    session["temp_res"] = []

    # Uncomment this one and comment the other one to test 2 survey
    # questions = satisfaction_survey.questions.copy()
    questions = survey_with_text.questions.copy()
    return render_template('questions.html', title=survey_with_text.title, instructions=survey_with_text.instructions)


@app.route('/q/<res>', methods=['POST'])
def get_questions(res):
    '''
    Factory the questions and the answers going thought all the question
    after responding the question this method will construct the answer that are going to show to the user

    Variable
        nums:
            For answer of Yes or No
                Store number of 1 or 0
            For answer of multiple choose
                Store number of 0 to 9 that represent the index in the list of the question                            
        text:
            Store the text for the answer that allow the user to explain why

        Sample
            Q: Do you prefer porcupines or hedgehogs?
            A: [ porcupines, hedgehogs ]

            nums = 21
            2 = control that is not a Yes(1) or no(0) answer
                if nums estar with a 2 is a Multiple Choose Questiong
            1 = is the index of the answer in this case: hedgehogs

    '''
    # Declare global variable, is not like Javescript python throw a error if "global is not use"
    global current_question, questions

    if session["already_done"]:
        flash('You already finish the survey, Thanks', 'error')
        '''Thanks the user for taking the survey and show the user all the answer that he/she choose'''
        return render_template('thank_you.html')
    
    session["already_done"] = False

    # Handle the answer that the user give
    nums = res[:2:]
    text = res[2::]
    if int(nums) != 10:
        nums = str(nums)
        if int(res[0]) <= 1:
            session["temp_res"].append(nums)
        else:
            if text == '':
                session["temp_res"].append(['notYesNo', nums[1]])
            else:
                session["temp_res"].append(['notYesNo', nums[1], text])

    # Handle the question that are going to be showing for the user
    if len(questions) != session["position"]:
        current_question = questions[session["position"]]
        session["position"] += 1
        return render_template('/survey.html', current_question=current_question, position=session["position"])
    else:

        # This Section is for Start building the answer that are going to be show to the user
        for i in range(0, len(questions)):
            if isinstance(session["temp_res"][i], list):
                if len(session["temp_res"][i]) <= 2:
                    session["responses"].append(
                        [questions[i].question, questions[i].choices[int(session["temp_res"][i][1])]])
                else:
                    session["responses"].append([questions[i].question, questions[i].choices[int(
                        session["temp_res"][i][1])], session["temp_res"][i][2]])
            else:
                if int(session["temp_res"][i]) == 1:
                    session["responses"].append([questions[i].question, 'Yes'])
                else:
                    session["responses"].append([questions[i].question, 'No'])

        session["already_done"] = True
        return render_template('/thank_you.html', result=session["responses"])


@app.route('/q/<res>')
def get_back(res):
    '''Return the user to the survey if they try to leave it'''
    return redirect('/survey')


@app.route('/survey')
def get_survey():
    '''Show a Flash error showing the user that please finish the survey'''
    flash('Please complete the survey', 'error')
    return render_template('/survey.html', current_question=current_question, position=session["position"])


@app.route('/thank_you')
def get_thanks():
    
    '''Thanks the user for taking the survey and show the user all the answer that he/she choose'''
    return render_template('thank_you.html')

@app.route('/retake')
def get_retake():
    session["already_done"] = False
    return redirect('/')
