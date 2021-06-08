<?php
use \Config\Pages;
$pagesnya = new Pages();

?>

<!DOCTYPE html>
<html lang="en">

<?php
include('incl/header.php');
?>

<body class="alt-menu sidebar-noneoverflow">

<?php

    require 'incl/loaders.php';

if (strpos($contents, 'login') !== false || strpos($contents, 'errors') !== false) {
?>
    <div id="bglogin">
        <?php require $contents; ?>
    <div>

<?php
} else {
    require 'incl/navbar.php';
?>
    <!--  BEGIN MAIN CONTAINER  -->
    <div class="main-container sidebar-closed sbar-open" id="container">

        <div class="overlay"></div>
        <div class="cs-overlay"></div>
        <div class="search-overlay"></div>

        <div class="sidebar-wrapper sidebar-theme">

            <nav id="sidebar">
            <?php
                require 'incl/sidebar.php';
            ?>
            </nav>

        </div>
        <!--  END SIDEBAR  -->

        <div id="content" class="main-content">
            <div class="layout-px-spacing">

            <div class="row layout-top-spacing">
                <div class="col-xl-12 col-lg-12 col-sm-12  layout-spacing">
                    <div class="widget-content widget-content-area br-6">

                    <?php
                    // echo '"'.$contents.'"'. str_replace('\\', '/', $contents);
                        require str_replace('\\', '/', $contents);
                    ?>

                    </div>
                </div>
            </div>
            </div>

            <div class="container">
                <div class="container">
                    <?php require 'pages/modals/report.php'; ?>
                    <?php require 'pages/modals/search.php'; ?>
                </div>
            </div>
        </div>
    </div>
    <!-- END MAIN CONTAINER -->



<?php }

include('incl/footer.php');
?>

</body>
</html>
<?php die; ?>
