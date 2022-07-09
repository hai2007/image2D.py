#!/usr/bin/python3

from image2d import Painter
import tkinter

win = tkinter.Tk()
win.title("画笔测试")

# 获取canvas
canvas = tkinter.Canvas(win, width=400, height=300)
canvas.pack()

painter = Painter.Render(canvas)

'''文字'''

painter.fillText("这是文字", 200, 150).config({
    "textAlign": "right",
    "textBaseline": "bottom",
    "fillStyle": 'red'
}).fillText("文字2", 200, 150)

'''矩形'''

painter.fillRect(50, 50, 50, 70)
painter.config({
    "lineWidth": 2
}).strokeRect(150, 50, 50, 70)
painter.fullRect(250, 50, 50, 70)

'''圆'''

painter.fillCircle(50, 250, 50)
painter.config({
    "lineWidth": 3,
    "fillStyle": 'blue',
    "strokeStyle": 'pink'
}).strokeCircle(150, 250, 50)
painter.fullCircle(250, 250, 50)

win.mainloop()
