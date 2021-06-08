<!--  BEGIN NAVBAR  -->
<div class="header-container fixed-top">
    <header class="header navbar navbar-expand-sm expand-header">
        <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </a>

        <ul class="navbar-item flex-row ml-auto">

            <li class="nav-item align-self-center search-animated">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search toggle-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <form class="form-inline search-full form-inline search" role="search">
                    <div class="search-bar">
                        <input type="text" class="form-control search-form-control ml-lg-auto" placeholder="Search..." id="inputSearch"  />
                        <div id="searchdropdown" class="dropdown-menu" >
                        </div>
                    </div>
                </form>
            </li>

            <?php 
                        // print_r($navbar); echo count($navbar['menu']); die;
            $captions = '';
            for($i = 0; $i < count($navbar['menu']); $i++) { 
                
                if ($captions !== $navbar['menu'][$i]['captions']) {
                     
            ?> 
            <li class="nav-item dropdown notification-dropdown">
                <a href="javascript:void(0);" class="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="<?php echo $navbar['menu'][$i]['icon']; ?>"></i>
                </a>
                <div class="dropdown-menu position-absolute e-animated e-fadeInUp" aria-labelledby="notificationDropdown">
                    <div class="notification-scroll">
                    
                    <?php 
                        for($a = 0; $a < count($navbar['menu']); $a++) { 

                            if ($navbar['menu'][$i]['captions'] === $navbar['menu'][$a]['captions']) {
                        ?>
                            <div class="dropdown-item">
                            <div class="media">
                                <div class="media-body">
                                        <a href="<?php $pagesnya->route('/', ['target'=> $sidebar['menu'][$a]['links']]); ?>">
                                            <?php echo $navbar['menu'][$a]['submenu']; ?>
                                        </a>
                                </div>
                            </div>
                        </div>
                    <?php 
                            }
                        }
                        ?>
                    </div>
                </div>
            </li>
               <?php 
               } $captions = $navbar['menu'][$i]['captions']; 
            }  
            ?>        
        </ul>
    </header>
</div>
<!--  END NAVBAR  -->