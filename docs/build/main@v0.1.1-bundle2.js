
/*************************** [bundle] ****************************/
// Original file:./src/pages/painter.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['30']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('36');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('37');


    script.render=function(createElement){

        return createElement('div',{"class":"page-view","quickpaper":"","data-quickpaper-2de23ecc":""},[createElement('ul',{"data-quickpaper-2de23ecc":""},[createElement('li',{"data-quickpaper-2de23ecc":""},[createElement('span',{"@click":"doScroll('painter')","data-quickpaper-2de23ecc":""},["获取画笔实例"])]),createElement('li',{"data-quickpaper-2de23ecc":""},[createElement('span',{"@click":"doScroll('config')","data-quickpaper-2de23ecc":""},["配置画笔"])]),createElement('li',{"data-quickpaper-2de23ecc":""},[createElement('span',{"@click":"doScroll('method')","data-quickpaper-2de23ecc":""},["画笔上的绘图方法"]),createElement('ul',{"data-quickpaper-2de23ecc":""},[createElement('li',{"data-quickpaper-2de23ecc":""},[createElement('span',{"@click":"doScroll('method-text')","data-quickpaper-2de23ecc":""},["文字"])]),createElement('li',{"data-quickpaper-2de23ecc":""},[createElement('span',{"@click":"doScroll('method-rect')","data-quickpaper-2de23ecc":""},["矩形"])]),createElement('li',{"data-quickpaper-2de23ecc":""},[createElement('span',{"@click":"doScroll('method-circle')","data-quickpaper-2de23ecc":""},["圆"])]),createElement('li',{"data-quickpaper-2de23ecc":""},[createElement('span',{"@click":"doScroll('method-line')","data-quickpaper-2de23ecc":""},["折线"])]),createElement('li',{"data-quickpaper-2de23ecc":""},[createElement('span',{"@click":"doScroll('method-polygon')","data-quickpaper-2de23ecc":""},["多边形"])])])])]),createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-2de23ecc":""},[createElement('h2',{"id":"fixed-painter","data-quickpaper-2de23ecc":""},["获取画笔实例"]),createElement('p',{"data-quickpaper-2de23ecc":""},["首先，你需要使用",createElement('span',{"class":"important","data-quickpaper-2de23ecc":""},["tkinter.canvas"]),"生成一个画布组件："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["import tkinter↵↵win = tkinter.Tk()↵canvas = tkinter.Canvas(win, width=400, height=300)↵canvas.pack()"]),createElement('p',{"data-quickpaper-2de23ecc":""},["然后，就基于此画布创建画笔："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["from image2d import Painter↵↵painter = Painter.Render(canvas)"]),createElement('p',{"data-quickpaper-2de23ecc":""},["当然，后续使用画笔绘制完毕的时候，别忘了更新窗口："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["win.mainloop()"]),createElement('h2',{"id":"fixed-config","data-quickpaper-2de23ecc":""},["配置画笔"]),createElement('p',{"data-quickpaper-2de23ecc":""},["上面获取的画笔，在使用前，可以通过",createElement('span',{"class":"important","data-quickpaper-2de23ecc":""},["config"]),"方法来修改画笔的参数："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.config({↵    // 添加你需要修改的属性即可↵});"]),createElement('p',{"data-quickpaper-2de23ecc":""},["下面我们来看看画笔可配置属性有哪些："]),createElement('ol',{"data-quickpaper-2de23ecc":""},[createElement('li',{"data-quickpaper-2de23ecc":""},["\"fillStyle\":填充色或图案，默认\"black\"。"]),createElement('li',{"data-quickpaper-2de23ecc":""},["\"strokeStyle\":轮廓色或图案，默认\"black\"。"]),createElement('li',{"data-quickpaper-2de23ecc":""},["\"lineWidth\":线条宽度，默认1(单位px，下同)。"]),createElement('li',{"data-quickpaper-2de23ecc":""},["\"textAlign\":文字水平对齐方式，默认\"left\"左对齐（还有\"center\"居中和\"right\"右对齐）。"]),createElement('li',{"data-quickpaper-2de23ecc":""},["\"textBaseline\":文字垂直对齐方式，默认\"middle\"垂直居中（还有\"top\"上对齐和\"bottom\"下对齐）。"]),createElement('li',{"data-quickpaper-2de23ecc":""},["\"font-size\":文字大小，默认16。"]),createElement('li',{"data-quickpaper-2de23ecc":""},["\"font-family\":字体，默认\"sans-serif\"。"]),createElement('li',{"data-quickpaper-2de23ecc":""},["\"smooth\":是否需要曲线差值，默认False。"])]),createElement('h2',{"id":"fixed-method","data-quickpaper-2de23ecc":""},["画笔上的绘图方法"]),createElement('h3',{"id":"fixed-method-text","data-quickpaper-2de23ecc":""},["文字"]),createElement('p',{"data-quickpaper-2de23ecc":""},["在点(x, y)处绘制填充的文字text："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.fillText(text, x, y)"]),createElement('h3',{"id":"fixed-method-rect","data-quickpaper-2de23ecc":""},["矩形"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以(x, y)为左上角，宽width，高height绘制填充矩形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.fillRect(x, y, width, height)"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以(x, y)为左上角，宽width，高height绘制轮廓矩形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.strokeRect(x, y, width, height)"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以(x, y)为左上角，宽width，高height绘制轮廓并填充矩形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.fullRect(x, y, width, height)"]),createElement('h3',{"id":"fixed-method-circle","data-quickpaper-2de23ecc":""},["圆"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以(cx, cy)为圆心，半径r绘制填充圆形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.fillCircle(cx, cy, r)"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以(cx, cy)为圆心，半径r绘制轮廓圆形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.strokeCircle(cx, cy, r)"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以(cx, cy)为圆心，半径r绘制轮廓并填充圆形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.fullCircle(cx, cy, r)"]),createElement('h3',{"id":"fixed-method-line","data-quickpaper-2de23ecc":""},["折线"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以point为轨迹的轮廓折线："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.strokeLine(point)"]),createElement('p',{"data-quickpaper-2de23ecc":""},["point的一个例子如下（别的方法的point也是一样的）："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["point = [(100, 20), (200, 30), (300, 40), (400, 100), (80, 120), (250, 90)]"]),createElement('h3',{"id":"fixed-method-polygon","data-quickpaper-2de23ecc":""},["多边形"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以point为轨迹的填充多边形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.fillPolygon(point)"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以point为轨迹的轮廓多边形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.strokePolygon(point)"]),createElement('p',{"data-quickpaper-2de23ecc":""},["以point为轨迹的轮廓并填充多边形："]),createElement('pre',{"q-code":"","data-quickpaper-2de23ecc":""},["painter.fullPolygon(point)"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/painter.paper?QuickPaper&type=script&lang=js&hash=2de23ecc
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('21');
var fixedScroll =__etcpack__scope_args__.default;

    __etcpack__scope_bundle__.default= {
        methods: {
            doScroll(fixedName) {
                window.location.href = (window.location.href + "").replace(/\?fixed=.*$/, '') + "?fixed=" + fixedName;
                fixedScroll(fixedName);
            }
        },
        mounted() {
            fixedScroll(this.$urlFormat().params.fixed);
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/painter.paper?QuickPaper&type=style&lang=css&hash=2de23ecc
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
