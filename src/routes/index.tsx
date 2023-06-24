import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";
import EmployeManagement from "../pages/HREmploye/EmployeManagement/EmployeManagement";
import LeaveManagement from "../pages/HREmploye/LeaveManagement/LeaveManagement";
import PayRoll from "../pages/HREmploye/PayRoll/PayRoll";
import Recruitment from "../pages/HREmploye/Recruitment/Recruitment";
import Performance from "../pages/HREmploye/Performance/Performance";
import Customers from "../pages/CRProjects/Customers/Customers";
import SalesCR from "../pages/CRProjects/SalesCR/SalesCR";
import ProjectsCR from "../pages/CRProjects/Projects/ProjectsCR";
import Task from "../pages/CRProjects/Task/Task";
import LeadsCR from "../pages/CRProjects/Leads/LeadsCR";
import InvoiceCR from "../pages/CRProjects/Invoice/InvoiceCR";
import ProposalCR from "../pages/CRProjects/Proposal/ProposalCR";
import Sales from "../pages/Admin/Reports/Sales/Sales";
import AddNewTask from "../pages/CRProjects/Task/AddNewTask/AddNewTask";
// import DepartmentEmp from "../pages/HREmploye/EmployeManagement/DepartmentEmp/DepartmentEmp";
import DesignationEmp from "../pages/HREmploye/EmployeManagement/DesignationEmp/DesignationEmp";

