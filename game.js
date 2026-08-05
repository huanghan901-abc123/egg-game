// ==================== 游戏数据 ====================

// 皮肤数据
const SKINS = {
    // 普通品质
    default: { name: '默认小蛋', img: 'assets/characters/egg_default.png', rarity: 'common' },
    crocodile: { name: '鳄鱼小蛋', img: 'assets/characters/egg_crocodile.png', rarity: 'common' },
    gorilla: { name: '猩猩小蛋', img: 'assets/characters/egg_gorilla.png', rarity: 'common' },
    hippo: { name: '河马小蛋', img: 'assets/characters/egg_hippo.png', rarity: 'common' },
    giraffe: { name: '长颈鹿小蛋', img: 'assets/characters/egg_giraffe.png', rarity: 'common' },
    // 稀有品质
    dino: { name: '恐龙小蛋', img: 'assets/characters/egg_dino.png', rarity: 'rare' },
    pangolin: { name: '穿山甲小蛋', img: 'assets/characters/egg_pangolin.png', rarity: 'rare' },
    // 史诗品质
    wizard: { name: '魔法师小蛋', img: 'assets/characters/egg_wizard.png', rarity: 'epic' },
    cat: { name: '小猫小蛋', img: 'assets/characters/egg_cat.png', rarity: 'epic' },
    // 传说品质
    ninja: { name: '忍者小蛋', img: 'assets/characters/egg_ninja.png', rarity: 'legendary' },
    student: { name: '学生小蛋', img: 'assets/characters/egg_student.png', rarity: 'legendary' },
    // 至尊无敌品质
    haohao: { name: '昊浩小蛋', img: 'assets/characters/egg_haohao.png', rarity: 'mythic' }
};

// 地图背景图
const MAP_BACKGROUNDS = {
    desert: [
        'assets/backgrounds/desert/desert_01_worm_cave.png',
        'assets/backgrounds/desert/desert_02_oasis_camp.png',
        'assets/backgrounds/desert/desert_03_quicksand_chest.png',
        'assets/backgrounds/desert/desert_04_mine_entrance.png',
        'assets/backgrounds/desert/desert_05_small_oasis.png',
        'assets/backgrounds/desert/desert_06_camel_shop.png',
        'assets/backgrounds/desert/desert_07_rock_arch.png',
        'assets/backgrounds/desert/desert_08_bone_wasteland.png',
        'assets/backgrounds/desert/desert_09_red_canyon.png',
        'assets/backgrounds/desert/desert_10_ancient_ruins.png',
        'assets/backgrounds/desert/desert_11_sundial_stones.png',
        'assets/backgrounds/desert/desert_12_mushroom_rocks.png',
        'assets/backgrounds/desert/desert_13_desert_tower.png',
        'assets/backgrounds/desert/desert_14_golden_temple.png',
        'assets/backgrounds/desert/desert_15_mirage.png'
    ],
    forest: [
        'assets/backgrounds/forest/forest_01_tree_house.png',
        'assets/backgrounds/forest/forest_02_crystal_shrine.png',
        'assets/backgrounds/forest/forest_03_lightning_tree.png',
        'assets/backgrounds/forest/forest_04_glowing_path.png',
        'assets/backgrounds/forest/forest_05_rope_bridge.png',
        'assets/backgrounds/forest/forest_06_bone_cave.png',
        'assets/backgrounds/forest/forest_07_herb_garden.png',
        'assets/backgrounds/forest/forest_08_forest_camp.png',
        'assets/backgrounds/forest/forest_09_foggy_forest.png',
        'assets/backgrounds/forest/forest_10_mushroom_forest.png',
        'assets/backgrounds/forest/forest_11_rune_stones.png',
        'assets/backgrounds/forest/forest_12_waterfall.png',
        'assets/backgrounds/forest/forest_13_swamp.png',
        'assets/backgrounds/forest/forest_14_tree_root_cave.png',
        'assets/backgrounds/forest/forest_15_moss_stele.png'
    ]
};

// 抽奖概率
// 普通15% / 稀有10% / 史诗5% / 传说2.5% / 至尊无敌0.5% / 碎片67%
const GACHA_POOL = [
    // 普通品质（5个，每个3%，共15%）
    { id: 'default', weight: 3 },
    { id: 'crocodile', weight: 3 },
    { id: 'gorilla', weight: 3 },
    { id: 'hippo', weight: 3 },
    { id: 'giraffe', weight: 3 },
    // 稀有品质（2个，每个5%，共10%）
    { id: 'dino', weight: 5 },
    { id: 'pangolin', weight: 5 },
    // 史诗品质（2个，每个2.5%，共5%）
    { id: 'wizard', weight: 2.5 },
    { id: 'cat', weight: 2.5 },
    // 传说品质（2个，每个1.25%，共2.5%）
    { id: 'ninja', weight: 1.25 },
    { id: 'student', weight: 1.25 },
    // 至尊无敌品质（1个，0.5%）
    { id: 'haohao', weight: 0.5 },
    // 碎片（67%）：每次抽奖都有收获，避免挫败感
    { id: 'fragment', weight: 67 }
];

