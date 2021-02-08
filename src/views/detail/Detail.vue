<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="detail-content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childCpmps/DetailNavBar";
import DetailSwiper from "./childCpmps/DetailSwiper";
import DetailBaseInfo from "./childCpmps/DetailBaseInfo";
import DetailShopInfo from "./childCpmps/DetailShopInfo";
import DetailGoodsInfo from "./childCpmps/DetailGoodsInfo";
import DetailParamInfo from "./childCpmps/DetailParamInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  created() {
    // console.log(this.$route.params)
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid)
      .then((res) => {
        console.log(res);
        const data = res.result;
        // 1.获取顶部图片的轮播数据
        this.topImages = data.itemInfo.topImages;

        // 2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 3.创建店铺信息对象
        this.shop = new Shop(data.shopInfo);

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
#detail {
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-content {
  height: calc(100% - 44px);
}
</style>
