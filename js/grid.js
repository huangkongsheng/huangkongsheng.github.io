"use strict";function initGrid(){var r=$(".dream-grid").masonry({itemSelector:".dream-column"});r.imagesLoaded().progress(function(){return r.masonry("layout")})}$(document).ready(initGrid);