// 示例单词数据（用户可以替换成真实的Excel数据）
const WORD_DATA = {
    desert: [
        { id: 1, english: "subject", chinese: "学科" },
        { id: 2, english: "Chinese", chinese: "语文" },
        { id: 3, english: "English", chinese: "英语" },
        { id: 4, english: "Maths", chinese: "数学" },
        { id: 5, english: "PE", chinese: "体育" },
        { id: 6, english: "Art", chinese: "美术" },
        { id: 7, english: "Science", chinese: "科学" },
        { id: 8, english: "IT", chinese: "信息科技" },
        { id: 9, english: "Music", chinese: "音乐" },
        { id: 10, english: "best", chinese: "最" },
        { id: 11, english: "also", chinese: "也" },
        { id: 12, english: "It's time for", chinese: "是时候" },
        { id: 13, english: "mouse", chinese: "鼠标" },
        { id: 14, english: "Welcome back to", chinese: "欢迎回到" },
        { id: 15, english: "new", chinese: "新" },
        { id: 16, english: "timetable", chinese: "课程表" },
        { id: 17, english: "be good at", chinese: "擅长" },
        { id: 18, english: "number", chinese: "数字" },
        { id: 19, english: "interesting", chinese: "有趣" },
        { id: 20, english: "learn about", chinese: "学习" },
        { id: 21, english: "culture", chinese: "文化" },
        { id: 22, english: "read", chinese: "读" },
        { id: 23, english: "story", chinese: "故事" },
        { id: 24, english: "all", chinese: "全部" },
        { id: 25, english: "playground", chinese: "操场" },
        { id: 26, english: "day", chinese: "天" },
        { id: 27, english: "get up", chinese: "起床" },
        { id: 28, english: "wash", chinese: "洗" },
        { id: 29, english: "face", chinese: "脸" },
        { id: 30, english: "have lessons", chinese: "上课" },
        { id: 31, english: "have", chinese: "吃" },
        { id: 32, english: "dinner", chinese: "晚餐" },
        { id: 33, english: "breakfast", chinese: "早餐" },
        { id: 34, english: "lunch", chinese: "午餐" },
        { id: 35, english: "go to bed", chinese: "睡觉" },
        { id: 36, english: "o'clock", chinese: "点" },
        { id: 37, english: "early", chinese: "早" },
        { id: 38, english: "thirty", chinese: "三十" },
        { id: 39, english: "first", chinese: "第一" },
        { id: 40, english: "hurry up", chinese: "快点" },
        { id: 41, english: "What time is it", chinese: "几点了" },
        { id: 42, english: "I'm coming", chinese: "我来了" },
        { id: 43, english: "Come on", chinese: "加油" },
        { id: 44, english: "class", chinese: "课" },
        { id: 45, english: "eleven", chinese: "十一" },
        { id: 46, english: "sport", chinese: "体育" },
        { id: 47, english: "fifteen", chinese: "十五" },
        { id: 48, english: "It's time to", chinese: "到了" },
        { id: 49, english: "bed", chinese: "床" },
        { id: 50, english: "Good night", chinese: "晚安" },
        { id: 51, english: "What day is it today", chinese: "今天星期几" },
        { id: 52, english: "cinema", chinese: "电影院" },
        { id: 53, english: "after school", chinese: "放学后" },
        { id: 54, english: "dancing", chinese: "跳舞" },
        { id: 55, english: "lesson", chinese: "课" },
        { id: 56, english: "walk", chinese: "遛" },
        { id: 57, english: "dog", chinese: "狗" },
        { id: 58, english: "tomorrow", chinese: "明天" },
        { id: 59, english: "free", chinese: "空闲" },
        { id: 60, english: "See you tomorrow", chinese: "明天见" },
        { id: 61, english: "week", chinese: "周" },
        { id: 62, english: "Sunday", chinese: "星期天" },
        { id: 63, english: "Monday", chinese: "星期一" },
        { id: 64, english: "Tuesday", chinese: "星期二" },
        { id: 65, english: "Wednesday", chinese: "星期三" },
        { id: 66, english: "Thursday", chinese: "星期四" },
        { id: 67, english: "Friday", chinese: "星期五" },
        { id: 68, english: "Saturday", chinese: "星期六" },
        { id: 69, english: "up", chinese: "起床" },
        { id: 70, english: "so", chinese: "这么" },
        { id: 71, english: "early", chinese: "早" },
        { id: 72, english: "when", chinese: "什么时候" },
        { id: 73, english: "every", chinese: "每个" },
        { id: 74, english: "at", chinese: "在" },
        { id: 75, english: "today", chinese: "今天" },
        { id: 76, english: "play", chinese: "打" },
        { id: 77, english: "football", chinese: "足球" },
        { id: 78, english: "ping-pong", chinese: "乒乓" },
        { id: 79, english: "basketball", chinese: "篮球" },
        { id: 80, english: "great", chinese: "好" },
        { id: 81, english: "well", chinese: "好" },
        { id: 82, english: "Have a go", chinese: "试试" },
        { id: 83, english: "oops", chinese: "哎哟" },
        { id: 84, english: "try", chinese: "试" },
        { id: 85, english: "Well played", chinese: "好球" },
        { id: 86, english: "different", chinese: "不同" },
        { id: 87, english: "same", chinese: "相同" },
        { id: 88, english: "hair", chinese: "头发" },
        { id: 89, english: "eye", chinese: "眼睛" },
        { id: 90, english: "ear", chinese: "耳朵" },
        { id: 91, english: "nose", chinese: "鼻子" },
        { id: 92, english: "mouth", chinese: "嘴" },
        { id: 93, english: "arm", chinese: "手臂" },
        { id: 94, english: "leg", chinese: "腿" },
        { id: 95, english: "robot", chinese: "机器人" },
        { id: 96, english: "his", chinese: "他的" },
        { id: 97, english: "tall", chinese: "高" },
        { id: 98, english: "doll", chinese: "娃娃" },
        { id: 99, english: "her", chinese: "她的" },
        { id: 100, english: "small", chinese: "小" },
        { id: 101, english: "bring", chinese: "带来" },
        { id: 102, english: "lots of", chinese: "许多" },
        { id: 103, english: "puppet", chinese: "玩偶" },
        { id: 104, english: "show", chinese: "表演" },
        { id: 105, english: "weather", chinese: "天气" },
        { id: 106, english: "cloudy", chinese: "多云" },
        { id: 107, english: "sunny", chinese: "晴" },
        { id: 108, english: "cool", chinese: "凉" },
        { id: 109, english: "rainy", chinese: "多雨" },
        { id: 110, english: "hot", chinese: "热" },
        { id: 111, english: "windy", chinese: "风大" },
        { id: 112, english: "warm", chinese: "暖" },
        { id: 113, english: "save ... for a rainy day", chinese: "未雨绸缪" },
        { id: 114, english: "money", chinese: "钱" },
        { id: 115, english: "What's the weather like today", chinese: "今天天气怎么样" },
        { id: 116, english: "park", chinese: "公园" },
        { id: 117, english: "meet", chinese: "会面" },
        { id: 118, english: "fly a kite", chinese: "放风筝" },
        { id: 119, english: "worry", chinese: "担心" },
        { id: 120, english: "umbrella", chinese: "伞" },
        { id: 121, english: "there", chinese: "那里" },
        { id: 122, english: "season", chinese: "季节" },
        { id: 123, english: "spring", chinese: "春天" },
        { id: 124, english: "go boating", chinese: "划船" },
        { id: 125, english: "winter", chinese: "冬天" },
        { id: 126, english: "go skating", chinese: "滑冰" },
        { id: 127, english: "summer", chinese: "夏天" },
        { id: 128, english: "ice cream", chinese: "冰淇淋" },
        { id: 129, english: "go swimming", chinese: "游泳" },
        { id: 130, english: "autumn", chinese: "秋天" },
        { id: 131, english: "go climbing", chinese: "爬山" },
        { id: 132, english: "cold", chinese: "冷" },
        { id: 133, english: "bird", chinese: "鸟" },
        { id: 134, english: "back", chinese: "回到" },
        { id: 135, english: "in", chinese: "在" },
        { id: 136, english: "year", chinese: "年" },
        { id: 137, english: "plant", chinese: "种植" },
        { id: 138, english: "pick", chinese: "采" },
        { id: 139, english: "snow", chinese: "雪" },
        { id: 140, english: "holiday", chinese: "假期" },
        { id: 141, english: "clothes", chinese: "衣服" },
        { id: 142, english: "cap", chinese: "鸭舌帽" },
        { id: 143, english: "coat", chinese: "外衣" },
        { id: 144, english: "skirt", chinese: "半身裙" },
        { id: 145, english: "trousers", chinese: "裤子" },
        { id: 146, english: "dress", chinese: "连衣裙" },
        { id: 147, english: "shirt", chinese: "衬衫" },
        { id: 148, english: "whose", chinese: "谁的" },
        { id: 149, english: "look", chinese: "看起来" },
        { id: 150, english: "why", chinese: "为什么" },
    ],
    forest: [
        { id: 1, english: "weak", chinese: "虚弱" },
        { id: 2, english: "strong", chinese: "强壮" },
        { id: 3, english: "there are", chinese: "有" },
        { id: 4, english: "them", chinese: "他们" },
        { id: 5, english: "from", chinese: "来自" },
        { id: 6, english: "party", chinese: "聚会" },
        { id: 7, english: "like", chinese: "像" },
        { id: 8, english: "friendship", chinese: "友谊" },
        { id: 9, english: "forest", chinese: "森林" },
        { id: 10, english: "thin", chinese: "瘦" },
        { id: 11, english: "back", chinese: "背" },
        { id: 12, english: "angry", chinese: "生气" },
        { id: 13, english: "one day", chinese: "有朝一日" },
        { id: 14, english: "how", chinese: "怎样" },
        { id: 15, english: "Please", chinese: "求求你" },
        { id: 16, english: "Go away", chinese: "走开" },
        { id: 17, english: "net", chinese: "网" },
        { id: 18, english: "sad", chinese: "难过" },
        { id: 19, english: "Help", chinese: "救命" },
        { id: 20, english: "there is", chinese: "有" },
        { id: 21, english: "hole", chinese: "洞" },
        { id: 22, english: "kind", chinese: "友好" },
        { id: 23, english: "become", chinese: "变为" },
        { id: 24, english: "other", chinese: "其他" },
        { id: 25, english: "room", chinese: "房间" },
        { id: 26, english: "computer", chinese: "电脑" },
        { id: 27, english: "swing", chinese: "秋千" },
        { id: 28, english: "playground", chinese: "操场" },
        { id: 29, english: "have a look", chinese: "看一看" },
        { id: 30, english: "careful", chinese: "小心" },
        { id: 31, english: "feel", chinese: "觉得" },
        { id: 32, english: "take", chinese: "拿" },
        { id: 33, english: "first", chinese: "第一" },
        { id: 34, english: "floor", chinese: "楼层" },
        { id: 35, english: "show ... around", chinese: "参观" },
        { id: 36, english: "any", chinese: "任何" },
        { id: 37, english: "third", chinese: "第三" },
        { id: 38, english: "later", chinese: "以后" },
        { id: 39, english: "piano", chinese: "钢琴" },
        { id: 40, english: "second", chinese: "第二" },
        { id: 41, english: "road", chinese: "道路" },
        { id: 42, english: "safety", chinese: "安全" },
        { id: 43, english: "bus", chinese: "巴士" },
        { id: 44, english: "traffic light", chinese: "信号灯" },
        { id: 45, english: "take", chinese: "乘坐" },
        { id: 46, english: "busy", chinese: "忙碌" },
        { id: 47, english: "stay", chinese: "保持" },
        { id: 48, english: "close", chinese: "接近" },
        { id: 49, english: "cross", chinese: "穿过" },
        { id: 50, english: "stop", chinese: "停下" },
        { id: 51, english: "wait", chinese: "等待" },
        { id: 52, english: "left", chinese: "左边" },
        { id: 53, english: "right", chinese: "右边" },
        { id: 54, english: "safe", chinese: "安全" },
        { id: 55, english: "care about", chinese: "关心" },
        { id: 56, english: "hungry", chinese: "饿" },
        { id: 57, english: "thirsty", chinese: "渴" },
        { id: 58, english: "ill", chinese: "生病" },
        { id: 59, english: "tired", chinese: "疲倦" },
        { id: 60, english: "hot", chinese: "热" },
        { id: 61, english: "water", chinese: "水" },
        { id: 62, english: "have a rest", chinese: "休息" },
        { id: 63, english: "What's the matter", chinese: "怎么了" },
        { id: 64, english: "home", chinese: "家" },
        { id: 65, english: "bag", chinese: "包" },
        { id: 66, english: "bread", chinese: "面包" },
        { id: 67, english: "dear", chinese: "亲爱的" },
        { id: 68, english: "set the table", chinese: "摆餐具" },
        { id: 69, english: "eat out", chinese: "外出吃饭" },
        { id: 70, english: "fried rice", chinese: "炒饭" },
        { id: 71, english: "spring roll", chinese: "春卷" },
        { id: 72, english: "noodle", chinese: "面条" },
        { id: 73, english: "tea", chinese: "茶" },
        { id: 74, english: "juice", chinese: "果汁" },
        { id: 75, english: "menu", chinese: "菜单" },
        { id: 76, english: "What would you like", chinese: "你想要什么" },
        { id: 77, english: "fish and chips", chinese: "炸鱼薯条" },
        { id: 78, english: "sandwich", chinese: "三明治" },
        { id: 79, english: "hot dog", chinese: "热狗" },
        { id: 80, english: "delicious", chinese: "美味" },
        { id: 81, english: "Anything else", chinese: "还要其他东西" },
        { id: 82, english: "a glass of", chinese: "一杯" },
        { id: 83, english: "a cup of", chinese: "一杯" },
        { id: 84, english: "food", chinese: "食物" },
        { id: 85, english: "next time", chinese: "下次" },
        { id: 86, english: "hot pot", chinese: "火锅" },
        { id: 87, english: "takeaway box", chinese: "打包盒" },
        { id: 88, english: "job", chinese: "工作" },
        { id: 89, english: "driver", chinese: "司机" },
        { id: 90, english: "nurse", chinese: "护士" },
        { id: 91, english: "worker", chinese: "工人" },
        { id: 92, english: "teacher", chinese: "教师" },
        { id: 93, english: "doctor", chinese: "医生" },
        { id: 94, english: "farmer", chinese: "农民" },
        { id: 95, english: "cook", chinese: "厨师" },
        { id: 96, english: "police officer", chinese: "警察" },
        { id: 97, english: "hospital", chinese: "医院" },
        { id: 98, english: "parent", chinese: "父母" },
        { id: 99, english: "work", chinese: "工作" },
        { id: 100, english: "sick", chinese: "生病" },
        { id: 101, english: "people", chinese: "人们" },
        { id: 102, english: "busy", chinese: "忙碌" },
        { id: 103, english: "taxi", chinese: "出租车" },
        { id: 104, english: "train", chinese: "火车" },
        { id: 105, english: "place", chinese: "地方" },
        { id: 106, english: "way", chinese: "方式" },
        { id: 107, english: "chore", chinese: "日常事务" },
        { id: 108, english: "dish", chinese: "碗" },
        { id: 109, english: "water", chinese: "浇" },
        { id: 110, english: "make the bed", chinese: "铺床" },
        { id: 111, english: "what", chinese: "真" },
        { id: 112, english: "house", chinese: "房子" },
        { id: 113, english: "part of", chinese: "部分" },
        { id: 114, english: "so", chinese: "所以" },
        { id: 115, english: "half", chinese: "一半" },
        { id: 116, english: "past", chinese: "过" },
        { id: 117, english: "weekend", chinese: "周末" },
        { id: 118, english: "kitchen", chinese: "厨房" },
        { id: 119, english: "milk", chinese: "牛奶" },
        { id: 120, english: "tomato", chinese: "番茄" },
        { id: 121, english: "potato", chinese: "土豆" },
        { id: 122, english: "chicken", chinese: "鸡肉" },
        { id: 123, english: "egg", chinese: "鸡蛋" },
        { id: 124, english: "birthday", chinese: "生日" },
        { id: 125, english: "soup", chinese: "汤" },
        { id: 126, english: "him", chinese: "他" },
        { id: 127, english: "really", chinese: "非常" },
        { id: 128, english: "cut", chinese: "切" },
        { id: 129, english: "meat", chinese: "肉" },
        { id: 130, english: "I can't wait", chinese: "我等不及" },
        { id: 131, english: "get", chinese: "取" },
        { id: 132, english: "school", chinese: "学校" },
        { id: 133, english: "thing", chinese: "事情" },
        { id: 134, english: "pen", chinese: "钢笔" },
        { id: 135, english: "pencil", chinese: "铅笔" },
        { id: 136, english: "that", chinese: "那个" },
        { id: 137, english: "ruler", chinese: "尺子" },
        { id: 138, english: "schoolbag", chinese: "书包" },
        { id: 139, english: "put", chinese: "放" },
        { id: 140, english: "guess", chinese: "猜" },
        { id: 141, english: "again", chinese: "再一次" },
        { id: 142, english: "long", chinese: "长" },
        { id: 143, english: "our", chinese: "我们的" },
        { id: 144, english: "classroom", chinese: "教室" },
        { id: 145, english: "close", chinese: "关心" },
        { id: 146, english: "window", chinese: "窗户" },
        { id: 147, english: "chair", chinese: "椅子" },
        { id: 148, english: "floor", chinese: "地板" },
        { id: 149, english: "let", chinese: "让" },
        { id: 150, english: "us", chinese: "我们" },
    ],
};

