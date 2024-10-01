import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击"跳过"',
      actionMaximum: 1,
      activityIds: 'com.dianping.main.guide.SplashActivity',
      fastQuery: true,
      rules: '[id="com.dianping.v1:id/new_skip"]',
      snapshotUrls: 'https://i.gkd.li/i/17202106',
    },
  ],
});
