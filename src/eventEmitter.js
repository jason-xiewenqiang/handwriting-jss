/***
 *                                         ,s555SB@@&                          
 *                                      :9H####@@@@@Xi                        
 *                                     1@@@@@@@@@@@@@@8                       
 *                                   ,8@@@@@@@@@B@@@@@@8                      
 *                                  :B@@@@X3hi8Bs;B@@@@@Ah,                   
 *             ,8i                  r@@@B:     1S ,M@@@@@@#8;                 
 *            1AB35.i:               X@@8 .   SGhr ,A@@@@@@@@S                
 *            1@h31MX8                18Hhh3i .i3r ,A@@@@@@@@@5               
 *            ;@&i,58r5                 rGSS:     :B@@@@@@@@@@A               
 *             1#i  . 9i                 hX.  .: .5@@@@@@@@@@@1               
 *              sG1,  ,G53s.              9#Xi;hS5 3B@@@@@@@B1                
 *               .h8h.,A@@@MXSs,           #@H1:    3ssSSX@1                  
 *               s ,@@@@@@@@@@@@Xhi,       r#@@X1s9M8    .GA981               
 *               ,. rS8H#@@@@@@@@@@#HG51;.  .h31i;9@r    .8@@@@BS;i;          
 *                .19AXXXAB@@@@@@@@@@@@@@#MHXG893hrX#XGGXM@@@@@@@@@@MS        
 *                s@@MM@@@hsX#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,      
 *              :GB@#3G@@Brs ,1GM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B,     
 *            .hM@@@#@@#MX 51  r;iSGAM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8     
 *          :3B@@@@@@@@@@@&9@h :Gs   .;sSXH@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:    
 *      s&HA#@@@@@@@@@@@@@@M89A;.8S.       ,r3@@@@@@@@@@@@@@@@@@@@@@@@@@@r    
 *   ,13B@@@@@@@@@@@@@@@@@@@5 5B3 ;.         ;@@@@@@@@@@@@@@@@@@@@@@@@@@@i    
 *  5#@@#&@@@@@@@@@@@@@@@@@@9  .39:          ;@@@@@@@@@@@@@@@@@@@@@@@@@@@;    
 *  9@@@X:MM@@@@@@@@@@@@@@@#;    ;31.         H@@@@@@@@@@@@@@@@@@@@@@@@@@:    
 *   SH#@B9.rM@@@@@@@@@@@@@B       :.         3@@@@@@@@@@@@@@@@@@@@@@@@@@5    
 *     ,:.   9@@@@@@@@@@@#HB5                 .M@@@@@@@@@@@@@@@@@@@@@@@@@B    
 *           ,ssirhSM@&1;i19911i,.             s@@@@@@@@@@@@@@@@@@@@@@@@@@S   
 *              ,,,rHAri1h1rh&@#353Sh:          8@@@@@@@@@@@@@@@@@@@@@@@@@#:  
 *            .A3hH@#5S553&@@#h   i:i9S          #@@@@@@@@@@@@@@@@@@@@@@@@@A.
 *
 *
 *    又要手写源码，写你妹妹呀！
 */
 class EventEmitter {
    constructor() {
        this.events = {}
    }
    emit(eventName, ...args) {
        this.events[eventName].forEach(fn=>Reflect.apply(fn, this, args))
    }
    // 添加事件监听
    on(eventName, handler) {
        if (this._has(eventName)) {
            this.events[eventName].push(handler)
        } else {
            this.events[eventName] = [handler]
        }
    }
    // 监听
    addListener(eventName, handler) {
        this.on(eventName, handler)
    }
    // 移除事件
    removeListener(eventName, handler) {
        if (!this._has(eventName)) return
        this.events[eventName] = this.events[eventName].filter(fn => fn !== handler)
    }
    off(eventName, handler) {
        this.removeListener(eventName, handler)
    }
    once(eventName, handler) {
        this.on(eventName, this._onceWrap(eventName, handler, this))
    }
    _onceWrap(eventName, handler, target) {
        const state = {fried: false, handler, eventName, target}
        const wrapFn = this._onceWrapper.bind(state)
        state.wrapFn = wrapFn
        return wrapFn
    }
    _onceWrapper(...args) {
        if (!this.fried) {
            this.fried = true;
            Reflect.apply(this.handler, this.target, args)
            this.target.off(this.eventName, this.wrapFn)
        }
    }
    _has(eventName) {
        return Reflect.has(this.events, eventName)
    }
}

module.exports = EventEmitter