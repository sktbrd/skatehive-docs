module.exports = {
  docs: [
    {
      type: 'category',
      label: '🛹 Onboarding',
      items: [
        'README',
        'create-account',
        {
          type: 'category',
          label: '🛹 Get Started',
          items: [
            'Get Started/login',
            'Get Started/make-posts-great-again',
            'archive/nftskatehive'
          ]
        },
        {
          type: 'category',
          label: '🛹 Advance',
          items: [
            // 'Advance/airdrop',
            'Advance/manage-hive',
            'Advance/hive-witness',
            'Advance/curation-trail'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '💻 Devs',
      items: [
        'Devs/fork-skatehive',
        'Devs/app-features',
      ]
    }
  ]
};
