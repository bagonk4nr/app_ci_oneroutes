// $(document).on('click', function(e) {
//     console.log(e);
//
//         $.each(e.target.attributes, function() {
//             // this.attributes is not a plain object, but an array
//             // of attribute nodes, which contain both the name and value
//             if(this.specified) {
//             console.log(this.name, this.value);
//               if (this.name === 'data-report') {
//                   if (this.value.indexOf('pdf') > -1) {
//                       showreports(this.value);
//                   } else if(this.value.indexOf('xls') > -1) {
//                       showreportsXLS(this.value);
//                   }
//               } else if (this.name === 'id') {
//
//                 if (this.value.indexOf('Search') > -1) {
//                     searchPages(this.value);
//                 }
//
//               }
//             }
//
//         });
//
// });
//
// function searchPages(id) {
//   var idSearch = '#' + id;
//   $(idSearch).on('input', function() {
//       // console.log( this.value, ' search' );
//       jQuery('#searchdrop').remove();
//       jQuery('#dtsearch').remove();
//       if (this.value.length >= 4) {
//         var dt = '/?find=' + this.value;
//         var base_url = window.location.origin + dt;
//         jQuery.post(base_url).done(function( dataSearch ) {
//
//           var dataNyua = JSON.parse(dataSearch);
//           // console.log(dataNyua, dataNyua.length);
//           var data = '';
//
//           for (var a=0; a < dataNyua.length ; a++) {
//
//             // data += '<tr style="text-align: center">';
//             // data += '<td>' + a+1 + '</td>';
//             // data += '<td><a href="<?php $pagesnya->route("/", ["dt" => "' + dataNyua[a].target_dt +'", "target"=> "' + dataNyua[a].target_subreact +'"]); ?>">' + dataNyua[a].submenu +'</a></td>';
//             // data += '</tr>';
//
//             var listMenu= '';
//             var listUrl='';
//
//             if(dataNyua[a].submenu !== null) {listMenu = dataNyua[a].submenu;} else{listMenu = dataNyua[a].menu;}
//             if(dataNyua[a].target_dt !== null) {
//               listUrl = "'" + '/?dt=' + dataNyua[a].target_dt +'&&target=' +  dataNyua[a].target_subreact  + "'";
//             } else {
//               listUrl = "'" + '/?target=' + dataNyua[a].target_react  + "'";
//             }
//             data += '<a id="searchdrop" class="dropdown-item" href='+ listUrl + '>&nbsp;' + listMenu + '</a>';
//
//           }
//
//           // var html = '<table id="default-ordering" className="table table-hover dt-responsive nowrap">' +
//           //               '<thead>' +
//           //                 '<tr style="text-align: center">' +
//           //                   '<th>No</th>' +
//           //                   '<th>Links</th>' +
//           //                 '</tr>' +
//           //               '</thead>' +
//           //               '<tbody>' +
//           //               data +
//           //               '</tbody>' +
//           //               '</table>';
//
//           var html = '<div id="dtsearch">' + data + '</div>';
//           console.log(html);
//           if (jQuery('#dtsearch').length === 0) {
//               jQuery('#searchdropdown').append(html);
//           }
//
//           jQuery('#searchdropdown').show();
//           // jQuery('#inputdropdown').click();
//           // jQuery('#searchdata').append(html);
//           // jQuery('#searchModal').modal('show');
//           return false;
//         });
//       } else if (this.value.length < 4) {
//             jQuery('#searchdrop').remove();
//             jQuery('#dtsearch').remove();
//             // jQuery('#inputSearch').val() = '';
//       }
//   });
// }
//
// function showreportsXLS(doc) {
//   $("#loadMe").attr('hidden', false);
//   $("#loadMe").show();
//
//   jQuery.post(doc).done(function( datareports ) {
//     // console.log(datareports);
//       var rptXLS = JSON.parse(datareports);
//       console.log(rptXLS);
//       if (rptXLS.length !== 0) {
//         $("#loadMe").attr('hidden', true);
//         $("#loadMe").hide();
//       }
//       // console.log(rptXLS);
//       showXLS(rptXLS[0]['xfilehtml']);
//
//       jQuery('#download').click(function(e) {
//         e.preventDefault();  //stop the browser from following
//         window.location.href = rptXLS[1]['xfile'];
//       });
//
//   });
// }
//
// function showXLS(dtxls) {
//   $("#rpt1").attr('hidden', true);
//   // $("#previous").attr('hidden', true);
//   // $("#pageNumber").attr('hidden', true);
//   // $("#pageNumberTotal").attr('hidden', true);
//   // $("#labelFrom").attr('hidden', true);
//   $("#viewerCanvas").attr('hidden', true);
//   jQuery('#xls').load(dtxls);
//   jQuery('#zoomupReportModal').modal('show');
// }
//
// function showreports(doc) {
//   $("#loadMe").attr('hidden', false);
//   $("#loadMe").show();
//
//   jQuery.post(doc).done(function( datareports ) {
//     // console.log('uhuyy rpt');
//       var rptPDF = JSON.parse(datareports);
//
//       if (rptPDF.length !== 0) {
//         $("#loadMe").attr('hidden', true);
//         $("#loadMe").hide();
//         $("#viewerCanvas").attr('hidden', false);
//         $("#rp1").attr('hidden', false);
//         // $("#previous").attr('hidden', false);
//         // $("#pageNumber").attr('hidden', false);
//         // $("#pageNumberTotal").attr('hidden', false);
//         // $("#labelFrom").attr('hidden', false);
//       }
//       // console.log(rptPDF[0]['xfile']);
//       showPDF(rptPDF[0]['xfile']);
//
//       jQuery('#download').click(function(e) {
//         e.preventDefault();  //stop the browser from following
//         window.location.href = rptPDF[0]['xfile'];
//       });
//
//   });
// }
//
// function showPDF(pdf_url) {
//
// // console.log(document.getElementById('viewerCanvas'), ' uhuyyy cnvs');
//
// var pdfDoc = null,
// pageNum = 1,
// pageRendering = false,
// pageNumPending = null,
// scale = 1.2,
// canvas = document.getElementById('viewerCanvas'),
// ctx = canvas.getContext('2d');
//
// /**
//  * Get page info from document, resize canvas accordingly, and render page.
//  * @param num Page number.
//  */
// function renderPage(num) {
//   pageRendering = true;
//   // Using promise to fetch the page
//   pdfDoc.getPage(num).then(function(page) {
//     var viewport = page.getViewport({scale: scale});
//     canvas.height = viewport.height;
//     canvas.width = viewport.width;
//
//     // Render PDF page into canvas context
//     var renderContext = {
//       canvasContext: ctx,
//       viewport: viewport
//     };
//     var renderTask = page.render(renderContext);
//
//     // Wait for rendering to finish
//     renderTask.promise.then(function() {
//       pageRendering = false;
//       if (pageNumPending !== null) {
//         // New page rendering is pending
//         renderPage(pageNumPending);
//         pageNumPending = null;
//       }
//     });
//   });
//
//
//   // Update page counters
//
//   document.getElementById('pageNumber').value = pageNum;
//   document.getElementById('pageNumberTotal').value = pdfDoc.numPages;
//   // jQuery('#zoomupReportModal').append( jQuery('<link rel="stylesheet" type="text/css" />').attr('href', "assets/css/viewer.css") );
//   jQuery('#zoomupReportModal').modal('show');
// }
//
// /**
//  * If another page rendering in progress, waits until the rendering is
//  * finised. Otherwise, executes rendering immediately.
//  */
// function queueRenderPage(num) {
//   if (pageRendering) {
//     pageNumPending = num;
//   } else {
//     renderPage(num);
//   }
// }
//
// /**
//  * Displays previous page.
//  */
// function onPrevPage() {
//   if (pageNum <= 1) {
//     return;
//   }
//   pageNum--;
//   queueRenderPage(pageNum);
//   document.getElementById('pageNumber').value = pageNum;
//
// }
// document.getElementById('previous').addEventListener('click', onPrevPage);
//
// /**
//  * Displays next page.
//  */
// function onNextPage() {
//   if (pageNum >= pdfDoc.numPages) {
//     return;
//   }
//   pageNum++;
//   queueRenderPage(pageNum);
//   document.getElementById('pageNumber').value = pageNum;
// }
// document.getElementById('next').addEventListener('click', onNextPage);
//
//
//
//
// /**
//  * Asynchronously downloads PDF.
//  */
// pdfjsLib.getDocument(pdf_url).promise.then(function(pdfDoc_) {
//   pdfDoc = pdfDoc_;
//
//   // Initial/first page rendering
//   renderPage(pageNum);
// });
//
//
//
// }

