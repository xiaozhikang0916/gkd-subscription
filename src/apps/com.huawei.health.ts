import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.health',
  name: '华为运动健康',
  groups: [
    {
      key: 1,
      name: '自动升级',
      desc: '自动点击"取消"',
      actionMaximum: 1,
      activityIds: 'com.huawei.hwversionmgr.activity.AppUpdateDialogActivity',
      fastQuery: true,
      rules: '[id="com.huawei.health:id/dialog_btn_negative"]',
      snapshotUrls: 'https://i.gkd.li/i/17202203',
    },
  ],
});
