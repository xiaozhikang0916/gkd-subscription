import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    {
      key: 1,
      name: '热启开屏广告',
      desc: '自动点击"跳过"',
      actionMaximum: 1,
      activityIds: 'com.mgtv.ui.ad.AdHotSplashActivity',
      fastQuery: true,
      rules: '[id="com.hunantv.imgo.activity:id/mgmi_ad_skip_text"]',
      snapshotUrls: 'https://i.gkd.li/i/18704697',
    },
    {
      key: 2,
      name: '冷启开屏广告',
      desc: '自动点击"跳过"',
      actionMaximum: 1,
      activityIds: '.MainActivity',
      fastQuery: true,
      rules: '[id="com.hunantv.imgo.activity:id/mgmi_ad_skip_text"]',
      snapshotUrls: 'https://i.gkd.li/i/18704715',
    },
    {
      key: 3,
      name: '视频内浮层广告',
      desc: '自动点击"关闭"',
      actionMaximum: 1,
      activityIds: 'com.mgtv.ui.videoplay.MGVideoPlayActivity',
      fastQuery: true,
      rules: '[id="com.hunantv.imgo.activity:id/closeAdIcon"]',
      snapshotUrls: 'https://i.gkd.li/i/18704720',
    },
  ],
});
