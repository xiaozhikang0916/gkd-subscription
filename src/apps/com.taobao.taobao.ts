import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击"跳过"',
      actionMaximum: 1,
      activityIds: 'com.taobao.tao.welcome.Welcome',
      fastQuery: true,
      rules: '[id="com.taobao.taobao:id/tv_close"]',
      snapshotUrls: 'https://i.gkd.li/i/17202101',
    },
  ],
});
