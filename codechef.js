function tilt(event)
{
	const t=0;
	const width=$('.tilt').width()/2-$('.tilt').position().left;
	const height=$('.tilt').height()/2-$('.tilt').position().top;
	const x=event.pageX;
	const y=event.pageY;
	var rx,ry;
	if(x-$('.tilt').position().left<width)
		rx=70*x;
	else
		rx=-70*x;
	if(y-$('.tilt').position().top<height)
		ry=-70*y;
	else
		ry=-100*y;
	$('tilt').css('transform','')
	$('.tilt').css('transform','rotate3d('+rx+','+ry+',0,30deg) scale(1.1)');
}
$('.tilt').on("mousemove",(e)=>
{
	tilt(e);
})
function tiltoff()
{
	$('.tilt').css('transform','rotate3d(0,0,0,0deg');
}
$('.logo').on("mouseover touch",()=>
{
	$('.logo').css('transform','scale(1.1)')
})
$('.logo').on("mouseout touchend",()=>
{
	$('.logo').css('transform','scale(1)')
})
$('.logo').on('click',()=>
{
	$('.logo').css('transform','scale(0.9)');
	setTimeout(()=>
	{
		$('.logo').css('transform','scale(1)')
	},250)
})
const ok=()=>
	{
		if($('.line').css('height')!=='25px')
		{
			$('.line').css({'height':'25px','background':'black'});
			$('.dot').css('transform','translateY(8px)')
			$('.nav').css({'width':'30%'})
		}
		else
		{
			$('.line').css({'height':'5px','background':'black'});
			$('.dot:nth-child(1)').css('transform','translateY(0px)')
			$('.dot:nth-child(2)').css('transform','translateY(8px)')
			$('.dot:nth-child(3)').css('transform','translateY(17px)')
			$('.nav').css({'width':'0%'});
		}
	}
$('.menubutton').click(function()
{
	ok();
})