import _ from 'lodash';
let util = {
  getImageClip(imgObj, newWidth, newHeight, startX, startY, ratio){
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
  },
  createImgObjWithUrl(url) {
    return new Promise((resolve, reject) => {
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
  },
  getColumnImageUrlFromCode (column_code) {
    const regex = /^.*_.*/;
    if(regex.test(column_code)){
      Array.prototype.subarray=function(start,end){
        if(!end){ end=-1;}
        return this.slice(start, this.length+1-(end*-1));
      }
      let column_path = column_code.split('_').subarray(0,-2).join("/")
      return "https://s3.cn-north-1.amazonaws.com.cn/lqdzj-col/" + column_path + "/" + column_code + ".jpg"
    }
  },
  getRed(){
    let random = Math.random();
    let red = ['#E43B46', '#DF3B49', '#E63A4A', '#EB3845'][~~(random*4)];
    let alpha = 128 + ~~(random*128); // 200 + [0-55]
    return red + alpha.toString(16);
  },
  toTop(){
    $('body,html').animate({scrollTop:0},10);
  }
};


export default util;
