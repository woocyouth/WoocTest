var Emblem = {
    init: function (e, t) {
        var n = document.querySelector(e),
            a = t ? t : n.innerHTML;
        n.innerHTML = "";
        for (var r = 0; r < a.length; r++) {
            var d = a[r],
                l = document.createElement("span"),
                o = document.createTextNode(d),
                i = 360 / a.length * r,
                p = (Math.PI / a.length).toFixed(0) * r,
                h = (Math.PI / a.length).toFixed(0) * r;
            l.appendChild(o), l.style.webkitTransform = "rotateZ(" + i + "deg) translate3d(" + p + "px," + h + "px,0)", l.style.transform = "rotateZ(" + i + "deg) translate3d(" + p + "px," + h + "px,0)", n.appendChild(l)
        }
    }
};