import { Plugin } from "vue";
// 组件需要带有 install 属性
export type SFCWithInstall<T> = T & Plugin;
export function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = function (app) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp); // 将组件注册成全局的组件
  };
  return comp as SFCWithInstall<T>;
}