// import NewDepartment from "../pages/HREmploye/EmployeManagement/DepartmentEmp/NewDepartment";
import NewDesignation from "../pages/HREmploye/EmployeManagement/DesignationEmp/NewDesignation";
import NewBranch from "../pages/HREmploye/EmployeManagement/BranchEmp/NewBranch";
import NewWarning from "../pages/HREmploye/EmployeManagement/WarningEmp/NewWarning";
import NewTermination from "../pages/HREmploye/EmployeManagement/TerminationsEmp/NewTermination";
import NewPromotion from "../pages/HREmploye/EmployeManagement/PromotionsEmp/NewPromotion";
import AwardCoreHR from "../pages/HREmploye/CoreHR/Award/AwardCoreHR";
import TravelCoreHR from "../pages/HREmploye/CoreHR/TravelCoreHR/TravelCoreHR";
import TransferCoreHR from "../pages/HREmploye/CoreHR/TransferCoreHR/TransferCoreHR";
import RegistrationCoreHR from "../pages/HREmploye/CoreHR/RegistrationCoreHR/RegistrationCoreHR";
import ComplaintsCoreHR from "../pages/HREmploye/CoreHR/ComplaintsCoreHR/ComplaintsCoreHR";
import NewAward from "../pages/HREmploye/CoreHR/Award/NewAward";
import NewTravelCoreHR from "../pages/HREmploye/CoreHR/TravelCoreHR/NewTravelCoreHR";
import NewTransferCoreHR from "../pages/HREmploye/CoreHR/TransferCoreHR/NewTransferCoreHR";
import NewRegistrationsCoreHR from "../pages/HREmploye/CoreHR/RegistrationCoreHR/NewRegistrationsCoreHR";
import NewComplaintsCoreHR from "../pages/HREmploye/CoreHR/ComplaintsCoreHR/NewComplaintsCoreHR";
import EmployePermanentEmp from "../pages/HREmploye/EmployeManagement/EmployePermanentEmp/EmployePermanentEmp";
import CalendarHrEmp from "../pages/HREmploye/CalendarHrEmp/CalendarHrEmp";
import Admin from "../pages/Admin/Admin";
import ManageHoliday from "../pages/HREmploye/LeaveManagement/ManageHoliday/ManageHoliday";
import PublicHoliday from "../pages/HREmploye/LeaveManagement/PublicHoliday/PublicHoliday";
import WeeklyHoliday from "../pages/HREmploye/LeaveManagement/WeeklyHoliday/WeeklyHoliday";
import LeaveTypeHoliday from "../pages/HREmploye/LeaveManagement/LeaveTypeHoliday/LeaveTypeHoliday";
import ApplyForLeave from "../pages/HREmploye/LeaveManagement/ApplyForLeave/ApplyForLeave";
import RequestedLeave from "../pages/HREmploye/LeaveManagement/RequestedLeave/RequestedLeave";
import LeaveReportHoliday from "../pages/HREmploye/LeaveManagement/LeaveReportHoliday/LeaveReportHoliday";
import SummaryReportHoliday from "../pages/HREmploye/LeaveManagement/SummaryReportHoliday/SummaryReportHoliday";
import MyLeaveReportHoliday from "../pages/HREmploye/LeaveManagement/MyLeaveReportHoliday/MyLeaveReportHoliday";
import NewManageHoliday from "../pages/HREmploye/LeaveManagement/ManageHoliday/NewManageHoliday";
import NewPublicHoliday from "../pages/HREmploye/LeaveManagement/PublicHoliday/NewPublicHoliday";
import NewWeeklyHoliday from "../pages/HREmploye/LeaveManagement/WeeklyHoliday/NewWeeklyHoliday";
import NewLeaveTypeHoliday from "../pages/HREmploye/LeaveManagement/LeaveTypeHoliday/NewLeaveTypeHoliday";
import NewApplyForLeave from "../pages/HREmploye/LeaveManagement/ApplyForLeave/NewApplyForLeave";
import AddHolidayCal from "../pages/HREmploye/CalendarHrEmp/AddHolidayCal";
import LeaveReqestCa from "../pages/HREmploye/CalendarHrEmp/LeaveReqestCa";
import TravelRequest from "../pages/HREmploye/CalendarHrEmp/TravelRequest";
import TrainingCal from "../pages/HREmploye/CalendarHrEmp/TrainingCal";
import ProjectsCal from "../pages/HREmploye/CalendarHrEmp/ProjectsCal";
import TaskCal from "../pages/HREmploye/CalendarHrEmp/TaskCal";
import EventsCal from "../pages/HREmploye/CalendarHrEmp/EventsCal";
import Meetings from "../pages/HREmploye/CalendarHrEmp/Meetings";
import DailyAttandanceReport from "../pages/HREmploye/HRReports/DailyAttandanceReport/DailyAttandanceReport";
import MonthWiseReports from "../pages/HREmploye/HRReports/MonthWiseReports/MonthWiseReports";
import DateWiseReports from "../pages/HREmploye/HRReports/DateWiseReports/DateWiseReports";
import TrainingReports from "../pages/HREmploye/HRReports/TrainingReports/TrainingReports";
import ProjectReports from "../pages/HREmploye/HRReports/ProjectReports/ProjectReports";
import TaskReports from "../pages/HREmploye/HRReports/TaskReports/TaskReports";
import EmployeesReports from "../pages/HREmploye/HRReports/EmployeesReports/EmployeesReports";
import AccountReports from "../pages/HREmploye/HRReports/AccountReports/AccountReports";
import ExpenseReports from "../pages/HREmploye/HRReports/ExpenseReports/ExpenseReports";
import DepositReports from "../pages/HREmploye/HRReports/DepositReports/DepositReports";
import TransactionReports from "../pages/HREmploye/HRReports/TransactionReports/TransactionReports";
import PensionReports from "../pages/HREmploye/HRReports/PensionReports/PensionReports";
import GoalTypePer from "../pages/HREmploye/Performance/GoalTypePer/GoalTypePer";
import GoalTrackingPer from "../pages/HREmploye/Performance/GoalTrackingPer/GoalTrackingPer";
import IndicatorPer from "../pages/HREmploye/Performance/IndicatorPer/IndicatorPer";
import AppraisalPer from "../pages/HREmploye/Performance/AppraisalPer/AppraisalPer";
import NewGoalTypePer from "../pages/HREmploye/Performance/GoalTypePer/NewGoalTypePer";
import NewGoalTrackingPer from "../pages/HREmploye/Performance/GoalTrackingPer/NewGoalTrackingPer";
import NewIndicatorPer from "../pages/HREmploye/Performance/IndicatorPer/NewIndicatorPer";
import NewAppraisalPer from "../pages/HREmploye/Performance/AppraisalPer/NewAppraisalPer";
import NewManageEmp from "../pages/HREmploye/EmployeManagement/ManageEmp/NewManageEmp";
import NewHourlyPayGradeRoll from "../pages/HREmploye/PayRoll/HourlyPayGradeRoll/NewHourlyPayGradeRoll";
import NewGenarateSalarySheetRoll from "../pages/HREmploye/PayRoll/GenarateSalarySheetRoll/NewGenarateSalarySheetRoll";
import AddNewProjects from "../pages/CRProjects/Projects/AddNewProjects";
import UpdateTask from "../pages/CRProjects/Task/UpdateTask/UpdateTask";
import UpdateProject from "../pages/CRProjects/Projects/UpdateProject/UpdateProject";
import WorkShift from "../pages/Admin/WorkShit/WorkShift";
import WorkingDays from "../pages/Admin/WorkingDays/WorkingDays";
import Weekends from "../pages/Admin/Weekends/Weekends";
import LoginNew from "../pages/auth/LoginNew";
import EmpAttandanceGive from "../pages/Employee/EmpAttandanceGive/EmpAttandanceGive";
import UpdateEmpInfo from "../pages/Employee/UpdateEmpInfo/UpdateEmpInfo";
import EmpCheckAssignedTask from "../pages/Employee/EmpCheckAssignedTask/EmpCheckAssignedTask";
import EmpCheckCompleteTask from "../pages/Employee/EmpCheckCompleteTask/EmpCheckCompleteTask";
import EmpLeaveReq from "../pages/Employee/EmpLeaveReq/EmpLeaveReq";
import EmpLeadCreate from "../pages/Employee/EmpLeadCreate/EmpLeadCreate";
import EmpCreateTask from "../pages/Employee/EmpCreateTask/EmpCreateTask";
import EmpNewLeads from "../pages/Employee/EmpLeadCreate/EmpNewLeads";
import EmpNewleaveReq from "../pages/Employee/EmpLeaveReq/EmpNewleaveReq";
import EmpAissignNewTask from "../pages/Employee/EmpCheckAssignedTask/EmpAissignNewTask";
import Employee from "../pages/Employee/Employee";
import EmpCheckAttandance from "../pages/Employee/EmpCheckAttandance/EmpCheckAttandance";
import EmpViewTask from "../pages/Employee/EmpCheckAssignedTask/EmpViewTask";
import EmpcheckCreatedTask from "../pages/Employee/EmpcheckCreatedTask/EmpcheckCreatedTask";
import EmpTaskUpdate from "../pages/Employee/EmpTaskUpdate/EmpTaskUpdate";
import CloudBaseAuth from "../pages/AttendantManage/CloudBaseAuth/CloudBaseAuth";
import FaceAndBackData from "../pages/AttendantManage/FaceAndBackData/FaceAndBackData";
import AllEmployee from "../pages/HREmploye/AllEmployee/AllEmployee";
import EmpHRstatus from "../pages/HREmploye/EmployeManagement/EmpHRstatus/EmpHRstatus";
import LeaveStatus from "../pages/HREmploye/LeaveManagement/LeaveStatus/LeaveStatus";
import LeaveRequest from "../pages/HREmploye/LeaveManagement/LeaveRequest/LeaveRequest";
import AttandanceDailylog from "../pages/HREmploye/HRAttandance/AttandanceDailylog/AttandanceDailylog";
import AttandanceRequest from "../pages/HREmploye/HRAttandance/AttandanceRequest/AttandanceRequest";
import AttandanceDetails from "../pages/HREmploye/HRAttandance/AttandanceDetails/AttandanceDetails";
import AttandanceSummary from "../pages/HREmploye/HRAttandance/AttandanceSummary/AttandanceSummary";
import Payrun from "../pages/HREmploye/PayRoll/Payrun/Payrun";
import Payslip from "../pages/HREmploye/PayRoll/Payslip/Payslip";
import Summary from "../pages/HREmploye/PayRoll/Summary/Summary";
import BeneficiaryBadge from "../pages/HREmploye/PayRoll/BeneficiaryBadge/BeneficiaryBadge";
import UserAndRoles from "../pages/HREmploye/Administrations/UserAndRoles/UserAndRoles";
import ShiftsAndOthers from "../pages/HREmploye/Administrations/ShiftsAndOthers/ShiftsAndOthers";
import AdminAnnouncements from "../pages/HREmploye/Administrations/AdminAnnouncements/AdminAnnouncements";
import UpdateUserRole from "../pages/HREmploye/Administrations/UserAndRoles/UpdateUserRole";
import DepartmentEmp from "../pages/HREmploye/Administrations/DepartmentEmp/DepartmentEmp";
import NewDepartment from "../pages/HREmploye/Administrations/DepartmentEmp/NewDepartment";
import AssetsHR from "../pages/HREmploye/AssetsHR/AssetsHR";
import AppSettings from "../pages/HREmploye/SettingsHR/AppSettings/AppSettings";
import LeaveSettings from "../pages/HREmploye/SettingsHR/LeaveSettings/LeaveSettings";
import AttandanceSettings from "../pages/HREmploye/SettingsHR/AttandanceSettings/AttandanceSettings";
import PayrollSettings from "../pages/HREmploye/SettingsHR/PayrollSettings/PayrollSettings";
import ImportSettings from "../pages/HREmploye/SettingsHR/ImportSettings/ImportSettings";
import Jobdesk from "../pages/HREmploye/Jobdesk/Jobdesk";
import ViewSingleemp from "../pages/HREmploye/AllEmployee/ViewSingleemp";
import PayrunEdit from "../pages/HREmploye/PayRoll/Payrun/PayrunEdit";
import UpdateSingleEmployee from "../pages/HREmploye/AllEmployee/UpdateSingleEmployee";

const ManageWorkHourRoll = React.lazy(() => import("../pages/HREmploye/PayRoll/ManageWorkHourRoll/ManageWorkHourRoll"))
const ManageBonusRoll = React.lazy(() => import("../pages/HREmploye/PayRoll/ManageBonusRoll/ManageBonusRoll"))
const NewAllowanceRoll = React.lazy(() => import("../pages/HREmploye/PayRoll/Allowance/NewAllowanceRoll"))
const NewDeductionRoll = React.lazy(() => import("../pages/HREmploye/PayRoll/DeductionPayRoll/NewDeductionRoll"))
const NewMonthlyPayGrade = React.lazy(() => import("../pages/HREmploye/PayRoll/MonthlyPayGradeRoll/NewMonthlyPayGrade"))
const AttandanceEmp = React.lazy(() => import("../pages/HREmploye/AttandanceEmp/AttandanceEmp"))
const CRProjects = React.lazy(() => import("../pages/CRProjects/CRProjects"))
const HREmployee = React.lazy(() => import("../pages/HREmploye/HREmployee"))
// import CRProjects from "../pages/CRProjects/CRProjects";

