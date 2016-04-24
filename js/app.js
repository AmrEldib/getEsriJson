var map, toolbar;

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});

require([
  "esri/map",
  "esri/toolbars/draw",
  "esri/graphic",

  "esri/symbols/SimpleMarkerSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/symbols/SimpleFillSymbol",
  "esri/Color",

  "esri/geometry/webMercatorUtils",

  "dojo/parser",

  "dojo/domReady!"
], function (
  Map, Draw, Graphic,
  SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol, Color,
  webMercatorUtils,
  parser
) {
  parser.parse();

  function init() {
    map = new Map("mapViewDiv", {
      basemap: "dark-gray",
      center: [-15.469, 36.428],
      zoom: 3
    });
    map.on("load", createToolbar);

    map.on("extent-change", function () {
      var mapExtent = webMercatorUtils.webMercatorToGeographic(map.extent);
      var mapCenter = mapExtent.getCenter();
      document.getElementById("txtLOD").textContent = "Zoom level: " + map.getLevel();
      document.getElementById("txtCenter").textContent = "Center: " + mapCenter.x + ", " + mapCenter.y;
      document.getElementById("txtExtent").value = JSON.stringify(mapExtent);
    })

    // Clear txtEsriJson on load
    document.getElementById('txtEsriJson').value = "";

    // Added event handler for draw toolbar buttons
    var drawToolbarButtons = document.getElementsByClassName("drawToolbarButton");
    Array.prototype.forEach.call(drawToolbarButtons, function (drawToolbarButton) {
      drawToolbarButton.addEventListener("click", activateTool);
    });

    // Added event handler for btnClearAll
    document.getElementById('btnClearAll').onclick = function () {
      map.graphics.clear();
      document.getElementById('txtEsriJson').value = "";
    }

    // Added event handler for popText buttons
    var popTextButtons = document.getElementsByClassName('btnPopText');
    Array.prototype.forEach.call(popTextButtons, function (popTextButton) {
      popTextButton.addEventListener("click", displayPrettyJsonInModel);
    });

    // Added event handler for btnSelectAll
    document.getElementById('btnSelectAll').onclick = function () {
      SelectText("txtAllText");
    }

  }

  function displayPrettyJsonInModel() {
    document.getElementById('txtAllText').innerHTML = library.json.prettyPrint(JSON.parse(document.getElementById(this.dataset.jsonSource).value));
  }

  function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  function activateTool() {
    toolbar.activate(Draw[this.dataset.geometryType.toUpperCase()]);
    map.hideZoomSlider();
  }

  function createToolbar(themap) {
    toolbar = new Draw(map);
    toolbar.on("draw-end", addToMap);
  }

  function addToMap(evt) {
    var symbol;
    toolbar.deactivate();
    map.showZoomSlider();
    switch (evt.geometry.type) {
      case "point":
      case "multipoint":
        symbol = new SimpleMarkerSymbol().setColor(new Color("yellow"));
        break;
      case "polyline":
        symbol = new SimpleLineSymbol().setColor(new Color("yellow"));
        break;
      default:
        symbol = new SimpleFillSymbol().setColor(new Color("yellow"));
        break;
    }
    var graphic = new Graphic(evt.geometry, symbol);
    map.graphics.add(graphic);
    document.getElementById('txtEsriJson').value = JSON.stringify(graphic.geometry.toJson());
  }

  // Initialize app
  init();
});
