# import face_recognition
import os
import sys

known_face_encodings = []
known_face_names = []


def input(img):
    img = "./images/chuha.png"
    # Load a sample picture and learn how to recognize it.
    # user_image = face_recognition.load_image_file(img)
    # user_face_encoding = face_recognition.face_encodings(user_image)[0]

    # add data to arrays of known face encodings and their names
    # known_face_encodings.append(user_face_encoding)
    known_face_encodings.append(10)

    os.remove(img)

    # declare and intialize a dict to store names as key and encodings as its value

    print(known_face_encodings)

# def exportkfe():
#     return known_face_encodings

# def exportkfn():
#     return known_face_names


input(str(sys.argv[1]))
