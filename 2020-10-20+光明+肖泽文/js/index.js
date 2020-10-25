window.ondblclick = function(){
    return false;
}
var that = null
class Guangming{
    constructor(){
        /* bgm */
        this.bgm = $(".bgm");
        /* loading时间 */
        this.loadingTime = 3;
        /* 获取页面 */
        this.loading = $(".loading");
        this.home = $(".home");
        this.page1 = $(".page1");
        this.init();
    }
    init(){
        this.loadingFn();
        this.homeFn();
        this.pageOneFn();
    }
    /* loading方法 */
    loadingFn(){
        /* loading部分DOM元素初始化 */
        var loadingShip = $(".loading .loading-ship");
        var loadingLine = $(".loading .line-bd");
        var loadingNumber = $(".loading p");
        /* 用于loading的数字 */
        var num = 0;
        /* 获取船和加载条的宽度 */
        var loadingLineW = loadingLine.width();
        var loadingShipW = loadingShip.width();
        var loadTimeout = setInterval(() => {
            num += 10;
            if(num > 1000){
                clearInterval(loadTimeout);
                this.loading.addClass("dn");
                this.home.removeClass("dn");
                this.bgm.removeClass("dn")
                return false;
            }
            loadingShip.css(`margin-left`,`${loadingLineW / 100 * (num / 10) - loadingShipW / 2}px`);
            loadingLine.css(`margin-left`,`${loadingLineW / 100 * (num / 10)}px`);
            loadingNumber.text(num/ 10 + "%");
            
        },(this.loadingTime * 10));
    }
    /* Home方法 */
    homeFn(){
        /* 获取DOM元素 */
        var homeBtn = $(".home .btn");
        homeBtn.on("click",()=>{
            this.home.addClass("dn");
            this.page1.removeClass("dn")
        })
    }
    /* page1方法 */
    pageOneFn(){
        var file = $(".page1 input");
        console.log(file)
        file.onchange = function(){
            console.log(this)
        }
    }
}
new Guangming();
