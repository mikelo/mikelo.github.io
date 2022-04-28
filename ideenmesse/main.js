(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ich/ideenmesse/src/main.ts */"zUnb");


/***/ }),

/***/ "4Oyq":
/*!******************************************************!*\
  !*** ./src/app/peer-status/peer-status.component.ts ***!
  \******************************************************/
/*! exports provided: PeerStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeerStatusComponent", function() { return PeerStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PeerStatusComponent {
    constructor() { }
    ngOnInit() {
    }
    get peerId() {
        if (this.peer) {
            return this.peer.id;
        }
        else {
            return '';
        }
    }
    get statusString() {
        if (!this.peer) {
            return 'missing';
        }
        else if (this.peer.destroyed) {
            return 'destroyed';
        }
        else if (this.peer.disconnected) {
            return 'disconnected';
        }
        else {
            return 'connected';
        }
    }
    get openConnections() {
        return this.getConnections(true);
    }
    get closedConnections() {
        return this.getConnections(false);
    }
    getConnections(open) {
        if (!this.peer) {
            return [];
        }
        let ret = [];
        Object.keys(this.peer.connections).forEach(key => {
            let conn = this.peer.connections[key][0];
            if ((conn && conn.open) === open) {
                ret.push(key);
            }
        });
        return ret;
    }
}
PeerStatusComponent.ɵfac = function PeerStatusComponent_Factory(t) { return new (t || PeerStatusComponent)(); };
PeerStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeerStatusComponent, selectors: [["ideenmesse-peer-status"]], inputs: { peer: "peer" }, decls: 2, vars: 6, consts: [[1, "peerStatus"]], template: function PeerStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"](" Peer Status: ID=", ctx.peerId, ", ", ctx.statusString, ", Open connections: ", ctx.openConnections.length, " (", ctx.openConnections.join(", "), "), Closed connections: ", ctx.closedConnections.length, " (", ctx.closedConnections.join(", "), ")\n");
    } }, styles: ["div.peerStatus[_ngcontent-%COMP%] {\n  font-size: 8pt;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BlZXItc3RhdHVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUFDRCIsImZpbGUiOiJwZWVyLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5wZWVyU3RhdHVzIHtcbiBmb250LXNpemU6IDhwdDtcbiBjb2xvcjogZ3JheTsgICBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeerStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ideenmesse-peer-status',
                templateUrl: './peer-status.component.html',
                styleUrls: ['./peer-status.component.scss']
            }]
    }], function () { return []; }, { peer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "8Yrd":
/*!************************************************!*\
  !*** ./src/app/chat-box/chat-box.component.ts ***!
  \************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _participant_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../participant-store.service */ "KXOu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function ChatBoxComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const m_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", m_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.tc);
} }
function ChatBoxComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const m_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", m_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", m_r1.tc, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", m_r1.tr, " ");
} }
function ChatBoxComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatBoxComponent_div_1_ng_container_1_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatBoxComponent_div_1_ng_container_2_Template, 4, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r1.tr === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", m_r1.tr !== "");
} }
class ChatBoxComponent {
    constructor(field, cdr, ngz) {
        this.field = field;
        this.cdr = cdr;
        this.ngz = ngz;
        this.messages = [];
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scrollDirty = false;
        this.msg = "";
        this.large = false;
        this.changeIcon = false;
    }
    toggleHeight() {
        this.large = !this.large;
        this.changeIcon = !this.changeIcon;
    }
    ngOnInit() {
        this.field.subscribe(gf => gf.registerMessageHandler((id, msg) => this.handleAddedMessage(msg)), this.destroy);
    }
    ngOnDestroy() {
        this.destroy.next();
    }
    handleAddedMessage(msg) {
        if (msg.to != this.devName) {
            return;
        }
        this.ngz.run(() => {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"].assertInAngularZone();
            this.messages.push(msg);
            this.cdr.markForCheck();
            this.scrollDirty = true;
            this.scrollToBottom();
        });
    }
    ngAfterViewChecked() {
        if (this.scrollDirty) {
            this.scrollDirty = false;
            setTimeout(() => this.scrollToBottom());
        }
    }
    scrollToBottom() {
        let elem = document.getElementById('chatbox');
        if (elem) {
            elem.scrollTop = elem.scrollHeight;
        }
    }
    sendMessage() {
        if (this.msg) {
            this.field.participant.sendMessage(this.msg, this.devName);
        }
        this.msg = "";
    }
}
ChatBoxComponent.ɵfac = function ChatBoxComponent_Factory(t) { return new (t || ChatBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_participant_store_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
ChatBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatBoxComponent, selectors: [["ideenmesse-chat-box"]], inputs: { devName: "devName" }, decls: 5, vars: 6, consts: [["id", "chatbox", 1, "chatbox"], [4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Diskussionsbeitrag / Begr\u00FCndung der Wahl", "size", "100", 3, "ngModel", "ngModelChange", "keyup.enter"], ["title", "chatten", 1, "chatButton", 3, "click"], ["title", "Chat-Fenster vergr\u00F6\u00DFern", "id", "chatboxButton", 1, "chatboxButton", 3, "click"], [4, "ngIf"]], template: function ChatBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatBoxComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatBoxComponent_Template_input_ngModelChange_2_listener($event) { return ctx.msg = $event; })("keyup.enter", function ChatBoxComponent_Template_input_keyup_enter_2_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_button_click_3_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatBoxComponent_Template_button_click_4_listener() { return ctx.toggleHeight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("large", ctx.large);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("changeIcon", ctx.changeIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["div.chatbox[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  scrollbar-width: thin;\n  height: 60px;\n  background-color: white;\n}\n\ndiv.chatbox.large[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  scrollbar-width: thin;\n  height: 350px;\n  background-color: white;\n}\n\nbutton.chatButton[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 22px;\n  background-image: url('chat_30x20.png');\n}\n\nbutton.chatboxButton[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 22px;\n  background-color: #FFFFFF;\n  border: solid 1px #000000;\n  background-image: url('expand_30x20.png');\n}\n\nbutton.chatboxButton[_ngcontent-%COMP%]:hover {\n  background-color: #C4C4C4;\n  cursor: pointer;\n}\n\nbutton.chatboxButton.changeIcon[_ngcontent-%COMP%] {\n  background-image: url('impand_30x20.png');\n}\n\nbutton.chatboxButton.changeIcon[_ngcontent-%COMP%]:hover {\n  background-color: #C4C4C4;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  border: solid 1px #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXQtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImNoYXQtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNoYXRib3gge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5kaXYuY2hhdGJveC5sYXJnZSB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24uY2hhdEJ1dHRvbiB7XG4gICAgd2lkdGg6MzJweDsgXG4gICAgaGVpZ2h0OjIycHg7IFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdjaGF0XzMweDIwLnBuZycpO1xufVxuXG5idXR0b24uY2hhdGJveEJ1dHRvbiB7XG4gICAgd2lkdGg6MzJweDtcbiAgICBoZWlnaHQ6MjJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICMwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ2V4cGFuZF8zMHgyMC5wbmcnKTtcbn1cblxuYnV0dG9uLmNoYXRib3hCdXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEM0QzQ7XG4gICAgY3Vyc29yOiBwb2ludGVyOyBcbn1cblxuYnV0dG9uLmNoYXRib3hCdXR0b24uY2hhbmdlSWNvbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJ2ltcGFuZF8zMHgyMC5wbmcnKTtcbn1cblxuYnV0dG9uLmNoYXRib3hCdXR0b24uY2hhbmdlSWNvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M0QzRDNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDAwMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ideenmesse-chat-box',
                templateUrl: './chat-box.component.html',
                styleUrls: ['./chat-box.component.scss']
            }]
    }], function () { return [{ type: _participant_store_service__WEBPACK_IMPORTED_MODULE_2__["ParticipantStoreService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { devName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JjPw":
/*!************************************************!*\
  !*** ./src/app/domain/distributed-database.ts ***!
  \************************************************/
/*! exports provided: DistributedDatabaseSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributedDatabaseSystem", function() { return DistributedDatabaseSystem; });
class Database {
    constructor(storage, name) {
        this.storage = storage;
        this.name = name;
        let storedData = storage.getItem(name);
        if (storedData) {
            console.log('loading db ' + name + ' from local storage');
            let obj = JSON.parse(storedData);
            this.times = obj.times;
            this.data = obj.data;
        }
        else {
            this.times = {};
            this.data = {};
        }
    }
    put(time, id, data) {
        if (id in this.times) {
            let lastTime = this.times[id];
            if (lastTime < time) {
                this.times[id] = time;
                this.data[id] = data;
                this.saveToStorage();
                return 'update';
            }
            else {
                return 'ignore';
            }
        }
        else {
            this.times[id] = time;
            this.data[id] = data;
            this.saveToStorage();
            return 'add';
        }
    }
    saveToStorage() {
        let obj = {
            times: this.times,
            data: this.data
        };
        this.storage.setItem(this.name, JSON.stringify(obj));
    }
    get(id) {
        return this.data[id];
    }
    dumpEntries(conn, databaseName, sender, knownReceivers) {
        Object.keys(this.times).forEach(id => {
            let packet = {
                src: sender,
                t: this.times[id],
                rcv: knownReceivers,
                db: databaseName,
                id: id,
                dta: this.data[id]
            };
            conn.send(packet);
            console.log('dump ' + JSON.stringify(packet) + ' to ' + conn.peer);
        });
    }
    forEach(f) {
        Object.keys(this.times).forEach(id => f(id, this.data[id]));
    }
}
class DistributedDatabaseSystem {
    constructor(systemName, peer, ownPeerId, storage, clean) {
        this.systemName = systemName;
        this.peer = peer;
        this.storage = storage;
        this.ownPeerId = ownPeerId;
        this.time = 0;
        this.otherNames = [];
        this.onceOpened = [];
        this.others = [];
        this.callbacks = { add: {}, update: {}, ignore: {} };
        this.databases = {};
        if (clean) {
            this.clear();
        }
        else {
            this.loadStoredData();
            this.connectToKnownPeers();
        }
        peer.on('connection', (conn) => this.addNode(conn));
    }
    clear() {
        let knownDatabases = this.getStoredDatabaseNames();
        knownDatabases.forEach(key => this.storage.removeItem(this.systemName + '.' + key));
        this.storage.removeItem(this.systemName + '.meta.knownDatabases');
        this.storage.removeItem(this.systemName + '.meta.knownPeerIds');
    }
    loadStoredData() {
        let databaseNames = this.getStoredDatabaseNames();
        databaseNames.forEach(dbName => this.openDb(dbName));
    }
    getStoredDatabaseNames() {
        let dbs = this.storage.getItem(this.systemName + '.meta.knownDatabases');
        if (!dbs) {
            return [];
        }
        return JSON.parse(dbs);
    }
    connectToKnownPeers() {
        let knownPeers = this.getStoredPeers();
        knownPeers.forEach(id => this.connectToNode(id));
    }
    getStoredPeers() {
        let peers = this.storage.getItem(this.systemName + '.meta.knownPeerIds');
        if (!peers) {
            return [];
        }
        return JSON.parse(peers);
    }
    connectToNode(id) {
        console.log(this.ownPeerId + ' connects to ' + id);
        this.reconnectIfDisconnected();
        var conn = this.peer.connect(id, { reliable: true });
        this.addNode(conn);
    }
    reconnectIfDisconnected() {
        if (this.peer.disconnected) {
            console.log(this.ownPeerId + ' was disconnected and tries to reconnect');
            this.peer.reconnect();
        }
    }
    checkConnections() {
        let aliveConns = this.others.filter(conn => conn.open || !this.onceOpened.includes(conn.peer));
        if (aliveConns.length != this.others.length) {
            console.log('connections were closed, cleaning up');
            this.others = aliveConns;
            this.otherNames = aliveConns.map(conn => conn.peer);
        }
        if (this.others.length == 0 && this.onceOpened.length > 0) {
            // if all connections were lost, try a random one that once worked
            this.connectToNode(this.onceOpened[Math.floor(Math.random() * this.onceOpened.length)]);
        }
    }
    addNode(conn) {
        if (this.others.indexOf(conn) >= 0) {
            return;
        }
        console.log('node added to ' + this.ownPeerId + ': ' + conn.peer);
        this.otherNames.push(conn.peer);
        this.others.push(conn);
        this.storage.setItem(this.systemName + '.meta.knownPeerIds', JSON.stringify(this.otherNames));
        conn.on('data', (d) => this.handleData(d));
        conn.on('open', (d) => {
            this.markConnectionOpeningEnded(conn.peer);
            this.dumpDatabasesTo(conn);
        });
        conn.on('error', (d) => this.markConnectionOpeningEnded(conn.peer));
    }
    markConnectionOpeningEnded(peerId) {
        if (!this.onceOpened.includes(peerId)) {
            this.onceOpened.push(peerId);
        }
    }
    dumpDatabasesTo(conn) {
        for (let [name, db] of Object.entries(this.databases)) {
            db.dumpEntries(conn, name, this.ownPeerId, this.otherNames);
        }
    }
    handleData(d) {
        console.log(this.ownPeerId + ' received: ' + JSON.stringify(d));
        this.time = Math.max(this.time, d.t);
        this.ensureDbExists(d.db);
        let eventType = this.databases[d.db].put(d.t, d.id, d.dta);
        if (this.callbacks[eventType][d.db]) {
            this.callbacks[eventType][d.db].forEach((f) => f(d.id, d.dta));
        }
        if (eventType != 'ignore') {
            this.forwardToFurtherReceivers(d);
        }
        this.establishConnectionToUnknownNodes(d);
    }
    ensureDbExists(dbName) {
        if (!this.databases[dbName]) {
            this.openDb(dbName);
            let knownDatabases = this.getStoredDatabaseNames();
            knownDatabases.push(dbName);
            this.storage.setItem(this.systemName + '.meta.knownDatabases', JSON.stringify(knownDatabases));
        }
    }
    openDb(dbName) {
        this.databases[dbName] = new Database(this.storage, this.systemName + '.' + dbName);
    }
    forwardToFurtherReceivers(packet) {
        let furtherReceivers = [];
        let existingSet = new Set(packet.rcv);
        existingSet.add(this.ownPeerId);
        existingSet.add(packet.src);
        this.otherNames.forEach(function (x) {
            if (!existingSet.has(x)) {
                furtherReceivers.push(x);
            }
        });
        packet.rcv.push(...furtherReceivers);
        let _this = this;
        furtherReceivers.forEach(function (id) {
            let index = _this.otherNames.indexOf(id);
            let conn = _this.others[index];
            conn.send(packet);
        });
    }
    establishConnectionToUnknownNodes(packet) {
        let nameSet = new Set(this.otherNames);
        nameSet.add(this.ownPeerId);
        packet.rcv
            .filter((x) => !nameSet.has(x))
            .forEach((x) => this.connectToNode(x));
        if (!nameSet.has(packet.src)) {
            this.connectToNode(packet.src);
        }
    }
    add(listDb, data) {
        this.put(listDb, this.ownPeerId + this.time, data);
    }
    put(database, id, data) {
        this.reconnectIfDisconnected();
        this.checkConnections();
        var packet = {
            src: this.ownPeerId,
            t: this.time++,
            rcv: this.otherNames,
            db: database,
            id: id,
            dta: data
        };
        this.others.forEach(function (x) {
            x.send(packet);
        });
        this.handleData(packet);
    }
    get(database, id) {
        if (!this.databases[database]) {
            return undefined;
        }
        return this.databases[database].get(id);
    }
    on(eventType, database, provideInitialData, action) {
        if (typeof eventType !== 'string') {
            eventType.forEach(x => this.on(x, database, provideInitialData, action));
        }
        else {
            if (this.callbacks[eventType][database]) {
                this.callbacks[eventType][database].push(action);
            }
            else {
                this.callbacks[eventType][database] = [action];
            }
            if (provideInitialData) {
                let db = this.databases[database];
                if (db) {
                    db.forEach(action);
                }
            }
        }
    }
}


/***/ }),

/***/ "KXOu":
/*!**********************************************!*\
  !*** ./src/app/participant-store.service.ts ***!
  \**********************************************/
/*! exports provided: ParticipantStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipantStoreService", function() { return ParticipantStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class ParticipantStoreService {
    constructor() {
        this.store = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
    }
    get participant() {
        return this.store.getValue();
    }
    init(f) {
        this.store.next(f);
    }
    subscribe(handler, destroy) {
        this.store
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(destroy))
            .subscribe(x => {
            if (x) {
                handler(x);
            }
        });
    }
}
ParticipantStoreService.ɵfac = function ParticipantStoreService_Factory(t) { return new (t || ParticipantStoreService)(); };
ParticipantStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ParticipantStoreService, factory: ParticipantStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParticipantStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _domain_participant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/participant */ "mtgL");
/* harmony import */ var _participant_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./participant-store.service */ "KXOu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _peer_status_peer_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./peer-status/peer-status.component */ "4Oyq");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "8Yrd");










function AppComponent_ng_container_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.askForIdeas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Neue Ideenmesse starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.continueGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ideenmesse fortsetzen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.askForIdeas(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Als Entwickler beitreten ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.joinAsSpectator(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Als Zuschauer beitreten ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " K\u00FCrzel/Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.formData.ownName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_container_0_button_5_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_container_0_button_6_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ng_container_0_button_7_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_ng_container_0_button_8_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Meeting-ID: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.formData.meetingID = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.formData.ownName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.formData.meetingID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.gameExists());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formData.meetingID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formData.meetingID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.formData.meetingID);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Idee 1:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.ideaInput.idea1Title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_1_Template_textarea_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.ideaInput.idea1Details = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Idee 2:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_1_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.ideaInput.idea2Title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_1_Template_textarea_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.ideaInput.idea2Details = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Idee 3:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_1_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.ideaInput.idea3Title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_ng_container_1_Template_textarea_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.ideaInput.idea3Details = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.join(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Beitreten ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.ideaInput.idea1Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.ideaInput.idea1Details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.ideaInput.idea2Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.ideaInput.idea2Details);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.ideaInput.idea3Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.ideaInput.idea3Details);
} }
function AppComponent_ng_container_2_div_9_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_div_9_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const d_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return d_r27.setOpen(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Zuklappen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_2_div_9_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_div_9_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const d_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return d_r27.setOpen(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Aufklappen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_2_div_9_ng_container_12_div_1_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_div_9_ng_container_12_div_1_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const idx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const d_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.fieldService.participant.voteFor(d_r27, idx_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "W\u00E4hlen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_container_2_div_9_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_ng_container_2_div_9_ng_container_12_div_1_a_7_Template, 2, 0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idea_r38 = ctx.$implicit;
    const idx_r39 = ctx.index;
    const d_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Idee ", idx_r39 + 1, ": ", idea_r38.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", d_r27.voterNamesFor(idx_r39));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", d_r27.voteCountFor(idx_r39), " Stimmen.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r27.getVoteFrom(ctx_r37.fieldService.participant.name) != idx_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idea_r38.details, " ");
} }
function AppComponent_ng_container_2_div_9_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_2_div_9_ng_container_12_div_1_Template, 10, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ideenmesse-chat-box", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const d_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", d_r27.ideas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("devName", d_r27.name);
} }
function AppComponent_ng_container_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_container_2_div_9_a_4_Template, 2, 0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_ng_container_2_div_9_a_5_Template, 2, 0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ", Top-Idee: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", Letzte Nachricht: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_ng_container_2_div_9_ng_container_12_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r26.fieldService.participant.votedFor(d_r27) ? "devVoted" : "devNotVoted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r27.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r27.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !d_r27.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", d_r27.getTopIdea(), " (", d_r27.getTopIdeaVoteCount(), " von ", d_r27.getTotalVoteCount(), " Stimmen)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r27.getLastMessage());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r27.open);
} }
function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Sortieren nach: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.fieldService.participant.sortByMsg(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Einf\u00FCgereihenfolge");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.fieldService.participant.sortByMsg(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Letzter Nachricht");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_ng_container_2_div_9_Template, 13, 9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\nMeeting-Link: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_container_2_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.reconnect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Neu verbinden ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ideenmesse-peer-status", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Teilnehmer: ", ctx_r2.fieldService.participant.allParticipants().join(", "), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.fieldService.participant.allDevelopers());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.getMeetingLink(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getMeetingLink());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("peer", ctx_r2.peer);
} }
class AppComponent {
    constructor(fieldService, http, cdr, ngz) {
        this.fieldService = fieldService;
        this.http = http;
        this.cdr = cdr;
        this.ngz = ngz;
        this.title = 'Ideenmesse';
        this.state = 'initial';
        this.formData = {
            ownName: this.getSettingValue('ideenmesseUserName', ''),
            meetingID: this.getSettingValue('ideenmesseMeetingID', ''),
        };
        this.ideaInput = {
            idea1Title: '',
            idea1Details: '',
            idea2Title: '',
            idea2Details: '',
            idea3Title: '',
            idea3Details: ''
        };
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getSettingValue(key, defaultValue) {
        let paramValue = new URL(location.href).searchParams.get(key);
        if (paramValue) {
            return paramValue;
        }
        let storedValue = localStorage.getItem(key);
        if (storedValue) {
            return storedValue;
        }
        return defaultValue;
    }
    ngOnDestroy() {
        this.destroy.next();
    }
    gameExists() {
        let expected = 'ideenmesse.' + this.formData.ownName;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key === null || key === void 0 ? void 0 : key.startsWith(expected)) {
                return true;
            }
        }
        return false;
    }
    start(idToJoin, clean, spectator) {
        let name = this.formData.ownName;
        if (name) {
            localStorage.setItem('ideenmesseUserName', name);
            this.createPeer({ name, idToJoin, clean, spectator });
        }
        else {
            alert('Bitte Namen eingeben');
        }
    }
    createPeer(s) {
        //var peer = new Peer(undefined, {host: 'localhost', port: 9000, key: 'peerjs', debug: 2});
        this.peer = new Peer(undefined, {
            config: {
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' },
                    { urls: 'turn:v2202012136631136755.bestsrv.de', username: 'ideenmesse', credential: 'clarifying-behind-anchoring-storyboard' }
                ]
            }
        });
        this.peer.on('error', (err) => {
            console.log(err);
        });
        this.peer.once('open', (id) => {
            this.ngz.run(() => this.loadDeckAndInitGame(this.peer, s));
        });
    }
    askForIdeas() {
        this.state = 'ideas';
    }
    loadDeckAndInitGame(peer, s) {
        // let deck: Card[] | undefined;
        // if (s.clean) {
        //   deck = this.mapDecksAndCards(data);
        //   console.log('loaded deck with ' + deck.length + ' cards');
        // } else {
        //   deck = undefined;
        // }
        let ideas;
        if (s.clean) {
            if (s.spectator) {
                ideas = [];
            }
            else {
                ideas = [
                    { title: this.ideaInput.idea1Title, details: this.ideaInput.idea1Details },
                    { title: this.ideaInput.idea2Title, details: this.ideaInput.idea2Details },
                    { title: this.ideaInput.idea3Title, details: this.ideaInput.idea3Details }
                ];
            }
        }
        else {
            ideas = undefined;
        }
        let markCallback = () => this.ngz.run(() => this.cdr.markForCheck());
        this.fieldService.init(new _domain_participant__WEBPACK_IMPORTED_MODULE_2__["Participant"](peer, peer.id, this.formData.ownName, ideas, markCallback));
        // if (s.spectator) {
        //   this.fieldService.gameField.setEndedPlayer(this.fieldService.gameField.myself.name, true);
        // }
        if (s.idToJoin) {
            this.fieldService.participant.connectToOtherPlayer(s.idToJoin);
        }
        this.state = 'joined';
    }
    join() {
        if (!this.formData.meetingID) {
            this.waitForOthers();
        }
        else {
            this.doJoin(true, false);
        }
    }
    joinAsSpectator() {
        this.doJoin(true, true);
    }
    doJoin(clean, spectator) {
        let other = this.formData.meetingID;
        if (!other) {
            alert('Bitte Meeting-ID angeben');
            return;
        }
        this.start(other, clean, spectator);
    }
    waitForOthers() {
        this.start(undefined, true, false);
    }
    continueGame() {
        this.start(undefined, false, false);
    }
    getMeetingLink() {
        return window.location.href.split('?')[0] + "?ideenmesseMeetingID=" + this.fieldService.participant.getPeerID();
    }
    reconnect() {
        let id = prompt('Ziel-Meeting-ID', this.formData.meetingID);
        if (id) {
            this.fieldService.participant.connectToOtherPlayer(id);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_participant_store_service__WEBPACK_IMPORTED_MODULE_3__["ParticipantStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["type", "text", "name", "ownName", 3, "ngModel", "ngModelChange"], [3, "click", 4, "ngIf"], ["type", "text", "name", "meetingID", 3, "ngModel", "ngModelChange"], [3, "click"], [2, "vertical-align", "top"], ["placeholder", "Titel", "size", "100", "required", "", 3, "ngModel", "ngModelChange"], ["placeholder", "Beschreibung", "rows", "4", "cols", "150", 3, "ngModel", "ngModelChange"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "href"], [3, "peer"], [3, "ngClass"], ["class", "idea", 4, "ngFor", "ngForOf"], [3, "devName"], [1, "idea"], [3, "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 13, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 25, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 20, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "initial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "joined");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _peer_status_peer_status_component__WEBPACK_IMPORTED_MODULE_7__["PeerStatusComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_8__["ChatBoxComponent"]], styles: ["div.devVoted[_ngcontent-%COMP%] {\n  background-color: #aaaaaa;\n  padding: 5px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\ndiv.devNotVoted[_ngcontent-%COMP%] {\n  background-color: yellow;\n  padding: 5px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n\ndiv.idea[_ngcontent-%COMP%] {\n  background-color: #dddddd;\n  border: 1px solid black;\n  margin: 3px;\n  padding: 3px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUlKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5kZXZWb3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5kaXYuZGV2Tm90Vm90ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5kaXYuaWRlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDNweDtcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _participant_store_service__WEBPACK_IMPORTED_MODULE_3__["ParticipantStoreService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "8Yrd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _peer_status_peer_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./peer-status/peer-status.component */ "4Oyq");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoxComponent"],
        _peer_status_peer_status_component__WEBPACK_IMPORTED_MODULE_6__["PeerStatusComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoxComponent"],
                    _peer_status_peer_status_component__WEBPACK_IMPORTED_MODULE_6__["PeerStatusComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "mtgL":
/*!***************************************!*\
  !*** ./src/app/domain/participant.ts ***!
  \***************************************/
/*! exports provided: Participant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Participant", function() { return Participant; });
/* harmony import */ var _distributed_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./distributed-database */ "JjPw");

class Developer {
    constructor(name, db, participant) {
        this.name = name;
        this.db = db;
        this.participant = participant;
        this.open = true;
        this.voterCache = [];
        this.cacheInvalid = true;
        this.lastMessage = "";
        this.db.on(['add', 'update'], 'votes', true, () => {
            this.cacheInvalid = true;
            this.participant.markCallback();
        });
        participant.registerMessageHandler((id, msg) => {
            if (msg.to == this.name) {
                this.lastMessage = msg.tc + ' ' + msg.tr;
                if (this.lastMessage.length > 40) {
                    this.lastMessage = this.lastMessage.substring(0, 37) + '...';
                }
                this.participant.markCallback();
            }
        });
    }
    get dto() {
        return this.db.get('ideas', this.name);
    }
    get date() {
        return this.dto.date;
    }
    get ideas() {
        return this.dto.ideas;
    }
    setOpen(o) {
        this.open = o;
    }
    voteCountFor(ideaIndex) {
        return this.votersFor(ideaIndex).size;
    }
    voterNamesFor(ideaIndex) {
        return Array.from(this.votersFor(ideaIndex)).join(', ');
    }
    votersFor(ideaIndex) {
        if (this.cacheInvalid) {
            this.voterCache = [];
            this.participant.allParticipants().forEach(p => {
                let vote = this.getVoteFrom(p);
                if (typeof (vote) == 'number') {
                    if (!this.voterCache[vote]) {
                        this.voterCache[vote] = new Set();
                    }
                    this.voterCache[vote].add(p);
                }
            });
            this.cacheInvalid = false;
        }
        if (this.voterCache[ideaIndex]) {
            return this.voterCache[ideaIndex];
        }
        else {
            return new Set();
        }
    }
    getVoteFrom(participantName) {
        return this.db.get('votes', this.name + '.from.' + participantName);
    }
    getTopIdea() {
        this.votersFor(0);
        let bestCnt = 0;
        let best = "";
        for (let i = 0; i < this.voterCache.length; i++) {
            let voteCnt = this.voteCountFor(i);
            if (voteCnt > bestCnt) {
                bestCnt = voteCnt;
                best = this.ideas[i].title;
            }
        }
        return best;
    }
    getTopIdeaVoteCount() {
        this.votersFor(0);
        let bestCnt = 0;
        for (let i = 0; i < this.voterCache.length; i++) {
            let voteCnt = this.voteCountFor(i);
            if (voteCnt > bestCnt) {
                bestCnt = voteCnt;
            }
        }
        return bestCnt;
    }
    getTotalVoteCount() {
        this.votersFor(0);
        let sum = 0;
        for (let i = 0; i < this.voterCache.length; i++) {
            sum += this.voteCountFor(i);
        }
        return sum;
    }
    getLastMessage() {
        return this.lastMessage;
    }
    getLastMessageTime() {
        let m = this.lastMessage.match(/[0-9][0-9]:[0-9][0-9]/);
        if (m) {
            return m[0];
        }
        else {
            return "";
        }
    }
}
class Participant {
    constructor(peer, ownId, ownName, ideas, markCallback) {
        this.participants = [];
        this.developers = [];
        this.sortedByMsg = false;
        this.id = ownId;
        this.name = ownName;
        this.markCallback = markCallback;
        let clean = typeof (ideas) != 'undefined';
        this.db = new _distributed_database__WEBPACK_IMPORTED_MODULE_0__["DistributedDatabaseSystem"]('ideenmesse.' + ownName, peer, ownId, localStorage, clean);
        this.db.on('add', 'ideas', true, (name, data) => {
            this.participants.push(name);
            if (data.ideas.length > 0) {
                let dev = new Developer(name, this.db, this);
                this.developers.push(dev);
                this.ensureDevelopersSorted();
            }
            markCallback();
        });
        if (clean) {
            let h = Math.floor(Math.random() * 72) * 5;
            let s = 85 + Math.floor(Math.random() * 10);
            let l = 35 + Math.floor(Math.random() * 10);
            this.color = 'hsl(' + h + ',' + s + '%,' + l + '%)';
            let me = {
                name: ownName,
                color: this.color,
                date: new Date().getTime(),
                ideas: ideas
            };
            this.db.put('ideas', ownName, me);
        }
        else {
            this.color = this.db.get('ideas', ownName).color;
        }
    }
    getPeerID() {
        return this.id;
    }
    registerMessageHandler(handler) {
        this.db.on('add', 'messages', true, handler);
    }
    registerPlayerChangeHandler(handler) {
        this.db.on('add', 'currentPlayer', true, handler);
        this.db.on('update', 'currentPlayer', false, handler);
        this.db.on('add', 'playerData', true, handler);
    }
    connectToOtherPlayer(id) {
        this.db.connectToNode(id);
    }
    sortByMsg(b) {
        this.sortedByMsg = b;
        this.ensureDevelopersSorted();
    }
    ensureDevelopersSorted() {
        if (this.sortedByMsg) {
            this.developers.sort((a, b) => b.getLastMessageTime().localeCompare(a.getLastMessageTime()));
        }
        else {
            this.developers.sort((a, b) => a.date - b.date);
        }
    }
    allParticipants() {
        return this.participants;
    }
    allDevelopers() {
        this.ensureDevelopersSorted();
        return this.developers;
    }
    sendMessage(msg, to) {
        this.sendMessageRaw(this.makeColored(to, curTime() + ' ' + this.name, msg));
    }
    makeColored(to, tc, tr) {
        return {
            color: this.color,
            to: to,
            tc: tc,
            tr: tr
        };
    }
    sendMessageRaw(msg) {
        this.db.add('messages', msg);
    }
    votedFor(d) {
        return typeof (d.getVoteFrom(this.name)) == 'number';
    }
    voteFor(d, ideaIdx) {
        this.db.put('votes', d.name + '.from.' + this.name, ideaIdx);
    }
}
function curTime() {
    return new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
}



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map