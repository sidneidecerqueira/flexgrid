
/*
04/2022
sidneidecerqueira@gmail.com
*/

function grid_content(page,num_rows,ctrl_page)
{
	$("#bodyCanvas tr").remove();		
	$.ajax({
		url: "json.php?page="+page,
		async: false,
		dataType: 'json',
		type: "POST",
		data: {pesq: $("#search_").val(),total_views: $("#total_views").val()},
		success: function (data) {				
			
			var tbl = document.getElementById("bodyCanvas");			
			var num_rows = data[0]['total_regs'];		
			
			paginate_htm(page,num_rows,ctrl_page);			
			
			for (var i = 1, len = data[0]['total_exec']; i <= len; i++)
			{				
				var row = document.createElement("tr");
				row.setAttribute("id", "row-"+i);
				tbl.appendChild(row);					
				Object.entries(data[i]).forEach(([key_b, value_b]) => {							
						Object.entries(value_b).forEach(([key_c, value_c]) => {	
						var newTd = document.createElement("td");					
						var content_td = document.createTextNode(value_c[0]);
						newTd.appendChild(content_td);
						var currentTr = document.getElementById("row-"+i); 
						currentTr.appendChild(newTd);			
					});						
				});
			}
		}
	});	
}

function editarDado(val)
{
	alert(val);
}
function element_input(onchg, id, input_value)
{
	var newElement = document.createElement("input");
	if(onchg)
	{
		newElement.setAttribute("onchange", onchg);
	}
	if(id)
	{
		newElement.setAttribute("id", id);
	}
	if(input_value)
	{
		newElement.setAttribute("value", input_value);
	}
	return newElement;
}
function element_textarea(onchg, id, input_value,rows, cols)
{
	var newElement = document.createElement("textarea");
	if(onchg)
	{
		newElement.setAttribute("onchange", onchg);
	}
	if(rows)
	{
		newElement.setAttribute("rows", rows);
	}
	if(cols)
	{
		newElement.setAttribute("cols", cols);
	}
	if(id)
	{
		newElement.setAttribute("id", id);
	}
	if(input_value)
	{
		newElement.setAttribute("value", input_value);
	}
	return newElement;
}
function element_link(href, content_link, target)
{
	var newHref = document.createElement("a");
	newHref.setAttribute("href", href);
	
	if(target)
	{
		newHref.setAttribute("target", target);
	}
	
	var newContent = document.createTextNode(content_link);
	newHref.appendChild(newContent);
	return newHref;
	//newTd.appendChild(newHref);
}

function element_select(arr_opt,onchg,seletd)
{
	var sel = document.createElement("select");
								
	if(onchg)
	{
		sel.setAttribute("onchange",onchg);
	}
	var opt1 = "";
	Object.entries(arr_opt).forEach(([key_opt, text_opt]) => {	

		opt1 = document.createElement("option");
		opt1.value = key_opt;
		opt1.text = "Option: Value " + text_opt;	
		if(key_opt == seletd)
		{
			opt1.setAttribute("selected", "selected");
		}								
		sel.add(opt1, null);
	});
	return sel;
}
	