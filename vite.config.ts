import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  base:'./'
  // css:{
  //   preprocessorOptions:{
  //     scss:{
  //       additionalData:`@import "./src/style/global.scss";`
  //     }
  //   }
  // }
});
