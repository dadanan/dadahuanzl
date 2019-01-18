/**
 * 路由通用类
 * author by kairry 2017年11月20日
 */
// const Index = resolve => require(['@/views/index/Index'], resolve)
// const IndexSingle = resolve => require(['@/views/IndexSingle/Index'], resolve)
// const Detection = resolve => require(['@/views/detection/Index'], resolve)

const Auth = resolve => require(['@/views/auth/Auth'], resolve)
const Init = resolve => require(['@/views/init/Init'], resolve)
const Pay1 = resolve => require(['@/views/pay/Pay1'], resolve)
const Pay2 = resolve => require(['@/views/pay/Pay2'], resolve)
const Pays = resolve => require(['@/views/pay/Pay3'], resolve)


// const TimingList = resolve => require(['@/views/timing/List'], resolve)
// const TimingEdet = resolve => require(['@/views/timing/Edit'], resolve)
// const Set = resolve => require(['@/views/set/Index'], resolve)
// const DevInfo = resolve => require(['@/views/set/DevInfo'], resolve)
// const MasterInfo = resolve => require(['@/views/set/MasterInfo'], resolve)
// const Share = resolve => require(['@/views/set/Share'], resolve)
// const Data = resolve => require(['@/views/set/Data'], resolve)
// const Record = resolve => require(['@/views/set/Record'], resolve)

// const AMap = resolve => require(['@/views/set/Map'], resolve)
// const Battery = resolve => require(['@/views/set/Battery'], resolve)
// const Config = resolve => require(['@/views/set/Config'], resolve)
const List = resolve => require(['@/views/list/Index'], resolve)
// const Demo = resolve => require(['@/views/demo'], resolve)
// const Permissions = resolve => require(['@/views/set/Permissions'], resolve)
// const Group = resolve => require(['@/views/set/Group'], resolve)
// const WenKongIndex = resolve => require(['@/views/wenkong/Index'], resolve)
// const AirPurifier = resolve => require(['@/views/air-purifier'], resolve)
// const KaiChe = resolve => require(['@/views/kaiche'], resolve)
// 租赁开始
const About = resolve => require(['@/views/lease/About'], resolve)
const SetUp = resolve => require(['@/views/lease/SetUp'], resolve)
const Collection = resolve => require(['@/views/lease/Index'], resolve)
const Balance = resolve => require(['@/views/lease/Balance'], resolve)
const TopUp = resolve => require(['@/views/lease/TopUp'], resolve)
const Integral = resolve => require(['@/views/lease/Integral'], resolve)
const Bill = resolve => require(['@/views/lease/Bill'], resolve)
const Abous = resolve => require(['@/views/lease/Abous'], resolve)
const Opinion = resolve => require(['@/views/lease/Opinion'], resolve)
// const Opinion = resolve => require(['@/views/lease/Opinion'], resolve)
const Fault = resolve => require(['@/views/lease/Fault'], resolve)
const Sets = resolve => require(['@/views/lease/Sets'], resolve)
const Scan = resolve => require(['@/views/lease/Scan'], resolve)


// 订单
const Order = resolve => require(['@/views/order/Index'], resolve)
//消息
const Message = resolve => require(['@/views/message/Index'], resolve)
// 租赁结束
// 成为运行商
const Partner = resolve => require(['@/views/partner/Index'], resolve)
const Site = resolve => require(['@/views/partner/Site'], resolve)
const Terms = resolve => require(['@/views/site/Index'], resolve)
const Sub = resolve => require(['@/views/site/Sub'], resolve)
const Audit = resolve => require(['@/views/site/Audit'], resolve)
const Pass = resolve => require(['@/views/site/Pass'], resolve)

const Equipment = resolve => require(['@/views/partner/Equipment'], resolve)
const Develop = resolve => require(['@/views/develop/Index'], resolve)
const DeveSub = resolve => require(['@/views/develop/Sub'], resolve)
const DeveBuy = resolve => require(['@/views/develop/devbuy'], resolve)

const Hehuo = resolve => require(['@/views/partner/Hehuo'], resolve)
const Treaty = resolve => require(['@/views/hehuo/Index'], resolve)
const People = resolve => require(['@/views/hehuo/Sub'], resolve)
const Passp = resolve => require(['@/views/hehuo/pass'], resolve)
const Auditp = resolve => require(['@/views/hehuo/audit'], resolve)
// 成为运行商结束

