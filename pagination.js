// JavaScript Document
function paginate_htm(init_page, num_rows,ctrl_page)
{
	if (init_page == 1 || ctrl_page != 'Page')
	{
		var numregs_view_page = $("#total_views").val();
		var max_pages = (Math.round(num_rows / numregs_view_page));
		var paginate_html = "";
	
		if( init_page >= 5 )
		{
			paginate_html += "<a class='last' onclick='grid_content(1,"+ num_rows +",\"First\");'>First</a>";	
			paginate_html += "<a class='last' onclick='grid_content("+ (init_page -5 ) +","+ num_rows +",\"Prev\");'>⟪</a>";
		}
	
		for (var i = init_page; i < (init_page + 5); i++)
		{
			if(i <= max_pages)
			{
				paginate_html += "<a href='javascript:grid_content("+ i +","+ num_rows +",\"Page\");'>"+i+"</a>";
			}
		}
	
		paginate_html += "<a class='last' onclick='grid_content("+( max_pages) +","+ num_rows +",\"Last\");'>Last</a>";
		
		if(ctrl_page != 'Last')
		{
			paginate_html += "<a class='last' onclick='grid_content("+ i +","+ num_rows +",\"Next\");'>⟫</a>";
		}
	}	
	$(".paginate").html(paginate_html);
}