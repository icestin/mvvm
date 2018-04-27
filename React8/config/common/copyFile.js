// js/app.js: 指定确切的文件名。
// js/*.js: 某个目录所有后缀为js的文件
// js/**/*.js 某个目录及其所有子目录中的所有后缀名为js的文件。
// !js/app.js: 处理js/app.js以外的所有文件
// *.+(js|css): 匹配项目根目录下，所有后缀名为js或css的文件。

/**
 * 复制目录中的所有文件包括子目录
 * @src param { String } 需要复制的目录  例 images 或者 ./images/
 * @dst param { String } 复制到指定目录
 *
 */
const fs = require("fs");
const path = require("path");
// 获取当前目录的绝对路径， 这里resolve()不传入参数
const filePath = path.resolve();

const copy = function(src, dst) {
  if (fs.existsSync(src)) {
    fs.readdir(src, function(err, files) {
      if (err) {
        console.log(err);
        return;
      }
      files.forEach(function(filename) {
        // Unix系统目录是‘/’ ,windows 目录是 ‘\’
        var url = path.join(src, filename),
          dest = path.join(dst, filename);
        console.log("原路径: ", url);
        console.log("目标路径: ", dest);
        fs.stat(path.join(src, filename), function(err, stats) {
          if (err) throw err;
          if (stats.isFile()) {
            // 创建读取流
            readable = fs.createReadStream(url);
            //创建写入流
            writable = fs.createWriteStream(dest, { encoding: "utf8" });
            // 通过管道来传输流
            readable.pipe(writable);
          } else if (stats.isDirectory()) {
            exists(url, dest, copy);
          }
        });
      });
    });
  } else {
    console.log("给定的目录不存在,读取不到文件");
    return;
  }
};

function exists(url, dest, callback) {
  fs.exists(dest, function(exists) {
    if (exists) {
      callback && callback(url, dest);
    } else {
      // 第二个参数目录权限, 默认077（读取权限）
      fs.mkdir(dest, 0777, function(err) {
        if (err) throw err;
        callback && callback(url, dest);
      });
    }
  });
}

module.exports = copy;
