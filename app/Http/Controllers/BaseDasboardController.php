<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

abstract class BaseDasboardController extends Controller
{
    public function render($view, $data = [])
    {
        //renderer
        return $this->renderInertia("dashboard/$view", $data);
    }
}
