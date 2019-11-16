<?php

    $arquivos = scandir("audios");
    $arquivos = array_diff(scandir("audios"), array('.', '..'));

    echo json_encode($arquivos);
