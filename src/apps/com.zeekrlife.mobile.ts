import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zeekrlife.mobile',
  name: '极氪',
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
    {
      key: 2,
      name: '位置权限',
      desc: '自动点击"取消"',
      fastQuery: true,
      actionMaximum: 2,
      rules: '[id="com.zeekrlife.mobile:id/permission_alert_dialog_left_text"]',
    },
  ],
});
