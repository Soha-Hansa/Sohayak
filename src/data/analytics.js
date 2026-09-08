export const adminAnalytics = {
  totalUsers: 2486,
  userGrowthPct: 12.4,
  activeWorkerOwners: 1284,
  workerGrowthPct: 8.2,
  activeGigsCount: 342,
  newGigsToday: 142,
  jobsCompletedCount: 5826,
  jobSuccessRatePct: 94.0,
  monthlyGrossGMVINR: 1864500,
  gmvGrowthPct: 15.4,
  pendingDisputesCount: 12,
  cooperativeSurplusFundINR: 642000,
  averageWorkerHourlyTakeHomeINR: 385,
  traditionalMarketTakeHomeINR: 210,
  customerSatisfactionScore: 4.7,
  positiveReviewPct: 92,
};

export const pendingWorkerVerifications = [
  {
    id: 'ver-101',
    name: 'Suman Roy',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
    skill: 'Senior Plumber',
    location: 'Howrah, West Bengal',
    submittedTime: 'Submitted 2 hours ago',
    status: 'Verification Pending',
  },
  {
    id: 'ver-102',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    skill: 'Home Tutor (STEM)',
    location: 'Salt Lake, Kolkata',
    submittedTime: 'Submitted 5 hours ago',
    status: 'Verification Pending',
  },
  {
    id: 'ver-103',
    name: 'Debashis Paul',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80',
    skill: 'AC Repair Technician',
    location: 'Park Street, Kolkata',
    submittedTime: 'Submitted 1 day ago',
    status: 'Verification Pending',
  },
];

export const recentUsersList = [
  {
    id: 'usr-1',
    name: 'Rahul Das',
    role: 'Worker',
    location: 'Kolkata',
    joinedDate: 'Sep 4, 2026',
    status: 'Verified',
  },
  {
    id: 'usr-2',
    name: 'Ananya Sen',
    role: 'Customer',
    location: 'Howrah',
    joinedDate: 'Sep 3, 2026',
    status: 'Active',
  },
  {
    id: 'usr-3',
    name: 'Moumita Roy',
    role: 'Worker',
    location: 'Howrah',
    joinedDate: 'Sep 1, 2026',
    status: 'Verified',
  },
  {
    id: 'usr-4',
    name: 'Sourav Ghosh',
    role: 'Customer',
    location: 'Salt Lake',
    joinedDate: 'Aug 29, 2026',
    status: 'Active',
  },
];

export const recentDisputesList = [
  {
    id: 'D1024',
    customerName: 'Ananya Sen',
    workerName: 'Rahul Das',
    issue: 'Service not completed as expected',
    amountINR: 1000,
    status: 'Under Review',
    date: 'Today, 11:30 AM',
  },
  {
    id: 'D1025',
    customerName: 'Sourav Ghosh',
    workerName: 'Arindam Das',
    issue: 'Delay in technician arrival time',
    amountINR: 800,
    status: 'Open',
    date: 'Yesterday, 04:15 PM',
  },
];

export const financialSummary = {
  totalRevenueINR: 1864500,
  workerPayoutsINR: 1482000,
  platformFeesINR: 382500,
  pendingEscrowINR: 124000,
  recentTransactions: [
    { txId: 'TX-8801', customer: 'Ananya Sen', worker: 'Rahul Das', amountINR: 1000, date: 'Today, 02:30 PM', status: 'Completed' },
    { txId: 'TX-8802', customer: 'Biswajit Mitra', worker: 'Suman Roy', amountINR: 800, date: 'Today, 11:00 AM', status: 'Completed' },
    { txId: 'TX-8803', customer: 'Sourav Ghosh', worker: 'Priya Sharma', amountINR: 1200, date: 'Yesterday', status: 'Pending' },
    { txId: 'TX-8804', customer: 'Priya Sharma', worker: 'Moumita Roy', amountINR: 1500, date: '04 Sep 2026', status: 'Completed' },
  ],
};

export const adminNotificationsList = [
  { id: 'an-1', title: '18 new workers waiting for verification', desc: 'Review pending identity documents and skill certificates', time: '5 min ago', unread: true },
  { id: 'an-2', title: '3 new disputes require attention', desc: 'Dispute #D1024 opened for electrical repair service', time: '1 hour ago', unread: true },
  { id: 'an-3', title: '42 new gigs were posted today', desc: 'High demand in Kolkata East and Howrah hubs', time: 'Today', unread: false },
  { id: 'an-4', title: 'Monthly platform report is ready', desc: 'Surplus fund distribution proposal calculated', time: 'Yesterday', unread: false },
];
