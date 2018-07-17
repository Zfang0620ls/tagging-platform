<template>
  <canvas :id="canvasId">
    <KeyEventOpt></KeyEventOpt>
    <MouseEventOpt :canvasId="canvasId" @drawnow="update_canvas"></MouseEventOpt>
  </canvas>
</template>

<script>
  import  _ from 'lodash';
  import util from '@/libs/util'
  import KeyEventOpt from "./keyevent_opt";
  import MouseEventOpt from "./mouseevent_opt";
  import bus from '@/bus';
  export default {
    name: 'canvasOp',
    components: {KeyEventOpt, MouseEventOpt},
    props: ["redraw"],
    computed: {
      canvasId() {
        return 'canvas-scope';
      }
    },
    watch: {
      redraw() {
        this.redraw_canvas();
      }
    },
    mounted: function(){
      bus.$on('keyEvent', this.handleKeyEvent);
    },
    methods: {
      redraw_canvas() {
        let canvas = document.getElementById('canvas-scope');
        let ctx = canvas.getContext('2d');
        let image = this.$store.getters.image;
        let scale = this.$store.getters.scale;
        if (image.empty) {
          return ctx.restore();
        }
        this.updateCanvas(image, canvas, ctx, scale);
      },
      updateCanvas(image, canvas, ctx, scale) {
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // canvas清屏
        ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width * scale, image.height * scale);
        this.drawAllRect(ctx, scale);
      },
      drawAllRect(ctx, scale){
        let current = this.$store.getters.curRect;
        let rects = this.$store.getters.rects;
        //console.log(rects);
        let cover = this.$store.getters.cover; //false
        window.rects = rects;
        _(rects).forEach((rect,i) => {
          ctx.lineWidth=2*scale;
          ctx.globalAlpha = 0.5;
          //op:1 初始状态, 未被人工校对过的. 2.代表被更改 3.代表被删除 4.文字识别  5.文字校对
          if (rect.deleted || rect.op == 3) {
            ctx.fillStyle = '#0000a0'; //blue
            ctx.strokeStyle="#0000a0";
            ctx.lineWidth=2*scale;
          } else if (rect.changed || rect.op == 2) {
            ctx.strokeStyle="#D89020"; //橙色
            ctx.fillStyle = '#D89020';
            ctx.lineWidth= 2*scale;
          }else {
            ctx.strokeStyle= '#666'; //初始状态灰色
            ctx.fillStyle = '#666';
            ctx.lineWidth= 2*scale;
          }
          if (rect.kselected) {
            ctx.strokeStyle="#2aa766"; // 选中green
            ctx.fillStyle = '#2aa766';
            if (rect.deleted) {
              ctx.fillStyle = '#f40'; //红色  删除
            }
          } else if (rect == current) {
            ctx.strokeStyle = "#1892e8"; // 蓝色
            ctx.fillStyle = '#1892e8';
            if (rect.deleted) {
              ctx.fillStyle = '#f40';
            }
            ctx.lineWidth=2*scale;
          }
          ctx.strokeRect(rect.x*scale, rect.y*scale, rect.w*scale, rect.h*scale);
          ctx.fillRect(rect.x*scale, rect.y*scale, rect.w*scale, rect.h*scale);
          this.draw_corner(ctx, rect, scale);
        });
        let refRects = this.$store.getters.refRects;
        _(refRects).forEach((rect,i) => {
          rect.red = rect.red || util.getRed();
          ctx.lineWidth=1.5*scale;
          ctx.strokeStyle=rect.red;
          ctx.strokeRect(rect.x*scale, rect.y*scale, rect.w*scale, rect.h*scale);
        });
      },
      draw_corner(ctx, rect, scale) {
        if (rect.corner) {
          let posHandle = {x:0, y:0};
          switch (rect.corner) {
            case 'topleft':
              posHandle.x = rect.x;
              posHandle.y = rect.y;
              break;
            case 'topright':
              posHandle.x = rect.x + rect.w;
              posHandle.y = rect.y;
              break;
            case 'bottomleft':
              posHandle.x = rect.x;
              posHandle.y = rect.y + rect.h;
              break;
            case 'bottomright':
              posHandle.x = rect.x + rect.w;
              posHandle.y = rect.y + rect.h;
              break;
            case 'top':
              posHandle.x = rect.x + rect.w / 2;
              posHandle.y = rect.y;
              break;
            case 'left':
              posHandle.x = rect.x;
              posHandle.y = rect.y + rect.h / 2;
              break;
            case 'bottom':
              posHandle.x = rect.x + rect.w / 2;
              posHandle.y = rect.y + rect.h;
              break;
            case 'right':
              posHandle.x = rect.x + rect.w;
              posHandle.y = rect.y + rect.h / 2;
              break;
          }
          ctx.fillStyle = "#FF0000";
          ctx.beginPath();
          ctx.arc(posHandle.x * scale, posHandle.y * scale, 3, 0, 2 * Math.PI);
          ctx.fill();
        }
      },
      update_canvas(current) {
        this.redraw_canvas();
      },
      handleKeyEvent(event) {
        if (event.type == 'keydown')
          this.$store.dispatch('handleKeyDownEvent', event);
        else if (event.type == 'keyup')
          this.$store.dispatch('handleKeyUpEvent', event);
        this.redraw_canvas();
        this.$emit('scrollToRect');
      },
    },

  };
</script>
