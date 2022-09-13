"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const compiler_sfc_1 = require("@vue/compiler-sfc");
const fs = __importStar(require("fs"));
const TemplateGenertor_1 = require("../TemplateGenertor");
const path = __importStar(require("path"));
const option = {
    main: {
        file: "./input-vue/main.vue",
        out: "./out-ts/Main.ts",
    },
    download: {
        file: "E:\\develop\\workespace\\58git_site\\58_web_js\\sydc-m-site\\src\\components-wuba\\DownloadAppCard\\template\\DownloadTemp.vue",
        out: "E:\\develop\\workespace\\58git_site\\58_web_js\\sydc-m-site\\src\\components-wuba\\DownloadAppCard\\template\\DownloadTemp.ts",
    },
    ajkDownload: {
        file: "E:\\develop\\workespace\\58git_site\\ajk_web_js\\m-ajk-business\\src\\component\\download\\template\\DownloadBanner.vue",
        out: "E:\\develop\\workespace\\58git_site\\ajk_web_js\\m-ajk-business\\src\\component\\download\\template\\DownloadBanner.ts",
    }
};
(() => {
    const file = fs.readFileSync(path.join(option.ajkDownload.file));
    const { descriptor } = (0, compiler_sfc_1.parse)(file.toString());
    fs.writeFileSync('haha.json', JSON.stringify(descriptor.template.ast, null, 2));
    const generate = new TemplateGenertor_1.TemplateGenerate(descriptor);
    let htmlStr = generate.main();
    fs.writeFileSync(path.join(option.ajkDownload.out), htmlStr);
})();
//# sourceMappingURL=test.js.map