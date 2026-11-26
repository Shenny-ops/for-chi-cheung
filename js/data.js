/* ============================================================
   THE CONTACT SHEET — 內容資料
   要改照片或留言，只需要改這個檔案。
   ------------------------------------------------------------
   photos：照片集（依序顯示為 FRAME 01、02…）
     src   照片路徑（放在 images/ 資料夾）
     title 幽默短標題
     alt   照片的文字描述（給螢幕閱讀器）
     exif  右上角的小字，純裝飾
   messages：留言（依序顯示）
     name  署名
     text  留言原文（\n 代表換行）
     style "line"＝細線、"card"＝奶油白卡片、"frame"＝卡其框線
     large true＝大字重點
   ============================================================ */

window.CONTACT_SHEET = {
  photos: [
  {
    "src": "images/photo-01.jpg",
    "title": "收音測試，音量爆表",
    "alt": "四人在辦公室自拍，後方一人對著麥克風張大嘴大叫",
    "exif": "f/2.8 · 1/125"
  },
  {
    "src": "images/photo-02.jpg",
    "title": "本季最高榮譽",
    "alt": "一臉嚴肅、高高舉起小徽章",
    "exif": "f/4 · 1/60"
  },
  {
    "src": "images/photo-03.jpg",
    "title": "這位是我們今天的來賓",
    "alt": "在辦公室隔間前做出主持人介紹手勢，旁邊同事專心看螢幕",
    "exif": "f/1.8 · 1/500"
  },
  {
    "src": "images/photo-04.jpg",
    "title": "C 位出道",
    "alt": "三人站在一起，中間的人捧著大大的彩虹愛心氣球",
    "exif": "f/2 · 1/100"
  },
  {
    "src": "images/photo-05.jpg",
    "title": "",
    "alt": "走廊上兩人各拿著文件，一起比出手指愛心",
    "exif": "f/2.8 · 1/60"
  },
  {
    "src": "images/photo-06.jpg",
    "title": "專注力：全部給了漢堡",
    "alt": "餐廳裡專心準備開動，桌上是炸雞漢堡和薯條",
    "exif": "f/1.6 · 1/30"
  },
  {
    "src": "images/photo-07.jpg",
    "title": "",
    "alt": "九個人在舞台前排成一列，一起比 OK 手勢",
    "exif": "f/4 · 1/200"
  },
  {
    "src": "images/photo-08.jpg",
    "title": "新生活，先從種樹開始",
    "alt": "兩人蹲在草地上種樹，戴著手套比讚",
    "exif": "f/8 · 1/250"
  }
],

  messages: [
  {
    "name": "李孟澄",
    "text": "百年好合新婚快樂呀~",
    "style": "line",
    "large": true
  },
  {
    "name": "陳品任",
    "text": "恭喜你從PID畢業了！希望有招一日你可以用不同的身份與PID合作，也發揮你在這裡學的😎",
    "style": "line",
    "large": false
  },
  {
    "name": "陸倚恩",
    "text": "恭喜恭喜，服務崗位是一陣子的，但伴侶是一輩子的，快樂的享受接下來的時光吧！！\n謝謝譚弟兄常常為部門準備有趣的節目！",
    "style": "card",
    "large": false
  },
  {
    "name": "詹煥楨",
    "text": "譚弟兄你好，謝謝你熱心的服務，雖然少有機會見面，但參加討論時看到你的幽默，你精闢的見解和分析，真的很鼓勵我們.再次謝謝你",
    "style": "line",
    "large": false
  },
  {
    "name": "蔡佳琪",
    "text": "雖然沒有什麼機會一起工作!但我會記得你的幽默感的，謝謝你來PID幫忙~",
    "style": "frame",
    "large": false
  },
  {
    "name": "Jessica Ho",
    "text": "Why are you....... Leaving? Haha\nWe are very happy for you and the beginning of your beautiful adventure of married life with Zora! Although you will be missed, it was a real fun time to have you in PID! Thank you for bringing very loud laughter to the department and working alongside us this past year, the department trip will forever be stored in my brain's good memories box! (I am sorry for kicking sand on you)\nWe will miss having you around, and having someone to roast xD \nI'm sure we will still see each other, and I look forward to the future memes you will be sending me. \nNot really goodbye, \nThis is foot.",
    "style": "card",
    "large": false
  },
  {
    "name": "邱涵",
    "text": "雖然和譚老大一起工作的時間不長，但都是愉快好玩的珍貴回憶！我以後一定會在嫌棄標楷體之前想起它還是有忠實支持者的XD 還有以後一定記得要找時間來補吃慶功宴喔ε=ε=┏(≧▽≦)┛",
    "style": "line",
    "large": false
  },
  {
    "name": "Joy",
    "text": "謝謝你努力的當了我們影像小組的監督，有機會再一起玩拍照吧～",
    "style": "frame",
    "large": false
  },
  {
    "name": "Michael",
    "text": "爸打，大個仔了，在心中，有咩事隨時搵我🥰",
    "style": "line",
    "large": true
  },
  {
    "name": "以梵",
    "text": "很榮幸有機會跟你一起在PID工作，不論是在萬華會眾，還是將來其他的崗位（分區監督？），相信你會繼續多做主的工作，造福弟兄姐妹。\n一飛沖天，大展鴻圖！",
    "style": "card",
    "large": false
  },
  {
    "name": "張馨元",
    "text": "謝謝你幫我完成PID指南1的培訓～\n我也很喜歡部門會議當中真朋友的演講，內容提醒了我在部門工作，不該把弟兄姊妹當作同事，而應該當作朋友，彼此扶持！謝謝你！",
    "style": "line",
    "large": false
  },
  {
    "name": "湯宜臻",
    "text": "謝謝你在 PID 的幫忙！也恭喜你踏入婚姻的新階段～ May Jehovah continue to bless you in whatever you do in Him.",
    "style": "frame",
    "large": false
  },
  {
    "name": "心萱 Shenny",
    "text": "很開心在最後這段時間有機會當伯特利的隔壁鄰居！也謝謝你分享好多婚禮籌備的建議，真的幫助我不少。很佩服你在最後三個月完成婚禮的極限任務！我要好好向你學習。祝福你開啟新生活後幸福快樂，一切都順順利利！",
    "style": "line",
    "large": false
  }
]
};
