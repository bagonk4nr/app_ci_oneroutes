<div class="widget-heading">
    <div class="">
        <div class="row" id="hiddenbrg">
        <div class="input-group">
            <button type="button" class="btn btn-outline-primary btn-sm" id="reportxls" name="reportxls"
            data-toggle="modal" data-report="<?php $pagesnya->route('/', ['doc' => 'xls']); ?>" >
                <i class="fa fa-list-alt"></i>&nbsp;Show Excel
            </button>
            <span>&emsp;</span>
            <button type="button" class="btn btn-outline-success btn-sm" id="reportpdf" name="reportpdf"
            data-toggle="modal" data-report="<?php $pagesnya->route('/', ['doc' => 'pdf']); ?>" >
                <i class="fa fa-th-list"></i>&nbsp;Show PDF
            </button>
        </div>
        </div>
    </div>
    </div>
    <div class="widget-content">
        <div id="uniqueVisits">
        <div class="table-responsive mb-4 mt-4">
        <table id="html5-extension" class="table table-hover dt-responsive nowrap">
            <thead>
                <tr style="text-align: center">
                <th>No</th>
                <th>Kode Barang</th>
                <th>Nama Barang</th>
                <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    // print_r($dt['barang'][0]['barang']);
                    $kdbrng = '';
                    for ($i =0;$i < count($dt['barang'][0]['barang']); $i++) {

                        if ($kdbrng !== $dt['barang'][0]['barang'][$i]['kode_barang']) {

                ?>
                    <tr style="text-align: center">
                    <td><?php echo ($i + 1) ?></td>
                    <td><?php echo $dt['barang'][0]['barang'][$i]['kode_barang'] ?></td>
                    <td><?php echo $dt['barang'][0]['barang'][$i]['nama_barang'] ?></td>
                    <td>
                    <div style="overflow-x: 'visible'">
                        <table id="datatable" class="table table-bordered nowrap tablecolapse" >
                        <thead>
                            <tr style="text-align: center">
                            <th colSpan="7">Detail Barang</th>
                            </tr>
                            <tr style="text-align: center">
                            <td>Jumlah Barang / Set</td>
                            <td> 1 Set / Pcs</td>
                            <td>Jumlah Barang / pcs</td>
                            <td>Pajak</td>
                            <td>Diskon</td>
                            <td>Harga Beli</td>
                            <td>Harga Jual</td>
                            </tr>
                        </thead>
                        <tbody>

                            <?php
                                for ($a =0;$a < count($dt['barang'][0]['barang']); $a++) {

                                    if ($dt['barang'][0]['barang'][$i]['kode_barang'] === $dt['barang'][0]['barang'][$a]['kode_barang']) {

                            ?>
                                 <tr style="text-align: center">
                                    <td>
                                        <?php echo $dt['barang'][0]['barang'][$a]['jmlh_barang_set'] ?>
                                    </td>
                                    <td>
                                        <?php echo $dt['barang'][0]['barang'][$a]['set_per_pcs'] ?>
                                    </td>
                                    <td>
                                        <?php echo $dt['barang'][0]['barang'][$a]['jmlh_barang_pcs'] ?>
                                    </td>
                                    <td>
                                        <?php echo $dt['barang'][0]['barang'][$a]['pajak'] ?>
                                    </td>
                                    <td>
                                        <?php echo $dt['barang'][0]['barang'][$a]['disc'] ?>
                                    </td>
                                    <td>
                                        <?php echo $dt['barang'][0]['barang'][$a]['harga_beli'] ?>
                                    </td>
                                    <td>
                                        <?php echo $dt['barang'][0]['barang'][$a]['harga_jual'] ?>
                                    </td>
                                </tr>
                            <?php
                                    }
                                }
                            ?>
                        </tbody>
                        </table>
                    </div>

                    </td>
                </tr>
                <?php
                        } $kdbrng = $dt['barang'][0]['barang'][$i]['kode_barang'];
                    }
                ?>
            </tbody>
            </table>
        </div>
    </div>
    </div>