// 首页对白
const DIALOGS = [
    '欢迎来到小蛋的单词冒险世界！',
    '小蛋今天也要努力收集单词哦！',
    '学会一个单词，就获得一颗知识星星！',
    '加油！你是最棒的！',
    '今天也要开开心心学英语呀~',
    '收集更多星星，解锁新皮肤吧！'
];

// ==================== 游戏状态 ====================

let gameData = null;
let currentMap = 'desert';
let currentLevel = 1;
let currentWordIndex = 0;
let currentScore = 0;
let currentQuestion = null;
let currentOptions = [];
let timerInterval = null;
let timeLeft = 30;
let gameActive = false;

// ==================== 存档系统 ====================

// 碎片兑换价格
const EXCHANGE_COST = {
    common: 5,
    rare: 7,
    epic: 10,
    legendary: 15,
    mythic: 40
};

// 重复皮肤转化碎片数量
const DUPLICATE_FRAGMENTS = {
    common: 1,
    rare: 2,
    epic: 3,
    legendary: 5,
    mythic: 10
};

function initGameData() {
    return {
        version: '2.0',
        username: '',
        createTime: Date.now(),
        lastPlayTime: Date.now(),
        stars: 0,
        diamonds: 0,
        airCount: 0,
        skinFragments: 0,
        pityCount: 0,
        mistakes: {},
        currentSkin: 'default',
        unlockedSkins: ['default'],
        dailyCheck: {
            lastCheckDate: '',
            continuousDays: 0
        },
        dailyTask: {
            date: getTodayStr(),
            threeStarCount: 0,
            diamondClaimed: false
        },
        maps: {
            desert: {
                unlocked: true,
                totalScore: 0,
                totalStars: 0,
                diamondClaimed: false,
                levels: {}
            },
            forest: {
                unlocked: false,
                totalScore: 0,
                totalStars: 0,
                diamondClaimed: false,
                levels: {}
            }
        }
    };
}

