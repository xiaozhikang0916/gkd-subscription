import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xueqiu.fund',
  name: '蛋卷基金',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      desc: '自动点击"跳过"',
      actionMaximum: 1,
      activityIds: 'com.xueqiu.fund.commonlib.SplashActivity',
      fastQuery: true,
      rules: '[id="com.xueqiu.fund:id/tv_exit"]',
      snapshotUrls: 'https://i.gkd.li/i/17202076',
    },
  ],
});
