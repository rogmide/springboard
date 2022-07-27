# you need to add the next 2 line all the time for using flask
from flask import Flask, request, render_template
from random import randint, choice, sample
import stories
app = Flask(__name__)

store_story = {'epic': '''Pellentesque elit {place} dignissim {noun} tincidunt lobortis feugiat {adjective} at. Massa {verb} duis lacus. Et netus et {plural_noun} .''',
               'romantic': '''Lorem {adjective}  dolor sit {noun} consectetur adipiscing elit, sed do eiusmod {verb} {plural_noun} ut {place} magna.''',
               'sad': '''Lorem {place} dolor {plural_noun} amet, {noun} adipiscing elit, {verb} do eiusmod {adjective}''',
               'customer': ''
               }

'''DIfferent Idea That work by was not needed'''


# def factory_story(story = 'epic', place='place', noun='noun', verb='verb', adjective='adjective', plural_noun='plural_noun'):
#     '''Get the Story and replace the ans from the ans that the customer type'''

#     story_text = store_story[story]
#     ans = ['-place-', '-noun-', '-verb-', '-adjective-', '-plural_noun-']
#     story_part = story_text.split(' ')
#     story_ans = []

#     for i in range(0, len(story_part)):
#         if story_part[i] in ans:
#             if story_part[i] == '-place-':
#                 story_part[i] = '{place}'
#             if story_part[i] == '-noun-':
#                 story_part[i] = '{noun}'
#             if story_part[i] == '-verb-':
#                 story_part[i] = '{verb}'
#             if story_part[i] == '-adjective-':
#                 story_part[i] = '{adjective}'
#             if story_part[i] == '-plural_noun-':
#                 story_part[i] = '{plural_noun}'

#     full_story = ''
#     for word in story_part:
#         full_story += f'{word} '

#     return full_story


@app.route('/')
def get_base_home():
    return render_template('home.html')


@app.route('/story')
def get_story():

    if len(request.args) == 1:
        store_story['customer'] = request.args['your_story']

    story_to_tell = request.args['story']
    print(story_to_tell)

    if story_to_tell == '---':
        return render_template('home.html')

    place = request.args['place']
    noun = request.args['noun']
    verb = request.args['verb']
    adjective = request.args['adjective']
    plural_noun = request.args['plural_noun']

    # full_story = factory_story(story_to_tell, place, noun, verb, adjective, plural_noun)

    my_story = stories.Story([place, noun, verb, adjective, plural_noun],
                             f'{store_story[story_to_tell]}')

    ans = {"place": place, "noun": noun, "verb": verb,
           "adjective": adjective, "plural_noun": plural_noun}

    full_msg = my_story.generate(ans)

    return render_template('/story.html', full_msg=full_msg)


@app.route('/your_story_form')
def build_your_story():
    return render_template('your_story_form.html')


@app.route('/home')
def get_home():
    if len(request.args) >= 1:
        store_story['customer'] = request.args['your_story']
        send_story = store_story['customer']
        return render_template('home.html', send_story=send_story)
