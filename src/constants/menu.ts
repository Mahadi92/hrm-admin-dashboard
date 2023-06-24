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

const userRole: any = localStorage.getItem("role") ? JSON.parse(localStorage.getItem("role")!) : null

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

  ///////////////////////  var job desk  ///////////////////////////
  {
    key: "apps-hr-jobdesk",
    label: "Job Desk",
    isTitle: false,
    icon: "user",
    children: [
      {
        key: "apps-job-desk",
        label: "Job Desk",
        url: "/apps/hremploye/jobdesk",
        parentKey: "apps-hr-jobdesk",
      },
    ]
  },

  ///////////////////////// var employee manage //////////////////////
  {
    key: "apps-hr-employe",
    label: "Employee Manage",
    isTitle: false,
    icon: "settings",
    children: [
      // {
      //   key: "hr-employe-attandance",
      //   label: "Attandance",
      //   url: "/apps/hremploye/Attandance",
      //   parentKey: "apps-hr-employe",
      // },


      {
        key: "hr-employe-allemployees",
        label: "All Employees",
        url: "/apps/hremploye/allemployees",
        parentKey: "apps-hr-employe",
      },
      {
        key: "hr-employe-designation",
        label: "Designation",
        url: "/apps/hremploye/Designation",
        parentKey: "apps-hr-employe",
      },
      {
        key: "hr-employe-empstatus",
        label: "Employment Status",
        url: "/apps/hremploye/empstatus",
        parentKey: "apps-hr-employe",
      },

      // {
      //   key: "hr-employe-branch",
      //   label: "Branch",
      //   url: "/apps/hremploye/Branch",
      //   parentKey: "apps-hr-employe",
      // },
      // {
      //   key: "hr-employe-manage",
      //   label: "Manage Employee",
      //   url: "/apps/hremploye/manageemploye",
      //   parentKey: "apps-hr-employe",
      // },
      // {
      //   key: "hr-employ-warning",
      //   label: "Warning",
      //   url: "/apps/hremploye/Warning",
      //   parentKey: "apps-hr-employe",
      // },
      // {
      //   key: "hr-employe-termination",
      //   label: "Termination",
      //   url: "/apps/hremploye/Termination",
      //   parentKey: "apps-hr-employe",
      // },
      // {
      //   key: "hr-employe-promotions",
      //   label: "Promotions",
      //   url: "/apps/hremploye/Promotions",
      //   parentKey: "apps-hr-employe",
      // },
      // {
      //   key: "hr-employe-empmanage",
      //   label: "Employee Permanent",
      //   url: "/apps/hremploye/employePermananent",
      //   parentKey: "apps-hr-employe",
      // },

    ]
  },

  //////////////////// VARTICAL LEAVE MANAGMENT HR or var leave management /////////////////
  {
    key: "apps-leave-management",
    label: "Leave Manage",
    isTitle: false,
    icon: "settings",
    children: [
      {
        key: "apps-leave-status",
        label: "Leave Status",
        url: "/apps/hremploye/leavestatus",
        parentKey: "apps-leave-management",
      },
      {
        key: "apps-leave-request",
        label: "Leave Request",
        url: "/apps/hremploye/leaverequest",
        parentKey: "apps-leave-management",
      },
      {
        key: "apps-leave-calendar",
        label: "Calendar",
        url: "/apps/hremploye/leavecalendar",
        parentKey: "apps-leave-management",
      },
      {
        key: "apps-leave-Summary",
        label: "Summary Report",
        url: "/apps/hremploye/summary_management",
        parentKey: "apps-leave-management",
      },



      // {
      //   key: "apps-leave-Weekly",
      //   label: "Weekly Holiday",
      //   url: "/apps/hremploye/Weekly_management",
      //   parentKey: "apps-leave-management",
      // },
      // {
      //   key: "apps-leave-Type",
      //   label: "Leave Type",
      //   url: "/apps/hremploye/Leave_management",
      //   parentKey: "apps-leave-management",
      // },
      // {
      //   key: "apps-leave-Apply",
      //   label: "Apply For Leave",
      //   url: "/apps/hremploye/applyleave_management",
      //   parentKey: "apps-leave-management",
      // },
      // {
      //   key: "apps-leave-Configure",
      //   label: "Requested Application",
      //   url: "/apps/hremploye/reqleave_management",
      //   parentKey: "apps-leave-management",
      // },
      // {
      //   key: "apps-leave-Leave",
      //   label: "Leave Report",
      //   url: "/apps/hremploye/leavereport_management",
      //   parentKey: "apps-leave-management",
      // },

      // {
      //   key: "apps-leave-My",
      //   label: "My Leave Report",
      //   url: "/apps/hremploye/myleave_management",
      //   parentKey: "apps-leave-management",
      // },


    ]
  },


  // ///////////////// vartical attandance vr ////////////////////// 

  {
    key: "apps-hr-attandance",
    label: "Attandance",
    isTitle: false,
    icon: "briefcase",
    children: [
      {
        key: "apps-hr-dailylog",
        label: "Daily Log",
        url: "/apps/hremploye/dailylog",
        parentKey: "apps-hr-attandance",
      },
      {
        key: "apps-attandacne-req",
        label: "Attandance Request",
        url: "/apps/hremploye/attadancereq",
        parentKey: "apps-hr-attandance",
      },
      {
        key: "apps-attandacne-details",
        label: "Attandance Details",
        url: "/apps/hremploye/attadancedetails",
        parentKey: "apps-hr-attandance",
      },
      {
        key: "apps-attandacne-summary",
        label: "Summary",
        url: "/apps/hremploye/attandancesummary",
        parentKey: "apps-hr-attandance",
      },

    ]
  },


  //////////////////// VARTICAL CORE HR or core hr /////////////////


  // {
  //   key: "apps-core-hr",
  //   label: "Core HR",
  //   isTitle: false,
  //   icon: "briefcase",
  //   children: [
  //     {
  //       key: "apps-corehr-Award",
  //       label: "Award",
  //       url: "/apps/hremploye/corehr/Award",
  //       parentKey: "apps-core-hr",
  //     },
  //     {
  //       key: "apps-leave-travel",
  //       label: "Travel",
  //       // icon: "truck",
  //       url: "/apps/hremploye/corehr/Travel",
  //       parentKey: "apps-core-hr",
  //     },
  //     {
  //       key: "apps-leave-transfer",
  //       label: "Transfer",
  //       // icon: "gift",
  //       url: "/apps/hremploye/corehr/Transfer",
  //       parentKey: "apps-core-hr",
  //     },
  //     {
  //       key: "apps-leave-registration",
  //       label: "Registration",
  //       // icon: "gift",
  //       url: "/apps/hremploye/corehr/Registration",
  //       parentKey: "apps-core-hr",
  //     },
  //     {
  //       key: "apps-leave-complaints",
  //       label: "Complaints",
  //       url: "/apps/hremploye/corehr/Complaints",
  //       parentKey: "apps-core-hr",
  //     }
  //   ]
  // },


  ///////////////// hr & projects calander or HR CALANDER ////////////////////

  // {
  //   key: "hr-employe-calender",
  //   label: "HR Calander",
  //   isTitle: false,
  //   icon: "calendar",
  //   url: "/apps/hremploye/calander",
  // },



  /////////////////// vartical varhr reports  or HR REPORTS //////////////////////////////////

  // {
  //   key: "hr-employe-reports",
  //   label: "HR Reports",
  //   isTitle: false,
  //   icon: "clipboard",
  //   children: [
  //     {
  //       key: "apps-hrreports-daily",
  //       label: "Daily Attandance",
  //       url: "/apps/hremploye/hrreports/dailyattandance",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-monthly",
  //       label: "Monthly Attandance",
  //       url: "/apps/hremploye/hrreports/monthlyattandance",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-datewise",
  //       label: "Datewise Attandance",
  //       url: "/apps/hremploye/hrreports/datewiseattandance",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-training",
  //       label: "Training Report",
  //       url: "/apps/hremploye/hrreports/training_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-project",
  //       label: "Project Report",
  //       url: "/apps/hremploye/hrreports/project_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-task",
  //       label: "Task Report",
  //       url: "/apps/hremploye/hrreports/task_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-employee",
  //       label: "Employees Report",
  //       url: "/apps/hremploye/hrreports/employees_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-account",
  //       label: "Account Report",
  //       url: "/apps/hremploye/hrreports/Account_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-expense",
  //       label: "Expense Report",
  //       url: "/apps/hremploye/hrreports/Expense_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-desposit",
  //       label: "Deposit Report",
  //       url: "/apps/hremploye/hrreports/Deposit_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-transaction",
  //       label: "Transaction Report",
  //       url: "/apps/hremploye/hrreports/Transaction_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //     {
  //       key: "apps-hrreports-pension",
  //       label: "Pension Report",
  //       url: "/apps/hremploye/hrreports/Pension_report",
  //       parentKey: "hr-employe-reports",
  //     },
  //   ]
  // },

  /////////////// vartical var payroll or PAYROLL varpay//////////////////////////////

  {
    key: "apps-hr-payroll",
    label: "Payroll",
    isTitle: false,
    icon: "dollar-sign",
    children: [
      {
        key: "hr-payroll-payrun",
        label: "Payrun",
        url: "/apps/hremploye/payroll/payrun",
        parentKey: "apps-hr-payroll",
      },
      {
        key: "hr-payroll-payslip",
        label: "Payslip",
        url: "/apps/hremploye/payroll/payslip",
        parentKey: "apps-hr-payroll",
      },
      {
        key: "hr-payroll-summary",
        label: "Summary",
        url: "/apps/hremploye/payroll/summary",
        parentKey: "apps-hr-payroll",
      },
      {
        key: "hr-payroll-badge",
        label: "Beneficiary Badge",
        url: "/apps/hremploye/payroll/badge",
        parentKey: "apps-hr-payroll",
      },

      // {
      //   key: "hr-payroll-setup",
      //   label: "Set Up Payroll",
      //   url: "/apps/hremploye/payroll/setup",
      //   parentKey: "apps-hr-payroll",
      // },
      // {
      //   key: "hr-payroll-allowance",
      //   label: "Allowance",
      //   url: "/apps/hremploye/payroll/Allowance",
      //   parentKey: "apps-hr-payroll",
      // },
      // {
      //   key: "hr-payroll-deduction",
      //   label: "Deduction",
      //   url: "/apps/hremploye/payroll/Deduction",
      //   parentKey: "apps-hr-payroll",
      // },
      // {
      //   key: "hr-payroll-monthly",
      //   label: "Monthly Pay Grade",
      //   url: "/apps/hremploye/payroll/monthlypaygrade",
      //   parentKey: "apps-hr-payroll",
      // },
      // {
      //   key: "hr-payroll-hourly",
      //   label: "Hourly Pay Grade",
      //   url: "/apps/hremploye/payroll/hourlypaygrade",
      //   parentKey: "apps-hr-payroll",
      // },
      // {
      //   key: "hr-payroll-Generate",
      //   label: "Generate Salary Sheet",
      //   url: "/apps/hremploye/payroll/salarysheet",
      //   parentKey: "apps-hr-payroll",
      // },
      // {
      //   key: "hr-payroll-report",
      //   label: "Payment History",
      //   url: "/apps/hremploye/payroll/payreport",
      //   parentKey: "apps-hr-payroll",
      // },
      // {
      //   key: "hr-payroll-hourly",
      //   label: "Manage Work Hour",
      //   url: "/apps/hremploye/payroll/manageworkhour",
      //   parentKey: "apps-hr-payroll",
      // },
      // {
      //   key: "hr-payroll-bonus",
      //   label: "Manage Bonus",
      //   url: "/apps/hremploye/payroll/managebonus",
      //   parentKey: "apps-hr-payroll",
      // },

    ]
  },

  ///////////////// hr & projects var administrations ////////////////////
  {
    key: "apps-hr-administration",
    label: "Administration",
    isTitle: false,
    icon: "user-plus",
    children: [
      {
        key: "hr-admin-roles",
        label: "Users & Roles",
        url: "/apps/hremploye/administration/roles",
        parentKey: "apps-hr-administration",
      },
      {
        key: "hr-admin-shift",
        label: "Work shift & Others",
        url: "/apps/hremploye/administration/shiftsothers",
        parentKey: "apps-hr-administration",
      },
      {
        key: "hr-admin-announcements",
        label: "Announcements",
        url: "/apps/hremploye/administration/announcements",
        parentKey: "apps-hr-administration",
      },
      {
        key: "hr-employe-department",
        label: "Department",
        url: "/apps/hremploye/departmen",
        parentKey: "apps-hr-employe",
      },
    ]
  },

  ///////////////// hr & projects var assets ////////////////////
  {
    key: "apps-hr-assets",
    label: "Assets",
    isTitle: false,
    icon: "file",
    children: [
      {
        key: "hr-admin-asset",
        label: "Assets",
        url: "/apps/hremploye/assets",
        parentKey: "apps-hr-assets",
      },
    ]
  },


  ///////////////// hr & projects var settings ////////////////////
  {
    key: "apps-hr-settings",
    label: "Settings",
    isTitle: false,
    icon: "settings",
    children: [
      {
        key: "hr-app-settings",
        label: "App Setting",
        url: "/apps/hremploye/appsettings",
        parentKey: "apps-hr-settings",
      },
      {
        key: "hr-leave-settings",
        label: "leave Setting",
        url: "/apps/hremploye/leavesettings",
        parentKey: "apps-hr-settings",
      },
      {
        key: "hr-Attandance-settings",
        label: "Attendance Setting",
        url: "/apps/hremploye/attandancesettings",
        parentKey: "apps-hr-settings",
      },
      {
        key: "hr-Payroll-settings",
        label: "Payroll Setting",
        url: "/apps/hremploye/payrollsettings",
        parentKey: "apps-hr-settings",
      },
      {
        key: "hr-import-settings",
        label: "Import",
        url: "/apps/hremploye/imports",
        parentKey: "apps-hr-settings",
      },
    ]
  },

  ///////////////// hr & projects var recruitment ////////////////////

  // {
  //   key: "apps-hr-recruitment",
  //   label: "Recruitment",
  //   isTitle: false,
  //   icon: "user-plus",
  //   children: [
  //     {
  //       key: "hr-recruitment-post",
  //       label: "Job Post",
  //       url: "/apps/hremploye/recruitment/jobpost",
  //       parentKey: "apps-hr-recruitment",
  //     },
  //     {
  //       key: "hr-recruitment-candidate",
  //       label: "Job Candidate",
  //       url: "/apps/hremploye/recruitment/jobcandidate",
  //       parentKey: "apps-hr-recruitment",
  //     },
  //   ]
  // },


  ///////////////// hr & projects  performance var perfor ////////////////////
  // {
  //   key: "hr-performance",
  //   label: "Performance",
  //   isTitle: false,
  //   icon: "bar-chart-2",
  //   children: [
  //     {
  //       key: "hr-goal-type",
  //       label: "Goal Type",
  //       url: "/apps/hremploye/performance/goaltype",
  //       parentKey: "hr-performance",
  //     },
  //     {
  //       key: "hr-goal-tracking",
  //       label: "Goal Tracking",
  //       url: "/apps/hremploye/performance/goaltracking",
  //       parentKey: "hr-performance",
  //     },
  //     {
  //       key: "hr-indicator",
  //       label: "Indicator",
  //       url: "/apps/hremploye/performance/Indicator",
  //       parentKey: "hr-performance",
  //     },
  //     {
  //       key: "hr-Appraisal",
  //       label: "Appraisal",
  //       url: "/apps/hremploye/performance/Appraisal",
  //       parentKey: "hr-performance",
  //     },
  //   ]
  // },

  ///////////////// hr & projects  notice board var perfor ////////////////////
  // {
  //   key: "hr-noticeboard",
  //   label: "Notice Board",
  //   isTitle: false,
  //   icon: "clipboard",
  //   children: [
  //     {
  //       key: "hr-performance",
  //       label: "Notice Board",
  //       url: "/apps/hremploye/noticeBoard",
  //       parentKey: "hr-noticeboard",
  //     },
  //   ]
  // },


  /// CRM AND PROJECTS////////////////////////////////////
  { key: "crm", label: "CR & Projects", isTitle: true },

  /////////////////////// CRM AND PROJECTS cr projects////////////////////////////////////
  {
    key: "hr-projects",
    label: "Projects",
    isTitle: false,
    icon: "layers",
    children: [
      {
        key: "hr-customer-projects",
        label: "Projects",
        url: "/apps/crprojects/projects",
        parentKey: "hr-projects",
      },
    ]
  },

  /////////////////////// CRM AND PROJECTS cr tasks////////////////////////////////////
  {
    key: "hr-tasks",
    label: "Tasks",
    isTitle: false,
    icon: "clipboard",
    children: [
      {
        key: "hr-customer-Tasks",
        label: "Tasks",
        url: "/apps/crprojects/tasks",
        parentKey: "crm",
      },
    ]
  },


  // {
  //   key: "hr-leads",
  //   label: "Leads",
  //   isTitle: false,
  //   icon: "user-check",
  //   children: [
  //     {
  //       key: "hr-customer-leads",
  //       label: "Leads",
  //       url: "/apps/crprojects/leads",
  //       parentKey: "crm",
  //     },
  //   ]
  // },

  // {
  //   key: "hr-invoice",
  //   label: "Invoice",
  //   isTitle: false,
  //   icon: "check-square",
  //   children: [
  //     {
  //       key: "hr-customer-invoice",
  //       label: "Invoice",
  //       url: "/apps/crprojects/invoice",
  //       parentKey: "crm",
  //     },
  //   ]
  // },

  // {
  //   key: "hr-proposals",
  //   label: "Proposals",
  //   isTitle: false,
  //   icon: "file-text",
  //   children: [
  //     {
  //       key: "hr-customer-proposals",
  //       label: "Proposals",
  //       url: "/apps/crprojects/Proposals",
  //       parentKey: "crm",
  //     },
  //   ]
  // },


  ///////////////////////// cr & projects var calendar //////////////////////////////////////

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


  ///////////////////////// cr & projects var users //////////////////////////////////////

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


  ////// ADMIN  adminvar //////////////////////////////////////
  // { key: "apps", label: "Admin", isTitle: true },

  // SET UP ROUTES
  // {
  //   key: "apps-admin-setup",
  //   label: "Setup",
  //   isTitle: false,
  //   icon: "settings",
  //   children: [
  //     {
  //       key: "admin-setup-staff",
  //       label: "Staff",
  //       url: "/apps/admin/setup",
  //       parentKey: "apps-admin-setup",
  //     },
  //     {
  //       key: "admin-shift-setup",
  //       label: "Shift And Others",
  //       url: "/apps/admin/setup/shift",
  //       parentKey: "apps-admin-setup",
  //     },
  //     {
  //       key: "admin-working-setup",
  //       label: "Working Day",
  //       url: "/apps/admin/setup/days",
  //       parentKey: "apps-admin-setup",
  //     },
  //     {
  //       key: "admin-weekends-setup",
  //       label: "Weekends",
  //       url: "/apps/admin/setup/weekends",
  //       parentKey: "apps-admin-setup",
  //     },
  //   ],
  // },


  //////////////////// cr & projects REPORTS ROUTES var reports routes ///////////////////////

  // {
  //   key: "apps-admin-reprots",
  //   label: "Reports",
  //   isTitle: false,
  //   icon: "file",
  //   children: [
  //     {
  //       key: "admin-reprots",
  //       label: "Sales",
  //       url: "/apps/admin/reports/sales",
  //       parentKey: "apps-reprots",
  //     },
  //     {
  //       key: "admin-expences",
  //       label: "Expences",
  //       url: "/apps/admin/reports/expences",
  //       parentKey: "apps-reprots",
  //     },
  //     {
  //       key: "admin-expence&income",
  //       label: "Expences vs Income",
  //       url: "/apps/admin/reports/expence&income",
  //       parentKey: "apps-reprots",
  //     },
  //     {
  //       key: "admin-reprots",
  //       label: "Leads",
  //       url: "/apps/admin/reports/leads",
  //       parentKey: "apps-reprots",
  //     },
  //     {
  //       key: "admin-timesheet",
  //       label: "Timesheet Overview",
  //       url: "/apps/admin/reports/timesheet",
  //       parentKey: "apps-reprots",
  //     },
  //   ],
  // },

  // UTILITES ROUTES
  // {
  //   key: "apps-admin-utilities",
  //   label: "Utilites",
  //   isTitle: false,
  //   icon: "activity",
  //   children: [
  //     {
  //       key: "admin-reprots",
  //       label: "Media",
  //       url: "/apps/admin/media",
  //       parentKey: "apps-admin-utilities",
  //     },
  //     {
  //       key: "admin-utilities",
  //       label: "Bulk PDF Export",
  //       url: "/apps/admin/utilities/bulk_pdf_exporter",
  //       parentKey: "apps-admin-utilities",
  //     },
  //     {
  //       key: "admin-calander",
  //       label: "Calander",
  //       url: "/apps/admin/utilities/calander",
  //       parentKey: "apps-admin-utilities",
  //     },
  //     {
  //       key: "admin-announcement",
  //       label: "Announcement",
  //       url: "/apps/admin/utilities/announcement",
  //       parentKey: "apps-admin-utilities",
  //     },
  //     {
  //       key: "admin-activitylog",
  //       label: "Activity Log",
  //       url: "/apps/admin/utilities/activitylog",
  //       parentKey: "apps-admin-utilities",
  //     },
  //     {
  //       key: "admin-ticketpipe",
  //       label: "Ticket Pipe Log",
  //       url: "/apps/admin/utilities/ticketpipe",
  //       parentKey: "apps-admin-utilities",
  //     },
  //   ],
  // },

  // KNOWLEDGE BASE ROUTES
  // {
  //   key: "apps-admin-knowledge",
  //   label: "Knowledge Base",
  //   isTitle: false,
  //   icon: "box",
  //   url: "/apps/admin/knowledge"
  // },

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
]