$('#default-datatable').DataTable();
$(document).on('click', function(e) {
    // console.log(e.target.id);

      if (e.target.id !== 'searchdropdown') {
          if(jQuery('#searchdropdown').is(':visible')) {
              jQuery('#searchdropdown').hide();
          }
      }

      if (e.target.tagName.toLowerCase() === 'td') {

        // console.log($(e.target).closest('table').find('tbody').attr('id'));
        var bodyId = $(e.target).closest('table').find('tbody').attr('id');
        // changeSize(bodyId);
        // $(e.target, function() {
        //   console.log($(this).parent().attr('id'));
        // });
      } else {

        $.each(e.target.attributes, function() {
            // this.attributes is not a plain object, but an array
            // of attribute nodes, which contain both the name and value
            if(this.specified) {
            // console.log(this.name, this.value);
              if (this.name === 'data-report') {
                  if (this.value.indexOf('pdf') > -1) {
                      showreports(this.value);
                  } else if(this.value.indexOf('xls') > -1) {
                      showreportsXLS(this.value);
                  }
              } else if (this.name === 'id') {

                if (this.value.indexOf('Search') > -1) {
                    searchPages(this.value);
                }

              }
            }

        });
      }
});

function changeSize(id) {
    // console.log(id);
    var endPos1 = [];
    var firstPos =0;
    var endPos=0;
    $('#' + id).on('mousedown mouseover', function(event) {
      currentMousePosX = event.clientX;
      currentMousePosY = event.clientY;
      console.log($(event.target).attr('id'));
      var str = $(event.target).attr('id');
      var tdIndex = $(event.target).closest('td').index();
      if (str.indexOf("xlstd") !== -1) {


        if (str.indexOf('1') === 6) {

          firstPos = 326;

          endPos = firstPos + 25 + $(event.target).width();
          console.log(currentMousePosX, firstPos, endPos, $(event.target).width());

          if (endPos1.length < 1) {

            endPos1.push(endPos + 1);

          } else {

            endPos1[0] = endPos + 1;
          }


        } else {


          if (endPos1.length > 0) {
            var dtPos = endPos1.filter(function(item, pos) {
                return endPos1.indexOf(item) == pos;
            });
            console.log(dtPos, tdIndex, ' dtPos');
            firstPos = dtPos[tdIndex - 2];
            endPos = firstPos + 25 + $(event.target).width();
            // console.log(currentMousePosX, firstPos, endPos, $(event.target).width(), ' endPos1 > 0');
            endPos1.push(endPos + 1);
            // Array.from(new Set(endPos1));
          } else {

            firstPos = 377;
            endPos = firstPos + 25 + $(event.target).width();
            // console.log(currentMousePosX, firstPos, endPos, $(event.target).width(), ' endPos1 == 0');
            endPos1.push(firstPos + 1);
          }

        }

        console.log(currentMousePosX, endPos, $(event.target).attr("id"));
        if (currentMousePosX === endPos) {

          $(event.target).css({cursor: 'e-resize'});
          $(event.target).css({dragenable: true});

          $(this).mousemove(function(e2){

              if (e2.pageX > currentMousePosX){ //right w.r.t mouse down position
                var right = e2.pageX - currentMousePosX;
                console.log("Moved Right", right);
                 $("#xlstd01").closest("td").css('width', '150px');
                 $("#xlsth01").closest("td").css('width', '150px');
              } else {
                var left = event.pageX - e2.pageX;
                console.log("Moved Left", left);
                // $(this).closest('tbody').find('tr').find('td:eq(' + (tdIndex - 1) + ')').each( function() {

                    //  var idTD = $(this).attr('id');
                    //  var widthTD = $(idTD).width();
                    //  console.log(widthTD, left, ' uhuyy');
                    //  $(idTD).width(widthTD - left);
                // });
              }
          });


        } else {
          $(event.target).css({cursor: 'default'});
        }

      }

    });

}