function initLevels(mapId) {
    const levels = {};
    for (let i = 1; i <= 16; i++) {
        levels[i] = {
            bestScore: 0,
            stars: 0,
            unlocked: i === 1
        };
    }
    return levels;
}

function saveGame() {
    localStorage.setItem('eggy_save_data', JSON.stringify(gameData));
}

function loadGame() {
    const saved = localStorage.getItem('eggy_save_data');
    if (saved) {
        try {
            const loadedData = JSON.parse(saved);
            gameData = initGameData(); // 先用默认值初始化
            
            // 合并已有的数据
            Object.assign(gameData, loadedData);
            
            // 确保每日签到字段存在
            if (!gameData.dailyCheck) {
                gameData.dailyCheck = {
                    lastCheckDate: '',
                    continuousDays: 0
                };
            }
            
            // 确保每日任务字段存在
            if (!gameData.dailyTask) {
                gameData.dailyTask = {
                    date: getTodayStr(),
                    threeStarCount: 0,
                    diamondClaimed: false
                };
            }
            
            // 确保空气计数字段存在
            if (gameData.airCount === undefined) {
                gameData.airCount = 0;
            }

            // 错题本：兼容旧存档
            if (!gameData.mistakes || typeof gameData.mistakes !== 'object') {
                gameData.mistakes = {};
            }
            
            // 确保皮肤碎片字段存在
            if (gameData.skinFragments === undefined) {
                gameData.skinFragments = 0;
            }
            
            // 确保保底计数字段存在
            if (gameData.pityCount === undefined) {
                gameData.pityCount = 0;
            }
            
            // 确保解锁皮肤数组存在
            if (!gameData.unlockedSkins || !Array.isArray(gameData.unlockedSkins)) {
                gameData.unlockedSkins = ['default'];
            }
            
            // 确保当前皮肤存在
            if (!gameData.currentSkin) {
                gameData.currentSkin = 'default';
            }
            
            // 确保maps存在
            if (!gameData.maps) {
                gameData.maps = initGameData().maps;
            }
            
            // 确保关卡数据完整
            ['desert', 'forest'].forEach(mapId => {
                if (!gameData.maps[mapId]) {
                    gameData.maps[mapId] = {
                        unlocked: mapId === 'desert',
                        totalScore: 0,
                        totalStars: 0,
                        diamondClaimed: false,
                        levels: {}
                    };
                }
                if (!gameData.maps[mapId].levels || Object.keys(gameData.maps[mapId].levels).length < 16) {
                    const newLevels = initLevels(mapId);
                    if (gameData.maps[mapId].levels) {
                        Object.assign(newLevels, gameData.maps[mapId].levels);
                    }
                    gameData.maps[mapId].levels = newLevels;
                }
            });
            
            return true;
        } catch(e) {
            console.error('加载存档失败:', e);
            return false;
        }
    }
    return false;
}

// 重置游戏
function resetGame() {
    if (confirm('确定要重置游戏吗？所有进度都会清空，无法恢复！')) {
        localStorage.removeItem('eggy_save_data');
        location.reload();
    }
}

function getTodayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

// ==================== 页面切换 ====================

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// ==================== 登录/注册 ====================

function login() {
    const username = document.getElementById('username').value.trim();
    
    if (!username) {
        alert('请输入一个学习昵称！');
        return;
    }
    
    if (loadGame()) {
        // 单机学习档案：昵称仅用于展示，不保存密码。
        if (gameData.username && gameData.username !== username) {
            const shouldRename = confirm(`当前学习档案属于“${gameData.username}”。要改为“${username}”继续吗？`);
            if (!shouldRename) return;
            gameData.username = username;
            saveGame();
        }
        enterGame();
    } else {
        // 新建本机学习档案
        gameData = initGameData();
        gameData.username = username;
        gameData.maps.desert.levels = initLevels('desert');
        gameData.maps.forest.levels = initLevels('forest');
        saveGame();
        enterGame();
    }
}

function enterGame() {
    updateUI();
    showPage('home-page');
    randomDialog();
}

// ==================== UI更新 ====================

function updateUI() {
    // 更新货币
    const starsEl = document.getElementById('stars-count');
    if (starsEl) starsEl.textContent = gameData.stars;
    
    const diamondsEl = document.getElementById('diamonds-count');
    if (diamondsEl) diamondsEl.textContent = gameData.diamonds;
    
    // 更新首页小蛋
    const homeEggEl = document.getElementById('home-egg');
    if (homeEggEl) {
        const skin = SKINS[gameData.currentSkin];
        homeEggEl.style.backgroundImage = `url(${skin.img})`;
    }
    
    // 更新地图星星
    const desertStarsEl = document.getElementById('desert-stars');
    if (desertStarsEl) {
        desertStarsEl.textContent = `${gameData.maps.desert.totalStars} / 45`;
    }
    
    const forestStarsEl = document.getElementById('forest-stars');
    if (forestStarsEl) {
        forestStarsEl.textContent = `${gameData.maps.forest.totalStars} / 45`;
    }
    
    // 检查森林地图是否解锁
    const desertStars = gameData.maps.desert.totalStars;
    if (desertStars >= 23) { // 45的50%是22.5，取23
        gameData.maps.forest.unlocked = true;
        const forestCard = document.getElementById('forest-map-card');
        if (forestCard) {
            forestCard.classList.remove('map-locked');
        }
    }
    
    // 更新空气数量
    const airCountEl = document.getElementById('air-count');
    if (airCountEl) {
        airCountEl.textContent = gameData.airCount;
    }
    
    // 更新当前皮肤
    const currentSkin = SKINS[gameData.currentSkin];
    const skinPreviewEl = document.getElementById('current-skin-preview');
    if (skinPreviewEl) {
        skinPreviewEl.style.backgroundImage = `url(${currentSkin.img})`;
    }
    
    const skinNameEl = document.getElementById('current-skin-name');
    if (skinNameEl) {
        skinNameEl.textContent = currentSkin.name;
    }
    
    // 每日签到红点
    const today = getTodayStr();
    const checkDot = document.getElementById('check-dot');
    if (checkDot) {
        if (gameData.dailyCheck.lastCheckDate !== today) {
            checkDot.classList.add('show');
        } else {
            checkDot.classList.remove('show');
        }
    }
    
    // 更新保底进度
    const pityCountEl = document.getElementById('pity-count');
    const pityFillEl = document.getElementById('pity-fill');
    if (pityCountEl && pityFillEl) {
        pityCountEl.textContent = gameData.pityCount;
        pityFillEl.style.width = `${(gameData.pityCount / 40) * 100}%`;
    }
    
    // 更新皮肤碎片
    const fragmentCountEl = document.getElementById('fragment-count');
    if (fragmentCountEl) {
        fragmentCountEl.textContent = gameData.skinFragments;
    }
}

function randomDialog() {
    const dialog = DIALOGS[Math.floor(Math.random() * DIALOGS.length)];
    document.getElementById('dialog-text').textContent = dialog;
}

// 预加载语音列表（部分浏览器首次 getVoices() 返回空，需在加载完成后重试）
function warmUpVoices() {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.getVoices();
    if (typeof window.speechSynthesis.onvoiceschanged === 'undefined' ||
        window.speechSynthesis.onvoiceschanged === null) {
        window.speechSynthesis.onvoiceschanged = function () {
            window.speechSynthesis.getVoices();
        };
    }
}

// 选取一个英文语音；移动端必须显式指定 voice，否则默认中文语音可能静音或读不出来
function getEnglishVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices.length) return null;
    // 1. 优先：en-US 且为常见英文音色
    // 2. 其次：任意英语语音（en 开头）
    // 3. 兜底：en-US
    const preferName = /Google|Siri|Samantha|Microsoft|Daniel|Karen|Moira|Tessa/i;
    const enUSNamed = voices.find(v => v.lang === 'en-US' && preferName.test(v.name));
    const enAny = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('en'));
    const enUS = voices.find(v => v.lang === 'en-US');
    return enUSNamed || enAny || enUS || null;
}