// import Calander from "../pages/Admin/Utilities/Calander/Calander";

// ATTANDANCE MANAGEMENT ROUTES
// const CloudBaseAuth = React.lazy(() => import("../pages/AttendantManage/CloudBaseAuth/CloudBaseAuth"));
// const FaceAndBackData = React.lazy(() => import("../pages/AttendantManage/FaceAndBackData/FaceAndBackData"));

// import Root from "./Root";

///////////////////// ADMIN ROUTES/////////////////////////////

// staff
const Staff = React.lazy(() => import("../pages/Admin/Setup/Staff/Staff"));
const AddStaff = React.lazy(() => import("../pages/Admin/Setup/Staff/AddStaff/AddStaff"));
const ViewStaff = React.lazy(() => import("../pages/Admin/Setup/Staff/ViewStaff/ViewStaff"));

// reports
// const Sales = React.lazy(() => import("../pages/Admin/Reports/Reports"));
const Leads = React.lazy(() => import("../pages/Admin/Reports/Leads/Leads"));
const ExpenceIncome = React.lazy(() => import("../pages/Admin/Reports/ExpenceIncome/ExpenceIncome"));
const TimesheetOverview = React.lazy(() => import("../pages/Admin/Reports/TimesheetOverview/TimesheetOverview"));
const Expences = React.lazy(() => import("../pages/Admin/Reports/Expences/Expences"));
const DetailedReport = React.lazy(() => import("../pages/Admin/Reports/Expences/DetailedReport/DetailedReport"));

// utilities
const BulkPdfExport = React.lazy(() => import("../pages/Admin/Utilities/BulkPdfExport/BulkPdfExport"));
const Announcement = React.lazy(() => import("../pages/Admin/Utilities/Announcement/Announcement"));
const ActivityLog = React.lazy(() => import("../pages/Admin/Utilities/ActivityLog/ActivityLog"));
const TicketPipeLog = React.lazy(() => import("../pages/Admin/Utilities/TicketPipeLog/TicketPipeLog"));
const NewAnnouncement = React.lazy(() => import("../pages/Admin/Utilities/Announcement/NewAnnouncement"));

// knowledge base
const KnowledgeBase = React.lazy(() => import("../pages/Admin/KnowledgeBase/KnowledgeBase"));
const NewArticle = React.lazy(() => import("../pages/Admin/KnowledgeBase/NewArticle/NewArticle"));

// lazy load all the views

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
// const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

// landing
const Landing = React.lazy(() => import("../pages/landing/"));

// dashboard
const EcommerceDashboard = React.lazy(
  () => import("../pages/dashboard/Ecommerce/")
);
const AnalyticsDashboard = React.lazy(
  () => import("../pages/dashboard/Analytics/")
);

// apps
const CalendarApp = React.lazy(() => import("../pages/apps/Calendar/"));
const Projects = React.lazy(() => import("../pages/apps/Projects/"));
const ProjectDetail = React.lazy(
  () => import("../pages/apps/Projects/Detail/")
);
// - chat
const ChatApp = React.lazy(() => import("../pages/apps/Chat/"));
// - email
const Inbox = React.lazy(() => import("../pages/apps/Email/Inbox"));
const EmailDetail = React.lazy(() => import("../pages/apps/Email/Detail"));
const EmailCompose = React.lazy(() => import("../pages/apps/Email/Compose"));
// - tasks
const TaskList = React.lazy(() => import("../pages/apps/Tasks/List/"));
const Kanban = React.lazy(() => import("../pages/apps/Tasks/Board/"));
// - file
const FileManager = React.lazy(() => import("../pages/apps/FileManager"));

// extra pages
const Error404 = React.lazy(() => import("../pages/error/Error404"));
const Error500 = React.lazy(() => import("../pages/error/Error500"));
// -other
const Starter = React.lazy(() => import("../pages/other/Starter"));
const Profile = React.lazy(() => import("../pages/other/Profile"));
const Activity = React.lazy(() => import("../pages/other/Activity"));
const Invoice = React.lazy(() => import("../pages/other/Invoice"));
const Maintenance = React.lazy(() => import("../pages/other/Maintenance"));
const Pricing = React.lazy(() => import("../pages/other/Pricing"));

// uikit
const UIElements = React.lazy(() => import("../pages/uikit"));

// widgets
const Widgets = React.lazy(() => import("../pages/widgets/"));

// icons
const Unicons = React.lazy(() => import("../pages/icons/Unicons"));
const FeatherIcons = React.lazy(() => import("../pages/icons/Feather/"));
const BootstrapIcon = React.lazy(() => import("../pages/icons/Bootstrap/"));

// forms
const BasicForms = React.lazy(() => import("../pages/forms/Basic"));
const FormAdvanced = React.lazy(() => import("../pages/forms/Advanced"));
// const FormValidation = React.lazy(() => import("../pages/forms/Validation"));
const FormWizard = React.lazy(() => import("../pages/forms/Wizard"));
const FileUpload = React.lazy(() => import("../pages/forms/FileUpload"));
const Editors = React.lazy(() => import("../pages/forms/Editors"));

// charts
const Charts = React.lazy(() => import("../pages/charts/"));

// tables
const BasicTables = React.lazy(() => import("../pages/tables/Basic"));
const AdvancedTables = React.lazy(() => import("../pages/tables/Advanced"));

// maps
const GoogleMaps = React.lazy(() => import("../pages/maps/GoogleMaps"));
const VectorMaps = React.lazy(() => import("../pages/maps/VectorMaps"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/dashboard",
  name: "Dashboards",
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/",
      name: "Root",
      element: <Navigate to="/dashboard/analytics" />,
      route: PrivateRoute,
    },
    // {
    //   path: "/dashboard/ecommerce",
    //   name: "Ecommerce",
    //   element: <EcommerceDashboard />,
    //   route: PrivateRoute,
    // },
    {
      path: "/dashboard/analytics",
      name: "Analytics",
      element: <AnalyticsDashboard />,
      route: PrivateRoute,
    },
  ],
};

const calendarAppRoutes: RoutesProps = {
  path: "/apps/calendar",
  name: "Calendar",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "calendar",
  element: <CalendarApp />,
  header: "Apps",
};

const chatAppRoutes: RoutesProps = {
  path: "/apps/chat",
  name: "Chat",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "message-square",
  element: <ChatApp />,
};

const emailAppRoutes: RoutesProps = {
  path: "/apps/email",
  name: "Email",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "mail",
  children: [
    {
      path: "/apps/email/inbox",
      name: "Inbox",
      element: <Inbox />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/details",
      name: "Email Details",
      element: <EmailDetail />,
      route: PrivateRoute,
    },
    {
      path: "/apps/email/compose",
      name: "Compose Email",
      element: <EmailCompose />,
      route: PrivateRoute,
    },
  ],
};

// const projectAppRoutes: RoutesProps = {
//   path: "/apps/projects",
//   name: "Projects",
//   route: PrivateRoute,
//   roles: ["Admin"],
//   icon: "uil-briefcase",