function searchPages(id) {
  var idSearch = '#' + id;
  $(idSearch).on('input', function() {
      // console.log( this.value, ' search' );
      jQuery('#searchdrop').remove();
      jQuery('#dtsearch').remove();
      if (this.value.length >= 4) {
        var dt = '/?find=' + this.value;
        var base_url = window.location.origin + dt;
        jQuery.post(base_url).done(function( dataSearch ) {
          // console.log(dataSearch);
          var dataNyua = JSON.parse(dataSearch);
          // console.log(dataNyua, dataNyua.length);
          var data = '';

          for (var a=0; a < dataNyua.length ; a++) {

            // data += '<tr style="text-align: center">';
            // data += '<td>' + a+1 + '</td>';
            // data += '<td><a href="<?php $pagesnya->route("/", ["dt" => "' + dataNyua[a].target_dt +'", "target"=> "' + dataNyua[a].target_subreact +'"]); ?>">' + dataNyua[a].submenu +'</a></td>';
            // data += '</tr>';

            var listMenu= '';
            var listUrl='';

            if(dataNyua[a].submenu !== null) {listMenu = dataNyua[a].submenu;} else{listMenu = dataNyua[a].menu;}
            if(dataNyua[a].target_dt !== null) {
              listUrl = "'" + '/?dt=' + dataNyua[a].target_dt +'&&target=' +  dataNyua[a].target_subreact  + "'";
            } else {
              listUrl = "'" + '/?target=' + dataNyua[a].target_react  + "'";
            }
            data += '<a id="searchdrop" class="dropdown-item" href='+ listUrl + '>&nbsp;' + listMenu + '</a>';

          }

          // var html = '<table id="default-ordering" className="table table-hover dt-responsive nowrap">' +
          //               '<thead>' +
          //                 '<tr style="text-align: center">' +
          //                   '<th>No</th>' +
          //                   '<th>Links</th>' +
          //                 '</tr>' +
          //               '</thead>' +
          //               '<tbody>' +
          //               data +
          //               '</tbody>' +
          //               '</table>';

          var html = '<div id="dtsearch">' + data + '</div>';
          console.log(html);
          if (jQuery('#dtsearch').length === 0) {
              jQuery('#searchdropdown').append(html);
          }

          jQuery('#searchdropdown').show();
          // jQuery('#inputdropdown').click();
          // jQuery('#searchdata').append(html);
          // jQuery('#searchModal').modal('show');
          return false;
        });
      } else if (this.value.length < 4) {
            jQuery('#searchdrop').remove();
            jQuery('#dtsearch').remove();
            // jQuery('#inputSearch').val() = '';
      }
  });
}