// 使用浏览器内置语音朗读；移动端需要由点击事件触发。
function speakWord(word) {
    if (!('speechSynthesis' in window)) {
        alert('当前浏览器不支持语音朗读。');
        return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    const voice = getEnglishVoice();
    if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang; // 与所选语音保持一致
    }
    window.speechSynthesis.speak(utterance);
}

function speakCurrentWord() {
    if (currentQuestion) speakWord(currentQuestion.english);
}

function recordMistake() {
    if (!currentQuestion || !gameData) return;
    const key = `${currentMap}:${currentQuestion.id}`;
    const previous = gameData.mistakes[key];
    gameData.mistakes[key] = {
        english: currentQuestion.english,
        chinese: currentQuestion.chinese,
        count: (previous?.count || 0) + 1,
        updatedAt: Date.now()
    };
}

function goToReview() {
    renderReviewList();
    showPage('review-page');
}

function renderReviewList() {
    const container = document.getElementById('review-list');
    const clearButton = document.getElementById('clear-mistakes-btn');
    container.replaceChildren();
    const mistakes = Object.values(gameData?.mistakes || {})
        .sort((a, b) => b.count - a.count || b.updatedAt - a.updatedAt);

    if (!mistakes.length) {
        const empty = document.createElement('div');
        empty.className = 'review-empty';
        empty.textContent = '太棒了！这里还没有错题。继续闯关吧！';
        container.appendChild(empty);
        clearButton.hidden = true;
        return;
    }

    clearButton.hidden = false;
    mistakes.forEach(item => {
        const card = document.createElement('article');
        card.className = 'review-card';
        const details = document.createElement('div');
        const word = document.createElement('div');
        word.className = 'review-word';
        word.textContent = item.english;
        const meaning = document.createElement('div');
        meaning.className = 'review-meaning';
        meaning.textContent = item.chinese;
        const count = document.createElement('div');
        count.className = 'review-count';
        count.textContent = `答错 ${item.count} 次`;
        details.append(word, meaning, count);

        const speak = document.createElement('button');
        speak.type = 'button';
        speak.className = 'review-speak';
        speak.textContent = '🔊';
        speak.setAttribute('aria-label', `朗读 ${item.english}`);
        speak.onclick = () => speakWord(item.english);
        card.append(details, speak);
        container.appendChild(card);
    });
}

function clearMistakes() {
    if (!Object.keys(gameData?.mistakes || {}).length) return;
    if (confirm('确认清空全部错题吗？清空后无法恢复。')) {
        gameData.mistakes = {};
        saveGame();
        renderReviewList();
    }
}

// ==================== 页面导航 ====================

function goToHome() {
    updateUI();
    randomDialog();
    showPage('home-page');
}

function goToMapSelect() {
    updateUI();
    showPage('map-select-page');
}

function goToShop() {
    updateUI();
    showPage('shop-page');
}

function goToSkin() {
    renderSkinList();
    showPage('skin-page');
}

function selectMap(mapId) {
    if (!gameData.maps[mapId].unlocked) {
        alert('这张地图还没解锁哦！获得上一张地图50%的星星就能解锁啦~');
        return;
    }
    currentMap = mapId;
    renderLevelSelect();
    showPage('level-select-page');
}

function goToLevelSelect() {
    renderLevelSelect();
    showPage('level-select-page');
}

// ==================== 关卡选择 ====================

function renderLevelSelect() {
    const mapData = gameData.maps[currentMap];
    const title = currentMap === 'desert' ? '沙漠冒险' : '原始森林';
    document.getElementById('level-map-title').textContent = title;
    
    // 设置初始背景图（用第1关的图）
    const bgEl = document.getElementById('level-bg');
    const bgImg = MAP_BACKGROUNDS[currentMap][0];
    bgEl.style.backgroundImage = `url(${bgImg})`;
    
    const container = document.getElementById('level-nodes');
    container.innerHTML = '';
    
    for (let i = 1; i <= 16; i++) {
        const levelData = mapData.levels[i];
        const node = document.createElement('div');
        node.className = 'level-node';
        
        if (i === 16) {
            node.classList.add('review');
        }
        
        if (!levelData.unlocked) {
            node.classList.add('locked');
        }
        
        let starsHtml = '';
        if (levelData.stars > 0) {
            starsHtml = '⭐'.repeat(levelData.stars);
        }
        
        node.innerHTML = `
            <div class="level-num">${i === 16 ? '复' : i}</div>
            <div class="level-stars">${starsHtml}</div>
        `;
        
        // 鼠标悬停切换背景
        const bgIndex = i <= 15 ? i - 1 : 14; // 第16关用第15张图
        node.onmouseenter = () => {
            bgEl.style.backgroundImage = `url(${MAP_BACKGROUNDS[currentMap][bgIndex]})`;
        };
        
        if (levelData.unlocked) {
            node.onclick = () => startLevel(i);
        }
        
        container.appendChild(node);
    }
}

// ==================== 游戏逻辑 - 打地鼠 ====================

function startLevel(level) {
    currentLevel = level;
    currentWordIndex = 0;
    currentScore = 0;
    gameActive = true;
    
    showPage('game-page');
    nextWord();
}

function getLevelWords(level) {
    const words = WORD_DATA[currentMap];
    
    if (level === 16) {
        // 复习关：随机抽10个
        return shuffleArray([...words]).slice(0, 10);
    } else {
        // 普通关：按顺序取10个
        const start = (level - 1) * 10;
        return words.slice(start, start + 10);
    }
}

function nextWord() {
    if (!gameActive) return;
    
    const words = getLevelWords(currentLevel);
    
    if (currentWordIndex >= words.length) {
        // 游戏结束
        endGame();
        return;
    }
    
    currentQuestion = words[currentWordIndex];
    
    // 生成4个选项（1个正确 + 3个错误）
    const allWords = WORD_DATA[currentMap];
    const wrongOptions = allWords.filter(w => w.id !== currentQuestion.id);
    const shuffledWrong = shuffleArray(wrongOptions).slice(0, 3);
    
    currentOptions = shuffleArray([currentQuestion, ...shuffledWrong]);
    
    // 更新UI
    document.getElementById('current-word-num').textContent = currentWordIndex + 1;
    document.getElementById('game-score').textContent = currentScore;
    document.getElementById('question-text').textContent = currentQuestion.chinese;
    
    // 显示地鼠
    for (let i = 0; i < 4; i++) {
        const mole = document.getElementById(`mole-${i}`);
        const wordEl = document.getElementById(`word-${i}`);
        
        mole.className = 'mole';
        wordEl.textContent = currentOptions[i].english;
        
        setTimeout(() => {
            mole.classList.add('show');
        }, i * 100);
    }
    
    // 开始计时
    startTimer();
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('timer').textContent = timeLeft;
    
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function whackAnswer(index) {
    if (!gameActive) return;
    
    clearInterval(timerInterval);
    
    const selectedWord = currentOptions[index];
    const mole = document.getElementById(`mole-${index}`);
    
    if (selectedWord.id === currentQuestion.id) {
        // 答对了
        currentScore += 2;
        mole.classList.add('correct');
        playCorrect();
        
        setTimeout(() => {
            currentWordIndex++;
            nextWord();
        }, 500);
    } else {
        // 答错了
        currentScore = Math.max(0, currentScore - 1);
        recordMistake();
        saveGame();
        mole.classList.add('wrong');
        document.getElementById('game-score').textContent = currentScore;
        playWrong();
        
        setTimeout(() => {
            currentWordIndex++;
            nextWord();
        }, 800);
    }
}

function handleTimeout() {
    if (!gameActive) return;
    
    currentScore = Math.max(0, currentScore - 1);
    recordMistake();
    saveGame();
    document.getElementById('game-score').textContent = currentScore;
    playWrong();
    
    setTimeout(() => {
        currentWordIndex++;
        nextWord();
    }, 500);
}

function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    
    // 计算星级
    let stars = 0;
    if (currentLevel === 16) {
        // 复习关
        stars = currentScore >= 20 ? 5 : 0;
    } else {
        // 普通关
        if (currentScore >= 19) stars = 3;
        else if (currentScore >= 16) stars = 2;
        else if (currentScore >= 10) stars = 1;
        else stars = 0;
    }
    
    // 更新存档
    const levelData = gameData.maps[currentMap].levels[currentLevel];
    const oldStars = levelData.stars;
    
    if (currentScore > levelData.bestScore) {
        levelData.bestScore = currentScore;
    }
    
    if (stars > levelData.stars) {
        // 新增的星星加到总数
        const starDiff = stars - oldStars;
        levelData.stars = stars;
        gameData.stars += starDiff;
        gameData.maps[currentMap].totalStars += starDiff;
        
        // 每日任务：三星计数
        if (stars === 3 && currentLevel !== 16) {
            checkDailyTask();
        }
    }
    
    // 解锁下一关
    if (currentLevel < 16) {
        gameData.maps[currentMap].levels[currentLevel + 1].unlocked = true;
    }
    
    // 检查地图通关奖励
    checkMapClearReward();
    
    // 检查下一张地图解锁
    checkMapUnlock();
    
    saveGame();
    
    // 播放胜利音效
    if (stars === 3) {
        // 三星通关：特殊语音（最大音量）
        playWin();
        setTimeout(() => {
            speak('黄昊浩一级棒！', 1.5);
        }, 800);
    } else if (stars >= 2) {
        playWin();
    }
    
    // 显示结算
    showResult(stars);
}

