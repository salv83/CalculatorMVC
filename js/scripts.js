    var mvcPage = (function() {

        var controller = {

            control: function(i) {
                if (model.state == 1) {
                    model.operand1 = i;
                    view.renderOp1();
                    model.state = 2;
                } else if (model.state == 2) {
                    view.renderERR1();
                } else if (model.state == 3) {
                    model.operand3 = i;
                    view.renderOp3();
                    if (model.operand2 == '+') {
                        model.result = model.operand1 + model.operand3;
                        view.renderres();

                    } else if (model.operand2 == '-') {
                        model.result = model.operand1 - model.operand3;
                        view.renderres();
                    } else {
                        model.result = model.operand1 * model.operand3;
                        view.renderres();
                    }

                    model.state = 1;
                }
            },
            //action to submit form
            submitForm0: function() {
                controller.control(0);
            },
            submitForm1: function() {
                controller.control(1);
            },
            submitForm2: function() {
                controller.control(2);
            },
            submitForm3: function() {
                controller.control(3);
            },
            submitForm4: function() {
                controller.control(4);
            },
            submitForm5: function() {
                controller.control(5);
            },
            submitForm6: function() {
                controller.control(6);
            },
            submitForm7: function() {
                controller.control(7);
            },
            submitForm8: function() {
                controller.control(8);
            },
            submitForm9: function() {
                controller.control(9);
            },

            submitFormp: function() {
                if ((model.state == 1) || (model.state == 3)) {
                    view.renderERR2();
                } else {
                    model.operand2 = '+';
                    view.renderOp2();
                    model.state = 3;
                }
            },
            submitFormm: function() {
                if ((model.state == 1) || (model.state == 3)) {
                    view.renderERR2();
                } else {
                    model.operand2 = '-';
                    view.renderOp2();
                    model.state = 3;
                }
            },
            submitFormX: function() {
                if ((model.state == 1) || (model.state == 3)) {
                    view.renderERR2();
                } else {
                    model.operand2 = 'X';
                    view.renderOp2();
                    model.state = 3;
                }
            }
        };

        //views contain reference to all the UI elements we need to play with
        var view = {

            setup: function() {
                view.b0 = document.getElementById('b0');
                view.b1 = document.getElementById('b1');
                view.b2 = document.getElementById('b2');
                view.b3 = document.getElementById('b3');
                view.b4 = document.getElementById('b4');
                view.b5 = document.getElementById('b5');
                view.b6 = document.getElementById('b6');
                view.b7 = document.getElementById('b7');
                view.b8 = document.getElementById('b8');
                view.b9 = document.getElementById('b9');
                view.bX = document.getElementById('bX');
                view.bp = document.getElementById('b+');
                view.bm = document.getElementById('b-');
                view.op1 = document.getElementById('op1');
                view.op2 = document.getElementById('op2');
                view.op3 = document.getElementById('op3');
                view.res = document.getElementById('res');
            },


            //action to render operand on screen
            renderOp1: function() {
                view.op1.innerHTML = model.operand1;
            },
            renderOp2: function() {
                view.op2.innerHTML = model.operand2;
            },
            renderOp3: function() {
                view.op3.innerHTML = model.operand3;
            },
            renderres: function() {
                view.res.innerHTML = model.result;
            },
            renderERR1: function() {
                alert("Choose an operation + - X");
            },
            renderERR2: function() {
                alert("Choose a number");
            },

            clear: function() {
                view.op1.value = '';
                view.op2.value = '';
                view.op3.value = '';
                view.res.value = '';
            }

        };


        //model contains data we need of
        var model = {
            temp: '',
            operand1: 0,
            operand2: '',
            operand3: 0,
            result: 0,
            state: 1

        };


        //bind events to objects in view
        function bindEvents() {

            view.b0.onclick = controller.submitForm0;
            view.b1.onclick = controller.submitForm1;
            view.b2.onclick = controller.submitForm2;
            view.b3.onclick = controller.submitForm3;
            view.b4.onclick = controller.submitForm4;
            view.b5.onclick = controller.submitForm5;
            view.b6.onclick = controller.submitForm6;
            view.b7.onclick = controller.submitForm7;
            view.b8.onclick = controller.submitForm8;
            view.b9.onclick = controller.submitForm9;
            view.bp.onclick = controller.submitFormp;
            view.bm.onclick = controller.submitFormm;
            view.bX.onclick = controller.submitFormX;


        }



        //initialize is the only method accessible outside
        return {
            initialize: function() {
                view.setup();
                bindEvents();
            }

        };
    });