function showreportsXLS(doc) {
  $("#loadMe").attr('hidden', false);
  $("#loadMe").show();

  jQuery.post(doc).done(function( datareports ) {
    // console.log('uhuyy rpt');
      var rptXLS = JSON.parse(datareports);

      if (rptXLS.length !== 0) {
        $("#loadMe").attr('hidden', true);
        $("#loadMe").hide();
      }
      console.log(rptXLS, rptXLS[1][0]);
      showXLS(rptXLS);

      jQuery('#download').click(function(e) {
        e.preventDefault();  //stop the browser from following
        window.location.href = rptXLS[1][0];
      });

  });
}

function showXLS(dtxls) {
  $("#rpt1").attr('hidden', true);
  // $("#previous").attr('hidden', true);
  // $("#pageNumber").attr('hidden', true);
  // $("#pageNumberTotal").attr('hidden', true);
  // $("#labelFrom").attr('hidden', true);
  $("#viewerCanvas").attr('hidden', true);

  var alfabet = genCharArray('A', 'Z');
  var table = $('<table style:"table-layout: fixed;"></table>').addClass('table table-bordered').attr("id", "tblxlsreport");
  var thead = $('<thead></thead>');
  var rowHead = $('<tr></tr>');
  var rowHeadStatic;
  var tbody = $('<tbody></tbody>').attr("id", "xlsbody");

  var isiStatic;
  var rowBodyStatic;

  var Row = dtxls[0];
  var headCell = dtxls[0][6];

  console.log(headCell.length, ' length headcell');

  for(var i = 0; i < headCell.length; i++) {

      if (i === 0) {
        rowHeadStatic = $('<th style="text-align: center; left: 0; background-color: #9966ff; font-weight: bold; "></th>').attr("id", "xlsth" + i + 1);
        rowHead.append(rowHeadStatic);
      }
      if ( i > 0) {

          rowHeadStatic = $('<th style="text-align: center; left: 0; background-color: #9966ff; font-weight: bold; "></th>').text(alfabet[i - 1]).attr("id", "xlsth" + i + 1);
          rowHead.append(rowHeadStatic);

      }
  }

  var isinya = [];
  var pushIsiStatic = [];

  var texts = '';

  for (var f = 0; f < Row.length; f++) {

    for (var d = 0; d < Row[f].length; d++) {

      if (Row[f][d] === null || Row[f][d] === '') texts = '';
      else texts = Row[f][d];

      // console.log(texts);

      isiStatic = $('<td style="border-color: black; color: black; background-color: #ffffff; font-weight: bold;  "></td>').text(texts);
      pushIsiStatic.push(isiStatic);

      if (d === Row[f].length - 1) {

        if (Row[f].length < headCell.length) {
          var sisa = 0;
          sisa = headCell.length - Row[f].length;

          for ( var s = 0; s < sisa; s++) {
            isiStatic = $('<td style="border-color: black; color: black; background-color: #ffffff; font-weight: bold;  "></td>');
            pushIsiStatic.push(isiStatic);
          }

          // for(var m =0; m < pushIsiStatic.length; m++) {
          //   // isiRow.append(pushIsiStatic[m]);
          //   isinya.push(pushIsiStatic[m]);
          // }
          isinya.push(pushIsiStatic);
          // isinya.push(isiRow);
          pushIsiStatic = [];

        } else {

          // for(var o =0; o < pushIsiStatic.length; o++) {
            // isiRow.append(pushIsiStatic[o]);
            // isinya.push(pushIsiStatic[o]);

          // }
          isinya.push(pushIsiStatic);
          // isinya.push(isiRow);
          pushIsiStatic = [];
        }

        pushIsiStatic = [];

      }

    }

  }

  // console.log(isinya[1]);

  var rowBody;
  var rowBody1;
  var dtRow = [];
  for(var b = 0; b < Row.length; b++) {

    if(b === 0) {
      rowBody = $('<tr></tr>').attr("id", "xls" + b + 1);
      rowBodyStatic = $('<th style="position: -webkit-sticky; position: sticky; text-align: center; overflow: auto; background-color: #9966ff; font-weight: bold; width: auto; heigth auto; left: 0; max-width: auto; min-width: auto;"></th>').text(b + 1).attr("id", "xlstd" + b + 1);
      // rowBodyStatic1 = $('<td colspan="'+ headCell.length + '" rowspan="'+ Row.length + '" style="text-align: center; overflow: hidden; background-color: #9966ff; font-weight: bold; width: auto; heigth auto;"></td>');

      rowBody.append(rowBodyStatic/*, rowBodyStatic1 */);
      for(var c = 1; c < headCell.length; c++) {
        // console.log(isinya[g][c]);
        // $('#xls' + g + 1).append(isinya[g][c]);
        rowBody.append(isinya[b][c]);
        isinya[b][c].attr("id", "xlstd" + b + c);
      }

    } else {

      rowBody1 = $('<tr></tr>').attr("id", "xls" + b + 1);
      rowBodyStatic = $('<th style="position: -webkit-sticky; position: sticky; text-align: center; overflow: auto; background-color: #9966ff; font-weight: bold; width: auto; heigth auto; left: 0; max-width: auto; min-width: auto;"></th>').text(b + 1).attr("id", "xlstd" + b + 1);
      rowBody1.append(rowBodyStatic);
      for(var c = 1; c < headCell.length; c++) {
        // console.log(isinya[g][c]);
        // $('#xls' + g + 1).append(isinya[g][c]);

        var tC = isinya[b][c];
        // console.log(tC.text());
        if (tC.text().indexOf("PT") !== -1 || tC.text().indexOf("From Date") !== -1) {
          isinya[b][c].attr("colspan", headCell.length);
          isinya[b][c].css("text-align", "left");
          isinya[b][c].attr("id", "xlstd" + b + c);
          rowBody1.append(isinya[b][c]);
          break;
        } else {
          rowBody1.append(isinya[b][c]);
          isinya[b][c].attr("id", "xlstd" + b + c);
        }

      }
      dtRow.push(rowBody1);
    }

  }

  tbody.append(rowBody);

  for (var r = 0; r < dtRow.length; r++) {
      tbody.append(dtRow[r]);
  }

  thead.append(rowHead);
  table.append(thead);
  table.append(tbody);

  jQuery('#xls').append(table);

  jQuery('#zoomupReportModal').modal('show');
}

