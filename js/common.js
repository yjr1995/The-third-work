function common(elem1,elem2)
	{
		var timer=null;
		elem1.onmouseover=function ()
		{	
		clearTimeout(timer);
		elem2.style.display='block';
		}; 
		elem1.onmouseout=function ()
		{
		timer=setTimeout(function(){
			elem2.style.display='none';
			},200);	
		};
		elem2.onmouseover=function()
		{
		clearTimeout(timer);
		};
		elem2.onmouseout=function ()
		{
		timer=setTimeout(function(){
			elem2.style.display='none';
			},60);	
		};			  
	};
function Control (elem1,elem2)
	{
		for (var i=0;i<elem1.length;i++)
		{
			elem1[i].onmouseover=function()
			{
				for (var i=0;i<elem1.length;i++)
				{
					elem1[i].index=i;
					elem2[i].style.display='none';
				}
					elem2[this.index].style.display='block';
			};
		}
	}; 	  