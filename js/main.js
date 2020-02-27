/*import { createWorker } from './hello.mjs';
const { createWorker } = require('tesseract.js');
const path = require('path');
*/

console.log(Tesseract);
const tsWorker = Tesseract.createWorker({
    workerPath: "./js/tesseract.2.0.2/worker.min.js",
    langPath: "./js/tesseract.2.0.2/tessdata/",
    //corePath: window.location.origin + "/js/tesseract.2.0.0-alpha.2/tessdata/", //tesseract.js-core-0.1.0
 });

tsWorker.load()
.then(()=>tsWorker.loadLanguage('eng'))
.then(()=>tsWorker.initialize('eng'))
.then(()=>console.log('ready'));

pdfjsLib.GlobalWorkerOptions.workerSrc = './js/pdfjs.2.2.228/pdf.worker.min.js';

function readPdf(file) {
    var loadingTask = pdfjsLib.getDocument(file);
    loadingTask.promise.then((pdf)=>{
        pdf.getPage(1).then(function(page) {
            var viewport = page.getViewport({ scale: 1 });
            var canvas = document.getElementById('the-canvas');
            var context = canvas.getContext('2d');
            canvas.width = viewport.width
            canvas.height = viewport.height;
            
            var renderContext = {
                canvasContext: context,
                viewport: viewport,
            };
            let renderTask = page.render(renderContext);
            renderTask.promise.then(()=>{
                console.log('Page rendered');
                this.resizeImage(canvas).then((resized_canvas)=>{
                    this.recognizeImage(resized_canvas);
                    //document.body.appendChild(resized_canvas);
                });
            });
        });
    });

}

//-------------------------------------------------------------------------------------------------
function openFiles() {
    if (this.loading) return;

    let input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'application/pdf';
    input.addEventListener("change", (event)=>{
        if (event.target && event.target['files']) {
            
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                // convert image file to base64 string
                //preview.src = reader.result;
                readPdf(reader.result);
            }, false);

            if (!this.loading && event.target['files'].length>0) loadPdfFiles(event.target['files']);
            /*{
                reader.readAsDataURL(event.target['files'][0]);
            }*/
        }
    });
    input.click();
}
let jobs = [];
let loading = false;
//-------------------------------------------------------------------------------------------------
function loadPdfFiles(files) {
    loading = true;
    jobs.splice(0, jobs.length);
    for (let i=0; i<files.length; i++) {
        if (files[i].type=="application/pdf") {
            jobs.push({
                file: files[i],
                status: 'pending', //pending, processing, finished
                results: [],
                message: "",
                error: ""
            });
        }
    }
    if (jobs.length>0) {
        checkAndOpenPdf();
    } else {
        loading = false;
    }
}

//-------------------------------------------------------------------------------------------------
function checkAndOpenPdf() {
    let pendingJobs = jobs.filter(job=>job.status=='pending');
    if (pendingJobs.length>0) {
        let job = pendingJobs.shift();
        job.status = 'processing';
        
        let reader = new FileReader();
        reader.onload = (e)=>readPdf(reader.result);
        reader.readAsArrayBuffer(job.file);
    } else {
        //this.exportAsExcelFile();
        console.log('exportAsExcelFile()');
        console.log(jobs);
    }
}
//-------------------------------------------------------------------------------------------------
function resizeImage(canvas) {
    return new Promise((resolve, reject)=>{
        try {
            let resized_canvas = document.createElement('canvas');
            resized_canvas.width = 1000 * 2;
            resized_canvas.height = canvas.height / canvas.width * resized_canvas.width;
            resized_canvas.getContext('2d').drawImage(canvas, 0, 0, resized_canvas.width, resized_canvas.height);
            //console.log(resized_canvas.toDataURL());
            resolve(resized_canvas);
        } catch (err) {
            reject (err);
        }
    });
}
//-------------------------------------------------------------------------------------------------
async function recognizeImage(canvas) {
        
    let captureConfig = [
        { title:'報單號碼', pos:[514, 88, 258, 15], charWhitelist:'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' },
        { title:'分提單號碼', pos:[480, 145, 188, 20], charWhitelist:'0123456789.' },
        { title:'離岸價格', pos:[850, 153, 121, 16], charWhitelist:'0123456789.' },
        { title:'運費', pos:[850, 178, 121, 20], charWhitelist:'0123456789.' },
        { title:'保險費', pos:[850, 211, 121, 20], charWhitelist:'0123456789.' },
        { title:'起岸價格', pos:[850, 289, 121, 20], charWhitelist:'0123456789.' },
        { title:'進口稅', pos:[758, 987, 215, 20], charWhitelist:'0123456789' },
        { title:'營業稅', pos:[758, 1111, 215, 20], charWhitelist:'0123456789' },
    ];

    let processingJob = jobs.find(job=>job.status=='processing');
    let tempResult = [];
    
    let configIndex = 0;
    
    let loopFun = (config)=>{
        let left = config.pos[0] * 2;
        let top = config.pos[1] * 2;
        let width = config.pos[2] * 2;
        let height = config.pos[3] * 2;

        let crop_canvas = document.createElement('canvas');
        crop_canvas.width = width;
        crop_canvas.height = height;
        
        crop_canvas.getContext('2d').drawImage(canvas, left, top, width, height, 0, 0, width, height);
        let image = crop_canvas.toDataURL("image/png");
        console.log(image);


        tsWorker.recognize(image).then((result)=>{
            //console.log(config.title + ": " + result.data.text);
            processingJob.results.push({ image: image, title: config.title, value: result.data.text.trim() })
            if (configIndex<(captureConfig.length-1)) {
                configIndex++;
                loopFun(captureConfig[configIndex]);
            } else {
                processingJob.message = processingJob.results.map(item=>item.title+':'+item.value).join(', ');
                processingJob.status = 'finished';
                this.checkAndOpenPdf();
            }
        });

        /*

        this.tessWorker.setParameters({
            tessedit_pageseg_mode: Tesseract.PSM.SINGLE_LINE,
            tessedit_char_whitelist: config.charWhitelist,
        });
        this.tessWorker.recognize(image).then((result)=>{
            //console.log(config.title + ": " + result.data.text);
            processingJob.results.push({ image: image, title: config.title, value: result.data.text.trim() })
            if (configIndex<(captureConfig.length-1)) {
                configIndex++;
                loopFun(captureConfig[configIndex]);
            } else {
                processingJob.message = processingJob.results.map(item=>item.title+':'+item.value).join(', ');
                processingJob.status = 'finished';
                this.checkAndOpenPdf();
            }
        });*/
    }
    
    loopFun(captureConfig[configIndex]);

}
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------