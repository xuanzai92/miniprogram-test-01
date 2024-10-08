Page({
  data: {
    currentFilter: 'comprehensive',
    notesList: []
  },

  onLoad(options) {
    // 从上一页获取关键词
    const keyword = options.keyword || '';
    this.searchNotes(keyword);
  },

  changeFilter(e) {
    const filter = e.currentTarget.dataset.filter
    this.setData({
      currentFilter: filter
    })
    this.searchNotes()
  },

  searchNotes(keyword) {
    // 这里应该调用后端API获取小红书笔记数据
    // 暂时使用模拟数据
    const mockData = Array.from({length: 10}, (_, i) => ({
      image: 'https://picsum.photos/200/300?random=' + i,
      title: `${keyword || '热门'}笔记 ${i + 1}`,
      description: '这是一段笔记描述，用于展示笔记的内容摘要。',
      likes: Math.floor(Math.random() * 10000),
      author: `用户${Math.floor(Math.random() * 1000)}`
    }))

    this.setData({
      notesList: mockData
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
