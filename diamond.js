const diamond = function(n)
{
	if(n%2 === 0)
	{
		n = n + 1;
	}
const print = function (foo,amount)
{
	if(amount != 0)
	{
		return foo + print(foo,amount - 1);
	}
	else
	{
		return "";
	}
}
for(i = 1,j = 1,spc = ((n + 1)/2)-1; i <= n; i = i + 1, j = j +2,spc -= 1)
{
	if(j === n)
	{
		for(b = n - i,j,new_spc = 0;b >= 0;b = b -1,j = j - 2,new_spc += 1)
		{
			console.log(print(" ",new_spc) + print("*",j))
		}
		return "";
	}
	console.log(print(" ",spc) + print("*",j))
}
}

diamond(5)