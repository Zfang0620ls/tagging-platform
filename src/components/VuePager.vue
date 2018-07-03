<template>
  <div class="pager-wrapper" v-if="totalPage > 1">
    <div class="pager-pages">
      <a v-show="currentPage > 1 && showPrev" @click="go(currentPage - 1)"><</a>
      <a :class="{active: currentPage == 1 ? true : false}" @click="go(1)">1</a>
      <b v-show="pages[0] > 2">...</b>
      <a v-for="page in pages" :class="{active: currentPage == page ? true : false}" @click="go(page)">{{page}}</a>
      <b v-show="pages[pages.length-1] < totalPage - 1">...</b>
      <a v-if="totalPage > 1" :class="{active: currentPage == totalPage ? true : false}" @click="go(totalPage)">{{totalPage}}</a>
      <a v-show="currentPage < totalPage && showNext" @click="go(currentPage + 1)">></a>
    </div>
    <div v-if="showJump" v-show="totalPage > 1" class="pager-jump">
      <span>共<em class="jump-total">{{totalPage}}</em>页，&nbsp;跳转到第</span>
       <input type="number" autocomplete="off" min="1" :max="totalPage" v-model="jumpPage" class="jump-input" @keyup.enter="go(jumpPage)" onkeypress="return (/[\d]/.test(String.fromCharCode(event.keyCode)))"> 
      <span>页</span>
      <a class="go" @click="go(jumpPage)">GO</a>
    </div>
  </div>
</template>
<script>
  /*
   * component pager 翻页页码组件
   */
  export default {
    props: {
      totalPage: { // 总页数
        type: Number,
        default: 1,
        required: true
      },
      showItems: { // 显示出来的页数，如: 1 ... 34[5]67 ... 10
        type: Number,
        default: 5
      },
      showPrev: { // 是否显示“上一页”
        type: Boolean,
        default: true
      },
      showNext: { // 是否显示“下一页”
        type: Boolean,
        default: true
      },
      showJump: { // 是否显示“跳转”
        type: Boolean,
        default: true
      },
      initPage: {
        type: Number,
        default: 1
      },
      mode: {
        type: String,
        default: 'event' // 'event' | 'query' | 'params'
      },
      routeName: {
        type: String
      }
    },
    data () {
      return {
        currentPage: 0,
        jumpPage: 0,
      }
    },
    created () {
      this.currentPage = this.initPage
      if(this.mode === 'params' && !this.routeName) {
        throw 'need a route name when choose params mode in pager component'
      }
    },
    computed: {
      pages() {
        let getPages = (start,end) => {
          if(start <= 1 || start > end || start >= this.totalPage) {
            start = 2
          }
          if(end >= this.totalPage || end < start || end <= 1) {
            end = this.totalPage - 1
          }
          let arr = []
          for(let i = start; i <= end; i++) {
            arr.push(i)
          }
          return arr
        }
        let counts = this.showItems
        if(this.totalPage < counts + 2) {
          return getPages(2,this.totalPage)
        } else {
          if(this.currentPage <= Math.ceil(counts/2)) {
            return getPages(2,counts)
          } else if(this.currentPage >= this.totalPage - Math.floor(counts/2)) {
            return getPages(this.totalPage + 1 - counts,this.totalPage - 1)
          } else {
            let half = Math.ceil(counts/2) - 1
            let end = this.currentPage + half
            if(counts % 2 === 0) {
              end++
            }
            return getPages(this.currentPage - half,end)
          }
        }
      }
    },
    methods: {
      go (page) {
        if(page < 1) {
          return;
        }
        if(page > this.totalPage) {
          return;
        }
        if(page === this.currentPage) {
          return
        }
        this.currentPage = parseInt(page,10)
        if(this.mode === 'params') {
          let params = this.$route.params;
          params.page = this.currentPage;
          console.log(params.page);
          this.$router.push({name: this.routeName,params: params});
          $('body,html').animate({scrollTop:0},10);
        }else {
          this.$emit('go-page',{
            page: this.currentPage
          })
        }
      },
      num(ev){
        if(((ev.keyCode<48 || ev.keyCode >57) && ev.keyCode !==8)){
          ev.preventDefault();
        }
      }
    },
    watch: {
      currentPage (newVal) {
        this.jumpPage = newVal
      },
      initPage (newVal) {
        if(this.currentPage !== newVal) {
          this.currentPage = newVal
        }
      }
    }
  }
</script>
<style>
  .pager-wrapper {
    margin-top: 25px;
    text-align: right;
  }
  .pager-pages {
    display: inline-block;
    height: 34px;
    font-size: 0;
  }
  .pager-wrapper a,
  .pager-wrapper b {
    display: inline-block;
    min-width: 32px;
    height: 32px;
    padding: 0 1px;
    margin: 0 2px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    color: #222;
  }
  .pager-wrapper a {
    border: 1px solid #dcdcdc;
    background-color: #fff;
    transition: all .2s;
    color: #323232;
    cursor: pointer;
  }
  .pager-wrapper a:hover {
    border: 1px solid #5B9BD1;
    color: #5B9BD1;
    text-decoration: none;
  }
  .pager-wrapper .active {
    color: #fff;
    cursor: default;
    background-color: #5B9BD1;
    border-color: #5B9BD1;
  }
  .pager-wrapper .go{
    background-color: #fff;
    color: #5B9BD1;
    border: 1px solid #5B9BD1;
    cursor: pointer;
    padding:0 2px;
    height:30px;
    line-height:30px;
  }
  .pager-wrapper .go:hover{
    color: #5B9BD1;
    border: 1px solid #5B9BD1;
  }
  .pager-wrapper .active:hover {
    color: #fff;
  }
  .pager-jump {
    display: inline-block;
    height: 34px;
    margin-left: 10px;
  }
  .pager-jump span {
    line-height: 34px;
    color: #777;
  }
  .pager-jump em {
    margin: 0 5px;
    font-style: normal;
  }
  .pager-jump .jump-input {
    width: 40px;
    height: 32px;
    padding:0 5px;
    outline: none;
    border: 1px solid #dcdcdc;
    font-size: 14px;
    vertical-align: top;
    text-align: center;
    font-weight:bold;
    color: #5B9BD1;
  }
  .pager-jump .jump-input:focus {
    border-color:#4AA6FF;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
