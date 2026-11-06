// Editorial choices that cannot be derived from the upstream manifest:
// which animation sits in each motion slot, and which animations back each
// work-status tier. Every name is resolved against the synced action list, so a
// renamed or dropped upstream animation degrades to the next candidate instead
// of producing a broken reference.

export const motionSlots = {
  idle: ['待机呼吸休闲'],
  turn: ['待机呼吸休闲'],
  'moving-left': ['螃蟹走路'],
  'moving-right': ['原地左转奔跑'],
  dragging: ['被鼠标拖拽悬空反馈'],
  waiting: ['待机呼吸休闲'],
}

export const workStatus = {
  // 0 thinking / 1 working / 2 result / 3 waiting / 4 success / 5 error
  thinking: ["工作状态-思考冒泡","深度思考碎碎念v4","咬指甲"],
  working: ["工作状态-忙碌点按","写代码","轻快记录"],
  result: ["工作状态-清点归档","拨算盘珠","轻快记录"],
  waiting: ["待机呼吸休闲","原地小憩沉眠"],
  success: ["工作状态-雀跃庆祝","点击回应-开心跃动","可爱宅舞"],
  error: ["工作状态-垂头叹气冒汗","碎碎念-对屏碎碎念","原地小憩沉眠"],
}

// Animation played when the user clicks the pet; defaults to every animation.
export const clickExclude = ['待机呼吸休闲']

export const categoryOrder = [
  "待机",
  "点击回应",
  "工作状态",
  "情绪反应",
  "碎碎念",
  "余额",
  "小动作",
  "日常起居",
  "吃喝",
  "玩耍",
  "才艺表演",
  "娱乐休闲",
  "模仿动物",
  "魔法特效",
  "手工节日",
  "时节",
  "礼仪致意",
  "换装造型",
  "移动",
  "拖拽"
]

export const categoryTitles = {
  "待机": "待机",
  "点击回应": "点击回应",
  "工作状态": "工作状态",
  "情绪反应": "情绪反应",
  "碎碎念": "碎碎念",
  "余额": "余额",
  "小动作": "小动作",
  "日常起居": "日常起居",
  "吃喝": "吃喝",
  "玩耍": "玩耍",
  "才艺表演": "才艺表演",
  "娱乐休闲": "娱乐休闲",
  "模仿动物": "模仿动物",
  "魔法特效": "魔法特效",
  "手工节日": "手工节日",
  "时节": "时节",
  "礼仪致意": "礼仪致意",
  "换装造型": "换装造型",
  "移动": "移动",
  "拖拽": "拖拽"
}
