<?php

$arr = array();
$arr_A = array();
$total_regs = 50;
$arr[0]['totalregs'] = $total_regs;
for ($i = 1; $i <= $total_regs; $i++) 
{
	$arr[$i] = array("text"=>$i,'id' => $i, 'title' => "Título:".$i, 'body' => 'OBS: A Listagem '.$i.' apresentou a conversão de uma estrutura complexa representada em um array. Porém, é importante esclarecer que também é possível converter objetos (instâncias de classes PHP) com o uso da função "json_encode".');
}

echo json_encode($arr);

