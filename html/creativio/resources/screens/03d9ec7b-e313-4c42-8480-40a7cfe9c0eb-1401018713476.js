jQuery("#simulation")
  .on("focusin", ".s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
                    "value": ""
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_1 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": ""
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_2 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": ""
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_3 input": {
                      "attributes": {
                        "color": "#000000",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
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
  .on("focusout", ".s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_1 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_1"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
                    "value": "Name"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_2 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_2"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": "Email address"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "9pt"
                      }
                    }
                  },{
                    "#s-03d9ec7b-e313-4c42-8480-40a7cfe9c0eb #s-Input_3 input": {
                      "attributes": {
                        "color": "#C0C0C0",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "9pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_3",
                    "value": "Website url"
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
  });