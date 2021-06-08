
<div id="zoomupReportModal" class="modal animated zoomInUp bd-example-modal-lg" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Reports Details</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
            <div class="modal-body">
                <div className="widget-content widget-content-area br-6">
                    <div class="widget-heading">
                        <div class="">
                            <div class="row" id="rowdonlod">
                                <div class="input-group">
                                    <button type="button" class="btn btn-outline-primary btn-sm" 
                                    id="download" name="download" >
                                    <i class="fa fa-list-alt">&nbsp;<span>Download File</span></i>
                                    </button>
                                </div>
                            </div>
                            </br>
                            <div class="row" id="rpt1">
                                <div class="input-group">
                                    <button type="button" class="btn btn-outline-info btn-sm" 
                                    id="previous" name="previous" >
                                    <i class="fa fa-arrow-circle-o-left fa-2x"></i>
                                    </button>
                                    &emsp;
                                    <input type="text" class="form-control" style="text-align: center; width: 4px" id="pageNumber" />
                                    &emsp;
                                    <div id="labelFrom">
                                        <label style="text-align: center; margin-top: 25%;">
                                        From
                                        </label>
                                    </div>
                                    &emsp;
                                    <input type="text" class="form-control" style="text-align: center; width: 4px" id="pageNumberTotal" />
                                    &emsp;
                                    <button type="button" class="btn btn-outline-info btn-sm" 
                                    id="next" name="next" >
                                    <i class="fa fa-arrow-circle-o-right fa-2x"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="widget-content">
                        <div class="table-rep-plugin">
                            <div class="table-responsive mb-4 mt-4" data-pattern="priority-columns">
                                <canvas id="viewerCanvas"></canvas>
                                <div id="xls"></div>
                            </div>
                        </div>
                    </div>
                </div>
                        
            </div>
        </div>
    </div>
</div>