///////////////////////////// HORIZONTAL MENUS horizontal menus/////////////////////////////////////////
const HORIZONTAL_EMP_MENUS: MenuItemTypes[] = [
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
  {
    key: "apps-employe",
    label: "Employee Dashboard",
    isTitle: false,
    icon: "settings",
    url: "/apps/admin/employee",
    children: [
      {
        key: "apps-employe",
        label: "Employe",
        isTitle: false,
        icon: "settings",
        children: [
          {
            key: "employe-update",
            label: "Update Information",
            icon: "shield",
            url: "/apps/employee/infoupdate",
            parentKey: "apps-employe",
          },
          {
            key: "employe-create-task",
            label: "Create Task",
            icon: "clipboard",
            url: "/apps/employee/createtask",
            parentKey: "apps-employe",
          },
          {
            key: "employe-check-task",
            label: "Check Assigned Tasks",
            icon: "check",
            url: "/apps/employee/checktasks",
            parentKey: "apps-employe",
          },
          {
            key: "employe-check-created",
            label: "Check Created Tasks",
            icon: "check",
            url: "/apps/employee/checkcreatedtask",
            parentKey: "apps-employe",
          },

          {
            key: "employe-complete-task",
            label: "Check Completed Tasks",
            icon: "check",
            url: "/apps/employee/comtasks",
            parentKey: "apps-employe",
          },

          {
            key: "employe-leave-req",
            label: "Apply For Leave",
            icon: "clipboard",
            url: "/apps/employee/leavereq",
            parentKey: "apps-employe",
          },
        ]
      },

      {
        key: "apps-employe",
        label: "Attandance & Others",
        isTitle: false,
        icon: "user-check",
        children: [
          {
            key: "employe-check-attandance",
            label: "Check Attandance",
            icon: "user-check",
            url: "/apps/employee/checkattandance",
            parentKey: "apps-employe",
          },

        ]
      }

    ],
  },

  {
    key: "apps-employe",
    label: "Chat Here",
    isTitle: false,
    icon: "clipboard",
    url: "/apps/employee/chat",
    children: [
      {
        key: "apps-employe-chat",
        label: "Chat",
        icon: "message-square",
        url: "/apps/employee/chat",
      },
    ]
  },

]

