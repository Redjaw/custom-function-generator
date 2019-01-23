Blockly.Blocks['day'] = {
    init: function() {
      this.jsonInit({
        "type": "day",
        "message0": "Day %1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "weekDayDropDown",
            "options": [
              ["Select day",""],
              ["MON","monday"],
              ["TUE","tuesday"],
              ["WED","wednesday"],
              ["THU","thursday"],
              ["FRI","friday"],
              ["SAT","saturday"],
              ["SUN","sunday"]
            ]
          },
          {
            "type": "input_value",
            "name": "input",
            "check": "String"
          }
        ],
        "inputsInline": false,
        "colour": 195,
        "tooltip": "",
        "helpUrl": ""
      });
    }
  };

  Blockly.JavaScript['day'] = function(block) {
    var dropdown_weekdaydropdown = block.getFieldValue('weekDayDropDown').toString();
    var text = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'weekday(\''+dropdown_weekdaydropdown+'\','+text+')';
    return code;
  };