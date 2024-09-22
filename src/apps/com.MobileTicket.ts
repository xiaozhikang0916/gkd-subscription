import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '12306',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击"跳过"',
      actionMaximum: 1,
      activityIds: 'com.MobileTicket.ui.activity.MainActivity',
      fastQuery: true,
      rules: '[id="com.MobileTicket:id/tv_skip"]',
      snapshotUrls: 'https://i.gkd.li/i/17089706',
    },
  ],
});
