(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"get-inv-info-web-dev\",\"version\":\"1.3.6\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"buildProd\":\"ng build --prod\",\"buildGithub\":\"ng build --base-href getInvInfoWeb\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~9.0.4\",\"@angular/common\":\"~9.0.4\",\"@angular/compiler\":\"~9.0.4\",\"@angular/core\":\"~9.0.4\",\"@angular/forms\":\"~9.0.4\",\"@angular/platform-browser\":\"~9.0.4\",\"@angular/platform-browser-dynamic\":\"~9.0.4\",\"@angular/router\":\"~9.0.4\",\"@zxing/library\":\"^0.15.2\",\"file-saver\":\"^2.0.2\",\"javascript-barcode-reader\":\"^0.6.8\",\"ng2-pdf-viewer\":\"^6.1.2\",\"pdfjs-dist\":\"^2.2.228\",\"rxjs\":\"~6.5.4\",\"tesseract.js\":\"^2.0.2\",\"tslib\":\"^1.10.0\",\"xlsx-js-style\":\"^1.2.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.900.4\",\"@angular/cli\":\"~9.0.4\",\"@angular/compiler-cli\":\"~9.0.4\",\"@angular/language-service\":\"~9.0.4\",\"@types/jasmine\":\"~3.3.8\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.11.1\",\"@types/tesseract.js\":\"0.0.2\",\"codelyzer\":\"^5.1.2\",\"jasmine-core\":\"~3.4.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~4.1.0\",\"karma-chrome-launcher\":\"~2.2.0\",\"karma-coverage-istanbul-reporter\":\"~2.0.1\",\"karma-jasmine\":\"~2.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.0\",\"protractor\":\"~5.4.0\",\"ts-node\":\"~7.0.0\",\"tslint\":\"~5.15.0\",\"typescript\":\"~3.7.5\"}}");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfjs-dist/build/pdf */ "./node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tesseract.js */ "./node_modules/tesseract.js/src/index.js");
/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xlsx_js_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx-js-style */ "./node_modules/xlsx-js-style/dist/xlsx.min.js");
/* harmony import */ var xlsx_js_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xlsx_js_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zxing/library */ "./node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





//import * as XLSX from 'xlsx';







