import _ from 'lodash';
let util = {

};
util.getImageClip = function(imgObj, newWidth, newHeight, startX, startY, ratio){
    /* the parameters: - the image element - the new width - the new height - the x point we start taking pixels - the y point we start taking pixels - the ratio */
    //set up canvas for thumbnail
    let tnCanvas = document.createElement('canvas');
    let tnCanvasContext = tnCanvas.getContext('2d');
    let bufferCanvas = document.createElement('canvas');
    let bufferContext = bufferCanvas.getContext('2d');
    tnCanvas.width = newWidth; tnCanvas.height = newHeight;

    /* use the sourceCanvas to duplicate the entire image. This step was crucial for iOS4 and under devices. Follow the link at the end of this post to see what happens when you don’t do this */

    bufferCanvas.width = imgObj.width;
    bufferCanvas.height = imgObj.height;
    bufferContext.drawImage(imgObj, 0, 0);

    /* now we use the drawImage method to take the pixels from our bufferCanvas and draw them into our thumbnail canvas */
    tnCanvasContext.drawImage(bufferCanvas, startX, startY, newWidth * ratio, newHeight * ratio,0,0, newWidth, newHeight);
    return tnCanvas.toDataURL("image/png");
}

util.createImgObjWithUrl = function(url) {
    // console.log('Img ' + url)
    return new Promise(function(resolve, reject){
        let image = new Image();
        image.crossOrigin = "*";
        image.onload = function(e){
            resolve(e);
        };
        image.onerror = function(e) {
            reject(e);
        }
        image.src = url;
    });
}

util.getImageUrlFromCode_old = function(code) {
    /*  e.g. code = GZ000790v030p0010005
        https://s3.cn-north-1.amazonaws.com.cn/lqcharacters-images/GZ/000790/v030/GZ000790v030p0010005.jpg
        https://s3.cn-north-1.amazonaws.com.cn/lqcharacters-images/YB/027/YBv027p00010.jpg
    */
    const prefix = 'https://s3.cn-north-1.amazonaws.com.cn/lqdzj-col/';

    let re = /^([A-Z]+)(\d*)v(\d+)(p\d+)\w*/.exec(code);
    if (!re) return '';

    if (re[2]) return  prefix + re[1] + '/' + re[2] + '/v' + re[3] + '/' + code + '.jpg';

    return prefix + re[1] + '/' + re[3] + '/' + code + '.jpg';
}

util.getPageImageUrlFromCode_old = function (page_code) {
    //  GL000790_79_2_p30 ZH000010_1_p10a01n02
    const prefix = 'https://s3.cn-north-1.amazonaws.com.cn/lqdzj-image/';
    var last_underline_pos = page_code.lastIndexOf('_');
    var path = page_code.substr(0, last_underline_pos).replace('_', '/');
    var url = prefix + path + '/' + page_code  + '.jpg';
    return url;
}

/*
 * "page_code": "YB_27_1"
 * https://s3.cn-north-1.amazonaws.com.cn/lqdzj-image/YB/27/YB_27_1.jpg
 */
util.getPageImageUrlFromCode = function(page_code) {
    const prefix = 'https://s3.cn-north-1.amazonaws.com.cn/lqdzj-image/';
    var last_underline_pos = page_code.lastIndexOf('_');
    var path = page_code.substr(0, last_underline_pos).replace('_', '/');
    var url = prefix + path + '/' + page_code  + '.jpg';
    return url;
}

util.getColumnImageUrlFromCode = function (column_code) {
    const regex = /^.*_.*/;
    if(regex.test(column_code)){
        Array.prototype.subarray=function(start,end){
            if(!end){ end=-1;}
           return this.slice(start, this.length+1-(end*-1));
        }
        let column_path = column_code.split('_').subarray(0,-2).join("/")
        return "https://s3.cn-north-1.amazonaws.com.cn/lqdzj-col/" + column_path + "/" + column_code + ".jpg"
    }
    //说明column_code不匹配规则, 默认显示加载中...todo 后续改加载失败的图片.
    // this.clip = '/static/img/FhHRx.gif';
}

// simulate the color feeling of red on the old paper
util.getRed = function() {
    let random = Math.random();
    let red = ['#E43B46', '#DF3B49', '#E63A4A', '#EB3845'][~~(random*4)];
    let alpha = 128 + ~~(random*128); // 200 + [0-55]
    return red + alpha.toString(16);
}

export default util;
