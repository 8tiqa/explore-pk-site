jQuery("#simulation")
  .on("click", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c95676cf-ac24-429b-82c5-9e3a0970deea"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a0131635-5bdf-4983-b50b-8781316d28fb"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2dd17364-5c07-4b39-881b-fa0d65d37315"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/122b5378-f83d-4644-8dd1-16da46a4d575"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2dd17364-5c07-4b39-881b-fa0d65d37315"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#t-Group_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#t-Group_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Label_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_1": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Input_2 input": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_4": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_6": {
                      "attributes": {
                        "color": "#E4E4E4",
                        "text-align": "center",
                        "text-decoration": "underline",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_23") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_23": {
                      "attributes": {
                        "color": "#84A82C",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_23 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_24") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_24": {
                      "attributes": {
                        "color": "#84A82C",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_25") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_25": {
                      "attributes": {
                        "color": "#84A82C",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_25 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_26") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_26": {
                      "attributes": {
                        "color": "#84A82C",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "700",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Label_26 .valign": {
                      "attributes": {
                        "vertical-align": "middle"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Label_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Input_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_23")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_24")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_25")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_26")) {
      jEvent.undoCases(jFirer);
    }
  });