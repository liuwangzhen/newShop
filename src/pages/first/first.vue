<template>
    <div class="bgf5f minh pb60">
        <div class="top-fix bgfff">
        <van-nav-bar
                     title="欢迎来到我的世界"
                     :border="false"
                     z-index="114"
        >
        </van-nav-bar>
       <van-search placeholder="请输入关键词"
                   shape="round"
                   v-model="value"
                   show-action>
           <div slot="action"  @click="onSearch">搜索</div>
       </van-search>
        </div>
        <div class="padding"></div>
        <van-tabs  v-model="idx" @click="onClick" :right-width="0" :left-width="0">

             <van-tab v-bind:key="i" :title="n" v-for="(n,i) in titles">
                 <div class="row">
                 <div class="col">
                     <div @click="goDetail(item)" v-if="i%2==0" v-bind:key="i" class="item" v-for="(item,i) in list">
                     <van-image
                             width="44vw"
                             :src="item.src"
                             fit="contain"
                     />
                         <div>
                             <div class="content le1">
                             {{item.content}}
                             </div>
                             <div class="header row">
                                 <img class="head-img" :src="item.headimg" />
                                 <div class="f12 lh30 ml5">{{item.author}}</div>
                                 <div class="abs row zan lh30">
                                     <van-icon class="lh30" size="16" name="like-o"></van-icon>
                                     <div class="f12 ml5">{{item.like}}</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div @click="goDetail(item)" v-bind:key="i" v-if="i%2!=0" class="item" v-for="(item,i) in list">
                         <van-image
                                 width="44vw"
                                 :src="item.src"
                                 fit="contain"
                                 class="rad"
                         />
                         <div class="content le1">
                             {{item.content}}
                         </div>
                         <div class="header row">
                             <img class="head-img" :src="item.headimg" />
                             <div class="f12 lh30 ml5">{{item.author}}</div>
                             <div class="abs row zan lh30">
                                 <van-icon class="lh30" size="16" name="like-o"></van-icon>
                                 <div class="f12 ml5">{{item.like}}</div>
                             </div>
                         </div>
                     </div>
                 </div>
                 </div>
             </van-tab>

        </van-tabs>


        <van-dialog
                v-model="show"
                title="别看了，没后台搜不了">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559584175907&di=b9b78de2e5823eab8763d8cc62d90616&imgtype=0&src=http%3A%2F%2Fstatic.chayuqing.com%2F3922091a1f6cf2bff5a0d3538e6ae5ee.jpg">
        </van-dialog>

    </div>
