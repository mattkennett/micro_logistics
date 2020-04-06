export const URL_ROOT = 'http://127.0.0.1:8000';

export const SIDEBARS = {
  assets: [
    {
      groupName: 'Import',
      links: [
        {
          title: 'Import Asset Groups', path: '/assets/import/asset_group'
        },
        {
          title: 'Import Cyber Assets', path: '/assets/import/cyber_asset'
        },
        {
          title: 'Import Software Assets', path: '/assets/import/software_asset'
        }
      ]
    },
    {
      groupName: 'Manage',
      links: [
        {
          title: 'Manage Asset Groups', path: '/assets/manage/asset_group'
        },
        {
          title: 'Manage Cyber Assets', path: '/assets/manage/cyber_asset'
        },
        {
          title: 'Manage Software Assets', path: '/assets/manage/software_asset'
        },
        {
          title: 'spacer'
        },
        {
          title: 'NVD Matching', path: '/assets/match/nvd'
        },
      ]
    },
  ],
  training: [
    {
      groupName: 'Model Training',
      links: [
        {
          title: 'Introduction', path: '/training/introduction'
        },
        {
          title: 'Create New Model', path: '/training/create_model'
        },
        {
          title: 'Use Existing Model', path: '/training/choose_model'
        },
      ]
    }
  ],
  vulnerabilities: [
    {
      groupName: 'Vulnerabilities'
    }
  ],
  work: [
    {
      groupName: 'Work',
      links: [
        {
          title: 'Start Work Cycle', path: '/work/start_work_cycle'
        },
        {
          title: 'Prediction Analysis', path: '/work/prediction_analysis'
        },
        {
          title: 'Review Flagged Vulnerabilities', path: '/work/review_flagged'
        },
        {
          title: 'Save Work Cycle', path: '/work/save_work_cycle'
        }
      ]
    }
  ]
}
