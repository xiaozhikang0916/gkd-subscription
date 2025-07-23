import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: 'ecitic',
  groups: [
    {
      key: 1,
      name: '开启消息通知',
      desc: '自动点击"取消"',
      actionMaximum: 1,
      activityIds: '.ui.MainActivity',
      fastQuery: true,
      rules: '[id="com.ecitic.bank.mobile:id/alert_cancel"]',
      snapshotUrls: 'https://i.gkd.li/i/18975994',
    },
  ],
});