</template>
<script>
    var ComponentA={
        /*
        <div class="red">saa</div>
        */
    }
    export default {
        name: "first",
        components:{
            'component-a': ComponentA,
      },

        data(){
          return{
              show: false,
              value:"",
              titles:["推荐","附近","时尚","美肤","彩妆","美食","游戏",],
              idx:0,
              list0:[{author: "刘望真",
                  content: "长路漫漫,唯剑作伴",
                  headimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559303011821&di=0f4bcfe236cba79421bd82fbe2325237&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201608%2F21%2F20160821230024_MyCYK.thumb.700_0.jpeg",
                  id: "1",
                  kind: "1",
                  like: "1112",
                  src: "https://img.yzcdn.cn/vant/cat.jpeg"},
                  {author: "陈酒小友",
                  content: "春风得意马失蹄，一朝看尽长安花。",
                  headimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559305275925&di=bd470cc42f09e373839cd6e304876096&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507191419_J2m8R.thumb.700_0.jpeg",
                  id: "2",
                  kind: "2",
                  like: "520",
                  src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560223777&di=6e0e93bff558d6b21609c98c223aa881&imgtype=jpg&er=1&src=http%3A%2F%2Fpic37.nipic.com%2F20140110%2F5331179_093221399136_2.jpg"},
                  {
                  author: "旭老豆",
                  content: "十步杀一人，万里不留行，事了拂衣去，深藏功与名。善哉善哉。酒肉穿肠过，佛祖心中留。",
                  headimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559305275925&di=bd470cc42f09e373839cd6e304876096&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507191419_J2m8R.thumb.700_0.jpeg",
                  id: "3",
                  kind: "3",
                  like: "1314",
                  src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559637176591&di=8480730f4b9a57f227b9e40be68f8652&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F00%2F00%2F16pic_778_b.jpg",
              },
                  {author: "白居易",
                      content: "猗与漆沮，潜有多鱼。有鳣有鲔，鲦鲿鰋鲤。以享以祀，以介景福。",
                      headimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559305275925&di=bd470cc42f09e373839cd6e304876096&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507191419_J2m8R.thumb.700_0.jpeg",
                      id: "2",
                      kind: "4",
                      like: "520",
                      src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559628993014&di=a2770d64e1d4b7d0ca78c267063d274e&imgtype=0&src=http%3A%2F%2Fimg.sccnn.com%2Fbimg%2F332%2F687.jpg"},
                  {author: "庄子",
                      content: "小知不及大知，小年不及大年。奚以知其然也？朝菌不知晦朔，蟪 蛄不知春秋，此小年也。楚之南有冥灵者，以五百岁为春，五百岁为 秋；上古有大椿者，以八千岁为春，八千岁为秋。而彭祖乃今以久特 闻，众人匹之，不亦悲乎！\n" +
                      "\n" +
                      "　　汤之问棘也是已：穷发之北，有冥海者，天池也。有鱼焉，其广数 千里，未有知其修者，其名为鲲。有鸟焉，其名为鹏，背若泰山，翼 若垂天之云，抟扶摇羊角而上者九万里，绝云气，负青天，然后图南 ，且适南冥也。\n" +
                      "\n" +
                      "　　斥鴳笑之曰：“彼且奚适也？我腾跃而上，不过数仞而下，翱翔蓬 蒿之间，此亦飞之至也，而彼且奚适也？”此小大之辩也。\n" +
                      "\n" +
                      "　　故夫知效一官，行比一乡，德合一君，而征一国者，其自视也，亦 若此矣。而宋荣子犹然笑之。且举世而誉之而不加劝，举世而非之而 不加沮，定乎内外之分，辩乎荣辱之境，斯已矣。彼其于世，未数数 然也。虽然，犹有未树也。",
                      headimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559629539952&di=5b27808efefa95c7028a78a4418ecbb0&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FCbl4SrUmwiaDdTNiaz5FmV79gjUAQpRLw81KoVxEUiaswAicNrjQnlovgt8OKPPb2JVaKnHaT1Xgyibs4qM0ANjUeww%2F640%3Fwx_fmt%3Djpeg",
                      id: "2",
                      kind: "5",
                      like: "120",
                      src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559637118383&di=628d52587da439e22f2c4e34c38060a3&imgtype=0&src=http%3A%2F%2Fimg.zxxk.com%2F2017-5%2FZXXKCOM201705091504053061463.jpg"}],
              list:this.list0,
              active:0,
          }
        },
        methods:{
            onSearch:function () {
                this.show=true
            },
            onClick(index) {
                function isBigEnough(element, idx, array) {
                    return (element.kind == index);
                }
                switch (index) {
                    case 0:
                        this.list=this.list0
                        break;
                    case 1:
                        this.list=this.list0.filter(isBigEnough);
                        break;
                    case 2:
                        this.list=this.list0.filter(isBigEnough);
                        break;
                    case 3:
                        this.list=this.list0.filter(isBigEnough);
                        break;
                    case 4:
                        this.list=this.list0.filter(isBigEnough);
                        break;
                    default:

                }
            },
            getAxios:function (kind) {
                var that=this
                that.axios.get('http://localhost/test/test2.php?kind='+kind).then(function (res) {
                    console.log(res.data);
                    that.list = res.data
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            goDetail:function (e) {
               localStorage.setItem('keys',JSON.stringify(e))
                this.$router.push({path:'/detail', query:{options:e}});

            }
        },
        beforeCreate:function () {
            // var that=this;
            // that.axios.get('http://localhost/test/test.php').then(function (res) {
            //     console.log(res.data);
            //     that.list=res.data
            // })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
            this.list=this.list0
        },
        created:function () {
            this.list=this.list0
            this.$store.commit('moduleA/add2')
            console.log(this.$store.state.moduleA.age2)
            console.log(this.$store.state.age)
        },

        mounted:function(){

        }

    }
</script>
<style scoped>

    /*导航*/
    .top-fix{
        position: fixed;
        z-index: 114;
        width: 100%;
    }
    .van-nav-bar .van-icon {
        color: #000;
    }
    .van-nav-bar__arrow {
        min-width: 1em;
        font-size: 20px;
        font-weight: 600;
    }
    .van-nav-bar__title {
        font-size: 20px;
        font-weight: 600;
    }
    /*搜索高宽*/
    .van-search .van-cell {
        padding: 10px 10px 10px 10px;
    }
    .van-search__content--round {
        border-radius: 30px;
    }
    .van-cell{
        max-width: 87vw;
    }
    .van-search__content{
        max-width: 90vw;
    }
    .van-search__action{
        margin-left: 10px;
    }


    /*tab*/
    .padding{
        padding-top: 111px;
    }
    .van-tabs__wrap--scrollable .van-tabs__nav{
        position: fixed;
        top: 111px;
        right: 0;
        left: 0;
        z-index: 99;
        overflow: hidden;
    }
    .van-tab--active {
        font-weight: 600;
        letter-spacing: 2px;
        color: #323233;
    }
    .van-tab{
        font-size: 16px;
        letter-spacing: 2px;
    }
    .van-tabs__content{
        background-color: #f5f5f5;
        padding-bottom: 30px;
    }
    .van-tab__pane, .van-tab__pane-wrapper {
        background-color: #f5f5f5;
    }
    /*images*/

    .item{
        width: 44vw;
        margin-left: 4vw;
        margin-top: 4vw;
        background-color: #fff;
        /*border-top-left-radius: 6px;*/
        /*border-top-right-radius: 6px;*/
        /*border-bottom-left-radius: 6px;*/
        /*border-bottom-right-radius: 6px;*/
    }
    .van-image__error,.rad .van-image__img, .van-image__loading {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }


    .content{
        line-height: 20px;
        font-size: 13px;
        font-weight: 400;
        padding: 5px 5px 0 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .header{
        padding: 10px 5px 10px 5px;
    }
    .head-img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .zan{
        margin-left: 24vw;
    }
</style>