//   children: [
//     {
//       path: "/apps/projects/list",
//       name: "List",
//       element: <Projects />,
//       route: PrivateRoute,
//     },
//     {
//       path: "/apps/projects/details",
//       name: "Detail",
//       element: <ProjectDetail />,
//       route: PrivateRoute,
//     },
//   ],
// };

const fileAppRoutes: RoutesProps = {
  path: "/apps/file-manager",
  name: "File Manager",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "folder-plus",
  element: <FileManager />,
};

// ATTENDANCE MANAGEMENT ROUTES
const attendanceRoutes: RoutesProps = {
  path: "/apps/attandance",
  name: "Attendance",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "clipboard",
  children: [
    {
      path: "/apps/cloud/management",
      name: "Cloud Management",
      element: <CloudBaseAuth />,
      route: PrivateRoute,
    },
    {
      path: "/apps/cloud/facerecognition",
      name: "Face Recognition",
      element: <FaceAndBackData />,
      route: PrivateRoute,
    },
  ],
};

///////////////// job desk //////////////////////
const jobDesk: RoutesProps = {
  path: "/apps/admin",
  name: "Job Desk",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "user",
  children: [
    {
      path: "/apps/hremploye/jobdesk",
      name: "Job Desk",
      element: <Jobdesk />,
      route: PrivateRoute,
    },
  ],
};

// const taskAppRoutes: RoutesProps = {
//   path: "/apps/tasks",
//   name: "Tasks",
//   route: PrivateRoute,
//   roles: ["Admin"],
//   icon: "clipboard",
//   children: [
//     {
//       path: "/apps/tasks/list",
//       name: "Task List",
//       element: <TaskList />,
//       route: PrivateRoute,
//     },
//     {
//       path: "/apps/tasks/kanban",
//       name: "Kanban",
//       element: <Kanban />,
//       route: PrivateRoute,
//     },
//   ],
// };


/////////////// ADMIN MANAGEMENT ROUTES //////////////////////////////////


// SETUP ROUTES stafff


const setupRoutes: RoutesProps = {
  path: "/apps/admin",
  name: "Setup",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "settings",
  children: [
    {
      path: "/apps/admin/setup",
      name: "Setup",
      element: <Staff />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/setup/shift",
      name: "Work Shift",
      element: <WorkShift />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/setup/days",
      name: "Working Days",
      element: <WorkingDays />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/setup/weekends",
      name: "Weekends",
      element: <Weekends />,
      route: PrivateRoute,
    },
  ],
};

const addstaff: RoutesProps = {
  path: "/apps/admin/setup/addstaff",
  name: "Add Staff",
  route: PrivateRoute,
  roles: ["Admin"],
  // icon: "folder-plus",
  element: <AddStaff />,
};
const UpdateUserroles: RoutesProps = {
  path: "/apps/admin/setup/viewStaff/:id",
  name: "View Staff",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <UpdateUserRole />,
};

// reports routes
// chart options
export interface Point {
  x: number;
  y: number;
}
export interface ApexLinearChartData {
  [key: string]: number[] | Point[] | [number, number][];
}
const lineChartWithData: ApexLinearChartData = {
  data1: [28, 29, 33, 36, 32, 32, 33],
  data2: [12, 11, 14, 18, 17, 13, 13],
};

// leads data
const basicBarChartData: ApexLinearChartData = {
  data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
};

const reportsRoutes: RoutesProps = {
  path: "/apps/admin",
  name: "Reprots",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "file",
  children: [
    {
      path: "/apps/admin/reports/sales",
      name: "Sales",
      element: <Sales />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/reports/expences",
      name: "Expences",
      element: <Expences />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/reports/expence&income",
      name: "Expence vs Income",
      element: <ExpenceIncome lineChartWithData={lineChartWithData} />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/reports/leads",
      name: "Leads",
      element: <Leads basicBarChartData={basicBarChartData} />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/reports/timesheet",
      name: "Timesheet Overview",
      element: <TimesheetOverview />,
      route: PrivateRoute,
    },

  ],
};
const ReportDetailedExpence: RoutesProps = {
  path: "/apps/admin/reports/expences/detailed",
  name: "Detailed Expences",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <DetailedReport />,
};
// utilities routes
const utilitiessRoutes: RoutesProps = {
  path: "/apps/admin",
  name: "Reprots",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "activity",
  children: [
    {
      path: "/apps/admin/utilities/bulk_pdf_exporter",
      name: "Bulk PDF Export",
      element: <BulkPdfExport />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/utilities/calander",
      name: "Calander",
      element: <CalendarApp />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/utilities/announcement",
      name: "Announcement",
      element: <Announcement />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/utilities/activitylog",
      name: "Activity Log",
      element: <ActivityLog />,
      route: PrivateRoute,
    },
    {
      path: "/apps/admin/utilities/ticketpipe",
      name: "Ticket Pipe Log",
      element: <TicketPipeLog />,
      route: PrivateRoute,
    },
  ],
};
const newNewAnnouncement: RoutesProps = {
  path: "/apps/admin/utilities/newannouncement",
  name: "Knowledge New Article",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewAnnouncement />,
};

// knowledge base routes
const knowledgesRoutes: RoutesProps = {
  // path: "/apps/admin",
  name: "knowlege",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "box",
  path: "/apps/admin/knowledge",
  element: <KnowledgeBase />,
};

// hr calander ////////////////////////////

// const hrCalendarEmp: RoutesProps = {
//   name: "HR Calendar",
//   route: PrivateRoute,
//   roles: ["Admin"],
//   icon: "calendar",
//   path: "/apps/hremploye/calander",
//   element: <CalendarHrEmp />,
// };


const knowledgeNewArticle: RoutesProps = {
  path: "/apps/admin/knowledge/newarticle",
  name: "Knowledge New Article",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewArticle />,
};
const attandanceEmp: RoutesProps = {
  path: "/apps/hremploye/Attandance",
  name: "Attandance",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <AttandanceEmp />,
};

/////// HR AND EMPLOYE /////////
const hrEmployeeManage: RoutesProps = {
  path: "/apps/admin",
  name: "Employee Manage",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "activity",
  children: [
   
    {
      path: "/apps/hremploye/Designation",
      name: "Designation",
      icon: "trending-up",
      element: <DesignationEmp />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/allemployees",
      name: "All Employees",
      icon: "trending-up",
      element: <AllEmployee />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/empstatus",
      name: "Employment Status",
      icon: "trending-up",
      element: <EmpHRstatus />,
      route: PrivateRoute,
    },
    // {
    //   path: "/apps/hremploye/departmen",
    //   name: "Departmen",
    //         icon:"trending-up",
    //   element: <DepartmentEmp />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/Branch",
    //   name: "Branch",
    //   icon: "plus-square",
    //   element: <BranchEmp />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/manageemploye",
    //   name: "Manage Employe",
    //   icon: "settings",
    //   element: <ManageEmp />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/Warning",
    //   name: "Warning",
    //   icon: "sheild",
    //   element: <WarningEmp />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/Termination",
    //   name: "Termination",
    //   icon: "sheild",
    //   element: <TerminationsEmp />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/Promotions",
    //   name: "Promotions",
    //   icon: "trending-up",
    //   element: <PromotionsEmp />,
    //   route: PrivateRoute,
    // },
   
    // {
    //   path: "/apps/hremploye/employePermananent",
    //   name: "Emp.Permanent",
    //   icon: "plus",
    //   element: <EmployePermanentEmp />,
    //   route: PrivateRoute,
    // },
  ]
}

