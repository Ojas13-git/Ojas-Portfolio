#include<stdio.h>

int main(int argc,char* argv[])
{
	int i,x=argc;
	for(int i=1;i<argc;i++)
	{
		if(x==0)
		{
			return 0;
		}
		if(argv[i][0]!='-')
		{
			printf("%s",argv[i]);
		}
		x--;
	}
	return 0;
}	
