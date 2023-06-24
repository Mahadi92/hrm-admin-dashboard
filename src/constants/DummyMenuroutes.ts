export interface MenuItemTypes {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
      variant: string;
      text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemTypes[];
  }
  
  const MENU_ITEMS: MenuItemTypes[] = [
    {
      key: "dashboards",
      label: "Home",
      isTitle: false,
      icon: "home",
      badge: { variant: "success", text: "02" },
      children: [
        // {
        //   key: "ds-ecommerce",
        //   label: "Ecommerce",
        //   url: "/dashboard/ecommerce",
        //   parentKey: "dashboards",
        // },
        {
          key: "ds-analytics",
          label: "Analytics",
          url: "/dashboard/analytics",
          parentKey: "dashboards",
        },
      ],
    },
  
    // APPS MANAGEMENTS
    { key: "hrm", label: "HR & Employe", isTitle: true },
    {
      key: "apps-hr-employe",
      label: "Employee Manage",
      isTitle: false,
      icon: "settings",
      children: [
        {
          key: "hr-employe",
          label: "Employe management",
          url: "/apps/hremploye/emp_management",
          parentKey: "hrm",
        },
      ]
    },
    {
      key: "apps-leave-management",
      label: "Leave Manage",
      isTitle: false,
      icon: "settings",
      children: [
        {
          key: "apps-leave-management",
          label: "Leave Management",
          url: "/apps/hremploye/leave_management",
          parentKey: "hrm",
        },
      ]
    },
    {
      key: "apps-hr-payroll",
      label: "Payroll",
      isTitle: false,
      icon: "dollar-sign",
      children: [
        {
          key: "hr-payroll",
          label: "Payroll",
          url: "/apps/hremploye/payroll",
          parentKey: "hrm",
        },
      ]
    },
    {
      key: "apps-hr-recruitment",
      label: "Recruitment",
      isTitle: false,
      icon: "user-plus",
      children: [
        {
          key: "hr-recruitment",
          label: "Recruitment",
          url: "/apps/hremploye/recruitment",
          parentKey: "hrm",
        },
      ]
    },
    {
      key: "hr-performance",
      label: "Performance",
      isTitle: false,
      icon: "bar-chart-2",
      children: [
        {
          key: "hr-performance",
          label: "Performance",
          url: "/apps/hremploye/performance",
          parentKey: "hrm",
        },
      ]
    },
    {
      key: "hr-noticeboard",
      label: "Notice Board",
      isTitle: false,
      icon: "clipboard",
      children: [
        {
          key: "hr-performance",
          label: "Notice Board",
          url: "/apps/hremploye/noticeBoard",
          parentKey: "hrm",
        },
      ]
    },
  
   
    /// CRM AND PROJECTS////////////////////////////////////
    { key: "crm", label: "CR & Projects", isTitle: true },
    {
      key: "hr-customers",
      label: "Customers",
      isTitle: false,
      icon: "users",
      children: [
        {
          key: "hr-customers",
          label: "Customers",
          url: "/apps/crprojects/customers",
          parentKey: "crm",
        },
      ]
    },
  
    {
      key: "hr-sales",
      label: "Sales",
      isTitle: false,
      icon: "trending-up",
      children: [
        {
          key: "hr-sales",
          label: "Sales",
          url: "/apps/crprojects/sales",
          parentKey: "crm",
        },
      ]
    },
    {
      key: "hr-projects",
      label: "Projects",
      isTitle: false,
      icon: "layers",
      children: [
        {
          key: "hr-projects",
          label: "Projects",
          url: "/apps/crprojects/projects",
          parentKey: "crm",
        },
      ]
    },
    {
      key: "hr-tasks",
      label: "Tasks",
      isTitle: false,
      icon: "clipboard",
      children: [
        {
          key: "hr-Tasks",
          label: "Tasks",
          url: "/apps/crprojects/tasks",
          parentKey: "crm",
        },
      ]
    },
    {
      key: "hr-leads",
      label: "Leads",
      isTitle: false,
      icon: "user-check",
      children: [
        {
          key: "hr-leads",
          label: "Leads",
          url: "/apps/crprojects/leads",
          parentKey: "crm",
        },
      ]
    },
    {
      key: "hr-invoice",
      label: "Invoice",
      isTitle: false,
      icon: "check-square",
      children: [
        {
          key: "hr-invoice",
          label: "Invoice",
          url: "/apps/crprojects/invoice",
          parentKey: "crm",
        },
      ]
    },
    {
      key: "hr-proposals",
      label: "Proposals",
      isTitle: false,
      icon: "file-text",
      children: [
        {
          key: "hr-proposals",
          label: "Proposals",
          url: "/apps/crprojects/Proposals",
          parentKey: "crm",
        },
      ]
    },
  
  
    // {
    //   key: "apps-calendar",
    //   label: "Calendar",
    //   isTitle: false,
    //   icon: "calendar",
    //   url: "/apps/calendar",
    // },
    // {
    //   key: "apps-chat",
    //   label: "Chat",
    //   isTitle: false,
    //   icon: "message-square",
    //   url: "/apps/chat",
    // },
  
    // {
    //   key: "apps-email",
    //   label: "Users",
    //   isTitle: false,
    //   icon: "mail",
    //   children: [
    //     {
    //       key: "email-inbox",
    //       label: "Inbox",
    //       url: "/apps/email/inbox",
    //       parentKey: "apps-email",
    //     },
    //     {
    //       key: "email-read-email",
    //       label: "Read Email",
    //       url: "/apps/email/details",
    //       parentKey: "apps-email",
    //     },
    //     {
    //       key: "email-compose-email",
    //       label: "Compose Email",
    //       url: "/apps/email/compose",
    //       parentKey: "apps-email",
    //     },
    //   ],
    // },
  
  
    ////// ADMIN  //////////////////////////////////////
    { key: "apps", label: "Admin", isTitle: true },
    // SET UP ROUTES
    {
      key: "apps-admin-setup",
      label: "Setup",
      isTitle: false,
      icon: "settings",
      children: [
        {
          key: "admin-setup",
          label: "Staff",
          url: "/apps/admin/setup",
          parentKey: "apps-admin",
        },
      ],
    },
  
  
    // REPORTS ROUTES
    {
      key: "apps-admin-reprots",
      label: "Reports",
      isTitle: false,
      icon: "file",
      children: [
        {
          key: "admin-reprots",
          label: "Sales",
          url: "/apps/admin/reports/sales",
          parentKey: "apps-reprots",
        },
        {
          key: "admin-expences",
          label: "Expences",
          url: "/apps/admin/reports/expences",
          parentKey: "apps-reprots",
        },
        {
          key: "admin-expence&income",
          label: "Expences vs Income",
          url: "/apps/admin/reports/expence&income",
          parentKey: "apps-reprots",
        },
        {
          key: "admin-reprots",
          label: "Leads",
          url: "/apps/admin/reports/leads",
          parentKey: "apps-reprots",
        },
        {
          key: "admin-timesheet",
          label: "Timesheet Overview",
          url: "/apps/admin/reports/timesheet",
          parentKey: "apps-reprots",
        },
      ],
    },
  
  
    // UTILITES ROUTES
    {
      key: "apps-admin-utilities",
      label: "Utilites",
      isTitle: false,
      icon: "activity",
      children: [
        // {
        //   key: "admin-reprots",
        //   label: "Media",
        //   url: "/apps/admin/media",
        //   parentKey: "apps-utilities",
        // },
        {
          key: "admin-utilities",
          label: "Bulk PDF Export",
          url: "/apps/admin/utilities/bulk_pdf_exporter",
          parentKey: "apps-utilities",
        },
        {
          key: "admin-calander",
          label: "Calander",
          url: "/apps/admin/utilities/calander",
          parentKey: "apps-utilities",
        },
        {
          key: "admin-announcement",
          label: "Announcement",
          url: "/apps/admin/utilities/announcement",
          parentKey: "apps-utilities",
        },
        {
          key: "admin-activitylog",
          label: "Activity Log",
          url: "/apps/admin/utilities/activitylog",
          parentKey: "apps-utilities",
        },
        {
          key: "admin-ticketpipe",
          label: "Ticket Pipe Log",
          url: "/apps/admin/utilities/ticketpipe",
          parentKey: "apps-utilities",
        },
      ],
    },
    // KNOWLEDGE BASE ROUTES
    {
      key: "apps-admin-knowledge",
      label: "Knowledge Base",
      isTitle: false,
      icon: "box",
      url: "/apps/admin/knowledge"
    },
  
  
  
    ///////////////// CLOUD BASE MANAGEMENT
    // {
    //   key: "apps-cloud",
    //   label: "Attendance",
    //   isTitle: false,
    //   icon: "briefcase",
    //   children: [
    //     {
    //       key: "cloud-management",
    //       label: "Cloud Management",
    //       url: "/apps/cloud/management",
    //       parentKey: "apps-cloud",
    //     },
    //     {
    //       key: "faceback-data",
    //       label: "Face Recognition",
    //       url: "/apps/cloud/facerecognition",
    //       parentKey: "apps-cloud",
    //     },
    //   ],
    // },
  
  
  
  
  
    // {
    //   key: "apps-projects",
    //   label: "Projects",
    //   isTitle: false,
    //   icon: "briefcase",
    //   children: [
    //     {
    //       key: "project-list",
    //       label: "List",
    //       url: "/apps/projects/list",
    //       parentKey: "apps-projects",
    //     },
    //     {
    //       key: "project-details",
    //       label: "Details",
    //       url: "/apps/projects/details",
    //       parentKey: "apps-projects",
    //     },
    //   ],
    // },
    // {
    //   key: "apps-tasks",
    //   label: "Tasks",
    //   isTitle: false,
    //   icon: "clipboard",
    //   children: [
    //     {
    //       key: "task-list",
    //       label: "List",
    //       url: "/apps/tasks/list",
    //       parentKey: "apps-tasks",
    //     },
    //     {
    //       key: "task-kanban",
    //       label: "Kanban Board",
    //       url: "/apps/tasks/kanban",
    //       parentKey: "apps-tasks",
    //     },
    //   ],
    // },
  
    // {
    //   key: "apps-file-manager",
    //   label: "File Manager",
    //   isTitle: false,
    //   icon: "file-plus",
    //   url: "/apps/file-manager",
    // },
  
  
  
    
  //   { key: "custom", label: "Custom", isTitle: true },
  //   {
  //     key: "extra-pages",
  //     label: "Pages",
  //     isTitle: false,
  //     icon: "file-text",
  //     children: [
  //       {
  //         key: "page-starter",
  //         label: "Starter",
  //         url: "/pages/starter",
  //         parentKey: "extra-pages",
  //       },
  //       {
  //         key: "page-profile",
  //         label: "Profile",
  //         url: "/pages/profile",
  //         parentKey: "extra-pages",
  //       },
  //       {
  //         key: "page-activity",
  //         label: "Activity",
  //         url: "/pages/activity",
  //         parentKey: "extra-pages",
  //       },
  //       {
  //         key: "page-invoice",
  //         label: "Invoice",
  //         url: "/pages/invoice",
  //         parentKey: "extra-pages",
  //       },
  //       {
  //         key: "page-pricing",
  //         label: "Pricing",
  //         url: "/pages/pricing",
  //         parentKey: "extra-pages",
  //       },
  //       {
  //         key: "page-maintenance",
  //         label: "Maintenance",
  //         url: "/maintenance",
  //         target: "_blank",
  //         parentKey: "extra-pages",
  //       },
  //       {
  //         key: "page-error-404",
  //         label: "Error - 404",
  //         url: "/error-404",
  //         parentKey: "extra-pages",
  //       },
  //       {
  //         key: "page-error-500",
  //         label: "Error - 500",
  //         url: "/error-500",
  //         parentKey: "extra-pages",
  //       },
  //     ],
  //   },
  //   { key: "components", label: "Components", isTitle: true },
  //   {
  //     key: "ui-elements",
  //     label: "UI Elements",
  //     isTitle: false,
  //     icon: "package",
  //     url: "/components/ui-elements",
  //   },
  //   {
  //     key: "widgets",
  //     label: "Widgets",
  //     isTitle: false,
  //     icon: "gift",
  //     url: "/components/widgets",
  //   },
  //   {
  //     key: "icons",
  //     label: "Icons",
  //     isTitle: false,
  //     icon: "cpu",
  //     children: [
  //       {
  //         key: "icon-unicons",
  //         label: "Unicons",
  //         url: "/icons/unicons",
  //         parentKey: "icons",
  //       },
  //       {
  //         key: "icon-feather",
  //         label: "Feather",
  //         url: "/icons/feather",
  //         parentKey: "icons",
  //       },
  //       {
  //         key: "icon-bootstrap",
  //         label: "Bootstrap",
  //         url: "/icons/bootstrap",
  //         parentKey: "icons",
  //       },
  //     ],
  //   },
  //   {
  //     key: "forms",
  //     label: "Forms",
  //     isTitle: false,
  //     icon: "bookmark",
  //     children: [
  //       {
  //         key: "form-basic",
  //         label: "Basic Elements",
  //         url: "/forms/basic",
  //         parentKey: "forms",
  //       },
  //       {
  //         key: "form-advanced",
  //         label: "Advanced",
  //         url: "/forms/advanced",
  //         parentKey: "forms",
  //       },
  //       {
  //         key: "form-validation",
  //         label: "Validation",
  //         url: "/forms/validation",
  //         parentKey: "forms",
  //       },
  //       {
  //         key: "form-wizard",
  //         label: "Wizard",
  //         url: "/forms/wizard",
  //         parentKey: "forms",
  //       },
  //       {
  //         key: "form-editors",
  //         label: "Editors",
  //         url: "/forms/editors",
  //         parentKey: "forms",
  //       },
  //       {
  //         key: "form-upload",
  //         label: "File Uploads",
  //         url: "/forms/upload",
  //         parentKey: "forms",
  //       },
  //     ],
  //   },
  //   {
  //     key: "charts",
  //     label: "Charts",
  //     isTitle: false,
  //     icon: "bar-chart-2",
  //     url: "/components/charts",
  //   },
  //   {
  //     key: "tables",
  //     label: "Tables",
  //     isTitle: false,
  //     icon: "grid",
  //     children: [
  //       {
  //         key: "table-basic",
  //         label: "Basic Tables",
  //         url: "/tables/basic",
  //         parentKey: "tables",
  //       },
  //       {
  //         key: "table-advanced",
  //         label: "Advanced Tables",
  //         url: "/tables/advanced",
  //         parentKey: "tables",
  //       },
  //     ],
  //   },
  //   {
  //     key: "maps",
  //     label: "Maps",
  //     isTitle: false,
  //     icon: "map",
  //     children: [
  //       {
  //         key: "maps-googlemaps",
  //         label: "Google Maps",
  //         url: "/maps/googlemaps",
  //         parentKey: "maps",
  //       },
  //       {
  //         key: "maps-vectormaps",
  //         label: "Vector Maps",
  //         url: "/maps/vectormaps",
  //         parentKey: "maps",
  //       },
  //     ],
  //   },
  //   {
  //     key: "menu-levels",
  //     label: "Menu Levels",
  //     isTitle: false,
  //     icon: "share-2",
  //     children: [
  //       {
  //         key: "menu-levels-1-1",
  //         label: "Level 1.1",
  //         url: "/",
  //         parentKey: "menu-levels",
  //         children: [
  //           {
  //             key: "menu-levels-2-1",
  //             label: "Level 2.1",
  //             url: "/",
  //             parentKey: "menu-levels-1-1",
  //             children: [
  //               {
  //                 key: "menu-levels-3-1",
  //                 label: "Level 3.1",
  //                 url: "/",
  //                 parentKey: "menu-levels-2-1",
  //               },
  //               {
  //                 key: "menu-levels-3-2",
  //                 label: "Level 3.2",
  //                 url: "/",
  //                 parentKey: "menu-levels-2-1",
  //               },
  //             ],
  //           },
  //           {
  //             key: "menu-levels-2-2",
  //             label: "Level 2.2",
  //             url: "/",
  //             parentKey: "menu-levels-1-1",
  //           },
  //         ],
  //       },
  //       {
  //         key: "menu-levels-1-2",
  //         label: "Level 1.2",
  //         url: "/",
  //         parentKey: "menu-levels",
  //       },
  //     ],
  //   },
  // ];
  ];
  
  const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
    {
      key: "dashboards",
      icon: "home",
      label: "Dashboards",
      isTitle: true,
      children: [
        {
          key: "ds-ecommerce",
          label: "Ecommerce",
          url: "/dashboard/ecommerce",
          parentKey: "dashboards",
        },
        {
          key: "ds-analytics",
          label: "Analytics",
          url: "/dashboard/analytics",
          parentKey: "dashboards",
        },
      ],
    },
    {
      key: "apps",
      icon: "layers",
      label: "Apps",
      isTitle: true,
      children: [
        {
          key: "apps-calendar",
          label: "Calendar",
          isTitle: false,
          url: "/apps/calendar",
          parentKey: "apps",
        },
        {
          key: "apps-chat",
          label: "Chat",
          isTitle: false,
          url: "/apps/chat",
          parentKey: "apps",
        },
        {
          key: "apps-email",
          label: "Email",
          isTitle: false,
          parentKey: "apps",
          children: [
            {
              key: "email-inbox",
              label: "Inbox",
              url: "/apps/email/inbox",
              parentKey: "apps-email",
            },
            {
              key: "email-read-email",
              label: "Read Email",
              url: "/apps/email/details",
              parentKey: "apps-email",
            },
            {
              key: "email-compose-email",
              label: "Compose Email",
              url: "/apps/email/compose",
              parentKey: "apps-email",
            },
          ],
        },
        {
          key: "apps-projects",
          label: "Projects",
          isTitle: false,
          parentKey: "apps",
          children: [
            {
              key: "project-list",
              label: "List",
              url: "/apps/projects/list",
              parentKey: "apps-projects",
            },
            {
              key: "project-details",
              label: "Details",
              url: "/apps/projects/details",
              parentKey: "apps-projects",
            },
          ],
        },
        {
          key: "apps-tasks",
          label: "Tasks",
          isTitle: false,
          parentKey: "apps",
          children: [
            {
              key: "task-list",
              label: "List",
              url: "/apps/tasks/list",
              parentKey: "apps-tasks",
            },
            {
              key: "task-kanban",
              label: "Kanban Board",
              url: "/apps/tasks/kanban",
              parentKey: "apps-tasks",
            },
          ],
        },
        {
          key: "apps-file-manager",
          label: "File Manager",
          isTitle: false,
          url: "/apps/file-manager",
          parentKey: "apps",
        },
      ],
    },
    {
      key: "components",
      icon: "briefcase",
      label: "Components",
      isTitle: true,
      children: [
        {
          key: "ui-elements",
          label: "UI Elements",
          isTitle: false,
          url: "/components/ui-elements",
          parentKey: "components",
        },
        {
          key: "widgets",
          label: "Widgets",
          isTitle: false,
          url: "/components/widgets",
          parentKey: "components",
        },
        {
          key: "forms",
          label: "Forms",
          isTitle: false,
          parentKey: "components",
          children: [
            {
              key: "form-basic",
              label: "Basic Elements",
              url: "/forms/basic",
              parentKey: "forms",
            },
            {
              key: "form-advanced",
              label: "Advanced",
              url: "/forms/advanced",
              parentKey: "forms",
            },
            {
              key: "form-validation",
              label: "Validation",
              url: "/forms/validation",
              parentKey: "forms",
            },
            {
              key: "form-wizard",
              label: "Wizard",
              url: "/forms/wizard",
              parentKey: "forms",
            },
            {
              key: "form-editors",
              label: "Editors",
              url: "/forms/editors",
              parentKey: "forms",
            },
            {
              key: "form-upload",
              label: "File Uploads",
              url: "/forms/upload",
              parentKey: "forms",
            },
          ],
        },
        {
          key: "charts",
          label: "Charts",
          isTitle: false,
          url: "/components/charts",
          parentKey: "components",
        },
        {
          key: "tables",
          label: "Tables",
          isTitle: false,
          parentKey: "components",
          children: [
            {
              key: "table-basic",
              label: "Basic Tables",
              url: "/tables/basic",
              parentKey: "tables",
            },
            {
              key: "table-advanced",
              label: "Advanced Tables",
              url: "/tables/advanced",
              parentKey: "tables",
            },
          ],
        },
        {
          key: "icons",
          label: "Icons",
          isTitle: false,
          parentKey: "components",
          children: [
            {
              key: "icon-unicons",
              label: "Unicons",
              url: "/icons/unicons",
              parentKey: "icons",
            },
            {
              key: "icon-feather",
              label: "Feather",
              url: "/icons/feather",
              parentKey: "icons",
            },
            {
              key: "icon-bootstrap",
              label: "Bootstrap",
              url: "/icons/bootstrap",
              parentKey: "icons",
            },
          ],
        },
        {
          key: "maps",
          label: "Maps",
          isTitle: false,
          parentKey: "components",
          children: [
            {
              key: "maps-googlemaps",
              label: "Google Maps",
              url: "/maps/googlemaps",
              parentKey: "maps",
            },
            {
              key: "maps-vectormaps",
              label: "Vector Maps",
              url: "/maps/vectormaps",
              parentKey: "maps",
            },
          ],
        },
      ],
    },
    {
      key: "extra-pages",
      label: "Pages",
      isTitle: false,
      icon: "file-text",
      children: [
        {
          key: "page-starter",
          label: "Starter",
          url: "/pages/starter",
          parentKey: "extra-pages",
        },
        {
          key: "page-profile",
          label: "Profile",
          url: "/pages/profile",
          parentKey: "extra-pages",
        },
        {
          key: "page-activity",
          label: "Activity",
          url: "/pages/activity",
          parentKey: "extra-pages",
        },
        {
          key: "page-invoice",
          label: "Invoice",
          url: "/pages/invoice",
          parentKey: "extra-pages",
        },
        {
          key: "page-pricing",
          label: "Pricing",
          url: "/pages/pricing",
          parentKey: "extra-pages",
        },
        {
          key: "page-maintenance",
          label: "Maintenance",
          url: "/maintenance",
          target: "_blank",
          parentKey: "extra-pages",
        },
        {
          key: "page-error-404",
          label: "Error - 404",
          url: "/error-404",
          parentKey: "extra-pages",
        },
        {
          key: "page-error-500",
          label: "Error - 500",
          url: "/error-500",
          parentKey: "extra-pages",
        },
      ],
    },
  ];
  
  const TWO_COl_MENU_ITEMS: MenuItemTypes[] = [
    {
      key: "dashboards",
      label: "Dashboards",
      isTitle: true,
      icon: "home",
      children: [
        {
          key: "ds-ecommerce",
          label: "Ecommerce",
          url: "/dashboard/ecommerce",
          parentKey: "dashboards",
        },
        {
          key: "ds-analytics",
          label: "Analytics",
          url: "/dashboard/analytics",
          parentKey: "dashboards",
        },
      ],
    },
    {
      key: "apps",
      icon: "grid",
      label: "Apps",
      isTitle: true,
      children: [
        {
          key: "apps-calendar",
          label: "Calendar",
          isTitle: false,
          icon: "calendar",
          url: "/apps/calendar",
          parentKey: "apps",
        },
        {
          key: "apps-chat",
          label: "Chat",
          isTitle: false,
          icon: "message-square",
          url: "/apps/chat",
          parentKey: "apps",
        },
        {
          key: "apps-email",
          label: "Email",
          isTitle: false,
          icon: "mail",
          parentKey: "apps",
          children: [
            {
              key: "email-inbox",
              label: "Inbox",
              url: "/apps/email/inbox",
              parentKey: "apps-email",
            },
            {
              key: "email-read-email",
              label: "Read Email",
              url: "/apps/email/details",
              parentKey: "apps-email",
            },
            {
              key: "email-compose-email",
              label: "Compose Email",
              url: "/apps/email/compose",
              parentKey: "apps-email",
            },
          ],
        },
        {
          key: "apps-projects",
          label: "Projects",
          isTitle: false,
          icon: "briefcase",
          parentKey: "apps",
          children: [
            {
              key: "project-list",
              label: "List",
              url: "/apps/projects/list",
              parentKey: "apps-projects",
            },
            {
              key: "project-details",
              label: "Details",
              url: "/apps/projects/details",
              parentKey: "apps-projects",
            },
          ],
        },
        {
          key: "apps-tasks",
          label: "Tasks",
          isTitle: false,
          icon: "clipboard",
          parentKey: "apps",
          children: [
            {
              key: "task-list",
              label: "List",
              url: "/apps/tasks/list",
              parentKey: "apps-tasks",
            },
            {
              key: "task-kanban",
              label: "Kanban Board",
              url: "/apps/tasks/kanban",
              parentKey: "apps-tasks",
            },
          ],
        },
        {
          key: "apps-file-manager",
          label: "File Manager",
          isTitle: false,
          icon: "file-plus",
          url: "/apps/file-manager",
          parentKey: "apps",
        },
      ],
    },
    {
      key: "extra-pages",
      icon: "file-text",
      label: "Pages",
      isTitle: true,
      children: [
        {
          key: "page-starter",
          label: "Starter",
          url: "/pages/starter",
          parentKey: "extra-pages",
        },
        {
          key: "page-profile",
          label: "Profile",
          url: "/pages/profile",
          parentKey: "extra-pages",
        },
        {
          key: "page-activity",
          label: "Activity",
          url: "/pages/activity",
          parentKey: "extra-pages",
        },
        {
          key: "page-invoice",
          label: "Invoice",
          url: "/pages/invoice",
          parentKey: "extra-pages",
        },
        {
          key: "page-pricing",
          label: "Pricing",
          url: "/pages/pricing",
          parentKey: "extra-pages",
        },
        {
          key: "page-maintenance",
          label: "Maintenance",
          url: "/maintenance",
          target: "_blank",
          parentKey: "extra-pages",
        },
        {
          key: "page-error-404",
          label: "Error - 404",
          url: "/error-404",
          parentKey: "extra-pages",
        },
        {
          key: "page-error-500",
          label: "Error - 500",
          url: "/error-500",
          parentKey: "extra-pages",
        },
      ],
    },
    {
      key: "components",
      icon: "package",
      label: "Components",
      isTitle: true,
      children: [
        {
          key: "base-ui",
          label: "UI Elements",
          isTitle: false,
          icon: "package",
          url: "/components/ui-elements",
          parentKey: "components",
        },
        {
          key: "icons",
          label: "Icons",
          isTitle: false,
          icon: "cpu",
          parentKey: "components",
          children: [
            {
              key: "icon-unicons",
              label: "Unicons",
              url: "/icons/unicons",
              parentKey: "icons",
            },
            {
              key: "icon-feather",
              label: "Feather",
              url: "/icons/feather",
              parentKey: "icons",
            },
            {
              key: "icon-bootstrap",
              label: "Bootstrap",
              url: "/icons/bootstrap",
              parentKey: "icons",
            },
          ],
        },
        {
          key: "charts",
          label: "Charts",
          isTitle: false,
          icon: "bar-chart-2",
          url: "/components/charts",
          parentKey: "components",
        },
        {
          key: "forms",
          label: "Forms",
          isTitle: false,
          icon: "bookmark",
          parentKey: "components",
          children: [
            {
              key: "form-basic",
              label: "Basic Elements",
              url: "/forms/basic",
              parentKey: "forms",
            },
            {
              key: "form-advanced",
              label: "Advanced",
              url: "/forms/advanced",
              parentKey: "forms",
            },
            {
              key: "form-validation",
              label: "Validation",
              url: "/forms/validation",
              parentKey: "forms",
            },
            {
              key: "form-wizard",
              label: "Wizard",
              url: "/forms/wizard",
              parentKey: "forms",
            },
            {
              key: "form-editors",
              label: "Editors",
              url: "/forms/editors",
              parentKey: "forms",
            },
            {
              key: "form-upload",
              label: "File Uploads",
              url: "/forms/upload",
              parentKey: "forms",
            },
          ],
        },
        {
          key: "tables",
          label: "Tables",
          isTitle: false,
          icon: "grid",
          parentKey: "components",
          children: [
            {
              key: "table-basic",
              label: "Basic Tables",
              url: "/tables/basic",
              parentKey: "tables",
            },
            {
              key: "table-advanced",
              label: "Advanced Tables",
              url: "/tables/advanced",
              parentKey: "tables",
            },
          ],
        },
        {
          key: "maps",
          label: "Maps",
          isTitle: false,
          icon: "map",
          parentKey: "components",
          children: [
            {
              key: "maps-googlemaps",
              label: "Google Maps",
              url: "/maps/googlemaps",
              parentKey: "maps",
            },
            {
              key: "maps-vectormaps",
              label: "Vector Maps",
              url: "/maps/vectormaps",
              parentKey: "maps",
            },
          ],
        },
        {
          key: "menu-levels",
          label: "Menu Levels",
          isTitle: false,
          icon: "share-2",
          parentKey: "components",
          children: [
            {
              key: "menu-levels-1-1",
              label: "Level 1.1",
              url: "/",
              parentKey: "menu-levels",
              children: [
                {
                  key: "menu-levels-2-1",
                  label: "Level 2.1",
                  url: "/",
                  parentKey: "menu-levels-1-1",
                  children: [
                    {
                      key: "menu-levels-3-1",
                      label: "Level 3.1",
                      url: "/",
                      parentKey: "menu-levels-2-1",
                    },
                    {
                      key: "menu-levels-3-2",
                      label: "Level 3.2",
                      url: "/",
                      parentKey: "menu-levels-2-1",
                    },
                  ],
                },
                {
                  key: "menu-levels-2-2",
                  label: "Level 2.2",
                  url: "/",
                  parentKey: "menu-levels-1-1",
                },
              ],
            },
            {
              key: "menu-levels-1-2",
              label: "Level 1.2",
              url: "/",
              parentKey: "menu-levels",
            },
          ],
        },
      ],
    },
    {
      key: "widgets",
      label: "Widgets",
      isTitle: false,
      icon: "gift",
      url: "/components/widgets",
    },
  ];
  
  export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS };
  