// 管理中心开始
const Management = resolve => require(['@/views/personal/Index'], resolve)
const Orderdetail = resolve => require(['@/views/personal/Orderdetail'], resolve)
const Mybill = resolve => require(['@/views/personal/Mybill'], resolve)
const Myshare = resolve => require(['@/views/personal/Myshare'], resolve)
const Login = resolve => require(['@/views/personal/Login'], resolve)
const Registered = resolve => require(['@/views/personal/Registered'], resolve)





const Business = resolve => require(['@/views/personal/Business'], resolve)
const Msites = resolve => require(['@/views/personal/Sites'], resolve)
const Mydeve = resolve => require(['@/views/personal/Mydeve'], resolve)




// 管理中心结
let routes = [
// 管理中心开始
{
  path: '/management',
  component: Management,
  meta: {title: '管理中心', navShow: false,navShows:false,batShow:true, cname: '一级页面',active: '/management' },
},
{
  path: '/login',
  component: Login,
  meta: {title: '用户登录', navShow: false,navShows:false,batShow:false, cname: '一级页面',active: '/login' },
},
{
  path: '/registered',
  component: Registered,
  meta: {title: '用户注册', navShow: false,navShows:false,batShow:false, cname: '二级页面',active: '/registered' },
},
{
  path: '/orderdetail',
  component: Orderdetail,
  meta: {title: '我的账单', navShow: false,navShows:false,batShow:false, cname: '一级页面',active: '/orderdetail' },
},
{
  path: '/myshare',
  component: Myshare,
  meta: {title: '分享分润明细', navShow: false,navShows:false,batShow:false, cname: '一级页面',active: '/myshare' },
},
{
  path: '/mybill',
  component: Mybill,
  meta: {title: '我的账单', navShow: false,navShows:false,batShow:false, cname: '一级页面',active: '/mybill' },
},
{
  path: '/business',
  component: Business,
  meta: {title: '我的业务', navShow: false,navShows:false,batShow:true, cname: '一级页面',active: '/business' },
},
{
  path: '/msites',
  component: Msites,
  meta: {title: '我的场地', navShow: false,navShows:false,batShow:true, cname: '一级页面',active: '/msites' },
},
{
  path: '/mydeve',
  component: Mydeve,
  meta: {title: '我的场地', navShow: false,navShows:false,batShow:true, cname: '一级页面',active: '/mydeve' },
},

// 管理中心结束
  // 租赁开始
  {
    path: '/about',
    component: About,
    meta: {title: '我的', navShow: true,navShows:false, cname: '一级页面',active: '/about' },
  },
  {
    path: '/sets',
    component: Sets,
    meta: { navShow: false,navShows:false, cname: '二级页面',active: '/sets' },
  },
  {
    path: '/scan',
    component: Scan,
    meta: {title: '扫一扫', navShow: false,navShows:false, cname: '二级页面',active: '/scan' },
  },
  {
    path: '/fault',
    component: Fault,
    meta: {title: '常见故障', navShow: false,navShows:false,  cname: '二级页面',active: '/about' },
  },
  {
    path: '/abous',
    component: Abous,
    meta: {title: '关于我们', navShow: false,navShows:false,  cname: '二级页面',active: '/about' },
  },
  {
    path: '/opinion',
    component: Opinion,
    meta: {title: '意见反馈', navShow: false,navShows:false,  cname: '二级页面',active: '/about' },
  },
  {
    path: '/bill',
    component: Bill,
    meta: {title: '充值账单', navShow: false,navShows:false,  cname: '二级页面',active: '/about' },
  },
  {
    path: '/integral',
    component: Integral,
    meta: {title: '积分管理', navShow: false,navShows:false,  cname: '二级页面',active: '/about' },
  },
  {
    path: '/topup',
    component: TopUp,
    meta: {title: '余额充值', navShow: false,navShows:false,  cname: '二级页面',active: '/about' },
  },
  {
    path: '/balance',
    component: Balance,
    meta: {title: '我的余额', navShow: false,navShows:false,  cname: '二级页面',active: '/about' },
  },
  {
    path: '/setup',
    component: SetUp,
    meta: { title: '设置',navShow: false,navShows:false, cname: '二级页面',active: '/about' },
  },
  {
    path: '/collection',
    component: Collection,
    meta: {title: '我的收藏', navShow: false,navShows:false, cname: '二级页面',active: '/about' },
  },
  {
    path: '/order',
    component: Order,
    meta: {title: '我的订单', navShow: true,navShows:false,  cname: '一级页面',active: '/order'},
  },
  {
    path: '/message',
    component: Message,
    meta: {title: '消息中心', navShow: true,navShows:false,  cname: '一级页面', active: '/message'},
  },

  //租赁结束
  // 成为合伙人开始
  {
    path: '/partner',
    component: Partner,
    meta: {title: '成为运营商', navShow: false,navShows:true, cname: '一级页面',active: '/partner' },
  },
  {
    path: '/site',
    component: Site,
    meta: { title: '场地合作',navShow: false,navShows:true, cname: '一级页面',active: '/site' },
  },
  {
    path: '/terms',
    component: Terms,
    meta: {title: '场地合作条款', navShow: false,navShows:false, cname: '二级页面',active: '/site' },
  },
  {
    path: '/sub',
    component: Sub,
    meta: {title: '场地合作条款', navShow: false,navShows:true, cname: '二级页面',active: '/site' },
  },
  {
    path: '/audit',
    component: Audit,
    meta: {title: '场地合作条款', navShow: false,navShows:true, cname: '二级页面',active: '/site' },
  },
  {
    path: '/pass',
    component: Pass,
    meta: {title: '场地合作条款', navShow: false,navShows:true, cname: '二级页面',active: '/site' },
  },

  {
    path: '/equipment',
    component: Equipment,
    meta: {title: '设备合作', navShow: false,navShows:true, cname: '一级页面',active: '/equipment' },
  },
  {
    path: '/develop',
    component: Develop,
    meta: {title: '设备合作', navShow: false,navShows:true, cname: '二级页面',active: '/equipment' },
  },
  {
    path: '/devesub',
    component: DeveSub,
    meta: {title: '设备合作', navShow: false,navShows:true, cname: '二级页面',active: '/equipment' },
  },
  {
    path: '/devebuy',
    component: DeveBuy,
    meta: {title: '设备合作', navShow: false,navShows:true, cname: '二级页面',active: '/equipment' },
  },

  {
    path: '/hehuo',
    component: Hehuo,
    meta: {title: '成为合伙人', navShow: false,navShows:true, cname: '一级页面',active: '/hehuo' },
  },
  {
    path: '/treaty',
    component: Treaty,
    meta: {title: '成为合伙人', navShow: false,navShows:true, cname: '二级页面',active: '/hehuo' },
  },
  {
    path: '/people',
    component: People,
    meta: {title: '成为合伙人', navShow: false,navShows:true, cname: '二级页面',active: '/hehuo' },
  },
  {
    path: '/passp',
    component: Passp,
    meta: {title: '成为合伙人', navShow: false,navShows:true, cname: '二级页面',active: '/hehuo' },
  },
  {
    path: '/auditp',
    component: Auditp,
    meta: {title: '成为合伙人', navShow: false,navShows:true, cname: '二级页面',active: '/hehuo' },
  },

  // 成为合伙人结束
  {
    path: '*',
    redirect: '/init'
  },
  {
    path: '/auth',
    component: Auth,
    meta: {
      title: ''
    }
  },
  // {
  //   path: '/demo',
  //   component: Demo,
  //   meta: {
  //     title: ''
  //   }
  // },
  {
    path: '/init',
    component: Init,
    meta: {
      title: ''
    }
  },
  {
    path: '/pay1',
    component: Pay1,
    meta: {
      title: '设备支付'
    }
  },
  {
    path: '/pay2',
    component: Pay2,
    meta: {
      title: '设备支付'
    }
  },
  {
    path: '/pays',
    component: Pays,
    meta: {
      title: '设备支付'
    }
  },
  // {
  //   path: '/permissions',
  //   component: Permissions,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/group',
  //   component: Group,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/index',
  //   component: Index,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/indexsingle',
  //   component: IndexSingle,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/detection',
  //   component: Detection,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/timinglist',
  //   component: TimingList,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/timingedet',
  //   component: TimingEdet,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/set',
  //   component: Set,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/devinfo',
  //   component: DevInfo,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/masterinfo',
  //   component: MasterInfo,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/share',
  //   component: Share,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/data',
  //   component: Data,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/record',
  //   component: Record,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/map',
  //   component: AMap,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/battery',
  //   component: Battery,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/config',
  //   component: Config,
  //   meta: {
  //     title: ''
  //   }
  // },
  {
    path: '/list',
    component: List,
    meta: {
      title: '设备列表'
    },
    meta: { navShow: true,navShows:false, cname: '一级页面', active: '/list'},

  },
  // {
  //   path: '/air-purifier',
  //   component: AirPurifier,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/wenkongindex',
  //   component: WenKongIndex,
  //   meta: {
  //     title: ''
  //   }
  // },
  // {
  //   path: '/kaiche',
  //   component: KaiChe
  // }
]

export default routes
