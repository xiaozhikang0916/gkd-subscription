import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zeekrlife.mobile',
  name: '蛋卷基金',
  groups: [
    {
      key: 1,
      name: '升级',
      desc: '自动点击"关闭"',
      actionMaximum: 1,
      activityIds: 'com.zeekrlife.main.MainActivity',
      fastQuery: true,
      rules: '[id="com.zeekrlife.mobile:id/im_dismiss"]',
      snapshotUrls: 'https://i.gkd.li/i/17202205',
    },
  ],
});
