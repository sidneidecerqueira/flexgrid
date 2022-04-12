<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'root', '', 'data_grid');
$mysqli->set_charset('utf8');

$total_v = 300;
$limit = 300;
if(!empty($_POST['total_views']))
{
	$limit = $_POST['total_views'];
	$total_v = $_POST['total_views'];
}

if(!empty($_GET['page']) and ($_GET['page'] > 1))
$limit = ($_GET['page'] * $total_v).",{$total_v}";

$cols_pesq = array('id','int_A','text_A','date_A');

$where = "";

if(!empty($_POST['pesq']))
{
	$where .= "where id > 0 ";
	$xc_pesq = 0;
	foreach($cols_pesq as $kpesq => $cpesq)
	{
		if($xc_pesq==0)
		$where .= " and ({$cpesq} like '%{$_POST['pesq']}%' ";
		elseif($xc_pesq > 0)
		$where .= " or {$cpesq} like '%{$_POST['pesq']}%'  ";
		$xc_pesq++;
	}
	$where .= ")";
}

$sql = "SELECT * FROM data_rows {$where} limit {$limit}";

$sqlrows = "SELECT count(*) as total FROM data_rows ";
$execrows = $mysqli->query($sqlrows);
$num_rows = $execrows->fetch_assoc();
$execrows->close();

$arr_dataset = array();

if ($result_rows = $mysqli->query($sql)) 
{
	$arr_dataset[0] = array("total_regs"=>$num_rows['total'],"total_exec"=>$result_rows->num_rows,"sql"=>$sql);
       
	while($obj = $result_rows->fetch_object()){
	   $arr_dataset[] = array(			
			"id"=>array(
						   "text"=>array($obj->id)
						),
			"int_A"=>array(
						   "text"=>array($obj->int_A)),
			
			"int_b"=>array(
							"text"=>array($obj->int_A)
						   )			
	   );
	  
	  $indice++;		 
	}
}
$result_rows->close();
unset($sql);	
echo json_encode($arr_dataset);

