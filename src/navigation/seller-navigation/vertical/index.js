const sellerNav = () => {
  return [
    {
      title: 'Dashboard',
      icon: 'pepicons-pencil:house',
      badgeColor: 'error',
      path: 'seller/dashboard/',
    },
    {
      title: 'Tools',
      icon: 'humbleicons:layers',
      badgeColor: 'error',
      children: [
      
        {
          icon: 'ph:shopping-bag',
          title: 'Solds',
          path: '/seller/solds'
        },
        {
          icon: 'fluent:cart-16-regular',
          title: 'Unsolds',
          path: '/seller/unsolds'
        },
        {
          icon: 'mdi:plus-circle-outline',
          title: 'Add Single',
          path: '/seller/add-single'
        },
        {
          icon: 'ph:plus-square',
          title: 'Add Multiple',
          path: '/seller/add-multiple'
        },
        {
          icon: 'uil:save',
          title: 'Manage Tools',
          path: '/seller/manage-tools'
        },
       
      ]
    },
      {
        icon: 'fluent:target-20-filled',
        title: 'Tools Requests',
        path: '/tools-requests'
      },
    {
      title: 'Price Limits',
      icon: 'eva:monitor-outline',
      badgeColor: 'error',
      path: 'seller/price-limits'
    },
    {
      title: 'Reports',
      icon: 'ph:warning',
      badgeColor: 'error',
      path: '/reports'
    },
    {
      title: 'Warnings',
      icon: 'lucide:user-x-2',
      badgeColor: 'error',
      path: '/warnings'
    },
    {
      title: 'Payouts',
      icon: 'icon-park-outline:dollar',
      badgeColor: 'error',
      path: '/payouts'
    },
    {
      title: 'Rules',
      icon: 'streamline:interface-content-book-content-books-book-close',
      badgeColor: 'error',
      path: '/Rules'
    },
    {
      title: 'Telegram',
      icon: 'iconoir:telegram',
      badgeColor: 'error',
      path: '/telegram'
    },
    {
      title: 'Seller Group',
      icon: 'iconoir:telegram',
      badgeColor: 'error',
      path: '/seller-group'
    },
    {
      title: 'Settings',
      icon: 'uil:setting',
      badgeColor: 'error',
      path: '/settings'
    },
    {
      title: 'Back',
      icon: 'tabler:chevrons-left',
      badgeColor: 'error',
      path: '/dashboard'
    },
   

    
      ]
    }

export default sellerNav
