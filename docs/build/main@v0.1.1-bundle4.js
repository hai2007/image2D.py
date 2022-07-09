
/*************************** [bundle] ****************************/
// Original file:./src/pages/how-to-use.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('40');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('41');


    script.render=function(createElement){

        return createElement('div',{"class":"page-view","quickpaper":"","data-quickpaper-d42f85c2":""},[createElement('ul',{"data-quickpaper-d42f85c2":""},[createElement('li',{"data-quickpaper-d42f85c2":""},[createElement('span',{"@click":"doScroll('purpose')","data-quickpaper-d42f85c2":""},["关注的问题"])]),createElement('li',{"data-quickpaper-d42f85c2":""},[createElement('span',{"@click":"doScroll('import')","data-quickpaper-d42f85c2":""},["如何引入?"])]),createElement('li',{"data-quickpaper-d42f85c2":""},[createElement('span',{"@click":"doScroll('example')","data-quickpaper-d42f85c2":""},["一个简单的用例"])]),createElement('li',{"data-quickpaper-d42f85c2":""},[createElement('span',{"@click":"doScroll('help')","data-quickpaper-d42f85c2":""},["获取帮助"])])]),createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-d42f85c2":""},[createElement('h2',{"id":"fixed-purpose","data-quickpaper-d42f85c2":""},["关注的问题"]),createElement('p',{"data-quickpaper-d42f85c2":""},["本库致力于提供更简单的",createElement('span',{"class":"important","data-quickpaper-d42f85c2":""},["Python3+"]),"端上的",createElement('span',{"class":"important","data-quickpaper-d42f85c2":""},["tkinter.Canvas"]),"二维绘图接口，主要包括这些方面："]),createElement('ol',{"data-quickpaper-d42f85c2":""},[createElement('li',{"data-quickpaper-d42f85c2":""},["画笔：用于提供快速绘制各种图形的方法。"]),createElement('li',{"data-quickpaper-d42f85c2":""},["辅助计算：用于在你绘图的时候，提供可能会需要的计算方法。"])]),createElement('p',{"data-quickpaper-d42f85c2":""},["我们希望绘图是简单而有趣的、高效而愉悦的！"]),createElement('h2',{"id":"fixed-import","data-quickpaper-d42f85c2":""},["如何引入?"]),createElement('p',{"data-quickpaper-d42f85c2":""},["首先，我们默认你已经安装好python3并拥有了",createElement('span',{"class":"important","data-quickpaper-d42f85c2":""},["pip命令"]),"，使用安装命令安装即可："]),createElement('pre',{"q-code":"","data-quickpaper-d42f85c2":""},["pip install image2d"]),createElement('p',{"data-quickpaper-d42f85c2":""},["然后，在需要使用的地方引入（比如我们下面引入画笔）："]),createElement('pre',{"q-code":"","data-quickpaper-d42f85c2":""},["from image2d import Painter"]),createElement('p',{"data-quickpaper-d42f85c2":""},["温馨提示：包image2d中包含的别的模块，我们会在对应文档开头说明引入语句。"]),createElement('p',{"data-quickpaper-d42f85c2":""},["此外，你也可以安装你指定的版本："]),createElement('pre',{"q-code":"","data-quickpaper-d42f85c2":""},["pip install image2d==version"]),createElement('p',{"data-quickpaper-d42f85c2":""},["具体有哪些版本，你可以通过查看",createElement('a',{"target":"_blank","href":"https://github.com/hai2007/image2D.py/blob/master/CHANGELOG","data-quickpaper-d42f85c2":""},["CHANGELOG"]),"来获取详细说明。"]),createElement('h2',{"id":"fixed-example","data-quickpaper-d42f85c2":""},["一个简单的用例"]),createElement('p',{"data-quickpaper-d42f85c2":""},["比如，我们现在希望绘制一个文字：",createElement('span',{"class":"important","data-quickpaper-d42f85c2":""},["我爱你中国～"]),"。↵            怎么办？"]),createElement('p',{"data-quickpaper-d42f85c2":""},["非常简单，我们直接看代码："]),createElement('pre',{"q-code":"","data-quickpaper-d42f85c2":""},["#!/usr/bin/python3↵↵from image2d import Painter↵import tkinter↵↵win = tkinter.Tk()↵↵# 获取canvas↵canvas = tkinter.Canvas(win, width=400, height=300)↵canvas.pack()↵↵# 生成画笔实例↵painter = Painter.Render(canvas)↵↵# 设置文字的颜色为红色并绘制文字↵painter.config({↵    \"textAlign\": \"center\",↵    \"fillStyle\":\"red\"↵}).fillText(\"我爱你中国～\", 200, 150)↵↵win.mainloop()"]),createElement('p',{"data-quickpaper-d42f85c2":""},["怎么样？是不是很简单。"]),createElement('p',{"data-quickpaper-d42f85c2":""},["通过画笔的config来调整画笔的参数，然后调用画笔的方法即可完成绘制，如果配合提供的辅助计算，便可以很容易的绘制更复杂的图表。"]),createElement('h2',{"id":"fixed-help","data-quickpaper-d42f85c2":""},["获取帮助"]),createElement('p',{"data-quickpaper-d42f85c2":""},["在使用image2D的时候，如果遇到任何疑惑或问题，包括建议或对未来版本的想法，请先在",createElement('a',{"target":"_blank","href":"https://github.com/hai2007/image2D.py/issues","data-quickpaper-d42f85c2":""},["Github issue"]),"上查找是否存在相似内容，然后进行补充或追问，当然也可以增加新的话题进行交流，除非特殊情况，你会在48小时内获得",createElement('a',{"href":"mailto:2501482523@qq.com","data-quickpaper-d42f85c2":""},["作者"]),"回复。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/how-to-use.paper?QuickPaper&type=script&lang=js&hash=d42f85c2
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
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
// Original file:./src/pages/how-to-use.paper?QuickPaper&type=style&lang=css&hash=d42f85c2
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
