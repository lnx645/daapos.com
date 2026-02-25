<?php

namespace App\Http\Controllers;

abstract class Controller
{
    protected function renderInertia($view, $data = []){
        return inertia($view,$data);
    }
}
