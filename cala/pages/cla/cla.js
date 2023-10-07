Page({
  /**
   * 页面的初始数据
   */
  data: {
    num: '',
    op: ''
  },
  result: null,
  isClear: false,
  numBtn: function (e) {
    var num = e.target.dataset.val;
    if (this.data.num === '0' || this.isClear) {
      this.setData({ num: num });
      this.isClear = false;
    } else {
      this.setData({ num: this.data.num + num });
    }
  },
  opBtn: function (e) {
    var op = this.data.op;
    var num = Number(this.data.num);
    var val = e.target.dataset.val;
    if (val === '/') {
      this.setData({ op: '÷' });
    } else if (val === '*') {
      this.setData({ op: '×' });
    } else if (val === '%') {
      num = num / 100;
      this.setData({ num: num.toString(), op: '' });
      return;
    } else if (val === 'sin') {
      num = Math.sin(num * (Math.PI / 180)); 
      this.setData({ num: num.toString(), op: '' });
      return;
    } else if (val === 'cos') {
      num = Math.cos(num * (Math.PI / 180)); 
      this.setData({ num: num.toString(), op: '' });
      return;
    } else if (val === 'tan') {
      num = Math.tan(num * (Math.PI / 180)); // 将角度转换为弧度
      this.setData({ num: num.toString(), op: '' });
      return;
    } else if (val === '^') {
      this.setData({ op: '^' });
    } else {
      this.setData({ op: val });
    }
    if (this.isClear) {
      return;
    }
    this.isClear = true;
    if (this.result === null || this.result === undefined) {
      this.result = num;
      return;
    }
    if (op === '+') {
      this.result = this.result + num;
    } else if (op === '-') {
      this.result = this.result - num;
    } else if (op === '×') {
      this.result = (this.result * num).toFixed();
    } else if (op === '÷') {
      this.result = this.result / num;
    } else if (op === '^') {
      this.result = Math.pow(this.result, num);
    }
    this.setData({ num: this.result.toString() });
  },
  dotBtn: function () {
    if (this.isClear) {
      this.setData({ num: '0.' });
      this.isClear = false;
      return;
    }
    if (this.data.num.indexOf('.') >= 0) {
      return;
    }
    this.setData({ num: this.data.num + '.' });
  },
  delBtn: function () {
    var temp = this.data.num.toString();
    var num = temp.substr(0, this.data.num.length - 1);
    this.setData({ num: num === '' ? '0' : num });
  },
  resetBtn: function () {
    this.result = null;
    this.isClear = false;
    this.setData({ num: '0', op: '' });
  }
})
