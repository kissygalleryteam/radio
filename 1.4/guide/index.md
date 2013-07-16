## 综述

radio是对原生的radio单选框美化组件

## Demo

[http://gallery.kissyui.com/radio/1.4/demo/index.html](http://gallery.kissyui.com/radio/1.0/demo/index.html)


## 快速使用
对于下面面的html结构

```
	<div id="J_Content" class="control-group">
	    <div class="controls">
	      <label class="radio inline">
	          <input type="radio" name="ch" value="1">1111
	      </label>
	      <label class="radio inline">
	          <input type="radio" name="ch" value="2">2222
	      </label>
	      <label class="radio inline">
	          <input disabled="disabled" type="radio" name="ch" value="3">3333
	      </label>
	      <label class="radio inline">
	          <input disabled="disabled" type="radio" name="ch" value="4">4444
	      </label>
	      <label class="radio inline">
	          <input id="J_5" type="radio" name="ch" value="5">5555
	      </label>
	      <label class="radio inline">
	          <input id="J_6" type="radio" checked="checked" name="ch" value="6">6666
	      </label>
	      <label class="radio inline">
	          <input type="radio" name="ch" value="7">7777
	      </label>
	      <label class="radio inline">
	          <input type="radio" checked="checked" name="ch" value="8">8888
	      </label>
	      <label class="radio inline">
	          <input type="radio" name="ch" value="9">9999
	      </label>
	    </div>
	</div>
```

### 初始化组件

	

    S.use('gallery/radio/1.4/index', function (S, Radio) {
         //初始化
		var r = new radio('#J_Content input',{
		    hasLabel:true, //是否需要label-for，默认是false
		    accessible:true//是否需要无障碍，默认为false
		})
		//执行
		r.render();
    })
需要注意的是，组件里与radio对应的label默认是通过dom.next()获取的，如果获取不到，需要传递getLabelFunc来获取label的位置
## API说明

* 根据index禁用radio
	//禁用
	r.setDisabled(index);
	//恢复
	r.setDisabled(index);

* 获取所有选中的radio的索引
	//返回数字数组
	r.getAllChecked();
* 还原成为原生的radio
	//还原成为原生的radio
	r.recoverradio();
