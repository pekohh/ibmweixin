<template>
  <div class="me-information">
    <form>
            <label class="singel">
                    姓名
                    <input type="text"/>
            </label>
            <label class="singel">
                    手机
                    <input type=""/>
            </label>
             <label class="singel">
                    邮箱
                    <input type=""/>
            </label>
             <label class="singel">
                    公司
                    <input type="text"/>
            </label>
             <label class="singel">
                    行业
                    <input type="text"/>
            </label>
             <label class="singel">
                    职业
                    <input type="text"/>
            </label>
             <label class="singel city">
                    城市
                    <input type="text"/>
            </label>
            <div class="checkboxs">
                    请随时通知我有关 IBM 全球各公司的产品、服务及其他优惠的信息。选中下面的框，以接收有关以下内容的更多信息：
                    <label>
                        <input type="checkbox" name="vehicle" value="Car" checked="checked" /> IBM产品
                    </label>
                    <label>
                        <input type="checkbox" name="vehicle" value="Car" checked="checked" /> 其他类 IBM 产品信息
                    </label>
                    <label>
                      <input type="checkbox" name="vehicle" value="Car" checked="checked" /> IBM产品
                    </label>
            </div>
            <div class="checkboxs">
                    IBM的销售代表可以通过以下的方式和我取得联系：
                    <label><input type="checkbox" />电子邮件</label>
                    <label><input type="checkbox" />电话</label>
                    <label><input type="checkbox" />直邮</label>
            </div>
    </form>
    <a href="">隐私声明</a>
    <button class="save">保存</button>
    <button class="avatar">上传头像</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
.me-information
  width:90%
  padding:0 5%
  form
    width:100%
    label
      font-size:30px
      line-height:60px
      height:120px
      display:block
      margin:10px 0
    label.city
      padding-bottom:20px
      border-bottom:1px solid #ccc
     .singel input
        width:100%
        border:1px solid #ccc
        height:60px
        line-height:60px
    .checkboxs
      width:100%
      font-size:30px
      line-height:60px
      label
        font-size:30px
        line-height:40px
        height:40px
        input
          width:30px
          height:30px
          margin-right:10px
  a
    display:block
    width:100%
    text-align:center
    margin:30px 0
  button
    width:90%
    margin:30px 5%
    height:100px
    line-height:100px
    font-size:40px
    text-align:center
    color:#fff
    border-radius:5%
  button.save
    background:#2fb0de
  button.avatar
    background:red
</style>
