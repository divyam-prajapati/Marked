import base64
import sys


def convert_base64_to_string(img_string):
    # sace image file on machine

    image = open("XYZ"+".png", "wb")
    image.write(base64.b64decode(img_string))
    image.close()
    # will return i/o buffer
    return 10


# x = convert_base64_to_string(str(sys.argv[1]))
print(str(sys.argv[1]))
