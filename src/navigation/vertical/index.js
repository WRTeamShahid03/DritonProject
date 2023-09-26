const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'pepicons-pencil:house',
      badgeColor: 'error',
      path: '/dashboard/',
    },
      {
        icon: 'tabler:brand-shopee',
        title: 'Purchases',
        path: '/purchases'
      },
    {
      title: 'Activity',
      icon: 'mingcute:heartbeat-line',
      badgeColor: 'error',
      path: '/tools/latest'
    },
    {
      title: 'Tools',
      icon: 'tabler:shopping-cart',
      badgeColor: 'error',
      children: [
      
        {
          icon: 'tabler:users',
          title: 'Accounts',
          path: '/tools/accounts'
        },
        {
          icon: 'tabler:heart',
          title: 'Dating',
          path: '/tools/dating'
        },
        {
          icon: 'tabler:brand-instagram',
          title: 'Social Networks',
          path: '/tools/social-network'
        },
        {
          icon: 'tabler:brand-instagram',
          title: 'VPN',
          path: '/tools/vpn'
        },
        {
          icon: 'tabler:brand-shopee',
          title: 'Shopping',
          path: '/tools/shopping'
        },
        {
          icon: 'tabler:brand-shopee',
          title: 'Shipping',
          path: '/tools/shipping'
        },
        {
          icon: 'tabler:video',
          title: 'Streaming',
          path: '/tools/streaming'
        },
        {
          icon: 'tabler:brand-beats',
          title: 'Food',
          path: '/tools/food'
        },
        {
          icon: 'tabler:key',
          title: 'Keys',
          path: '/tools/keys'
        },
        {
          icon: 'tabler:layout-dashboard',
          title: 'Others',
          path: '/tools/others'
        },
        {
          icon: 'tabler:switch-vertical',
          title: 'Stuffs',
          path: '/tools/stuffs'
        },
        {
          icon: 'tabler:chalkboard',
          title: 'RDPS',
          path: '/tools/rdps'
        },
        {
          icon: 'tabler:brand-youtube',
          title: 'Tutorials',
          path: '/tools/tutorials'
        },
       
      ]
    },
    {
      title: 'SMS Codes',
      icon: 'tabler:message-2',
      badgeColor: 'error',
      children: [
      
        {
          icon: 'tabler:world',
          title: 'Services',
          path: '/smscodes/services'
        },
      ]
      },
    {
      title: 'Rent Number',
      icon: 'tabler:message-2',
      badgeColor: 'error',
      children: [
      
        {
          icon: 'tabler:world',
          title: 'Rent SMS Numbers',
          path: '/rent-number/rent-sms-number'
        },
        {
          icon: 'tabler:message',
          title: 'My Numbers',
          path: '/rent-number/my-number'
        },
      ]
      },
    {
      title: 'RDPs Market',
      icon: 'eva:monitor-outline',
      badgeColor: 'error',
      children: [
      
        {
          icon: 'eva:monitor-outline',
          title: 'Order a RDP',
          path: '/rdps/order-rdp'
        },
        {
          icon: 'eva:monitor-outline',
          title: 'My RDPs',
          path: '/rdps/my-rdp'
        },
      ]
      },
    {
      title: 'Request Tools',
      icon: 'octicon:git-pull-request-24',
      badgeColor: 'error',
      children: [
      
        {
          icon: 'basil:add-outline',
          title: 'Add Request & View Request',
          path: '/RequestTools/addRequest'
        },
      ]
      },
    {
      title: 'Support',
      icon: 'tabler:ball-football',
      badgeColor: 'error',
      children: [
        {
          title: 'Tickett',
          icon: 'tabler:mail',
          path: '/support/ticket'
        },
    
        {
          icon: 'ic:outline-report-problem',
          title: 'Reports',
          path: '/support/reports'
        },
        {
          icon: 'tabler:user-x',
          title: 'Warnings',
          path: '/support/warnings'
        },
       
      ]
      },
    {
      title: 'Funds',
      icon: 'bx:dollar',
      badgeColor: 'error',
      children: [
      
        {
          icon: 'icons8:plus',
          title: 'Deposit',
          path: '/funds/deposit'
        },
        {
          icon: 'icon-park-outline:loading-two',
          title: 'Pending BTC',
          path: '/funds/pendingBTC'
        },
        {
          icon: 'icon-park-outline:loading-two',
          title: 'Pending Crypto',
          path: '/funds/pendingCrypto'
        },
        {
          title: 'History',
          icon: 'game-icons:oil-drum',
          path: '/funds/history'
        },
      ]
      },
    {
      title: 'Miscellaneous',
      icon: 'fluent-emoji-high-contrast:books',
      badgeColor: 'error',
      children: [
      
        {
          icon: 'iconamoon:profile-light',
          title: 'Profile',
          path: '/miscellaneous/profile'
        },
        {
          icon: 'streamline:interface-security-shield-2-shield-protection-security-defend-crime-war-cover',
          title: 'Security',
          path: '/miscellaneous/security'
        },
        {
          icon: 'basil:notification-outline',
          title: 'Notification',
          path: '/miscellaneous/notification'
        },
        {
          title: 'Logs',
          icon: 'ep:clock',
          path: '/miscellaneous/logs'
        },
      ]
      },
      {
        title: 'Terms And Rules',
        icon: 'streamline:interface-content-book-content-books-book-close',
        badgeColor: 'error',
        path: '/TermsAndRules/'
        },
      {
        title: 'Affiliate',
        icon: 'tdesign:share',
        badgeColor: 'error',
        path: '/Affiliate/'
        },
      {
        title: 'Seller',
        icon: 'ph:user-plus-bold',
        badgeColor: 'error',
        path: '/seller/dashboard'
        },
    
      ]
    }

export default navigation