///////////////// hr settings //////////////////
const hrsettings: RoutesProps = {
  path: "/apps/admin",
  name: "Settings",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "activity",
  children: [
   
    {
      path: "/apps/hremploye/appsettings",
      name: "App Setting",
      icon: "trending-up",
      element: <AppSettings />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/leavesettings",
      name: "leave Setting",
      icon: "trending-up",
      element: <LeaveSettings />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/attandancesettings",
      name: "Attendance Setting",
      icon: "trending-up",
      element: <AttandanceSettings />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/payrollsettings",
      name: "Payroll Setting",
      icon: "plus-square",
      element: <PayrollSettings />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/imports",
      name: "Import",
      icon: "settings",
      element: <ImportSettings />,
      route: PrivateRoute,
    },
  ]
}

///////////////// hr assets //////////////////
const Assetshr: RoutesProps = {
  path: "/apps/hremploye/assets",
  name: "Assets",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <AssetsHR/>,
};
// INNER ROUTES ADD NEW DEAPRTMENT 

const addNewDepartment: RoutesProps = {
  path: "/hremploye/departmen/addnew",
  name: "Add Department",
  route: PrivateRoute,
  roles: ["Admin"],
  // icon: "folder-plus",
  element: <NewDepartment/>,
};
const addNewDesignation: RoutesProps = {
  path: "/apps/hremploye/Designation/addnew",
  name: "Add Designaion",
  route: PrivateRoute,
  roles: ["Admin"],
  // icon: "folder-plus",
  element: <NewDesignation />,
};
const addNewBranch: RoutesProps = {
  path: "/apps/hremploye/Branch/addnew",
  name: "Add Branch",
  route: PrivateRoute,
  roles: ["Admin"],
  // icon: "folder-plus",
  element: <NewBranch />,
};
const addNewWarning: RoutesProps = {
  path: "/apps/hremploye/Warning/addnew",
  name: "Add Warning",
  route: PrivateRoute,
  roles: ["Admin"],
  // icon: "folder-plus",
  element: <NewWarning />,
};
const addNewTermination: RoutesProps = {
  path: "/apps/hremploye/Termination/addnew",
  name: "Add Termination",
  route: PrivateRoute,
  roles: ["Admin"],
  // icon: "folder-plus",
  element: <NewTermination />,
};
const addNewPromotion: RoutesProps = {
  path: "/apps/hremploye/Promotions/addnew",
  name: "Add Promotion",
  route: PrivateRoute,
  roles: ["Admin"],
  // icon: "folder-plus",
  element: <NewPromotion />,
};

const addNewNewAllowanceRoll: RoutesProps = {
  path: "/apps/hremploye/payroll/Allowance/addnew",
  name: "Add Allowance",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewAllowanceRoll />,
};
const addNewNewDeductionRoll: RoutesProps = {
  path: "/apps/hremploye/payroll/Deduction/addnew",
  name: "Add Deduction",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewDeductionRoll />,
};
const addNewMonthPayGradeRoll: RoutesProps = {
  path: "/apps/hremploye/payroll/monthlypaygrade/addnew",
  name: "Add Pay Grade",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewMonthlyPayGrade />,
};
const addNewAward: RoutesProps = {
  path: "/apps/hremploye/corehr/Award/addnew",
  name: "Add New Award",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewAward />,
};
const addNewTravel: RoutesProps = {
  path: "/apps/hremploye/corehr/Travel/addnew",
  name: "Add New Travel",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewTravelCoreHR />,
};
const addNewTransfer: RoutesProps = {
  path: "/apps/hremploye/corehr/Transfer/addnew",
  name: "Add New Travel",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewTransferCoreHR />,
};
const addNewRegistration: RoutesProps = {
  path: "/apps/hremploye/corehr/Registration/addnew",
  name: "Add New Registration",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewRegistrationsCoreHR />,
};
const addNewComplaints: RoutesProps = {
  path: "/apps/hremploye/corehr/Complaints/addnew",
  name: "Add New Complaints",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewComplaintsCoreHR />,
};
const addNewHoliday: RoutesProps = {
  path: "/apps/hremploye/holidy_management/addnew",
  name: "Add New Holiday",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewManageHoliday />,
};
const addNewPublickHoliday: RoutesProps = {
  path: "/apps/hremploye/public_management/addnew",
  name: "Add Public Holiday",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewPublicHoliday />,
};
const addNewWeeklyHoliday: RoutesProps = {
  path: "/apps/hremploye/Weekly_management/addnew",
  name: "Add Weekly Holiday",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewWeeklyHoliday />,
};
const addNewLeaveTypeHoliday: RoutesProps = {
  path: "/apps/hremploye/Leave_management/addnew",
  name: "Add Leave Type",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewLeaveTypeHoliday />,
};
const addNewApplyForLeave: RoutesProps = {
  path: "/apps/hremploye/applyleave_management/addnew",
  name: "Add Apply leave",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewApplyForLeave />,
};
const addNewHolidayCal: RoutesProps = {
  path: "/apps/hremploye/calander/addholiday",
  name: "Add Calendar Holiday",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <AddHolidayCal />,
};
const addNewLeaveReqCal: RoutesProps = {
  path: "/apps/hremploye/calander/leaverequest",
  name: "Add Leave Request",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <LeaveReqestCa />,
};
const addNewTravelReqCal: RoutesProps = {
  path: "/apps/hremploye/calander/travelrequest",
  name: "Add Travel Request",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <TravelRequest />,
};
const addNewTrainingCal: RoutesProps = {
  path: "/apps/hremploye/calander/addtrainings",
  name: "Add Training",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <TrainingCal />,
};
const addNewProjecCal: RoutesProps = {
  path: "/apps/hremploye/calander/addprojects",
  name: "Add Projects",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <ProjectsCal />,
};
const addNewTaskCal: RoutesProps = {
  path: "/apps/hremploye/calander/addtasks",
  name: "Add Tasks",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <TaskCal />,
};
const addNewEventsCal: RoutesProps = {
  path: "/apps/hremploye/calander/addevents",
  name: "Add Events",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <EventsCal />,
};
const addNewMeetingsCal: RoutesProps = {
  path: "/apps/hremploye/calander/addmeetings",
  name: "Add Meeting",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <Meetings />,
};
const addNewGoalTypePer: RoutesProps = {
  path: "/apps/hremploye/performance/goaltype/addnew",
  name: "Add New Type",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewGoalTypePer />,
};
const addNewGoalTrackingPer: RoutesProps = {
  path: "/apps/hremploye/performance/goaltracking/addnew",
  name: "Add New Track",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewGoalTrackingPer />,
};
const addNewIndicatorPer: RoutesProps = {
  path: "/apps/hremploye/performance/Indicator/addnew",
  name: "Add Indicator",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewIndicatorPer />,
};
const addNewAppraisalPer: RoutesProps = {
  path: "/apps/hremploye/performance/appraisal/addnew",
  name: "Add Appraisal",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewAppraisalPer />,
};
const addNewManageEmp: RoutesProps = {
  path: "/apps/hremploye/manageemploye/addnew",
  name: "Add Employee",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewManageEmp />,
};
const addNewHourlyPayGradeRoll: RoutesProps = {
  path: "/apps/hremploye/payroll/hourlypaygrade/addnew",
  name: "Add Hourly Pay",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewHourlyPayGradeRoll />,
};
const addNewGenarateSalarySheetRoll: RoutesProps = {
  path: "/apps/hremploye/payroll/salarysheet/addnew",
  name: "Add Sheet",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <NewGenarateSalarySheetRoll />,
};
const AddNewprojects: RoutesProps = {
  path: "/apps/crprojects/projects/addnew",
  name: "Add Project",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <AddNewProjects />,
};
const Updatetask: RoutesProps = {
  path: "/apps/crprojects/tasks/update/:id",
  name: "Add Project",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <UpdateTask />,
};
const Updateproject: RoutesProps = {
  path: "/apps/crprojects/projects/update/:id",
  name: "Add Project",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <UpdateProject />,
};

