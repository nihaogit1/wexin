// page/component/index.js
Page({
    onShow(){
     wx.reportAnaytics('enter_home_programmatically',{})
    },
    onShareAppMessage(){
     return{
       title:'小程序官方组件展示',
       path:'page/component/index'
     }
    },
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
      }, 
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress', 'rich-text']
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea', 'editor']
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      },
      {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'video', 'camera', 'live-pusher', 'live-player']
      },
      {
        id: 'map',
        name: '地图',
        open: false,
        pages: ['map']
      },
      {
        id: 'canvas',
        name: '画布',
        open: false,
        pages: ['canvas', 'canvas-2d', 'webgl']
      },
      {
        id: 'open',
        name: '开放能力',
        open: false,
        pages: ['ad', 'open-data', 'web-view']
      },
      {
        id: 'obstacle-free',
        name: '无障碍访问',
        open: false,
        pages: ['aria-component']
      }
    ],
    theme: 'light'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {

  // },
  onLoad(){
    this.setData({
      theme:wx.getSysTnfoSync().theme||'light'
    })
    if(wx.onThemeChange){
      wx.onThemeChange(({theme})=>{
        this.setData({theme})
      })
  }
  },
  kindToggle(e){
  const id=e.currentTarget.id
  const list = this.data.list
  for(let i=0,len=list.length;i<len;++i){
    if(list[i].id === id){
      list[i].open=!list[i].open
    }else{
      list[i].open=false
    }
  }
  this.setData({
    list
   })
   wx.reportAnaytics('click_view_programatically',{})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})