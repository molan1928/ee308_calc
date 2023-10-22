
// pages/history/history.js

Page({
  
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: 'History Record'
    });
  }
});

Page({
  data: {
    history: [], // Used to store historical records
  },

  onLoad: function (options) {
    //Get the history from the back-end server
    wx.request({
      url: 'http://localhost:3000/history', 
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({ history: res.data }); 
        } else {
          console.error('Failed to fetch history:', res.data);
        }
      },
      fail: (err) => {
        console.error('Failed to fetch history:', err);
      }
    });
  },

});