const viewsingleEmp: RoutesProps = {
  path: "/apps/hremploye/singleview",
  name: "View Single",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <ViewSingleemp />,
};



const hremploye: RoutesProps = {
  path: "/apps/admin/hremployee",
  name: "HR & Employe",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <HREmployee />,
};
const crprojects: RoutesProps = {
  path: "/apps/admin/crprojects",
  name: "CR & Projects",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <CRProjects />,
};
const AdmiHorizontal: RoutesProps = {
  path: "/apps/admin/admins",
  name: "Admin",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <Admin />,
};






////////////////////// leave management //////////////////////
const leaveManage: RoutesProps = {
  path: "/apps/admin",
  name: "Leave Manage",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "activity",
  children: [
    {
      path: "/apps/hremploye/leavestatus",
      name: "Leave Status",
      element: <LeaveStatus />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/leaverequest",
      name: "Leave Request",
      element: <LeaveRequest />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/leavecalendar",
      name: "Calander",
      element: <CalendarHrEmp />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/summary_management",
      name: "Summary Report",
      element: <SummaryReportHoliday />,
      route: PrivateRoute,
    },


    // {
    //   path: "/apps/hremploye/holidy_management",
    //   name: "Manage Holiday",
    //   element: <ManageHoliday />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/Publick_management",
    //   name: "Public Holiday",
    //   element: <PublicHoliday />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/Weekly_management",
    //   name: "Weekly Holiday",
    //   element: <WeeklyHoliday />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/Leave_management",
    //   name: "Leave Type",
    //   element: <LeaveTypeHoliday />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/applyleave_management",
    //   name: "Apply For Leave",
    //   element: <ApplyForLeave />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/reqleave_management",
    //   name: "Requested Application",
    //   element: <RequestedLeave />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/leavereport_management",
    //   name: "Leave Report",
    //   element: <LeaveReportHoliday />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/summary_management",
    //   name: "Summary Report",
    //   element: <SummaryReportHoliday />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/myleave_management",
    //   name: "My Leave Report",
    //   element: <MyLeaveReportHoliday />,
    //   route: PrivateRoute,
    // },


  ]
}

/////////////////////////// hr attandance  ////////////////////////////////////////////////

const hrAttandance: RoutesProps = {
  path: "/apps/admin",
  name: "Attandance",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "user-check",
  children: [
    {
      path: "/apps/hremploye/dailylog",
      name: "Daily log",
      element: <AttandanceDailylog />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/attadancereq",
      name: "Attandance Request",
      element: <AttandanceRequest />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/attadancedetails",
      name: "Daily log",
      element: <AttandanceDetails />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/attandancesummary",
      name: "Summary",
      element: <AttandanceSummary />,
      route: PrivateRoute,
    },
  ]
}

/////////////////////////// core hr ////////////////////////////////////////////////
const coreHR: RoutesProps = {
  path: "/apps/admin",
  name: "Core HR",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "briefcase",
  children: [
    {
      path: "/apps/hremploye/corehr/Award",
      name: "Award",
      element: <AwardCoreHR />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/corehr/Travel",
      name: "Travel",
      element: <TravelCoreHR />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/corehr/Transfer",
      name: "Transfer",
      element: <TransferCoreHR />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/corehr/Registration",
      name: "Registration",
      element: <RegistrationCoreHR />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/corehr/Complaints",
      name: "Complaints",
      element: <ComplaintsCoreHR />,
      route: PrivateRoute,
    },

  ]
}

////////////////////////// payroll /////////////////////////////////////////
const payRoll: RoutesProps = {
  path: "/apps/admin",
  name: "Payroll",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "dollar-sign",
  children: [
    {
      path: "/apps/hremploye/payroll/payrun",
      name: "Payrun",
      element: <Payrun />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/payroll/payslip",
      name: "Payslip",
      element: <Payslip />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/payroll/summary",
      name: "Payrun",
      element: <Summary />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/payroll/badge",
      name: "Summary",
      element: <BeneficiaryBadge />,
      route: PrivateRoute,
    },


    // {
    //   path: "/apps/hremploye/payroll/setup",
    //   name: "Set Up Payroll",
    //   element: <SetupPayRoll />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/payroll/Allowance",
    //   name: "Allowance",
    //   element: <AllowancePayRoll />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/payroll/Deduction",
    //   name: "Deduction",
    //   element: <DeductionPayRoll />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/payroll/monthlypaygrade",
    //   name: "Monthly Pay Grade",
    //   element: <MonthlyPayGradeRoll />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/payroll/hourlypaygrade",
    //   name: "Hourly Pay Grade",
    //   element: <HourlyPayGradeRoll />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/payroll/salarysheet",
    //   name: "Generate Salary Sheet",
    //   element: <GenarateSalarySheetRoll />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/payroll/payreport",
    //   name: "Report",
    //   element: <ReportPayRoll />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/payroll/manageworkhour",
    //   name: "Manage Work Hour",
    //   element: <ManageWorkHourRoll />,
    //   route: PrivateRoute,
    // },
    // {
    //   path: "/apps/hremploye/payroll/managebonus",
    //   name: "Manage Bonus",
    //   element: <ManageBonusRoll />,
    //   route: PrivateRoute,
    // },


  ]
}

// ///////////////Administration adminis //////////////
const administrations: RoutesProps = {
  path: "/apps/admin",
  name: "Administration",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "user-plus",
  children: [
    {
      path: "/apps/hremploye/administration/roles",
      name: "Users & Roles",
      element: <UserAndRoles />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/administration/shiftsothers",
      name: "Work shift & Others",
      element: <ShiftsAndOthers />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/administration/announcements",
      name: "Announcements",
      element: <AdminAnnouncements />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/departmen",
      name: "Department",
      icon: "clipboard",
      element: <DepartmentEmp/>,
      route: PrivateRoute,
    },
  ]
}

// const recruitment: RoutesProps = {
//   path: "/apps/admin",
//   name: "Recruitment",
//   route: PrivateRoute,
//   roles: ["Admin"],
//   icon: "user-plus",
//   children: [
//     {
//       path: "/apps/hremploye/recruitment/jobpost",
//       name: "Job Post",
//       element: <JobpostEmp />,
//       route: PrivateRoute,
//     },
//     {
//       path: "/apps/hremploye/recruitment/jobcandidate",
//       name: "Job Candidate",
//       element: <JobcandidateEmp />,
//       route: PrivateRoute,
//     },
//   ]
// }

