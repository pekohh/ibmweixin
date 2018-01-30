<template>
  <div class="avatar">
    <div class="upload">
        <input class="file_input" type="file" multiple id="avc"/>
        <div class="upload_box">
            点我上传图片哦
        </div>
    </div>
    <div class="img_list">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'Avatar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.avatar()
  },
  methods: {
    avatar () {
      var fileInput = document.getElementsByClassName('file_input')[0]
      fileInput.addEventListener('change', function () {
        var obj = this
        var objName = this.files[0].name
        var imgLength = obj.files.length
        for (var i = 0; i < imgLength; i++) {
          if (!(/image\/\w+/).test(obj.files[i].type)) {
            alert('上传的图片格式错误，请上传图片')
            return false
          }
          var reader = new FileReader()
          // reader.error = function (e) {
          // alert('读取异常')
          // }
          reader.onload = function (e) {
            var imgHtml = '<img src="' + e.target.result + '"/>'
            var divHtml = document.createElement('div')
            var pHtml = document.createElement('p')
            if (document.getElementsByClassName('img_list')[0].children.length < 5) {
              divHtml.innerHTML = imgHtml
              divHtml.appendChild(pHtml)
              pHtml.innerHTML = objName
              divHtml.className = 'imgDiv'
              document.getElementsByClassName('img_list')[0].appendChild(divHtml)
            } else {
              alert('最多上传5张图片')
            }
          }
          reader.onloadstart = function () {
            console.log('开始读取' + this.obj_name)
          }
          reader.onprogress = function (e) {
            if (e.lengthComputable) {
              console.log('正在读取文件')
            }
          }
          reader.readAsDataURL(obj.files[i])
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.avatar
  .upload
    position: relative
    input
      opacity: 0
      position: absolute
      top: 0
      left: 10px
      height: 300px
      width: 300px
    .upload_box
      width: 100px
      height: 100px
      background-color: pink
      color: white
  .img_list
    width: 300px
    height: 300px
    float: left
    overflow: hidden
    text-align: center
    img
      width:100%
      height:100%
</style>
