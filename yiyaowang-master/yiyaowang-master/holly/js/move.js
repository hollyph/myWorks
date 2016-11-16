// 获取某元素节点的某属性值
/*
    obj: 需要获取属性值得元素节点。 如： oBox
    attr: 需要获取的属性。 如: 'left'
*/
function getStyleAttr(obj, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[attr];
    }
    return obj.currentStyle[attr];
}

// 封装startMove
/*
    obj: 需要运动的元素
    json: 一个或多个属性所组成的对象 {attr: iTarget, attr: iTarget}
    fn: 回调函数
*/
function startMove(obj, json, fn) {
    // 关闭之前的定时器
    clearInterval(obj.timer);

    // 再开启新的定时器
    obj.timer = setInterval(function() {

        // 默认所有属性都达到了目标值，表示可以停止运动
        var bStop = true;

        // {left: 300, width: 100}
        for (var attr in json) {
            // attr: 属性名称
            // iTarget: attr所对应的目标值
            var iTarget = json[attr];

            // 1. 获取当前值
            var current = 0;
            if (attr == 'opacity') {
                current = parseFloat(getStyleAttr(obj, attr) * 100);
                current = Math.round(current);
            } else {
                current = parseFloat(getStyleAttr(obj, attr));
                current = Math.round(current);
            }

            // 2. 给一个速度
            var iSpeed = (iTarget - current) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            // 3. 判断是否所有属性都达到了目标值
            // 循环里面有一个不等于就是没有都达到
            if (current != iTarget) {
                bStop = false;
            }

            // 4. 运动
            if (attr == 'opacity') {
                obj.style.opacity = (current + iSpeed) / 100;
                obj.style.filter = 'alpha(opacity=' + (current + iSpeed) + ')';
            } else {
                obj.style[attr] = current + iSpeed + 'px';
            }
        }

        // 如果所有属性都达到了目标值，则可以停止运动了，
        if (bStop) {
            // console.log(obj.id + '停止运动');
            //console.log('停止运动');
            clearInterval(obj.timer); // 关闭定时器

            if (fn) {
                fn();
            }
        }
    }, 30);
}