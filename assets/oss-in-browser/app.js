// 'use strict';
//
// // var appServer = 'oss-cn-hangzhou.aliyuncs.com';
// var bucket = 'hartbucket';
// var region = 'oss-cn-hangzhou';
//
// var Buffer = OSS.Buffer;
// var OSS = OSS.Wrapper;
//
// var client = new OSS({
//   region: region,
//   accessKeyId: 'LTAIGu4t9LQnTFMK',
//   accessKeySecret: 'PW6VdQF1N3q6sTCRmOSqUWJRpsuLIE', // I will change this in a minute
//   bucket: bucket
// });
//
// var progress = function (p) {
//   return function (done) {
//     var bar = document.getElementById('progress-bar');
//     bar.style.width = Math.floor(p * 100) + '%';
//     bar.innerHTML = Math.floor(p * 100) + '%';
//     done();
//   }
// };
//
// var uploadFile = function () {
//   var file = document.getElementById('file').files[0];
//   var key = file.name;
//   console.log(file.name + ' => ' + key);
//
//   return client.multipartUpload(key, file, {
//     progress: progress
//   }).then(function (res) {
//     console.log('upload success: %j', res);
//     return listFiles(client);
//   });
// };
//
// var listFiles = function () {
//   var table = document.getElementById('list-files-table');
//   console.log('list files');
//
//   return client.list({
//     'max-keys': 100
//   }).then(function (result) {
//     var objects = result.objects.sort(function (a, b) {
//       var ta = new Date(a.lastModified);
//       var tb = new Date(b.lastModified);
//       if (ta > tb) return -1;
//       if (ta < tb) return 1;
//       return 0;
//     });
//       alert(objects);
//   });
// };
//
// window.onload = function () {
//   document.getElementById('file-button').onclick = function () {
//     uploadFile();
//   };
// };
