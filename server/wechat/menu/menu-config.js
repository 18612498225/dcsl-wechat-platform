// It's highly recommended to store your frontend base URL in environment variables
const BASE_URL = process.env.FRONTEND_BASE_URL || 'http://your-domain.com';

const menu = {
  "button": [
    {
      "name": "数智策源",
      "sub_button": [
        { "type": "view", "name": "宏观视野", "url": `${BASE_URL}/policies` },
        { "type": "view", "name": "前沿研报", "url": `${BASE_URL}/reports` },
        { "type": "view", "name": "核心技术", "url": `${BASE_URL}/tech` },
        { "type": "view", "name": "专家圆桌", "url": `${BASE_URL}/experts` }
      ]
    },
    {
      "name": "场景赋能",
      "sub_button": [
        { "type": "view", "name": "文旅一体化", "url": `${BASE_URL}/tourism` },
        { "type": "view", "name": "大健康服务", "url": `${BASE_URL}/health` },
        { "type": "view", "name": "智慧出行", "url": `${BASE_URL}/travel` },
        { "type": "view", "name": "政企福利", "url": `${BASE_URL}/benefits` }
      ]
    },
    {
      "name": "链接未来",
      "sub_button": [
        { "type": "view", "name": "品牌故事", "url": `${BASE_URL}/brand-story` },
        { "type": "view", "name": "人才招募", "url": `${BASE_URL}/recruitment` },
        { "type": "view", "name": "活动中心", "url": `${BASE_URL}/events` },
        { "type": "view", "name": "商务合作", "url": `${BASE_URL}/contact` }
      ]
    }
  ]
};

module.exports = menu;