var _c0 = ["pdfViewer"];
function AppComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_0_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.downloadLastExcel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Download Last Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drop PDF file into this window. Or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_0_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.selectFileInput.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Select Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_0_div_6_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.lastExcel);
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "progress", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Porcessing... ", ctx_r1.getFinishedJobs().length + 1, " of ", ctx_r1.jobs.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.getFinishedJobs().length)("max", ctx_r1.jobs.length - 1);
} }
function AppComponent_div_2_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var job_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r11.message);
} }
function AppComponent_div_2_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var job_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r11.error);
} }
function AppComponent_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_2_div_7_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_2_div_7_div_4_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var job_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r11.file.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", job_r11.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", job_r11.error);
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Filename:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Result:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_div_2_div_7_Template, 5, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.jobs);
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_5_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_2__["version"];
        this.barcodeReader = new _zxing_library__WEBPACK_IMPORTED_MODULE_6__["BrowserBarcodeReader"]();
        this.isReady = false;
        this.loading = true;
        this.pdfSrc = "";
        this.jobs = [];
        this.selectFileInput = (function () {
            var input = document.createElement('input');
            input.type = 'file';
            input.multiple = true;
            input.accept = 'application/pdf';
            input.addEventListener("change", function (event) {
                if (!_this.loading && event.target && event.target['files'] && event.target['files'].length > 0)
                    _this.loadPdfFiles(event.target['files']);
            });
            return input;
        })();
        this.lastExcel = null;
        this.tessWorker = tesseract_js__WEBPACK_IMPORTED_MODULE_4__["createWorker"]({
            //gzip: false,
            workerPath: "./assets/tesseract.worker.min.js",
            corePath: "./assets/tesseract-core.wasm.js",
            langPath: "./assets/tesseractLang",
        });
        window.document.title = "GetInvInfo v." + _package_json__WEBPACK_IMPORTED_MODULE_2__["version"];
        window.addEventListener("dragover", function (e) { return e && e.preventDefault(); }, false);
        window.addEventListener("drop", function (e) { return e && e.preventDefault(); }, false);
        var initFn = function () {
            _this.initTessWorker().then(function () {
                _this.isReady = true;
                _this.loading = false;
            });
        };
        // Check if need to delete browser indexedDb or not.
        var delDbKey = 1583513841733;
        var delDbCheck = localStorage.getItem('delDb' + delDbKey);
        if (!delDbCheck) {
            var delDbReq = indexedDB.deleteDatabase('keyval-store');
            delDbReq.onsuccess = function () {
                localStorage.setItem('delDb' + delDbKey, '1');
                initFn();
            };
            delDbReq.onerror = function () { return initFn(); };
            delDbReq.onblocked = function () { return initFn(); };
        }
        else {
            initFn();
        }
    }
    AppComponent.prototype.onDblClick = function () { console.log(this); };
    //Dragover listener
    AppComponent.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    //Dragleave listener
    AppComponent.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    };
    //Drop listener
    AppComponent.prototype.ondrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        //console.log(evt.dataTransfer.files);
        if (!this.loading && evt.dataTransfer.files.length > 0)
            this.loadPdfFiles(evt.dataTransfer.files);
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.initTessWorker = function () {
        var _this = this;
        return this.tessWorker.load()
            //.then(ConfigResult=>this.tessWorker.loadLanguage('chi_tra'))
            //.then(()=>this.tessWorker.initialize('chi_tra'));
            .then(function (ConfigResult) { return _this.tessWorker.loadLanguage('eng'); })
            .then(function () { return _this.tessWorker.initialize('eng'); });
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.loadPdfFiles = function (files) {
        if (this.loading)
            return;
        this.loading = true;
        this.jobs.splice(0, this.jobs.length);
        for (var i = 0; i < files.length; i++) {
            //this.files.push(evt.dataTransfer.files[i]);
            if (files[i].type == "application/pdf") {
                this.jobs.push({
                    file: files[i],
                    status: 'pending',
                    results: [],
                    message: "",
                    error: ""
                });
            }
        }
        if (this.jobs.length > 0) {
            this.checkAndOpenPdf();
        }
        else {
            this.loading = false;
        }
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.markJobAsFinished = function (job) {
        job.status = 'finished';
        this.checkAndOpenPdf();
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.checkAndOpenPdf = function () {
        var _this = this;
        var pendingJobs = this.jobs.filter(function (job) { return job.status == 'pending'; });
        if (pendingJobs.length > 0) {
            var job_1 = pendingJobs.shift();
            job_1.status = 'processing';
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production && job_1.file && job_1.file.name)
                console.log('Filename: ' + job_1.file.name);
            var reader_1 = new FileReader();
            reader_1.onload = function (e) {
                _this.readPdf(reader_1.result, 4000)
                    .then(function (canvas) { return _this.resizeImage(canvas, 4000); })
                    .then(function (resized_canvas) { return _this.recognizeBarcode(resized_canvas, 4000); })
                    .then(function (result) {
                    if (result.value.trim()) {
                        job_1.results.push(result);
                    }
                    else {
                        job_1.error = "Cannot recognize order number. The PDF may not in correct format.";
                        _this.markJobAsFinished(job_1);
                        throw (job_1.error);
                    }
                    ;
                })
                    .then(function () { return _this.readPdf(reader_1.result, 1860); })
                    .then(function (canvas) { return _this.resizeImage(canvas, 1860); })
                    .then(function (resized_canvas) { return _this.recognizeNumbers(resized_canvas, 1860); })
                    .then(function (results) { return results.map(function (result) { return job_1.results.push(result); }); })
                    .then(function () {
                    job_1.message = job_1.results.map(function (item) { return item.title + ':' + item.value; }).join(', ');
                    _this.markJobAsFinished(job_1);
                })
                    .catch(function (err) {
                    console.log(err);
                });
            };
            //reader.onload = (e:any)=>this.pdfSrc=e.target.result;
            reader_1.readAsArrayBuffer(job_1.file);
        }
        else {
            this.exportAsExcelFile();
        }
    };
    //-------------------------------------------------------------------------------------------------
    AppComponent.prototype.readPdfNg2PdfViewer = function (file, targetWidth) {
        var _this = this;
        if (targetWidth === void 0) { targetWidth = 4000; }
        return new Promise(function (resolve, reject) {
            _this.pdfViewer.pageRendered.subscribe(function (data) {
                if (data.pageNumber == 1) {
                    var canvas = document.getElementsByTagName('canvas')[0];
                    resolve(canvas);
                }
            });
            _this.pdfSrc = file;
        });
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.readPdf = function (file, targetWidth) {
        if (targetWidth === void 0) { targetWidth = 4000; }
        return new Promise(function (resolve, reject) {
            pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_3__["GlobalWorkerOptions"].workerSrc = './assets/pdf.worker.js';
            var loadingTask = pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_3__["getDocument"](file);
            loadingTask.promise.then(function (pdf) {
                pdf.getPage(1).then(function (page) {
                    var viewport = page.getViewport({ scale: 1 });
                    //console.log('Original PDF width: ' + viewport.width + ', height: ' + viewport.height);
                    var scale = targetWidth / viewport.width;
                    //console.log('Open PDF to Scale: ' + scale);
                    viewport = page.getViewport({ scale: scale });
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    //context.imageSmoothingEnabled = false;
                    //context.imageSmoothingQuality = 'low';
                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    //console.log('Opened PDF width: ' + canvas.width + ', height: ' + canvas.height);
                    var renderTask = page.render({ canvasContext: context, viewport: viewport, });
                    renderTask.promise.then(function () {
                        resolve(canvas);
                    });
                });
            });
        });
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.resizeImage = function (canvas, targetWidth) {
        if (targetWidth === void 0) { targetWidth = 4000; }
        return new Promise(function (resolve, reject) {
            try {
                var resized_canvas = document.createElement('canvas');
                resized_canvas.width = targetWidth;
                resized_canvas.height = canvas.height / canvas.width * resized_canvas.width;
                resized_canvas.getContext('2d').drawImage(canvas, 0, 0, resized_canvas.width, resized_canvas.height);
                //console.log(resized_canvas.toDataURL());
                resolve(resized_canvas);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    AppComponent.prototype.resizeImg = function (imageString) {
        return new Promise(function (resolve, reject) {
            var tempImg = document.createElement('img');
            tempImg.onload = function () {
                //console.log(tempImg);
                var canvas = document.createElement("canvas");
                canvas.width = tempImg.width / 2;
                canvas.height = tempImg.height / tempImg.width * canvas.width;
                canvas.getContext("2d").drawImage(tempImg, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/png"));
            };
            tempImg.src = imageString;
        });
    };
    ;
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.recognizeBarcode = function (canvas, targetWidth) {
        var _this = this;
        if (targetWidth === void 0) { targetWidth = 4000; }
        return new Promise(function (resolve, reject) {
            var captureConfig = {
                title: '報單號碼',
                pos: [505, 61, 278, 24],
                blackUnder: 127
            };
            var left = captureConfig.pos[0] * targetWidth / 1000;
            var top = captureConfig.pos[1] * targetWidth / 1000;
            var width = captureConfig.pos[2] * targetWidth / 1000;
            var height = captureConfig.pos[3] * targetWidth / 1000;
            var cropCanvas = document.createElement('canvas');
            cropCanvas.width = width;
            cropCanvas.height = height;
            var cropCanvas2D = cropCanvas.getContext('2d');
            //cropCanvas2D.imageSmoothingEnabled = false;
            //cropCanvas2D.imageSmoothingQuality = 'low';
            cropCanvas2D.drawImage(canvas, left, top, width, height, 0, 0, width, height);
            var imageDataObj = cropCanvas2D.getImageData(0, 0, width, height);
            var imageData = imageDataObj.data;
            //console.log(imageDataObj);
            for (var i = 0; i < imageData.length; i += 4) {
                var avg = (imageData[i] + imageData[i + 1] + imageData[i + 2]) / 3;
                avg = (avg < captureConfig.blackUnder) ? 0 : 255;
                imageData[i] = avg;
                imageData[i + 1] = avg;
                imageData[i + 2] = avg;
            }
            cropCanvas2D.putImageData(imageDataObj, 0, 0);
            var image = cropCanvas.toDataURL("image/png");
            _this.barcodeReader.decodeFromImage(undefined, image).then(function (result) {
                resolve({ title: captureConfig.title, value: result.text.replace(/ /g, '') });
            }).catch(function (err) {
                resolve({ title: captureConfig.title, value: '' });
            });
        });
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.recognizeNumbers = function (canvas, targetWidth) {
        var _this = this;
        if (targetWidth === void 0) { targetWidth = 2000; }
        return new Promise(function (resolve, reject) {
            var num2d = function (input) {
                var num = (input.toString().match(/\d+/g) || []).join('');
                while (num.length < 3)
                    num = "0" + num;
                return [num.slice(0, num.length - 2), '.', num.slice(num.length - 2)].join('');
            };
            var captureConfig = [
                { processType: 'ocr', title: '分提單號碼', pos: [480, 145, 188, 20], blackUnder: 127, charWhitelist: '0123456789.' },
                { processType: 'ocr', title: '離岸價格', pos: [850, 153, 121, 20], blackUnder: 127, charWhitelist: '0123456789', postFn: [num2d] },
                { processType: 'ocr', title: '運費', pos: [850, 178, 121, 20], blackUnder: 127, charWhitelist: '0123456789', postFn: [num2d] },
                { processType: 'ocr', title: '保險費', pos: [850, 211, 121, 20], blackUnder: 127, charWhitelist: '0123456789', postFn: [num2d] },
                { processType: 'ocr', title: '起岸價格', pos: [850, 289, 121, 20], blackUnder: 127, charWhitelist: '0123456789', postFn: [num2d] },
                { processType: 'ocr', title: '進口稅', pos: [854, 988, 121, 20], blackUnder: 127, charWhitelist: '0123456789', isInBottomTable: true },
                { processType: 'ocr', title: '營業稅', pos: [858, 1112, 121, 20], blackUnder: 127, charWhitelist: '0123456789', isInBottomTable: true },
                { processType: 'ocr', title: '匯率', pos: [890, 110, 80, 20], blackUnder: 127, charWhitelist: '0123456789.', },
                { processType: 'ocr', title: '應加費用', pos: [850, 242, 121, 20], blackUnder: 127, charWhitelist: '0123456789', postFn: [num2d] },
                { processType: 'ocr', title: '應減費用', pos: [850, 266, 121, 20], blackUnder: 127, charWhitelist: '0123456789', postFn: [num2d] },
                { processType: 'ocr', title: '推廣貿易服務費', pos: [853, 1013, 121, 20], blackUnder: 127, charWhitelist: '0123456789', isInBottomTable: true },
            ];
            var bottomTableOffsetTop = _this.getBottomTableOffsetTop(canvas);
            if (bottomTableOffsetTop)
                console.log('+++ bottomTableOffsetTop: ' + bottomTableOffsetTop);
            var configIndex = 0;
            var tempResults = [];
            var loopFun = function (config, trial) {
                if (trial === void 0) { trial = 0; }
                var offset = [0, -1, 1][trial];
                var left = config.pos[0] * targetWidth / 1000;
                var top = (config.pos[1] + offset) * targetWidth / 1000;
                var width = config.pos[2] * targetWidth / 1000;
                var height = config.pos[3] * targetWidth / 1000;
                if (config.isInBottomTable)
                    top += bottomTableOffsetTop;
                var cropCanvas = document.createElement('canvas');
                cropCanvas.width = width;
                cropCanvas.height = height;
                var cropCanvas2D = cropCanvas.getContext('2d');
                //cropCanvas2D.imageSmoothingEnabled = false;
                //cropCanvas2D.imageSmoothingQuality = 'low';
                cropCanvas2D.drawImage(canvas, left, top, width, height, 0, 0, width, height);
                //黑白處理
                //OCR時效果會變差，所以comment掉
                /*let imageDataObj:any = cropCanvas2D.getImageData(0, 0, width, height);
                if (config.blackUnder) {
                    let imageData:Uint8ClampedArray = imageDataObj.data;
                    //console.log(imageDataObj);
                    for (let i=0; i<imageData.length; i+=4) {
                        let avg:number = (imageData[i] + imageData[i+1] + imageData[i+2]) / 3;
                        avg = (avg < config.blackUnder) ? 0 : 255;
                        imageData[i] = avg;
                        imageData[i+1] = avg;
                        imageData[i+2] = avg;
                    }
                    cropCanvas2D.putImageData(imageDataObj, 0, 0);
                }*/
                var image = cropCanvas.toDataURL("image/png");
                if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production)
                    console.log('%c ', "background-repeat: no-repeat; padding: 10px 200px; background-image: url(" + image + ")");
                _this.tessWorker.setParameters({
                    tessedit_pageseg_mode: "7" /* SINGLE_LINE */,
                    tessedit_char_whitelist: config.charWhitelist,
                });
                _this.tessWorker.recognize(image).then(function (result) {
                    var e_1, _a;
                    //this.tessWorker.terminate(result.jobId);
                    var regResult = result.data.text;
                    if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production)
                        console.log(result);
                    if (config.postFn)
                        try {
                            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(config.postFn), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var fn = _c.value;
                                regResult = fn(regResult);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    regResult = regResult.trim();
                    if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production)
                        console.log(config.title + ": " + regResult);
                    if (!regResult && trial < 2) {
                        loopFun(captureConfig[configIndex], trial + 1);
                    }
                    else {
                        tempResults.push({ title: config.title, value: regResult });
                        if (configIndex < (captureConfig.length - 1)) {
                            configIndex++;
                            loopFun(captureConfig[configIndex]);
                        }
                        else {
                            resolve(tempResults);
                        }
                    }
                });
            };
            loopFun(captureConfig[configIndex]);
        });
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.getJobResultValueByTitle = function (job, title) {
        var results = job.results;
        if (results.length < 1)
            return '';
        var foundResult = results.find(function (r) { return r.title == title; });
        if (!foundResult)
            return '';
        return foundResult.value;
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.exportAsExcelFile = function () {
        var e_2, _a;
        var _this = this;
        var defTitleStyle = {
            alignment: { wrapText: true, vertical: "top", horizontal: "center" },
            font: { bold: true, color: { rgb: "FFFFFF" } },
            fill: { fgColor: { rgb: "00B0F0" } },
            border: { top: { style: "thin", color: "000000" }, bottom: { style: "thin", color: "000000" }, left: { style: "thin", color: "000000" }, right: { style: "thin", color: "000000" } }
        };
        var defContentStyle = {
            alignment: { wrapText: true, vertical: "center", horizontal: "center" },
            font: { color: { rgb: "000000" } },
            border: { top: { style: "thin", color: "000000" }, bottom: { style: "thin", color: "000000" }, left: { style: "thin", color: "000000" }, right: { style: "thin", color: "000000" } }
        };
        var exportConfig = [
            {
                excelTitle: "Arvato Invoice#",
                getFn: function (job) { return ""; },
                col: { wch: 21.43 },
                titleStyle: Object.assign({}, defTitleStyle, { fill: null, font: { bold: true, color: { rgb: "000000" } } })
            }, {
                excelTitle: "報單號碼\n(3)",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '報單號碼'); },
                col: { wch: 32.43 }
            }, {
                excelTitle: "進口報單\n(離岸價格)\n(17)",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '離岸價格'); },
                col: { wch: 21.57 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.00" })
            }, {
                excelTitle: "運費\nUSD\n(18)",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '運費'); },
                col: { wch: 21.57 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.00" })
            }, {
                excelTitle: "保險費\nUSD\n(19)",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '保險費'); },
                col: { wch: 21.57 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.00" })
            }, {
                excelTitle: "應加減費用\n(20, 21)",
                getFn: function (job) {
                    var valueA = _this.getJobResultValueByTitle(job, '應加費用');
                    var valueB = _this.getJobResultValueByTitle(job, '應減費用');
                    return (valueB != "0.00") ? ("-" + valueB) : valueA;
                },
                col: { wch: 21.57 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.00" })
            }, {
                excelTitle: "進口報單\n(起岸價格)\n(22)",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '起岸價格'); },
                col: { wch: 19.14 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.00" })
            }, {
                excelTitle: "Waybill #",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '分提單號碼'); },
                col: { wch: 18.57 },
                titleStyle: Object.assign({}, defTitleStyle, { font: { bold: true, color: { rgb: "FF0000" } }, fill: { fgColor: { rgb: "CCFFCC" } } })
            }, {
                excelTitle: "CDS X-Rate\n(16)",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '匯率'); },
                col: { wch: 26.43 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.000" })
            }, {
                excelTitle: "進口稅",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '進口稅') + ".00"; },
                col: { wch: 26.43 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.00" })
            }, {
                excelTitle: "推廣貿易服務費",
                getFn: function (job) {
                    var value = _this.getJobResultValueByTitle(job, '推廣貿易服務費');
                    return (value == "0") ? "0.00" : value;
                },
                col: { wch: 26.43 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.00" })
            }, {
                excelTitle: "營業稅",
                getFn: function (job) { return _this.getJobResultValueByTitle(job, '營業稅') + ".00"; },
                col: { wch: 26.43 },
                contentStyle: Object.assign({}, defContentStyle, { numFmt: "0.00" })
            }
        ];
        var datas = [];
        var _loop_1 = function (job) {
            if (!job.error) {
                var data_1 = {};
                exportConfig.map(function (config) { return data_1[config.excelTitle] = config.getFn(job); });
                datas.push(data_1);
            }
        };
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.jobs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var job = _c.value;
                _loop_1(job);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var worksheet = xlsx_js_style__WEBPACK_IMPORTED_MODULE_5__["utils"].json_to_sheet(datas);
        var workbook = { Sheets: { 'Month Year': worksheet }, SheetNames: ['Month Year'] };
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production)
            console.log(worksheet);
        worksheet['!cols'] = exportConfig.map(function (config) { return config.col; });
        //Title style
        exportConfig.map(function (config, index) {
            var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index] + '1';
            if (worksheet[key])
                worksheet[key].s = config.titleStyle || defTitleStyle;
        });
        //Content style
        exportConfig.map(function (config, i) {
            datas.map(function (data, j) {
                var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i] + (j + 2).toString();
                if (worksheet[key])
                    worksheet[key].s = config.contentStyle || defContentStyle;
            });
        });
        this.lastExcel = {
            wb: workbook,
            filename: 'getInvInfo_result_' + new Date().getTime() + '.xlsx'
        };
        this.loading = false;
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.downloadLastExcel = function () {
        //FileSaver.saveAs(this.lastExcel.blob, this.lastExcel.filename);
        xlsx_js_style__WEBPACK_IMPORTED_MODULE_5__["writeFile"](this.lastExcel.wb, this.lastExcel.filename); //, {bookSST: true, cellStyles: true});
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.getFinishedJobs = function () {
        return this.jobs.filter(function (job) { return job.status == 'finished'; });
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.saveCanvasAsImage = function (canvas, filename) {
        if (filename === void 0) { filename = 'output.png'; }
        var link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png'); // 轉為 base64 PNG
        link.click(); // 觸發下載
    };
    //---------------------------------------------------------------------------------------------
    AppComponent.prototype.getBottomTableOffsetTop = function (canvas) {
        // Debug Use 儲存至PNG
        // this.saveCanvasAsImage(canvas);
        var scale = canvas.width / 930;
        // console.log('scale:' + scale);
        //starting point: 867, 875
        var startX = 867 * scale;
        var startY = 876 * scale;
        var ctx = canvas.getContext('2d');
        var imgData = ctx.getImageData(startX, startY, 1, Math.floor(25 * scale));
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production) { // Debug Use
            // 將 canvas 裁剪成指定大小
            var cropCanvas = document.createElement('canvas');
            cropCanvas.width = 1;
            cropCanvas.height = Math.floor(25 * scale);
            var cropCtx = cropCanvas.getContext('2d');
            cropCtx.putImageData(imgData, 0, 0);
            var image = cropCanvas.toDataURL("image/png");
            console.log(image);
            console.log('%c ', "background-repeat: no-repeat; padding: 10px 200px; background-image: url(" + image + ")");
        }
        var data = imgData.data; // RGBA flat array
        console.log(data);
        var foundY = -1;
        for (var y = 0; y < (data.length / 4); y++) {
            var i = y * 4;
            var r = data[i];
            var g = data[i + 1];
            var b = data[i + 2];
            var brightness = (r + g + b) / 3;
            if (brightness < 100) {
                foundY = y;
                console.log('找到邊線於 Y =', foundY);
                break;
            }
        }
        if (foundY == -1) {
            console.error('找不到邊線，請檢查圖片或參數設定。');
            return 0;
        }
        ;
        //舊的format的黑線是在884 (scale:1)，找出來的Y值是15，所以返回的Y值是Y-15 = 0;
        //新的format的黑線是在878 (scale:1)，找出來的Y值是5，所以返回的Y值是Y-15 = -10;
        var result = foundY - 15;
        console.log('返回offset結果:', result);
        return result;
        /*
        舊:
        分提單號碼:4464513174
        找到邊線於 Y = 1767
        bottomTableOffsetTop: -1
        新:
        分提單號碼:4464552190
        找到邊線於 Y = 5
        bottomTableOffsetTop: -3
        */
        // return foundY - (884 * scale);
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.pdfViewer = _t.first);
        } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function AppComponent_dblclick_HostBindingHandler($event) { return ctx.onDblClick($event); })("dragover", function AppComponent_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function AppComponent_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function AppComponent_drop_HostBindingHandler($event) { return ctx.ondrop($event); });
        } }, decls: 8, vars: 6, consts: [["class", "instruction", 4, "ngIf"], ["class", "instruction progress", 4, "ngIf"], ["class", "jobBox", 4, "ngIf"], [1, "version"], ["class", "loading", 3, "click", 4, "ngIf"], [3, "src"], ["pdfViewer", ""], [1, "instruction"], [1, "btn", "openFile", 3, "click"], ["class", "downloadFile btn", 3, "click", 4, "ngIf"], [1, "downloadFile", "btn", 3, "click"], [1, "instruction", "progress"], [3, "value", "max"], [1, "jobBox"], [1, "message", "title"], [1, "fileName"], [1, "content"], [1, "messageContainer"], ["class", "message", 4, "ngFor", "ngForOf"], [1, "message"], ["class", "content", 4, "ngIf"], ["class", "content error", 4, "ngIf"], [1, "content", "error"], [1, "loading", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 7, 1, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 3, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_2_Template, 8, 1, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 1, 0, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "pdf-viewer", 5, 6);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isReady && !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isReady && ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isReady);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Version: ", ctx.version, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.pdfSrc);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["PdfViewerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n}\n[_nghost-%COMP%]   .version[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 9px;\n  left: 20px;\n  bottom: 5px;\n  text-shadow: 1px 1px 1px #ffffff;\n}\n[_nghost-%COMP%]   .loading[_ngcontent-%COMP%] {\n  background-image: url('loading.gif');\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 10;\n  width: 100vw;\n  height: 100vh;\n  background-position: center;\n  background-size: 100px;\n  background-repeat: no-repeat;\n}\n[_nghost-%COMP%]   pdf-viewer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -10000px;\n  top: -10000px;\n  visibility: hidden;\n}\n[_nghost-%COMP%]   .instruction[_ngcontent-%COMP%] {\n  height: 35px;\n  min-height: 35px;\n  max-height: 35px;\n  margin: 20px 20px 0px 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: calc(100% - 40px);\n}\n[_nghost-%COMP%]   .instruction[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: green;\n  padding: 5px 10px;\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px #aaaaaa;\n  color: white;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .instruction.progress[_ngcontent-%COMP%] {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n[_nghost-%COMP%]   .instruction.progress[_ngcontent-%COMP%]   progress[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  margin: 20px;\n  border: 1px solid black;\n  height: calc(100vh - 95px);\n  border-radius: 10px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-bottom: 1px solid black;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .message.title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  height: 30px;\n  background-color: #aaa;\n  color: #FFF;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .message.title[_ngcontent-%COMP%]   .fileName[_ngcontent-%COMP%], [_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .message.title[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #eeeeee;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .fileName[_ngcontent-%COMP%] {\n  width: 30%;\n  min-width: 30%;\n  max-width: 30%;\n  padding: 5px 10px;\n  border-right: 1px solid black;\n  word-break: break-all;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 70%;\n  padding: 3px 5px;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .content.error[_ngcontent-%COMP%] {\n  color: crimson;\n  font-weight: bold;\n  background-color: #fff59c;\n}\n[_nghost-%COMP%]   .jobBox[_ngcontent-%COMP%]   .messageContainer[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100% - 30px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqaW1teVxcRGVza3RvcFxccHJvamVjdHNcXGdldEludkluZm9XZWJEZXZfb3JnL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0VBQUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNBUjtBREdJO0VBQ0ksb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDRFI7QURLSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0hSO0FETUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFBQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtNQUFBLHNCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtBQ0pSO0FETVE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSlo7QURPUTtFQUNJLDRCQUFBO0VBQUEsNkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FDTFo7QURPWTtFQUNJLFdBQUE7QUNMaEI7QURVSTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUlI7QURVUTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtBQ1JaO0FEVVk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNSaEI7QURVZ0I7RUFDSSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsc0JBQUE7VUFBQSxtQkFBQTtBQ1JwQjtBRFlZO0VBQ0kseUJBQUE7QUNWaEI7QURhWTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtBQ1hoQjtBRGNZO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDWmhCO0FEY2dCO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUNacEI7QURtQlE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUNqQloiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLnZlcnNpb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIGJvdHRvbTogNXB4O1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjZmZmZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2FkaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pbWcvbG9hZGluZy5naWYnKTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHBkZi12aWV3ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAtMTAwMDBweDtcclxuICAgICAgICB0b3A6IC0xMDAwMHB4O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5zdHJ1Y3Rpb24ge1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDIwcHggMHB4IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcblxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggI2FhYWFhYTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLnByb2dyZXNzIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIHByb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5qb2JCb3gge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZpbGVOYW1lLCAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZmlsZU5hbWUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmVycm9yIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogY3JpbXNvbjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNTljO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZXNzYWdlQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC52ZXJzaW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDlweDtcbiAgbGVmdDogMjBweDtcbiAgYm90dG9tOiA1cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjZmZmZmZmO1xufVxuOmhvc3QgLmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaW1nL2xvYWRpbmcuZ2lmXCIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbjpob3N0IHBkZi12aWV3ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMDAwMHB4O1xuICB0b3A6IC0xMDAwMHB4O1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG46aG9zdCAuaW5zdHJ1Y3Rpb24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1pbi1oZWlnaHQ6IDM1cHg7XG4gIG1heC1oZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMjBweCAyMHB4IDBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbn1cbjpob3N0IC5pbnN0cnVjdGlvbiAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNnB4ICNhYWFhYWE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLmluc3RydWN0aW9uLnByb2dyZXNzIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5pbnN0cnVjdGlvbi5wcm9ncmVzcyBwcm9ncmVzcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmpvYkJveCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTVweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuam9iQm94IC5tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmpvYkJveCAubWVzc2FnZS50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGNvbG9yOiAjRkZGO1xufVxuOmhvc3QgLmpvYkJveCAubWVzc2FnZS50aXRsZSAuZmlsZU5hbWUsIDpob3N0IC5qb2JCb3ggLm1lc3NhZ2UudGl0bGUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLmpvYkJveCAubWVzc2FnZTpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuOmhvc3QgLmpvYkJveCAubWVzc2FnZSAuZmlsZU5hbWUge1xuICB3aWR0aDogMzAlO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuOmhvc3QgLmpvYkJveCAubWVzc2FnZSAuY29udGVudCB7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG46aG9zdCAuam9iQm94IC5tZXNzYWdlIC5jb250ZW50LmVycm9yIHtcbiAgY29sb3I6IGNyaW1zb247XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNTljO1xufVxuOmhvc3QgLmpvYkJveCAubWVzc2FnZUNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xufSJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, { onDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dblclick', ['$event']]
        }], pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['pdfViewer', { static: true }]
        }], onDragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['dragleave', ['$event']]
        }], ondrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['drop', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm5/ng2-pdf-viewer.js");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfViewerModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfViewerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfViewerModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jimmy\Desktop\projects\getInvInfoWebDev_org\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map