// 语音合成
function speak(text, volume = 1) {
    if ('speechSynthesis' in window) {
        // 停止之前的语音
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 1.1; // 语速稍快
        utterance.pitch = 1.2; // 音调稍高，更可爱
        utterance.volume = volume; // 音量
        // 显式选择中文语音，避免移动端默认语音异常导致无声
        const zhVoice = window.speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith('zh'));
        if (zhVoice) {
            utterance.voice = zhVoice;
            utterance.lang = zhVoice.lang;
        }
        window.speechSynthesis.speak(utterance);
    }
}

function checkDailyTask() {
    const today = getTodayStr();
    if (gameData.dailyTask.date !== today) {
        gameData.dailyTask.date = today;
        gameData.dailyTask.threeStarCount = 0;
        gameData.dailyTask.diamondClaimed = false;
    }
    
    gameData.dailyTask.threeStarCount++;
    
    if (gameData.dailyTask.threeStarCount >= 3 && !gameData.dailyTask.diamondClaimed) {
        gameData.diamonds += 1;
        gameData.dailyTask.diamondClaimed = true;
        setTimeout(() => {
            alert('🎉 每日任务完成！获得1颗钻石！');
        }, 1000);
    }
}

function checkMapClearReward() {
    const mapData = gameData.maps[currentMap];
    let totalScore = 0;
    for (let i = 1; i <= 15; i++) {
        totalScore += mapData.levels[i].bestScore;
    }
    mapData.totalScore = totalScore;
    
    if (totalScore > 290 && !mapData.diamondClaimed) {
        mapData.diamondClaimed = true;
        gameData.diamonds += 10;
        setTimeout(() => {
            alert('🏆 恭喜通关整张地图！获得10颗钻石！');
        }, 1000);
    }
}

function checkMapUnlock() {
    const desertStars = gameData.maps.desert.totalStars;
    if (desertStars >= 23) { // 45的50%
        gameData.maps.forest.unlocked = true;
    }
}

function showResult(stars) {
    document.getElementById('final-score').textContent = currentScore;
    
    let starsHtml = '';
    if (stars > 0) {
        starsHtml = '⭐'.repeat(stars);
    } else {
        starsHtml = '😢';
    }
    document.getElementById('result-stars').textContent = starsHtml;
    
    const starReward = currentLevel === 16 ? (stars === 5 ? 5 : 0) : stars;
    document.getElementById('reward-stars').textContent = starReward;
    
    if (currentLevel === 16) {
        document.getElementById('result-title').textContent = stars === 5 ? '完美通关！' : '复习关结束';
    } else {
        document.getElementById('result-title').textContent = '关卡完成！';
    }
    
    showPage('result-page');
}

function retryLevel() {
    startLevel(currentLevel);
}

function exitGame() {
    if (confirm('确定要退出吗？当前进度不会保存哦~')) {
        gameActive = false;
        clearInterval(timerInterval);
        goToLevelSelect();
    }
}

// ==================== 商城抽奖 ====================

function gachaOne() {
    if (gameData.stars < 1) {
        alert('星星不够啦！快去闯关获得更多星星吧~');
        return;
    }
    
    gameData.stars -= 1;
    const result = doGacha();
    saveGame();
    updateUI();
    
    playGacha();
    
    // 如果是稀有以上品质，播放稀有音效
    setTimeout(() => {
        if (result.type === 'skin' && (result.rarity === 'rare' || result.rarity === 'epic' || result.rarity === 'legendary' || result.rarity === 'mythic')) {
            playRare();
        }
        showGachaResult(result);
    }, 500);
}

function gachaTen() {
    if (gameData.diamonds < 1) {
        alert('钻石不够啦！完成每日任务和通关地图可以获得钻石~');
        return;
    }
    
    gameData.diamonds -= 1;
    const results = [];
    for (let i = 0; i < 10; i++) {
        results.push(doGacha());
    }
    saveGame();
    updateUI();
    
    playGacha();
    
    // 检查有没有稀有以上品质
    const hasRare = results.some(r => r.type === 'skin' && (r.rarity === 'rare' || r.rarity === 'epic' || r.rarity === 'legendary' || r.rarity === 'mythic'));
    
    setTimeout(() => {
        if (hasRare) {
            playRare();
        }
        showGachaTenResult(results);
    }, 800);
}

function doGacha() {
    gameData.pityCount++;
    
    // 保底机制：40抽必出传说及以上
    let result;
    if (gameData.pityCount >= 40) {
        // 从传说和至尊无敌中随机选一个
        const highRaritySkins = Object.entries(SKINS).filter(([id, skin]) => 
            skin.rarity === 'legendary' || skin.rarity === 'mythic'
        );
        // 传说权重5，至尊权重1，按比例随机
        const random = Math.random() * 6; // 5+1=6
        let selected;
        if (random < 5) {
            // 传说
            const legendarySkins = highRaritySkins.filter(([id, s]) => s.rarity === 'legendary');
            selected = legendarySkins[Math.floor(Math.random() * legendarySkins.length)];
        } else {
            // 至尊无敌
            const mythicSkins = highRaritySkins.filter(([id, s]) => s.rarity === 'mythic');
            selected = mythicSkins[Math.floor(Math.random() * mythicSkins.length)];
        }
        result = { type: 'skin', id: selected[0], name: selected[1].name, img: selected[1].img, rarity: selected[1].rarity, isPity: true };
        gameData.pityCount = 0; // 重置保底
    } else {
        // 正常抽奖
        const totalWeight = GACHA_POOL.reduce((sum, item) => sum + item.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const item of GACHA_POOL) {
            random -= item.weight;
            if (random <= 0) {
                if (item.id === 'fragment') {
                    gameData.skinFragments++;
                    result = { type: 'fragment', name: '皮肤碎片', icon: '🧩', fragmentCount: 1 };
                } else {
                    const skin = SKINS[item.id];
                    result = { type: 'skin', id: item.id, name: skin.name, img: skin.img, rarity: skin.rarity };
                    
                    // 抽到传说及以上，重置保底
                    if (skin.rarity === 'legendary' || skin.rarity === 'mythic') {
                        gameData.pityCount = 0;
                    }
                }
                break;
            }
        }
        
        // 兜底碎片
        if (!result) {
            gameData.skinFragments++;
            result = { type: 'fragment', name: '皮肤碎片', icon: '🧩', fragmentCount: 1 };
        }
    }
    
    // 处理重复皮肤转化为碎片
    if (result.type === 'skin') {
        if (gameData.unlockedSkins.includes(result.id)) {
            // 已拥有，转化为碎片
            const fragmentCount = DUPLICATE_FRAGMENTS[result.rarity];
            gameData.skinFragments += fragmentCount;
            result.duplicate = true;
            result.fragmentCount = fragmentCount;
        } else {
            // 新皮肤，解锁
            gameData.unlockedSkins.push(result.id);
        }
    }
    
    return result;
}

