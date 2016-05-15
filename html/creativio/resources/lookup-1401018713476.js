(function(window, undefined) {
  var dictionary = {
    "a0131635-5bdf-4983-b50b-8781316d28fb": "Contact",
    "122b5378-f83d-4644-8dd1-16da46a4d575": "FAQ",
    "2dd17364-5c07-4b39-881b-fa0d65d37315": "Page",
    "c95676cf-ac24-429b-82c5-9e3a0970deea": "Blog",
    "03d9ec7b-e313-4c42-8480-40a7cfe9c0eb": "Blog item page",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "c6c716c7-1186-4ff9-8902-e9f54335788d": "Page template",
    "1ea7ee48-8e53-41e1-bc6f-5e7c27c40a0d": "Footer"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);