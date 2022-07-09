#!/usr/bin/python3

class Render:

    # 画笔配置
    _config = {

        # 填充色
        "fillStyle": "black",

        # 轮廓色
        'strokeStyle': "black",

        # 线条宽度
        'lineWidth': 1,

        # 文字水平对齐方式
        'textAlign': 'left',

        # 文字垂直对齐方式
        'textBaseline': 'middle',

        # 文字大小
        'font-size': 16,

        # 字体
        'font-family': 'sans-serif',

        # 是否需要曲线差值
        "smooth": False

    }

    _canvas = False

    def __init__(self, canvas):
        self._canvas = canvas

    def _calcTextAnchor(self):
        if(self._config['textAlign'] == 'left'):
            if(self._config['textBaseline'] == 'top'):
                return "nw"
            elif(self._config['textBaseline'] == 'middle'):
                return "w"
            else:
                return "sw"
        elif(self._config['textAlign'] == 'right'):
            if(self._config['textBaseline'] == 'top'):
                return "ne"
            elif(self._config['textBaseline'] == 'middle'):
                return "e"
            else:
                return "se"
        else:
            if(self._config['textBaseline'] == 'top'):
                return "n"
            elif(self._config['textBaseline'] == 'middle'):
                return "center"
            else:
                return "s"

    # 设置配置
    def config(self, configs):
        for key in configs:
            self._config[key] = configs[key]
        return self

    # 文字

    def fillText(self, text, x, y):
        self._canvas.create_text(x, y, text=text, font=(
            self._config['font-family'], self._config['font-size'], 'bold'), fill=self._config['fillStyle'], anchor=self._calcTextAnchor())
        return self

    # 矩形

    def fillRect(self, x, y, width, height):
        self._canvas.create_rectangle(
            x, y, x+width, y+height, fill=self._config['fillStyle'], outline="")
        return self

    def strokeRect(self, x, y, width, height):
        self._canvas.create_rectangle(
            x, y, x+width, y+height, fill="", outline=self._config['strokeStyle'], width=self._config['lineWidth'])
        return self

    def fullRect(self, x, y, width, height):
        self._canvas.create_rectangle(
            x, y, x+width, y+height, fill=self._config['fillStyle'], outline=self._config['strokeStyle'], width=self._config['lineWidth'])
        return self

    # 圆

    def fillCircle(self, cx, cy, r):
        self._canvas.create_oval(
            cx-r, cy-r, cx+r, cy+r, fill=self._config['fillStyle'], outline="")
        return self

    def strokeCircle(self, cx, cy, r):
        self._canvas.create_oval(cx-r, cy-r, cx+r, cy+r, fill="",
                                 outline=self._config['strokeStyle'], width=self._config['lineWidth'])
        return self

    def fullCircle(self, cx, cy, r):
        self._canvas.create_oval(
            cx-r, cy-r, cx+r, cy+r, fill=self._config['fillStyle'], outline=self._config['strokeStyle'], width=self._config['lineWidth'])
        return self

    # 折线

    def strokeLine(self, point):
        self._canvas.create_line(
            point, fill=self._config['strokeStyle'], width=self._config['lineWidth'], smooth=self._config['smooth'])
        return self

    # 多边形

    def fillPolygon(self, point):
        self._canvas.create_polygon(
            point, fill=self._config['fillStyle'], outline="", smooth=self._config['smooth'])
        return self

    def strokePolygon(self, point):
        self._canvas.create_polygon(
            point, fill="", outline=self._config['strokeStyle'], width=self._config['lineWidth'], smooth=self._config['smooth'])
        return self

    def fullPolygon(self, point):
        self._canvas.create_polygon(
            point, fill=self._config['fillStyle'], outline=self._config['strokeStyle'], width=self._config['lineWidth'], smooth=self._config['smooth'])
        return self
