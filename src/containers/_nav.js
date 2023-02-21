const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/admin/dashboard",
    icon: "cil-speedometer",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Master Data"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Categories",
    to: "/admin/category",
    icon: "cil-tags",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Items",
    to: "/admin/item",
    icon: "cil-tags",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Bank",
    to: "/admin/bank",
    icon: "cib-cc-mastercard",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Customer",
    to: "/admin/customer",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Booking"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Booking",
    to: "/admin/booking",
    icon: "cil-task",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Setting"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "User",
    to: "/admin/user",
    icon: "cil-user",
  },
];

export default _nav;
