import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.narwel.narwelrobots',
  name: '云鲸智能',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击"跳过"',
      actionMaximum: 1,
      activityIds: '.MainActivity',
      rules: [
        {
          activityIds: 'com.narwel.narwelrobots.MainActivity',
          matches:
            '@View <2 View < View < View < View < FrameLayout < [id="android:id/content"]',
        },
      ],
      snapshotUrls: 'https://i.gkd.li/i/18704697',
    },
  ],
});
