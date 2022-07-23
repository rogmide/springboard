file = open("text_to_play.txt", "r")

for line in file:
    print(line)

file.seek(0)
all_text = file.read()
file.close()

file = open("text_to_play.txt", "a")
file.write('\nanimalito2.0')
file.close()

file = open("text_to_play.txt", "r")

for line in file:
    print(line)
file.close()