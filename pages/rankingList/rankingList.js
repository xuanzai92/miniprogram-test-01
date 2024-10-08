Page({
  data: {
    platform: 'search',
    searchEngine: '',
    socialPlatform: '',
    industries: ['科技', '电商', '互联网', '其他'],
    industryIndex: 0,
    dateFilter: '',
    rankingRange: '',
    rankingList: []
  },

  platformChange(e) {
    this.setData({
      platform: e.detail.value
    })
  },

  searchEngineChange(e) {
    this.setData({
      searchEngine: e.detail.value
    })
  },

  socialPlatformChange(e) {
    this.setData({
      socialPlatform: e.detail.value
    })
  },

  industryChange(e) {
    this.setData({
      industryIndex: e.detail.value
    })
  },

  dateFilterChange(e) {
    this.setData({
      dateFilter: e.detail.value
    })
  },

  rankingRangeChange(e) {
    this.setData({
      rankingRange: e.detail.value
    })
  },

  searchRanking() {
    // 这里应该调用后端API获取榜单数据
    // 暂时使用模拟数据
    const mockData = Array.from({length: parseInt(this.data.rankingRange)}, (_, i) => `关键词 ${i + 1}`)
    this.setData({
      rankingList: mockData
    })
  },

  goBack() {
    wx.navigateBack({
      delta: 1
    })
  },

  goHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  }
})