function showGachaResult(result) {
    const modal = document.getElementById('gacha-modal');
    const titleEl = document.getElementById('gacha-result-title');
    const resultSkinEl = document.getElementById('gacha-result-skin');
    const nameEl = document.getElementById('gacha-result-name');
    const singleResult = document.getElementById('gacha-single-result');
    const tenResult = document.getElementById('gacha-ten-result');
    
    // 显示单抽结果，隐藏十连结果
    singleResult.style.display = 'block';
    tenResult.style.display = 'none';
    
    // 重置样式
    resultSkinEl.style.animation = '';
    nameEl.style.color = '';
    nameEl.style.fontWeight = '';
    
    if (result.type === 'fragment') {
        titleEl.textContent = '🧩 获得皮肤碎片！';
    } else {
        let title = '';
        const rarityTitles = {
            common: '获得普通皮肤',
            rare: '🎉 稀有皮肤！',
            epic: '💜 史诗皮肤！太棒了！',
            legendary: '✨ 传说皮肤！欧皇附体！',
            mythic: '👑 至尊无敌！！！你是天选之人！！！'
        };
        title = rarityTitles[result.rarity] || '恭喜获得！';
        
        // 保底提示
        if (result.isPity) {
            title = '🎊 保底出货！' + title;
        }
        
        // 重复提示
        if (result.duplicate) {
            title += ' (已拥有)';
        }
        
        titleEl.textContent = title;
        
        // 不同品质的特效
        if (result.rarity === 'mythic') {
            resultSkinEl.style.animation = 'mythic-shine 1s infinite';
            nameEl.style.color = '#FF00FF';
            nameEl.style.fontWeight = 'bold';
        } else if (result.rarity === 'legendary') {
            resultSkinEl.style.animation = 'legendary-shine 2s infinite';
            nameEl.style.color = '#FFA500';
            nameEl.style.fontWeight = 'bold';
        } else if (result.rarity === 'epic') {
            nameEl.style.color = '#9333EA';
            nameEl.style.fontWeight = 'bold';
        }
    }
    
    if (result.type === 'skin') {
        resultSkinEl.style.backgroundImage = `url(${result.img})`;
        resultSkinEl.textContent = '';
        
        // 重复皮肤显示碎片获得
        if (result.duplicate) {
            nameEl.innerHTML = `${result.name}<br><small style="color:#666">转化为 ${result.fragmentCount} 个皮肤碎片</small>`;
        } else {
            nameEl.textContent = result.name;
        }
    } else {
        resultSkinEl.style.backgroundImage = '';
        resultSkinEl.textContent = result.icon;
        nameEl.textContent = result.name;
    }
    
    // 抽中昊浩蛋：特殊语音
    if (result.type === 'skin' && result.id === 'haohao') {
        setTimeout(() => {
            speak('天才昊浩闪亮登场！', 1.5);
        }, 500);
    }
    
    modal.classList.add('show');
}

function showGachaTenResult(results) {
    const modal = document.getElementById('gacha-modal');
    const titleEl = document.getElementById('gacha-result-title');
    const singleResult = document.getElementById('gacha-single-result');
    const tenResult = document.getElementById('gacha-ten-result');
    const grid = document.getElementById('gacha-ten-grid');
    const summaryEl = document.getElementById('gacha-ten-summary');
    
    // 隐藏单抽结果，显示十连结果
    singleResult.style.display = 'none';
    tenResult.style.display = 'block';
    
    titleEl.textContent = '🎉 十连抽结果！';
    
    // 生成10个结果
    grid.innerHTML = '';
    
    let skinCount = 0;
    let fragmentCount = 0;
    let bestRarity = 'common';
    
    const rarityOrder = ['common', 'rare', 'epic', 'legendary', 'mythic'];
    
    results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'gacha-ten-item';
        
        if (result.type === 'skin') {
            skinCount++;
            item.classList.add(`rarity-${result.rarity}`);
            
            // 记录最高品质
            if (rarityOrder.indexOf(result.rarity) > rarityOrder.indexOf(bestRarity)) {
                bestRarity = result.rarity;
            }
            
            item.innerHTML = `
                <div class="gacha-ten-icon" style="background-image: url(${result.img})"></div>
                <div class="gacha-ten-name">${result.name}</div>
            `;
        } else {
            fragmentCount++;
            item.innerHTML = `
                <div class="gacha-ten-icon" style="font-size:40px;line-height:50px;">🧩</div>
                <div class="gacha-ten-name">皮肤碎片</div>
            `;
        }
        
        grid.appendChild(item);
    });
    
    // 统计信息
    const rarityNames = {
        common: '普通',
        rare: '稀有',
        epic: '史诗',
        legendary: '传说',
        mythic: '至尊无敌'
    };
    
    let summary = `获得 ${skinCount} 个皮肤，${fragmentCount} 个皮肤碎片`;
    if (skinCount > 0) {
        summary += `，最高品质：${rarityNames[bestRarity]}`;
    }
    
    // 如果有保底出货
    if (results.some(r => r.isPity)) {
        summary = '🎊 保底出货！' + summary;
        titleEl.textContent = '🎊 保底出货！';
    }
    
    summaryEl.textContent = summary;
    
    // 十连抽中昊浩蛋：特殊语音
    if (results.some(r => r.type === 'skin' && r.id === 'haohao')) {
        setTimeout(() => {
            speak('天才昊浩闪亮登场！', 1.5);
        }, 800);
    }
    
    modal.classList.add('show');
}

function closeGachaModal() {
    document.getElementById('gacha-modal').classList.remove('show');
    // 恢复单抽显示
    document.getElementById('gacha-single-result').style.display = 'block';
    document.getElementById('gacha-ten-result').style.display = 'none';
    updateUI();
}

// ==================== 碎片兑换 ====================

function showExchange() {
    const modal = document.getElementById('exchange-modal');
    const container = document.getElementById('exchange-list');
    
    document.getElementById('exchange-fragment-count').textContent = gameData.skinFragments;
    
    container.innerHTML = '';
    
    for (const [skinId, skin] of Object.entries(SKINS)) {
        const owned = gameData.unlockedSkins.includes(skinId);
        const cost = EXCHANGE_COST[skin.rarity];
        const canAfford = gameData.skinFragments >= cost;
        
        const item = document.createElement('div');
        item.className = 'exchange-item';
        if (owned) item.classList.add('owned');
        
        const rarityNames = {
            common: '普通',
            rare: '稀有',
            epic: '史诗',
            legendary: '传说',
            mythic: '至尊'
        };
        
        item.innerHTML = `
            <div class="exchange-icon" style="background-image: url(${skin.img})"></div>
            <div class="exchange-name">${skin.name}</div>
            <div class="exchange-cost">
                <span class="rarity-${skin.rarity}" style="font-size:10px;padding:2px 6px;border-radius:8px;">${rarityNames[skin.rarity]}</span>
                <br>🧩 ${cost}个
            </div>
            <button class="exchange-btn" ${owned || !canAfford ? 'disabled' : ''} onclick="exchangeSkin('${skinId}')">
                ${owned ? '已拥有' : '兑换'}
            </button>
        `;
        
        container.appendChild(item);
    }
    
    modal.classList.add('show');
}

function closeExchange() {
    document.getElementById('exchange-modal').classList.remove('show');
}

function exchangeSkin(skinId) {
    const skin = SKINS[skinId];
    const cost = EXCHANGE_COST[skin.rarity];
    
    if (gameData.skinFragments < cost) {
        alert('碎片不够哦~');
        return;
    }
    
    if (gameData.unlockedSkins.includes(skinId)) {
        alert('你已经拥有这个皮肤了！');
        return;
    }
    
    gameData.skinFragments -= cost;
    gameData.unlockedSkins.push(skinId);
    saveGame();
    updateUI();
    showExchange(); // 刷新兑换列表
    
    alert(`🎉 兑换成功！获得【${skin.name}】！`);
}

// ==================== 皮肤系统 ====================

