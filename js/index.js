window.onload = function () {
  let wrapper = document.querySelector('.wrapper')
  let scroll = new BScroll(wrapper, {
    click: true,
    probeType: 2,
    bounceTime: 700,      //回弹时间
    pullUpLoad: {
      threshold: 10       //当上拉距离超过盒子高度的10px的时候,就派发一个上拉加载的事件
    },
    pullDownRefresh: {
      threshold: -10      //当下拉长度距离盒子顶部的高度超过10px的时候,就派发一个下拉刷新的事件
    },
  })
  scroll.on('pullingUp', () => {
    console.log('加载ajax数据');
      scroll.finishPullUp();           //可以多次执行上拉加载，没有这段代码上拉只会加载一次
  })
  scroll.on("pullingDown", () => {  //下拉刷新事件
    console.log('下拉刷新数据');
    scroll.finishPullDown()           //可以多次执行下拉刷新，没有这段代码下只会刷新一次
  });
  scroll.refresh();                     //初始化demo  当异步加载数据的时候，重新渲染页面
}