const HRReports: RoutesProps = {
  path: "/apps/admin",
  name: "HR Reports",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "user-plus",
  children: [
    {
      path: "/apps/hremploye/hrreports/dailyattandance",
      name: "Daily Attandance",
      element: <DailyAttandanceReport />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/monthlyattandance",
      name: "Monthly Attandance",
      element: <MonthWiseReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/datewiseattandance",
      name: "Datewise Attandance",
      element: <DateWiseReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/training_report",
      name: "Training Report",
      element: <TrainingReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/project_report",
      name: "Project Report",
      element: <ProjectReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/task_report",
      name: "Task Report",
      element: <TaskReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/employees_report",
      name: "Employees Report",
      element: <EmployeesReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/Account_report",
      name: "Account Report",
      element: <AccountReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/Expense_report",
      name: "Expense Report",
      element: < ExpenseReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/Deposit_report",
      name: "Deposit Report",
      element: <DepositReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/Transaction_report",
      name: "Transaction Repoprt",
      element: <TransactionReports />,
      route: PrivateRoute,
    },
    {
      path: "/apps/hremploye/hrreports/Pension_report",
      name: "Pension Repoprt",
      element: <PensionReports />,
      route: PrivateRoute,
    },
  ]
}





const ProjectsRoutes: RoutesProps = {
  path: "/apps/admin",
  name: "Projects",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "layers",
  children: [
    {
      path: "/apps/crprojects/projects",
      name: "Projects",
      element: <ProjectsCR />,
      route: PrivateRoute,
    },
  ]
}
const TasksRoutes: RoutesProps = {
  path: "/apps/admin",
  name: "Tasks",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "clipboard",
  children: [
    {
      path: "/apps/crprojects/tasks",
      name: "Tasks",
      element: <Task />,
      route: PrivateRoute,
    },
  ]
}
const NewTasksRoutes: RoutesProps = {
  name: "New Tasks",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "clipboard",
  path: "/apps/crprojects/tasks/new",
  element: <AddNewTask />,
}


// const LeadsRoutes: RoutesProps = {
//   path: "/apps/admin",
//   name: "Leads",
//   route: PrivateRoute,
//   roles: ["Admin"],
//   icon: "user-check",
//   children: [
//     {
//       path: "/apps/crprojects/leads",
//       name: "Leads",
//       element: <LeadsCR />,
//       route: PrivateRoute,
//     },
//   ]
// }
// const InvoiceRoutes: RoutesProps = {
//   path: "/apps/admin",
//   name: "Invoice",
//   route: PrivateRoute,
//   roles: ["Admin"],
//   icon: "check-square",
//   children: [
//     {
//       path: "/apps/crprojects/invoice",
//       name: "Invoice",
//       element: <InvoiceCR />,
//       route: PrivateRoute,
//     },
//   ]
// }
// const ProposalsRoutes: RoutesProps = {
//   path: "/apps/admin",
//   name: "Proposals",
//   route: PrivateRoute,
//   roles: ["Admin"],
//   icon: "file-text",
//   children: [
//     {
//       path: "/apps/crprojects/proposals",
//       name: "Proposals",
//       element: <ProposalCR />,
//       route: PrivateRoute,
//     },
//   ]
// }


// employe routes

const hrEmployeeManRoutes: RoutesProps = {
  path: "/apps/admin",
  name: "Employee",
  route: PrivateRoute,
  roles: ["Admin"],
  icon: "activity",
  children: [
    {
      path: "/apps/employee/attandance",
      name: "Attandance",
      icon: "clipboard",
      element: <EmpAttandanceGive />,
      route: PrivateRoute,
    },
    {
      path: "/apps/employee/infoupdate",
      name: "Update Information",
      icon: "plus-square",
      element: <UpdateEmpInfo />,
      route: PrivateRoute,
    },
    {
      path: "/apps/employee/checktasks",
      name: "Check Assigned Tasks",
      icon: "plus-square",
      element: <EmpCheckAssignedTask />,
      route: PrivateRoute,
    },
    {
      path: "/apps/employee/comtasks",
      name: "Check Completed Tasks",
      icon: "plus-square",
      element: <EmpCheckCompleteTask />,
      route: PrivateRoute,
    },
    {
      path: "/apps/employee/leavereq",
      name: "Apply For Leave",
      icon: "plus-square",
      element: <EmpLeaveReq />,
      route: PrivateRoute,
    },
    {
      path: "/apps/employee/lead_create",
      name: "Create Leads",
      icon: "plus-square",
      element: <EmpLeadCreate />,
      route: PrivateRoute,
    },

    {
      path: "/apps/employee/createtask",
      name: "Create Task",
      icon: "plus-square",
      element: <EmpCreateTask />,
      route: PrivateRoute,
    },

  ]
}
// const chatAppRoutes: RoutesProps = {
//   path: "/apps/chat",
//   name: "Chat Here",
//   route: PrivateRoute,
//   roles: ["Admin"],
//   icon: "message-square",
//   children: [
//     {
//       path: "/apps/employee/chat",
//       name: "Chat",
//       element: <ChatApp />,
//       route: PrivateRoute,
//     },
//   ]
// };
const addNewEmpNewLeads: RoutesProps = {
  path: "/apps/employee/newleads",
  name: "Add New Leads",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <EmpNewLeads />,
};
const addNewEmpNewleaveReq: RoutesProps = {
  path: "/apps/employee/leave/addnew",
  name: "Add New Leave",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <EmpNewleaveReq />,
};
const addNewEmpAissignNewTask: RoutesProps = {
  path: "/apps/employee/tasks/addnew",
  name: "Add New Tasks",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <EmpAissignNewTask />,
};


const employee: RoutesProps = {
  path: "/apps/admin/employee",
  name: "Employe",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <Employee />,
};
const checkAttandance: RoutesProps = {
  path: "/apps/employee/checkattandance",
  name: "Check Attandance",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <EmpCheckAttandance />,
};
const EmployeViewTask: RoutesProps = {
  path: "/apps/employee/taskview/:id",
  name: "View Task",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <EmpViewTask />,
};
const EmpcheckCreatedHisTask: RoutesProps = {
  path: "/apps/employee/checkcreatedtask",
  name: "Check Created Task",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <EmpcheckCreatedTask />,
};
const EmpupdateHisTask: RoutesProps = {
  path: "/apps/employee/updatedhistask/:id",
  name: "Check Created Task",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <EmpTaskUpdate />,
};
const payrunEdit: RoutesProps = {
  path: "/apps/hremploye/payroll/payrun/update",
  name: "Payrun Update",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <PayrunEdit />,
};
const UpdateSingleemployee: RoutesProps = {
  path: "/apps/hremploye/allemployees/single/update",
  name: "Employee Update",
  route: PrivateRoute,
  roles: ["Admin"],
  element: <UpdateSingleEmployee />,
};
// ADMIN MANAGEMENT ROUTES