function renderSkinList() {
    const container = document.getElementById('skin-list');
    container.innerHTML = '';
    
    for (const [skinId, skin] of Object.entries(SKINS)) {
        const unlocked = gameData.unlockedSkins.includes(skinId);
        const equipped = gameData.currentSkin === skinId;
        
        const item = document.createElement('div');
        item.className = 'skin-item';
        
        if (!unlocked) item.classList.add('locked');
        if (equipped) item.classList.add('equipped');
        
        const rarityNames = {
            common: '普通',
            rare: '稀有',
            epic: '史诗',
            legendary: '传说',
            mythic: '至尊无敌'
        };
        const rarityClass = `rarity-${skin.rarity}`;
        const rarityText = rarityNames[skin.rarity] || '普通';
        
        let statusText = '';
        if (equipped) {
            statusText = '✓ 已装备';
        } else if (unlocked) {
            statusText = '点击装备';
        } else {
            statusText = '🔒 未解锁';
        }
        
        item.innerHTML = `
            <div class="skin-icon" style="background-image: url(${skin.img})"></div>
            <div class="skin-name">${skin.name}</div>
            <div class="skin-rarity ${rarityClass}">${rarityText}</div>
            <div class="skin-status">${statusText}</div>
        `;
        
        if (unlocked && !equipped) {
            item.onclick = () => equipSkin(skinId);
        }
        
        container.appendChild(item);
    }
}

function equipSkin(skinId) {
    gameData.currentSkin = skinId;
    saveGame();
    renderSkinList();
    updateUI();
    alert('皮肤更换成功！');
}

// ==================== 每日签到 ====================

const CHECK_REWARDS = [
    { type: 'diamond', amount: 1 },  // 第1天：1钻石
    { type: 'diamond', amount: 2 },  // 第2天：2钻石
    { type: 'diamond', amount: 1 },  // 第3天：1钻石
    { type: 'diamond', amount: 1 },  // 第4天：1钻石
    { type: 'diamond', amount: 2 },  // 第5天：2钻石
    { type: 'diamond', amount: 1 },  // 第6天：1钻石
    { type: 'diamond', amount: 2 }   // 第7天：2钻石
];

function showDailyCheck() {
    const modal = document.getElementById('daily-check-modal');
    const today = getTodayStr();
    const lastCheck = gameData.dailyCheck.lastCheckDate;
    const continuousDays = gameData.dailyCheck.continuousDays;
    
    // 更新签到状态显示
    for (let i = 1; i <= 7; i++) {
        const dayEl = document.getElementById(`day-${i}`);
        dayEl.classList.remove('checked', 'today');
        
        if (i <= continuousDays) {
            dayEl.classList.add('checked');
        }
    }
    
    const checkBtn = document.getElementById('check-btn');
    const statusEl = document.getElementById('check-status');
    
    if (lastCheck === today) {
        // 今日已签到
        checkBtn.disabled = true;
        checkBtn.textContent = '今日已签到';
        statusEl.textContent = `已连续签到 ${continuousDays} 天，明天继续加油！`;
        
        // 标记今天的格子
        const todayIndex = continuousDays > 0 ? continuousDays : 1;
        if (todayIndex <= 7) {
            document.getElementById(`day-${todayIndex}`).classList.add('today');
        }
    } else {
        // 今日未签到
        checkBtn.disabled = false;
        checkBtn.textContent = '立即签到';
        
        // 计算今天是第几天
        let todayDay = 1;
        if (lastCheck) {
            const lastDate = new Date(lastCheck);
            const todayDate = new Date(today);
            const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                // 连续签到
                todayDay = continuousDays % 7 + 1;
            } else {
                // 断签了，重新开始
                todayDay = 1;
            }
        }
        
        statusEl.textContent = `今日可领取第 ${todayDay} 天奖励！`;
        
        // 标记今天的格子
        document.getElementById(`day-${todayDay}`).classList.add('today');
    }
    
    modal.classList.add('show');
}

function closeDailyCheck() {
    document.getElementById('daily-check-modal').classList.remove('show');
}

function doDailyCheck() {
    const today = getTodayStr();
    const lastCheck = gameData.dailyCheck.lastCheckDate;
    
    if (lastCheck === today) {
        alert('今日已经签到过啦！');
        return;
    }
    
    // 计算连续天数
    let continuousDays = 1;
    if (lastCheck) {
        const lastDate = new Date(lastCheck);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            continuousDays = gameData.dailyCheck.continuousDays % 7 + 1;
        }
    }
    
    // 发放奖励
    const reward = CHECK_REWARDS[continuousDays - 1];
    if (reward.type === 'star') {
        gameData.stars += reward.amount;
    } else {
        gameData.diamonds += reward.amount;
    }
    
    // 更新签到记录
    gameData.dailyCheck.lastCheckDate = today;
    gameData.dailyCheck.continuousDays = continuousDays;
    
    saveGame();
    updateUI();
    
    // 播放签到音效
    playCheckIn();
    
    // 刷新弹窗显示
    showDailyCheck();
    
    alert(`🎉 签到成功！获得 ${reward.amount} ${reward.type === 'star' ? '颗星星⭐' : '颗钻石💎'}！`);
}

// ==================== 工具函数 ====================

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ==================== 音效系统 ====================

let audioCtx = null;
let audioUnlocked = false;

// 初始化音频上下文（需要用户交互后才能初始化）
// iOS/Android：AudioContext 必须在用户手势的同步阶段创建并恢复，
// 否则会保持挂起状态，导致 setTimeout 中播放的音效（如三星通关）无声。
function initAudio() {
    if (!audioCtx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        audioCtx = new Ctx();
    }
    if (audioCtx.state === 'suspended' && audioCtx.resume) {
        audioCtx.resume().catch(function () {});
    }
}

// 在任意用户手势（点击/触摸）的同步阶段解锁音频，
// 保证后续 setTimeout 中的延时音效也能正常播放
function unlockAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    initAudio();
}
document.addEventListener('pointerdown', unlockAudio);
document.addEventListener('touchend', unlockAudio);

// 播放音调
function playTone(frequency, duration, type = 'sine', volume = 0.3) {
    if (!audioCtx) return;
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + duration);
}

// 点击音效
function playClick() {
    initAudio();
    playTone(800, 0.1, 'sine', 0.2);
}

// 答对音效
function playCorrect() {
    initAudio();
    playTone(523, 0.1, 'sine', 0.3); // C5
    setTimeout(() => playTone(659, 0.1, 'sine', 0.3), 100); // E5
    setTimeout(() => playTone(784, 0.15, 'sine', 0.3), 200); // G5
}

// 答错音效
function playWrong() {
    initAudio();
    playTone(200, 0.2, 'sawtooth', 0.2);
    setTimeout(() => playTone(150, 0.3, 'sawtooth', 0.2), 150);
}

// 抽奖音效
function playGacha() {
    initAudio();
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            playTone(400 + Math.random() * 400, 0.08, 'sine', 0.2);
        }, i * 80);
    }
}

// 获得稀有/传说音效
function playRare() {
    initAudio();
    const notes = [523, 659, 784, 1047]; // C5 E5 G5 C6
    notes.forEach((note, i) => {
        setTimeout(() => playTone(note, 0.2, 'sine', 0.3), i * 150);
    });
}

// 签到音效
function playCheckIn() {
    initAudio();
    playTone(523, 0.1, 'sine', 0.25);
    setTimeout(() => playTone(659, 0.1, 'sine', 0.25), 100);
    setTimeout(() => playTone(784, 0.1, 'sine', 0.25), 200);
    setTimeout(() => playTone(1047, 0.2, 'sine', 0.25), 300);
}

// 游戏胜利音效
function playWin() {
    initAudio();
    const notes = [523, 587, 659, 698, 784, 880, 988, 1047];
    notes.forEach((note, i) => {
        setTimeout(() => playTone(note, 0.15, 'sine', 0.25), i * 100);
    });
}

// 按钮点击音效（全局）
document.addEventListener('click', function(e) {
    // 任意点击都确保音频上下文处于运行状态，避免延时音效（如三星通关）无声
    initAudio();
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        playClick();
    }
});

// ==================== 初始化 ====================

window.onload = function() {
    warmUpVoices(); // 预加载语音列表，避免首次朗读时语音尚未就绪
    document.getElementById('login-btn').onclick = login;
    
    // 回车进入学习档案
    document.getElementById('username').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') login();
    });
    
    // 检查是否有存档
    if (loadGame()) {
        document.getElementById('username').value = gameData.username;
    }
};
