import base64

def convert_base64_to_string(name,img_string):
    #sace image file on machine
    image = open(name+".png", "wb")
    image.write(base64.b64decode(img_string))
    image.close()
    #will return i/o buffer
    #return(image)