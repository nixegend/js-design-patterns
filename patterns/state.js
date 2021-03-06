// "interface" State
function State() {
    this.someMethod = function () { };
    this.nextState = function () { };
}

// implementation of State

// first state
function StateA(widjet) {
    this.someMethod = function () {
        console.log("StateA.someMethod");
        this.nextState();
    };
    this.nextState = function () {
        console.log("StateA > StateB");
        widjet.onNextState(new StateB(widjet));
    };
}

StateA.prototype = new State();
StateA.prototype.constructor = StateA;

// second state
function StateB(widjet) {
    this.someMethod = function () {
        console.log("StateB.someMethod");
        this.nextState();
    };
    this.nextState = function () {
        console.log("StateB > StateA");
        widjet.onNextState(new StateA(widjet));
    };
}

StateB.prototype = new State();
StateB.prototype.constructor = StateB;

// "interface" Widget
function Widget() {
    this.someMethod = function () { };
    this.onNextState = function (state) { };
}

// implementation Widget
function Widget1() {
    var state = new StateA(this);

    this.someMethod = function () {
        state.someMethod();
    };
    this.onNextState = function (newState) {
        state = newState;
    };
}

Widget1.prototype = new Widget();
Widget1.prototype.constructor = Widget1;

// using
var widget = new Widget1();

// StateA.someMethod
widget.someMethod(); // StateA > StateB

// StateB.someMethod
widget.someMethod(); // StateB > StateA