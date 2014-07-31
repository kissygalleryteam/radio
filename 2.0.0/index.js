/**
 * @fileoverview
 * @author
 * @module radio
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Radio
     * @constructor
     * @extends Base
     */
    function Radio(comConfig) {
        var self = this;
        //调用父类构造函数
        Radio.superclass.constructor.call(self, comConfig);
    }
    S.extend(Radio, Base, /** @lends Radio.prototype*/{

    }, {ATTRS : /** @lends Radio*/{

    }});
    return Radio;
}, {requires:['node', 'base']});



