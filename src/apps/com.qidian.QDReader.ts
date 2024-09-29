import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击"跳过"',
      actionMaximum: 1,
      activityIds: 'com.qidian.QDReader.ui.activity.SplashImageActivity',
      fastQuery: true,
      rules: '[id="com.qidian.QDReader:id/splash_skip_button"]',
      snapshotUrls: 'https://i.gkd.li/i/17177126',
    },
  ],
});