function genCharArray(charA, charZ) {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
  }
  return a;
}

function showreports(doc) {
  $("#loadMe").attr('hidden', false);
  $("#loadMe").show();

  jQuery.post(doc).done(function( datareports ) {
    // console.log('uhuyy rpt');
      var rptPDF = JSON.parse(datareports);
      // console.log(rptPDF);
      if (rptPDF.length !== 0) {
        $("#loadMe").attr('hidden', true);
        $("#loadMe").hide();
        $("#viewerCanvas").attr('hidden', false);
        $("#rp1").attr('hidden', false);
        // $("#previous").attr('hidden', false);
        // $("#pageNumber").attr('hidden', false);
        // $("#pageNumberTotal").attr('hidden', false);
        // $("#labelFrom").attr('hidden', false);
      }
      // console.log(rptPDF[0]);
      showPDF(rptPDF[0].xfile);

      jQuery('#download').click(function(e) {
        e.preventDefault();  //stop the browser from following
        window.location.href = rptPDF[0].xfile;
      });

  });
}

function showPDF(pdf_url) {

// console.log(document.getElementById('viewerCanvas'), ' uhuyyy cnvs');

var pdfDoc = null,
pageNum = 1,
pageRendering = false,
pageNumPending = null,
scale = 1.2,
canvas = document.getElementById('viewerCanvas'),
ctx = canvas.getContext('2d');

/**
 * Get page info from document, resize canvas accordingly, and render page.
 * @param num Page number.
 */
function renderPage(num) {
  pageRendering = true;
  // Using promise to fetch the page
  pdfDoc.getPage(num).then(function(page) {
    var viewport = page.getViewport({scale: scale});
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    var renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    var renderTask = page.render(renderContext);

    // Wait for rendering to finish
    renderTask.promise.then(function() {
      pageRendering = false;
      if (pageNumPending !== null) {
        // New page rendering is pending
        renderPage(pageNumPending);
        pageNumPending = null;
      }
    });
  });


  // Update page counters

  document.getElementById('pageNumber').value = 1;
  document.getElementById('pageNumberTotal').value = pdfDoc.numPages;
  // jQuery('#zoomupReportModal').append( jQuery('<link rel="stylesheet" type="text/css" />').attr('href', "assets/css/viewer.css") );
  jQuery('#zoomupReportModal').modal('show');
}

/**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
function queueRenderPage(num) {
  if (pageRendering) {
    pageNumPending = num;
  } else {
    renderPage(num);
  }
}

/**
 * Displays previous page.
 */
function onPrevPage() {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
  document.getElementById('pageNumber').value = pageNum;

}
document.getElementById('previous').addEventListener('click', onPrevPage);

/**
 * Displays next page.
 */
function onNextPage() {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
  document.getElementById('pageNumber').value = pageNum;
}
document.getElementById('next').addEventListener('click', onNextPage);




/**
 * Asynchronously downloads PDF.
 */
pdfjsLib.getDocument(pdf_url).promise.then(function(pdfDoc_) {
  pdfDoc = pdfDoc_;

  // Initial/first page rendering
  renderPage(pageNum);
});



}
