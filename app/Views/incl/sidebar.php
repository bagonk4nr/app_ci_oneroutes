<!--  BEGIN SIDEBAR  -->


        <ul class="navbar-nav theme-brand flex-row  text-center">
            <li class="nav-item theme-logo">
                <a href="index.html">
                    <img src="assets/img/headpanda.png" class="navbar-logo" alt="logo">
                </a>
            </li>
            <li class="nav-item theme-text">
                <a href="index.html" class="nav-link"> love.byte </a>
            </li>
        </ul>

        <ul class="list-unstyled menu-categories" id="accordionExample">
        <?php 
            
            $idmenu = '';
            for($i = 0; $i < count($sidebar['menu']); $i++) { 
                
                if ($sidebar['menu'][$i]['menu'] === 'Home' || $sidebar['menu'][$i]['menu'] == 'Log Out') {
                     
            ?> 

            <li class="menu">
                <a href="<?php $pagesnya->route('/', ['target'=> $sidebar['menu'][$i]['target_react']]); ?>" aria-expanded="false" class="dropdown-toggle">
                    <div class="">
                        <i class="<?php echo $sidebar['menu'][$i]['icon']?>"></i>
                        <span><?php echo $sidebar['menu'][$i]['menu']?></span>
                    </div>
                </a>
            </li>

            <?php } else { 
                if ($idmenu !== $sidebar['menu'][$i]['idmenu']) {
            ?>
                
                <li class="menu">
                <a href="#<?php echo $sidebar['menu'][$i]['menu']?>" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <div class="">
                        <i class="<?php echo $sidebar['menu'][$i]['icon']?>"></i>
                        <span><?php echo $sidebar['menu'][$i]['menu']?></span>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                </a>
                <ul class="collapse submenu list-unstyled" id="<?php echo $sidebar['menu'][$i]['menu']?>" data-parent="#accordionExample">
                    <li>
                     <?php for($a = 0; $a < count($sidebar['menu']); $a++) { 
                        
                        if ($sidebar['menu'][$i]['idmenu'] === $sidebar['menu'][$a]['idmenu']) {
                    ?>
                         <?php $link = $sidebar['menu'][$i]['target_subreact']?>   
                        <div class="">
                            <a href="<?php $pagesnya->route('/', ['dt' => $sidebar['menu'][$a]['target_dt'], 'target'=> $sidebar['menu'][$a]['target_subreact']]); ?>" > 
                                <span><i class="<?php echo $sidebar['menu'][$i]['icons']?>"></i>
                                <?php echo $sidebar['menu'][$a]['submenu']; ?></span>
                            </a>
                        </div>
                    
                    <?php } } ?>
                    </li>
                </ul>
            </li>

            <?php
                } $idmenu = $sidebar['menu'][$i]['idmenu'];
            }
            } 
            ?>

        </ul>
        
