import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '开启花呗提醒',
      desc: '自动点击"不感兴趣"',
      actionMaximum: 1,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      fastQuery: true,
      rules: '[text="不感兴趣"]',
      snapshotUrls: 'https://i.gkd.li/i/18704659',
    },
  ],
});