const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: "dashboards",
    icon: "home",
    label: "Dashboards",
    isTitle: true,
    children: [
      {
        key: "ds-analytics",
        label: "Analytics",
        url: "/dashboard/analytics",
        parentKey: "dashboards",
      },
    ],
  },

  // HORIZONTAL AND EMPLOYEE ROUTES horiman//////////////////////////////////

  //  { key: "hrm", label: "HR & Employe", isTitle: true },
  // horiemp
  {
    key: "apps-hr-employe",
    label: "HR & Employee",
    isTitle: false,
    icon: "settings",
    url: "/apps/admin/hremployee",
    children: [
      {
        key: "apps-hr-employe",
        label: "Employe",
        isTitle: false,
        icon: "settings",
        children: [
          {
            key: "apps-job-desk",
            label: "Job Desk",
            icon:'user',
            url: "/apps/hremploye/jobdesk",
            parentKey: "apps-hr-jobdesk",
          },
          {
            key: "hr-employe-allemployees",
            label: "All Employees",
            icon:'users',
            url: "/apps/hremploye/allemployees",
            parentKey: "apps-hr-employe",
          },
          {
            key: "hr-employe-designation",
            label: "Designation",
            icon:'file',
            url: "/apps/hremploye/Designation",
            parentKey: "apps-hr-employe",
          },
          {
            key: "hr-employe-empstatus",
            label: "Employment Status",
            icon:'clipboard',
            url: "/apps/hremploye/empstatus",
            parentKey: "apps-hr-employe",
          },

        ]
      },

      // horihr
      // {
      //   key: "apps-core-hr",
      //   label: "Core HR",
      //   isTitle: false,
      //   icon: "briefcase",
      //   children: [
      //     {
      //       key: "apps-corehr-Award",
      //       label: "Award",
      //       icon: "award",
      //       url: "/apps/hremploye/corehr/Award",
      //       parentKey: "apps-core-hr",
      //     },
      //     {
      //       key: "apps-leave-management",
      //       label: "Travel",
      //       icon: "truck",
      //       url: "/apps/hremploye/corehr/Travel",
      //       parentKey: "apps-core-hr",
      //     },
      //     {
      //       key: "apps-leave-management",
      //       label: "Transfer",
      //       icon: "chevron-up",
      //       url: "/apps/hremploye/corehr/Transfer",
      //       parentKey: "apps-core-hr",
      //     },
      //     {
      //       key: "apps-leave-management",
      //       label: "Registration",
      //       icon: "file-plus",
      //       url: "/apps/hremploye/corehr/Registration",
      //       parentKey: "apps-core-hr",
      //     },
      //     {
      //       key: "apps-leave-management",
      //       label: "Complaints",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/corehr/Complaints",
      //       parentKey: "apps-core-hr",
      //     }
      //   ]
      // },


      // horilev hori leave
      {
        key: "apps-leave-management",
        label: "Leave",
        isTitle: false,
        icon: "settings",
        children: [
          {
            key: "apps-leave-status",
            label: "Leave Status",
            icon: "airplay",
            url: "/apps/hremploye/leavestatus",
            parentKey: "apps-leave-management",
          },
          {
            key: "apps-leave-request",
            label: "Leave Request",
            icon: "clipboard",
            url: "/apps/hremploye/leaverequest",
            parentKey: "apps-leave-management",
          },
          {
            key: "apps-leave-calendar",
            label: "Calendar",
            icon:'calendar',
            url: "/apps/hremploye/leavecalendar",
            parentKey: "apps-leave-management",
          },
          {
            key: "apps-leave-Summary",
            label: "Summary Report",
            icon:'file',
            url: "/apps/hremploye/summary_management",
            parentKey: "apps-leave-management",
          },
        ]
      },


      // horical
      // {
      //   key: "hr-employe-calender",
      //   label: "Calander",
      //   isTitle: false,
      //   icon: "calendar",
      //   children: [
      //     {
      //       key: "apps-leave-management",
      //       label: "Calander",
      //       icon: "calendar",
      //       url: "/apps/hremploye/calander",
      //       parentKey: "hrm",
      //     },
      //   ]
      // },

      // horipay
      {
        key: "apps-hr-payroll",
        label: "Payroll",
        isTitle: false,
        icon: "dollar-sign",
        children: [
         
          {
            key: "hr-payroll-payrun",
            label: "Payrun",
            icon: "dollar-sign",
            url: "/apps/hremploye/payroll/payrun",
            parentKey: "apps-hr-payroll",
          },
          {
            key: "hr-payroll-payslip",
            label: "Payslip",
            icon:'clipboard',
            url: "/apps/hremploye/payroll/payslip",
            parentKey: "apps-hr-payroll",
          },
          {
            key: "hr-payroll-summary",
            label: "Summary",
            icon:'clipboard',
            url: "/apps/hremploye/payroll/summary",
            parentKey: "apps-hr-payroll",
          },
          {
            key: "hr-payroll-badge",
            label: "Beneficiary Badge",
            icon:'clipboard',
            url: "/apps/hremploye/payroll/badge",
            parentKey: "apps-hr-payroll",
          },
          
          // {
          //   key: "hr-payroll-setup",
          //   label: "Set Up Payroll",
          //   icon: "dollar-sign",
          //   url: "/apps/hremploye/payroll/setup",
          //   parentKey: "hrm",
          // },
          // {
          //   key: "hr-payroll-allowance",
          //   label: "Allowance",
          //   icon: "dollar-sign",
          //   url: "/apps/hremploye/payroll/Allowance",
          //   parentKey: "hrm",
          // },
          // {
          //   key: "hr-payroll-deduction",
          //   label: "Deduction",
          //   icon: "minus",
          //   url: "/apps/hremploye/payroll/Deduction",
          //   parentKey: "hrm",
          // },
          // {
          //   key: "hr-payroll-monthly",
          //   label: "Monthly Pay Grade",
          //   icon: "fast-forward",
          //   url: "/apps/hremploye/payroll/monthlypaygrade",
          //   parentKey: "hrm",
          // },
          // {
          //   key: "hr-payroll-hourly",
          //   label: "Hourly Pay Grade",
          //   icon: "fast-forward",
          //   url: "/apps/hremploye/payroll/hourlypaygrade",
          //   parentKey: "hrm",
          // },
          // {
          //   key: "hr-payroll-hourly",
          //   label: "Generate Salary Sheet",
          //   icon: "clipboard",
          //   url: "/apps/hremploye/payroll/salarysheet",
          //   parentKey: "hrm",
          // },
          // {
          //   key: "hr-payroll-report",
          //   label: "Payment History",
          //   icon: "clipboard",
          //   url: "/apps/hremploye/payroll/payreport",
          //   parentKey: "hrm",
          // },
          // {
          //   key: "hr-payroll-hourly",
          //   label: "Manage Work Hour",
          //   icon: "watch",
          //   url: "/apps/hremploye/payroll/manageworkhour",
          //   parentKey: "hrm",
          // },
          // {
          //   key: "hr-payroll-bonus",
          //   label: "Manage Bonus",
          //   icon: "settings",
          //   url: "/apps/hremploye/payroll/managebonus",
          //   parentKey: "hrm",
          // },
        ]
      },

      //////////////////// hori administration ///////////////////
      {
        key: "apps-hr-administration",
        label: "Administration",
        isTitle: false,
        icon: "user-plus",
        children: [
          {
            key: "hr-admin-roles",
            label: "Users & Roles",
            icon:'user',
            url: "/apps/hremploye/administration/roles",
            parentKey: "apps-hr-administration",
          },
          {
            key: "hr-admin-shift",
            label: "Work shift & Others",
            icon:'clock',
            url: "/apps/hremploye/administration/shiftsothers",
            parentKey: "apps-hr-administration",
          },
          {
            key: "hr-admin-announcements",
            label: "Announcements",
            icon:'clipboard',
            url: "/apps/hremploye/administration/announcements",
            parentKey: "apps-hr-administration",
          },
          {
            key: "hr-employe-department",
            label: "Department",
            icon:'bookmark',
            url: "/apps/hremploye/departmen",
            parentKey: "apps-hr-employe",
          },
        ]
      },

        ////////////////// hori assets ///////////////////
      {
        key: "apps-hr-assets",
        label: "Assets",
        isTitle: false,
        icon: "file",
        children: [
          {
            key: "hr-admin-asset",
            label: "Assets",
            icon:'file',
            url: "/apps/hremploye/assets",
            parentKey: "apps-hr-assets",
          },
        ]
      },

      ///////////////  hori settings ////////////////// 
      {
        key: "apps-hr-settings",
        label: "Settings",
        isTitle: false,
        icon: "settings",
        children: [
          {
            key: "hr-app-settings",
            label: "App Setting",
            icon:'settings',
            url: "/apps/hremploye/appsettings",
            parentKey: "apps-hr-settings",
          },
          {
            key: "hr-leave-settings",
            label: "leave Setting",
            icon:'settings',
            url: "/apps/hremploye/leavesettings",
            parentKey: "apps-hr-settings",
          },
          {
            key: "hr-Attandance-settings",
            label: "Attendance Setting",
            icon:'settings',
            url: "/apps/hremploye/attandancesettings",
            parentKey: "apps-hr-settings",
          },
          {
            key: "hr-Payroll-settings",
            label: "Payroll Setting",
            icon:'settings',
            url: "/apps/hremploye/payrollsettings",
            parentKey: "apps-hr-settings",
          },
          {
            key: "hr-import-settings",
            label: "Import",
            icon:'file',
            url: "/apps/hremploye/imports",
            parentKey: "apps-hr-settings",
          },
        ]
      },

      // horirec hori recruitment
      // {
      //   key: "apps-hr-recruitment",
      //   label: "Recruitment",
      //   isTitle: false,
      //   icon: "user-plus",
      //   children: [
      //     {
      //       key: "hr-recruitment",
      //       label: "Job Post",
      //       icon: "plus",
      //       url: "/apps/hremploye/recruitment/jobpost",
      //       parentKey: "hrm",
      //     },
      //     {
      //       key: "hr-recruitment",
      //       label: "Job Candidate",
      //       icon: "users",
      //       url: "/apps/hremploye/recruitment/jobcandidate",
      //       parentKey: "hrm",
      //     },
      //   ]
      // },

      /////////////////// horizontal horihr horirep hr reports  or HR REPORTS //////////////////////////////////
      // {
      //   key: "hr-employe-reports",
      //   label: "Reports",
      //   isTitle: false,
      //   icon: "clipboard",
      //   children: [
      //     {
      //       key: "apps-hrreports-daily",
      //       label: "Daily Attandance",
      //       icon: "user-check",
      //       url: "/apps/hremploye/hrreports/dailyattandance",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-monthly",
      //       label: "Monthly Attandance",
      //       icon: "user-check",
      //       url: "/apps/hremploye/hrreports/monthlyattandance",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-datewise",
      //       label: "Datewise Attandance",
      //       icon: "user-check",
      //       url: "/apps/hremploye/hrreports/datewiseattandance",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-training",
      //       label: "Training Report",
      //       icon: "codepen",
      //       url: "/apps/hremploye/hrreports/training_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-project",
      //       label: "Project Report",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/hrreports/project_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-task",
      //       label: "Task Report",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/hrreports/task_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-employee",
      //       label: "Employees Report",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/hrreports/employees_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-account",
      //       label: "Account Report",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/hrreports/Account_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-expense",
      //       label: "Expense Report",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/hrreports/Expense_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-desposit",
      //       label: "Deposit Report",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/hrreports/Deposit_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-transaction",
      //       label: "Transaction Report",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/hrreports/Transaction_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //     {
      //       key: "apps-hrreports-pension",
      //       label: "Pension Report",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/hrreports/Pension_report",
      //       parentKey: "hr-employe-reports",
      //     },
      //   ]
      // },

      // horiper hori performance
      // {
      //   key: "hr-performance",
      //   label: "Performance",
      //   isTitle: false,
      //   icon: "bar-chart-2",
      //   children: [
      //     {
      //       key: "hr-performance",
      //       label: "Goal Type",
      //       icon: "type",
      //       url: "/apps/hremploye/performance/goaltype",
      //       parentKey: "hr-performance",
      //     },
      //     {
      //       key: "hr-performance",
      //       label: "Goal Tracking",
      //       icon: "activity",
      //       url: "/apps/hremploye/performance/goaltracking",
      //       parentKey: "hr-performance",
      //     },
      //     {
      //       key: "hr-performance",
      //       label: "Indicator",
      //       icon: "at-sign",
      //       url: "/apps/hremploye/performance/Indicator",
      //       parentKey: "hr-performance",
      //     },
      //     {
      //       key: "hr-performance",
      //       label: "Appraisal",
      //       icon: "gift",
      //       url: "/apps/hremploye/performance/Appraisal",
      //       parentKey: "hr-performance",
      //     },
      //   ]
      // },

       // horiper hori notice
      // {
      //   key: "hr-noticeboard",
      //   label: "Notice",
      //   isTitle: false,
      //   icon: "clipboard",
      //   children: [
      //     {
      //       key: "hr-performance",
      //       label: "Notice Board",
      //       icon: "clipboard",
      //       url: "/apps/hremploye/noticeBoard",
      //       parentKey: "hrm",
      //     },
      //   ]
      // },



    ]
  },

  ///////////////////////// HORIZONTAL CRM AND PROJECTS////////////////////////////////////
  // { key: "crm", label: "", isTitle: true },
  {
    key: "hr-customers",
    label: "CR & Projects",
    isTitle: false,
    icon: "users",
    url: "/apps/admin/crprojects",
    children: [
      {
        key: "hr-projects",
        label: "Projects",
        isTitle: false,
        icon: "layers",
        children: [
          {
            key: "hr-projects",
            label: "Projects",
            icon: "layers",
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
            icon: "clipboard",
            url: "/apps/crprojects/tasks",
            parentKey: "crm",
          },
        ]
      },

      // {
      //   key: "hr-customers",
      //   label: "Customers",
      //   isTitle: false,
      //   icon: "users",
      //   children: [
      //     {
      //       key: "hr-customers",
      //       label: "Customers",
      //       icon: "users",
      //       url: "/apps/crprojects/customers",
      //       parentKey: "crm",
      //     },
      //   ]
      // },
      // {
      //   key: "hr-sales",
      //   label: "Sales",
      //   isTitle: false,
      //   icon: "trending-up",
      //   children: [
      //     {
      //       key: "hr-sales",
      //       label: "Sales",
      //       icon: "trending-up",
      //       url: "/apps/crprojects/sales",
      //       parentKey: "crm",
      //     },
      //   ]
      // },

      // {
      //   key: "hr-leads",
      //   label: "Leads",
      //   isTitle: false,
      //   icon: "user-check",
      //   children: [
      //     {
      //       key: "hr-leads",
      //       label: "Leads",
      //       icon: "user-check",
      //       url: "/apps/crprojects/leads",
      //       parentKey: "crm",
      //     },
      //   ]
      // },
      // {
      //   key: "hr-invoice",
      //   label: "Invoice",
      //   isTitle: false,
      //   icon: "check-square",
      //   children: [
      //     {
      //       key: "hr-invoice",
      //       label: "Invoice",
      //       icon: "check-square",
      //       url: "/apps/crprojects/invoice",
      //       parentKey: "crm",
      //     },
      //   ]
      // },
      // {
      //   key: "hr-proposals",
      //   label: "Proposals",
      //   isTitle: false,
      //   icon: "file-text",
      //   children: [
      //     {
      //       key: "hr-proposals",
      //       label: "Proposals",
      //       icon: "file-text",
      //       url: "/apps/crprojects/Proposals",
      //       parentKey: "crm",
      //     },
      //   ]
      // },


    ]
  },

  ////////////////////////// HORIZONTAL ADMIN ROUTES horiad/////////////////////////////////////
  // {
  //   key: "apps-admin-setup",
  //   label: "Admin",
  //   isTitle: false,
  //   icon: "settings",
  //   url: "/apps/admin/admins",
  //   children: [
  //     {
  //       key: "apps-admin-setup",
  //       label: "Setup",
  //       isTitle: false,
  //       icon: "settings",
  //       children: [
  //         {
  //           key: "admin-setup",
  //           label: "Staff",
  //           icon: "settings",
  //           url: "/apps/admin/setup",
  //           parentKey: "apps-admin",
  //         },
  //       ],
  //     },

  //     // {
  //     //   key: "apps-admin-reprots",
  //     //   label: "Reports",
  //     //   isTitle: false,
  //     //   icon: "file",
  //     //   children: [
  //     //     {
  //     //       key: "admin-reprots",
  //     //       label: "Sales",
  //     //       icon: "trending-up",
  //     //       url: "/apps/admin/reports/sales",
  //     //       parentKey: "apps-reprots",
  //     //     },
  //     //     {
  //     //       key: "admin-expences",
  //     //       label: "Expences",
  //     //       icon: "trending-down",
  //     //       url: "/apps/admin/reports/expences",
  //     //       parentKey: "apps-reprots",
  //     //     },
  //     //     {
  //     //       key: "admin-expence&income",
  //     //       label: "Expences vs Income",
  //     //       icon: "dollar-sign",
  //     //       url: "/apps/admin/reports/expence&income",
  //     //       parentKey: "apps-reprots",
  //     //     },
  //     //     {
  //     //       key: "admin-reprots",
  //     //       label: "Leads",
  //     //       icon: "users",
  //     //       url: "/apps/admin/reports/leads",
  //     //       parentKey: "apps-reprots",
  //     //     },
  //     //     {
  //     //       key: "admin-timesheet",
  //     //       label: "Timesheet Overview",
  //     //       icon: "watch",
  //     //       url: "/apps/admin/reports/timesheet",
  //     //       parentKey: "apps-reprots",
  //     //     },
  //     //   ],
  //     // },


  //     // UTILITES ROUTES
  //     // {
  //     //   key: "apps-admin-utilities",
  //     //   label: "Utilites",
  //     //   isTitle: false,
  //     //   icon: "activity",
  //     //   children: [

  //     //     {
  //     //       key: "admin-calander",
  //     //       label: "Calander",
  //     //       icon: "calendar",
  //     //       url: "/apps/admin/utilities/calander",
  //     //       parentKey: "apps-admin-utilities",
  //     //     },
  //     //     {
  //     //       key: "admin-announcement",
  //     //       label: "Announcement",
  //     //       icon: "mic",
  //     //       url: "/apps/admin/utilities/announcement",
  //     //       parentKey: "apps-admin-utilities",
  //     //     },
  //     //     {
  //     //       key: "admin-activitylog",
  //     //       label: "Activity Log",
  //     //       icon: "activity",
  //     //       url: "/apps/admin/utilities/activitylog",
  //     //       parentKey: "apps-admin-utilities",
  //     //     },
  //     //     {
  //     //       key: "admin-ticketpipe",
  //     //       label: "Ticket Pipe Log",
  //     //       icon: "flag",
  //     //       url: "/apps/admin/utilities/ticketpipe",
  //     //       parentKey: "apps-admin-utilities",
  //     //     },
  //     //     {
  //     //       key: "admin-reprots",
  //     //       label: "Media",
  //     //       url: "/apps/admin/media",
  //     //       parentKey: "apps-admin-utilities",
  //     //     },
  //     //     {
  //     //       key: "admin-utilities",
  //     //       label: "Bulk PDF Export",
  //     //       icon: "activity",
  //     //       url: "/apps/admin/utilities/bulk_pdf_exporter",
  //     //       parentKey: "apps-admin-utilities",
  //     //     },
  //     //   ],
  //     // },
  //     // KNOWLEDGE BASE ROUTES
  //     // {
  //     //   key: "apps-admin-setup",
  //     //   label: "Knowledge Base",
  //     //   isTitle: false,
  //     //   icon: "box",
  //     //   children: [
  //     //     {
  //     //       key: "apps-admin-knowledge",
  //     //       label: "Knowledge Base",
  //     //       icon: "book",
  //     //       url: "/apps/admin/knowledge",
  //     //       parentKey: "apps-admin",
  //     //     },
  //     //   ],
  //     // },

  //   ],
  // },


  // {
  //   key: "components",
  //   icon: "briefcase",
  //   label: "Components",
  //   isTitle: true,
  //   children: [
  //     {
  //       key: "ui-elements",
  //       label: "UI Elements",
  //       isTitle: false,
  //       url: "/components/ui-elements",
  //       parentKey: "components",
  //     },
  //     {
  //       key: "widgets",
  //       label: "Widgets",
  //       isTitle: false,
  //       url: "/components/widgets",
  //       parentKey: "components",
  //     },
  //     {
  //       key: "forms",
  //       label: "Forms",
  //       isTitle: false,
  //       parentKey: "components",
  //       children: [
  //         {
  //           key: "form-basic",
  //           label: "Basic Elements",
  //           url: "/forms/basic",
  //           parentKey: "forms",
  //         },
  //         {
  //           key: "form-advanced",
  //           label: "Advanced",
  //           url: "/forms/advanced",
  //           parentKey: "forms",
  //         },
  //         {
  //           key: "form-validation",
  //           label: "Validation",
  //           url: "/forms/validation",
  //           parentKey: "forms",
  //         },
  //         {
  //           key: "form-wizard",
  //           label: "Wizard",
  //           url: "/forms/wizard",
  //           parentKey: "forms",
  //         },
  //         {
  //           key: "form-editors",
  //           label: "Editors",
  //           url: "/forms/editors",
  //           parentKey: "forms",
  //         },
  //         {
  //           key: "form-upload",
  //           label: "File Uploads",
  //           url: "/forms/upload",
  //           parentKey: "forms",
  //         },
  //       ],
  //     },
  //     {
  //       key: "charts",
  //       label: "Charts",
  //       isTitle: false,
  //       url: "/components/charts",
  //       parentKey: "components",
  //     },
  //     {
  //       key: "tables",
  //       label: "Tables",
  //       isTitle: false,
  //       parentKey: "components",
  //       children: [
  //         {
  //           key: "table-basic",
  //           label: "Basic Tables",
  //           url: "/tables/basic",
  //           parentKey: "tables",
  //         },
  //         {
  //           key: "table-advanced",
  //           label: "Advanced Tables",
  //           url: "/tables/advanced",
  //           parentKey: "tables",
  //         },
  //       ],
  //     },
  //     {
  //       key: "icons",
  //       label: "Icons",
  //       isTitle: false,
  //       parentKey: "components",
  //       children: [
  //         {
  //           key: "icon-unicons",
  //           label: "Unicons",
  //           url: "/icons/unicons",
  //           parentKey: "icons",
  //         },
  //         {
  //           key: "icon-feather",
  //           label: "Feather",
  //           url: "/icons/feather",
  //           parentKey: "icons",
  //         },
  //         {
  //           key: "icon-bootstrap",
  //           label: "Bootstrap",
  //           url: "/icons/bootstrap",
  //           parentKey: "icons",
  //         },
  //       ],
  //     },
  //     {
  //       key: "maps",
  //       label: "Maps",
  //       isTitle: false,
  //       parentKey: "components",
  //       children: [
  //         {
  //           key: "maps-googlemaps",
  //           label: "Google Maps",
  //           url: "/maps/googlemaps",
  //           parentKey: "maps",
  //         },
  //         {
  //           key: "maps-vectormaps",
  //           label: "Vector Maps",
  //           url: "/maps/vectormaps",
  //           parentKey: "maps",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   key: "extra-pages",
  //   label: "Pages",
  //   isTitle: false,
  //   icon: "file-text",
  //   children: [
  //     {
  //       key: "page-starter",
  //       label: "Starter",
  //       url: "/pages/starter",
  //       parentKey: "extra-pages",
  //     },
  //     {
  //       key: "page-profile",
  //       label: "Profile",
  //       url: "/pages/profile",
  //       parentKey: "extra-pages",
  //     },
  //     {
  //       key: "page-activity",
  //       label: "Activity",
  //       url: "/pages/activity",
  //       parentKey: "extra-pages",
  //     },
  //     {
  //       key: "page-invoice",
  //       label: "Invoice",
  //       url: "/pages/invoice",
  //       parentKey: "extra-pages",
  //     },
  //     {
  //       key: "page-pricing",
  //       label: "Pricing",
  //       url: "/pages/pricing",
  //       parentKey: "extra-pages",
  //     },
  //     {
  //       key: "page-maintenance",
  //       label: "Maintenance",
  //       url: "/maintenance",
  //       target: "_blank",
  //       parentKey: "extra-pages",
  //     },
  //     {
  //       key: "page-error-404",
  //       label: "Error - 404",
  //       url: "/error-404",
  //       parentKey: "extra-pages",
  //     },
  //     {
  //       key: "page-error-500",
  //       label: "Error - 500",
  //       url: "/error-500",
  //       parentKey: "extra-pages",
  //     },
  //   ],
  // },
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
      // {
      //   key: "apps-projects",
      //   label: "Projects",
      //   isTitle: false,
      //   icon: "briefcase",
      //   parentKey: "apps",
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
      //   parentKey: "apps",
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

export { MENU_ITEMS, TWO_COl_MENU_ITEMS, HORIZONTAL_MENU_ITEMS, HORIZONTAL_EMP_MENUS };
