 //获取浏览器信息
export function getPosType() {
  const agent = navigator.userAgent.toLowerCase();
  const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
  if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
      console.log("这是windows32位系统");
      return 'windows'
  }
  if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
      console.log("这是windows64位系统");
      return 'windows'
  }
  if (isMac) {
      console.log("这是mac系统");
      return 'darwin'
  }
}