const empRoutes = [
  hrEmployeeManRoutes,
  chatAppRoutes,
  employee,
  checkAttandance,
  EmployeViewTask,
  EmpcheckCreatedHisTask,
  EmpupdateHisTask,
  // inner routes
  addNewDepartment,
  addNewEmpNewLeads,
  addNewEmpNewleaveReq,
  addNewEmpAissignNewTask,
  // attendanceRoutes,
]
const appRoutes = [
  // calendarAppRoutes,
  // chatAppRoutes,
  // emailAppRoutes,
  // fileAppRoutes,
  // attendanceRoutes,
  // projectAppRoutes,

  /////// HR AND EMPLOYE hr and employe/////
  attendanceRoutes,
  jobDesk,
  hremploye,
  Assetshr,
  // taskAppRoutes,
  leaveManage,
  payRoll,
  // performance,
  administrations,
  attandanceEmp,
  coreHR,
  viewsingleEmp,
  // hrCalendarEmp,
  hrAttandance,
  payrunEdit,
  HRReports,
  hrsettings,
  calendarAppRoutes,
  fileAppRoutes,
  emailAppRoutes,
  // inner routes
  addNewDepartment,
  addNewDesignation,
  addNewBranch,
  addNewWarning,
  addNewTermination,
  addNewPromotion,
  addNewNewDeductionRoll,
  addNewMonthPayGradeRoll,
  addNewAward,
  addNewTravel,
  addNewTransfer,
  addNewRegistration,
  addNewComplaints,
  addNewHoliday,
  addNewPublickHoliday,
  addNewWeeklyHoliday,
  addNewLeaveTypeHoliday,
  addNewApplyForLeave,
  addNewHolidayCal,
  addNewLeaveReqCal,
  addNewTravelReqCal,
  addNewTrainingCal,
  addNewProjecCal,
  addNewTaskCal,
  addNewEventsCal,
  addNewMeetingsCal,
  addNewGoalTypePer,
  addNewGoalTrackingPer,
  addNewIndicatorPer,
  addNewAppraisalPer,
  addNewManageEmp,
  addNewHourlyPayGradeRoll,
  addNewGenarateSalarySheetRoll,
  AddNewprojects,

  // updated routes
  UpdateSingleemployee,
  Updatetask,
  Updateproject,
  /////////// CR AND PROJECTS /////////
  ProjectsRoutes,
  hrEmployeeManage,
  TasksRoutes,
  NewTasksRoutes,
  addNewNewAllowanceRoll,
  crprojects,
  // ADMIN ROUTES
  AdmiHorizontal,
  setupRoutes,
  addstaff,
  UpdateUserroles,
  reportsRoutes,
  ReportDetailedExpence,
  utilitiessRoutes,
  newNewAnnouncement,
  knowledgesRoutes,
  knowledgeNewArticle,

];

// pages
const extrapagesRoutes: RoutesProps = {
  path: "/pages",
  name: "Pages",
  icon: "package",
  header: "Custom",
  children: [
    {
      path: "/pages/starter",
      name: "Starter",
      element: <Starter />,
      route: PrivateRoute,
    },
    {
      path: "/pages/profile",
      name: "Profile",
      element: <Profile />,
      route: PrivateRoute,
    },
    {
      path: "/pages/activity",
      name: "Activity",
      element: <Activity />,
      route: PrivateRoute,
    },
    {
      path: "/pages/invoice",
      name: "Invoice",
      element: <Invoice />,
      route: PrivateRoute,
    },
    {
      path: "/pages/pricing",
      name: "Pricing",
      element: <Pricing />,
      route: PrivateRoute,
    },
  ],
};

// ui
const uiRoutes: RoutesProps = {
  path: "/components",
  name: "Components",
  icon: "package",
  header: "UI Elements",
  children: [
    {
      path: "/components/ui-elements",
      name: "UIElements",
      element: <UIElements />,
      route: PrivateRoute,
    },
    {
      path: "/components/widgets",
      name: "Widgets",
      element: <Widgets />,
      route: PrivateRoute,
    },
    {
      path: "/icons",
      name: "Icons",
      children: [
        {
          path: "/icons/unicons",
          name: "Unicons",
          element: <Unicons />,
          route: PrivateRoute,
        },
        {
          path: "/icons/feather",
          name: "Feather",
          element: <FeatherIcons />,
          route: PrivateRoute,
        },
        {
          path: "/icons/bootstrap",
          name: "Bootstrap Icon",
          element: <BootstrapIcon />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/forms",
      name: "Forms",
      children: [
        {
          path: "/forms/basic",
          name: "Basic Elements",
          element: <BasicForms />,
          route: PrivateRoute,
        },
        {
          path: "/forms/advanced",
          name: "Form Advanced",
          element: <FormAdvanced />,
          route: PrivateRoute,
        },
        {
          path: "/forms/validation",
          name: "Form Validation",
          // element: <FormValidation />,
          route: PrivateRoute,
        },
        {
          path: "/forms/wizard",
          name: "Form Wizard",
          element: <FormWizard />,
          route: PrivateRoute,
        },
        {
          path: "/forms/upload",
          name: "File Upload",
          element: <FileUpload />,
          route: PrivateRoute,
        },
        {
          path: "/forms/editors",
          name: "Editors",
          element: <Editors />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/components/charts",
      name: "Charts",
      element: <Charts />,
      route: PrivateRoute,
    },
    {
      path: "/tables",
      name: "Tables",
      children: [
        {
          path: "/tables/basic",
          name: "Basic",
          element: <BasicTables />,
          route: PrivateRoute,
        },
        {
          path: "/tables/advanced",
          name: "Advanced",
          element: <AdvancedTables />,
          route: PrivateRoute,
        },
      ],
    },
    {
      path: "/maps",
      name: "Maps",
      children: [
        {
          path: "/maps/googlemaps",
          name: "Google Maps",
          element: <GoogleMaps />,
          route: PrivateRoute,
        },
        {
          path: "/maps/vectorMaps",
          name: "Google Maps",
          element: <VectorMaps />,
          route: PrivateRoute,
        },
      ],
    },
  ],
};

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "/auth/login",
    name: "Login",
    element: <LoginNew />,
    // element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
  {
    path: "/auth/confirm",
    name: "Confirm",
    element: <Confirm />,
    route: Route,
  },
  {
    path: "/auth/forget-password",
    name: "Forget Password",
    // element: <ForgetPassword />,
    route: Route,
  },
  {
    path: "/auth/lock-screen",
    name: "Lock Screen",
    element: <LockScreen />,
    route: Route,
  },
  {
    path: "/auth/logout",
    name: "Logout",
    element: <Logout />,
    route: Route,
  },
];

// public routes
const otherPublicRoutes: RoutesProps[] = [
  {
    path: "/landing",
    name: "landing",
    element: <Landing />,
    route: Route,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    element: <Maintenance />,
    route: Route,
  },
  {
    path: "/error-404",
    name: "Error - 404",
    element: <Error404 />,
    route: Route,
  },
  {
    path: "/error-500",
    name: "Error - 500",
    element: <Error500 />,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const authProtectedRoutes = [
  dashboardRoutes,
  ...appRoutes,
  extrapagesRoutes,
  uiRoutes,
];
const publicRoutes = [...authRoutes, ...otherPublicRoutes];
const employeVeiwAllRoutes = [...empRoutes, dashboardRoutes];


const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const authProtectedEmployeFlattenRoutes = flattenRoutes([...employeVeiwAllRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
  authProtectedEmployeFlattenRoutes,
};
