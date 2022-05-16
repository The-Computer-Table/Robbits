from PIL import Image
name=input("Input File Name: ")
img=Image.open(f"{name}.png").convert('RGB')
w,h=img.size
def RGBtoTILEID(x):
    tileid={
    (255,255,255):0, #white blank
    (195,195,195):1, #light grey slowing
    (255,127,39):2, #orange lava
    (185,122,86):3, #brown crate
    (136,0,27):4,#darkred blank+spawn
    (63,72,204):5,#indigo teleporter
    (0,0,0):6 #black -wall
    }
    return tileid[x] if x in tileid else 0
f=open(f"{name}.json","w")
f.write(str([[RGBtoTILEID(img.getpixel((j,i)) )for j in range(h)] for i in range(w)]))


#0-blank
#1-slowing
#2-lava
#3-crate
#4-enemy spawn
#5 teleporter
