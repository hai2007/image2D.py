
/*************************** [bundle] ****************************/
// Original file:./src/pages/calc.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['31']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('38');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('39');


    script.render=function(createElement){

        return createElement('div',{"class":"page-view","quickpaper":"","data-quickpaper-d7dcedbc":""},[createElement('ul',{"data-quickpaper-d7dcedbc":""},[createElement('li',{"data-quickpaper-d7dcedbc":""},[createElement('span',{"@click":"doScroll('interpolation')","data-quickpaper-d7dcedbc":""},["曲线插值"]),createElement('ul',{"data-quickpaper-d7dcedbc":""},[createElement('li',{"data-quickpaper-d7dcedbc":""},[createElement('span',{"@click":"doScroll('interpolation-Cardinal')","data-quickpaper-d7dcedbc":""},["Cardinal"])])])])]),createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-d7dcedbc":""},[createElement('h2',{"id":"fixed-interpolation","data-quickpaper-d7dcedbc":""},["曲线插值"]),createElement('p',{"data-quickpaper-d7dcedbc":""},["给定若干个不连续的点，在这些点之间插入足够的点，来使得这些点连接起来是一个平滑的曲线。求解在何处插入新的点就是这里需要解决的问题。"]),createElement('h2',{"id":"fixed-interpolation-Cardinal","data-quickpaper-d7dcedbc":""},["Cardinal"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/calc.paper?QuickPaper&type=script&lang=js&hash=d7dcedbc
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
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
// Original file:./src/pages/calc.paper?QuickPaper&type=style&lang=css&hash=d7dcedbc
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
